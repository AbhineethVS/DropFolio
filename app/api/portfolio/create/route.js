import { auth } from "@clerk/nextjs/server";
import { connectToDatabase } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

export const runtime = "nodejs";

function normalizeSlug(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export async function POST(request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const rawData = body?.rawData;
    const aiPolishedData = body?.aiPolishedData;
    const name = String(body?.name || rawData?.fullName || "").trim();
    const email = String(body?.email || rawData?.email || "").trim().toLowerCase();
    const slug = normalizeSlug(body?.slug || rawData?.slug);
    const photoUrl = String(body?.photoUrl || rawData?.photoUrl || "").trim();

    if (!rawData || typeof rawData !== "object" || Array.isArray(rawData)) {
      return Response.json(
        { ok: false, error: "Invalid payload. rawData object is required." },
        { status: 400 }
      );
    }

    if (!aiPolishedData || typeof aiPolishedData !== "object" || Array.isArray(aiPolishedData)) {
      return Response.json(
        { ok: false, error: "Invalid payload. aiPolishedData object is required." },
        { status: 400 }
      );
    }

    if (!name || !email || !slug) {
      return Response.json(
        { ok: false, error: "Missing required fields: name, email, and slug." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const existingWithSlug = await Portfolio.findOne({ slug }).select("_id userId").lean();
    if (existingWithSlug && existingWithSlug.userId !== userId) {
      return Response.json(
        { ok: false, error: "This slug is already taken. Please choose another." },
        { status: 409 }
      );
    }

    const savedPortfolio = await Portfolio.findOneAndUpdate(
      { userId },
      {
        userId,
        name,
        email,
        slug,
        status: "draft",
        rawData,
        aiPolishedData,
        photoUrl,
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    ).lean();

    return Response.json({
      ok: true,
      data: {
        id: savedPortfolio._id,
        slug: savedPortfolio.slug,
        status: savedPortfolio.status,
      },
    });
  } catch (error) {
    console.error("Portfolio create failed:", error);
    return Response.json(
      { ok: false, error: "Failed to save portfolio. Please try again." },
      { status: 500 }
    );
  }
}

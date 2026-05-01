import { auth } from "@clerk/nextjs/server";
import { polishPortfolioData } from "@/lib/claude";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const rawData = body?.rawData;

    if (!rawData || typeof rawData !== "object" || Array.isArray(rawData)) {
      return Response.json(
        { ok: false, error: "Invalid payload. rawData object is required." },
        { status: 400 }
      );
    }

    const polishedData = await polishPortfolioData(rawData);

    return Response.json({
      ok: true,
      data: { polishedData },
    });
  } catch (error) {
    console.error("AI polish failed:", error);
    return Response.json(
      { ok: false, error: "Failed to polish portfolio data. Please try again." },
      { status: 500 }
    );
  }
}

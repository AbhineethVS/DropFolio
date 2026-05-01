import { auth } from "@clerk/nextjs/server";
import { uploadProfileImage } from "@/lib/cloudinary";

export const runtime = "nodejs";

const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export async function POST(request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || typeof file.arrayBuffer !== "function") {
      return Response.json({ ok: false, error: "Image file is required." }, { status: 400 });
    }

    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
      return Response.json(
        { ok: false, error: "Unsupported image type. Use JPG, PNG, or WEBP." },
        { status: 400 }
      );
    }

    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      return Response.json(
        { ok: false, error: "Image is too large. Max allowed size is 5 MB." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploaded = await uploadProfileImage({ buffer, userId });

    return Response.json({ ok: true, data: uploaded });
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    return Response.json(
      { ok: false, error: "Failed to upload image. Please try again." },
      { status: 500 }
    );
  }
}

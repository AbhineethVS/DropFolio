"use client";

import { useRef, useState } from "react";

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-[#333] bg-[#1a1a1a] text-white placeholder-gray-600 text-sm outline-none focus:border-white/40 transition-colors";
const labelClass = "block text-sm font-medium text-white/80 mb-1.5";
const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Could not read the selected image."));
    reader.readAsDataURL(file);
  });
}

export function PersonalInfo({ formData, updateFormData }) {
  const fileInputRef = useRef(null);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [photoError, setPhotoError] = useState("");

  const handleSlugChange = (e) => {
    const raw = e.target.value
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    updateFormData({ slug: raw });
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPhotoError("");

    if (!ACCEPTED_IMAGE_TYPES.has(file.type)) {
      setPhotoError("Unsupported image type. Use JPG, PNG, or WEBP.");
      return;
    }

    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      setPhotoError("Image is too large. Max allowed size is 5 MB.");
      return;
    }

    try {
      const preview = await readFileAsDataUrl(file);

      updateFormData({
        photo: file,
        photoPreview: preview,
        photoUrl: "",
        photoPublicId: "",
      });

      setIsUploadingPhoto(true);

      const body = new FormData();
      body.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body,
      });

      const result = await response.json();

      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || "Failed to upload image.");
      }

      updateFormData({
        photoUrl: result.data.url,
        photoPublicId: result.data.publicId,
      });
    } catch (error) {
      setPhotoError(error.message || "Failed to upload image. Please try again.");
      updateFormData({
        photoUrl: "",
        photoPublicId: "",
      });
    } finally {
      setIsUploadingPhoto(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-white">Personal Info</h2>
        <p className="text-sm text-gray-500 mt-1">Tell us who you are</p>
      </div>

      {/* Full name */}
      <div>
        <label className={labelClass}>
          Full name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => updateFormData({ fullName: e.target.value })}
          placeholder="e.g. Arjun Sharma"
          className={inputClass}
        />
      </div>

      {/* Slug */}
      <div>
        <label className={labelClass}>
          Username / Slug <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={formData.slug}
          onChange={handleSlugChange}
          placeholder="arjunsharma"
          className={inputClass}
        />
        <p className="mt-1.5 text-xs text-gray-500">
          Your portfolio will be at{" "}
          <span className="text-white/50 font-mono">
            dropfolio.com/p/{formData.slug || "your-username"}
          </span>
        </p>
      </div>

      {/* Professional title */}
      <div>
        <label className={labelClass}>
          Professional title <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => updateFormData({ title: e.target.value })}
          placeholder="e.g. Full Stack Developer, ML Enthusiast"
          className={inputClass}
        />
      </div>

      {/* Bio */}
      <div>
        <label className={labelClass}>
          Bio / About me <span className="text-red-400">*</span>
        </label>
        <textarea
          value={formData.bio}
          onChange={(e) => updateFormData({ bio: e.target.value })}
          rows={4}
          placeholder="Tell us about yourself, your interests, what you're passionate about, your goals…"
          className={`${inputClass} resize-none`}
        />
        <p className="mt-1 text-xs text-gray-500">
          Describe yourself. Don&apos;t worry about phrasing — AI will polish this.
        </p>
      </div>

      {/* Profile photo */}
      <div>
        <label className={labelClass}>
          Profile photo{" "}
          <span className="text-gray-600 font-normal">(optional)</span>
        </label>
        <div className="flex items-center gap-4">
          {formData.photoPreview ? (
            <div className="w-16 h-16 rounded-full overflow-hidden border border-[#333] flex-shrink-0">
              <img
                src={formData.photoPreview}
                alt="Profile preview"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full border border-dashed border-[#444] bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
              <span className="text-gray-600 text-2xl leading-none">+</span>
            </div>
          )}
          <div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploadingPhoto}
              className="px-4 py-2 text-xs rounded-full border border-[#333] text-gray-400 hover:text-white hover:border-white/40 transition-colors"
            >
              {isUploadingPhoto
                ? "Uploading..."
                : formData.photoPreview
                  ? "Change photo"
                  : "Upload photo"}
            </button>
            <p className="mt-1.5 text-xs text-gray-600">JPG, PNG or WEBP - max 5 MB</p>
            {formData.photoUrl && !isUploadingPhoto && (
              <p className="mt-1 text-xs text-emerald-400">Photo uploaded successfully.</p>
            )}
            {photoError && <p className="mt-1 text-xs text-red-400">{photoError}</p>}
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePhotoChange}
        />
      </div>

      {/* Location */}
      <div>
        <label className={labelClass}>
          Location <span className="text-gray-600 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => updateFormData({ location: e.target.value })}
          placeholder="e.g. Bangalore, India"
          className={inputClass}
        />
      </div>

      {/* Open to work toggle */}
      <div className="flex items-center justify-between p-4 rounded-xl border border-[#2a2a2a] bg-[#161616]">
        <div>
          <p className="text-sm font-medium text-white/80">
            I&apos;m open to internships / opportunities
          </p>
          <p className="text-xs text-gray-600 mt-0.5">
            Shows an &quot;Open to work&quot; badge on your portfolio
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={formData.openToWork}
          onClick={() => updateFormData({ openToWork: !formData.openToWork })}
          className={`w-11 h-6 rounded-full transition-colors duration-200 relative flex-shrink-0 ml-4 ${
            formData.openToWork ? "bg-white" : "bg-[#333]"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-black transition-transform duration-200 ${
              formData.openToWork ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

"use client";

import { useRef } from "react";

export function PersonalInfo({ formData, updateFormData }) {
  const fileInputRef = useRef(null);

  const handleSlugChange = (e) => {
    const raw = e.target.value
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    updateFormData({ slug: raw });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      updateFormData({ photo: file, photoPreview: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-black" style={{ color: "var(--foreground)" }}>
          Personal Info
        </h2>
        <p className="text-sm mt-1 font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}>
          Tell us who you are
        </p>
      </div>

      {/* Full name */}
      <div>
        <label className="nb-label">
          Full name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => updateFormData({ fullName: e.target.value })}
          placeholder="e.g. Arjun Sharma"
          className="nb-input"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="nb-label">
          Username / Slug <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.slug}
          onChange={handleSlugChange}
          placeholder="arjunsharma"
          className="nb-input"
        />
        <p
          className="mt-1.5 text-xs font-medium"
          style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}
        >
          Your portfolio will be at{" "}
          <span className="font-mono font-bold" style={{ color: "var(--main)" }}>
            dropfolio.com/p/{formData.slug || "your-username"}
          </span>
        </p>
      </div>

      {/* Professional title */}
      <div>
        <label className="nb-label">
          Professional title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => updateFormData({ title: e.target.value })}
          placeholder="e.g. Full Stack Developer, ML Enthusiast"
          className="nb-input"
        />
      </div>

      {/* Bio */}
      <div>
        <label className="nb-label">
          Bio / About me <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.bio}
          onChange={(e) => updateFormData({ bio: e.target.value })}
          rows={4}
          placeholder="Tell us about yourself, your interests, what you're passionate about, your goals…"
          className="nb-input resize-none"
        />
        <p
          className="mt-1 text-xs font-medium"
          style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}
        >
          Don&apos;t worry about phrasing — AI will polish this.
        </p>
      </div>

      {/* Profile photo */}
      <div>
        <label className="nb-label">
          Profile photo{" "}
          <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
            (optional)
          </span>
        </label>
        <div className="flex items-center gap-4">
          {formData.photoPreview ? (
            <div
              className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
              style={{ border: "2px solid var(--border)", boxShadow: "var(--shadow)" }}
            >
              <img
                src={formData.photoPreview}
                alt="Profile preview"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                border: "2px dashed var(--border)",
                background: "var(--background)",
                color: "color-mix(in oklch, var(--foreground) 40%, transparent)",
                fontSize: "1.5rem",
              }}
            >
              +
            </div>
          )}
          <div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="nb-btn-secondary px-4 py-2 text-xs"
            >
              {formData.photoPreview ? "Change photo" : "Upload photo"}
            </button>
            <p
              className="mt-1.5 text-xs font-medium"
              style={{ color: "color-mix(in oklch, var(--foreground) 40%, transparent)" }}
            >
              JPG, PNG or WEBP — max 5 MB
            </p>
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
        <label className="nb-label">
          Location{" "}
          <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
            (optional)
          </span>
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => updateFormData({ location: e.target.value })}
          placeholder="e.g. Bangalore, India"
          className="nb-input"
        />
      </div>

      {/* Open to work toggle */}
      <div
        className="flex items-center justify-between p-4"
        style={{
          border: "2px solid var(--border)",
          borderRadius: "var(--radius-base)",
          background: "var(--background)",
          boxShadow: "var(--shadow)",
        }}
      >
        <div>
          <p className="text-sm font-bold" style={{ color: "var(--foreground)" }}>
            I&apos;m open to internships / opportunities
          </p>
          <p
            className="text-xs mt-0.5 font-medium"
            style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}
          >
            Shows an &quot;Open to work&quot; badge on your portfolio
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={formData.openToWork}
          onClick={() => updateFormData({ openToWork: !formData.openToWork })}
          className="w-11 h-6 rounded-full transition-colors duration-200 relative flex-shrink-0 ml-4"
          style={{
            background: formData.openToWork ? "var(--main)" : "color-mix(in oklch, var(--foreground) 20%, transparent)",
            border: "2px solid var(--border)",
          }}
        >
          <span
            className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-transform duration-200"
            style={{
              background: "var(--foreground)",
              transform: formData.openToWork ? "translateX(20px)" : "translateX(0)",
            }}
          />
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { Review } from "./Review";

export function SocialLinks({ formData, updateFormData, userEmail }) {
  // Pre-fill email from Clerk when it's available and field is empty
  useEffect(() => {
    if (userEmail && !formData.email) {
      updateFormData({ email: userEmail });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-black" style={{ color: "var(--foreground)" }}>
          Social Links
        </h2>
        <p className="text-sm mt-1 font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}>
          Where to find you online
        </p>
      </div>

      {/* Email */}
      <div>
        <label className="nb-label">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="you@example.com"
          className="nb-input"
        />
      </div>

      {/* GitHub */}
      <div>
        <label className="nb-label">
          GitHub profile URL{" "}
          <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
            (optional)
          </span>
        </label>
        <input
          type="url"
          value={formData.github}
          onChange={(e) => updateFormData({ github: e.target.value })}
          placeholder="https://github.com/username"
          className="nb-input"
        />
      </div>

      {/* LinkedIn */}
      <div>
        <label className="nb-label">
          LinkedIn profile URL{" "}
          <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
            (optional)
          </span>
        </label>
        <input
          type="url"
          value={formData.linkedin}
          onChange={(e) => updateFormData({ linkedin: e.target.value })}
          placeholder="https://linkedin.com/in/username"
          className="nb-input"
        />
      </div>

      {/* Twitter + Instagram */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="nb-label">
            Twitter / X URL{" "}
            <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
              (optional)
            </span>
          </label>
          <input
            type="url"
            value={formData.twitter}
            onChange={(e) => updateFormData({ twitter: e.target.value })}
            placeholder="https://x.com/username"
            className="nb-input"
          />
        </div>
        <div>
          <label className="nb-label">
            Instagram URL{" "}
            <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
              (optional)
            </span>
          </label>
          <input
            type="url"
            value={formData.instagram}
            onChange={(e) => updateFormData({ instagram: e.target.value })}
            placeholder="https://instagram.com/username"
            className="nb-input"
          />
        </div>
      </div>

      {/* Personal website */}
      <div>
        <label className="nb-label">
          Personal website{" "}
          <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
            (optional)
          </span>
        </label>
        <input
          type="url"
          value={formData.website}
          onChange={(e) => updateFormData({ website: e.target.value })}
          placeholder="https://yourwebsite.com"
          className="nb-input"
        />
      </div>

      {/* Custom link */}
      <div>
        <label className="nb-label">
          Custom link{" "}
          <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
            (optional — e.g. LeetCode, Devfolio)
          </span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            value={formData.customLinkLabel}
            onChange={(e) => updateFormData({ customLinkLabel: e.target.value })}
            placeholder="Label (e.g. LeetCode)"
            className="nb-input"
          />
          <input
            type="url"
            value={formData.customLinkUrl}
            onChange={(e) => updateFormData({ customLinkUrl: e.target.value })}
            placeholder="https://…"
            className="nb-input"
          />
        </div>
      </div>

      {/* Review summary */}
      <div className="pt-2">
        <Review formData={formData} />
      </div>
    </div>
  );
}

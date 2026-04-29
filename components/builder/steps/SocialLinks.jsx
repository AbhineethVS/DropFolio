"use client";

import { useEffect } from "react";
import { Review } from "./Review";

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-[#333] bg-[#1a1a1a] text-white placeholder-gray-600 text-sm outline-none focus:border-white/40 transition-colors";
const labelClass = "block text-sm font-medium text-white/80 mb-1.5";

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
        <h2 className="text-xl font-semibold text-white">Social Links</h2>
        <p className="text-sm text-gray-500 mt-1">Where to find you online</p>
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      {/* GitHub */}
      <div>
        <label className={labelClass}>
          GitHub profile URL{" "}
          <span className="text-gray-600 font-normal">(optional)</span>
        </label>
        <input
          type="url"
          value={formData.github}
          onChange={(e) => updateFormData({ github: e.target.value })}
          placeholder="https://github.com/username"
          className={inputClass}
        />
      </div>

      {/* LinkedIn */}
      <div>
        <label className={labelClass}>
          LinkedIn profile URL{" "}
          <span className="text-gray-600 font-normal">(optional)</span>
        </label>
        <input
          type="url"
          value={formData.linkedin}
          onChange={(e) => updateFormData({ linkedin: e.target.value })}
          placeholder="https://linkedin.com/in/username"
          className={inputClass}
        />
      </div>

      {/* Twitter + Instagram */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Twitter / X URL{" "}
            <span className="text-gray-600 font-normal">(optional)</span>
          </label>
          <input
            type="url"
            value={formData.twitter}
            onChange={(e) => updateFormData({ twitter: e.target.value })}
            placeholder="https://x.com/username"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            Instagram URL{" "}
            <span className="text-gray-600 font-normal">(optional)</span>
          </label>
          <input
            type="url"
            value={formData.instagram}
            onChange={(e) => updateFormData({ instagram: e.target.value })}
            placeholder="https://instagram.com/username"
            className={inputClass}
          />
        </div>
      </div>

      {/* Personal website */}
      <div>
        <label className={labelClass}>
          Personal website{" "}
          <span className="text-gray-600 font-normal">(optional)</span>
        </label>
        <input
          type="url"
          value={formData.website}
          onChange={(e) => updateFormData({ website: e.target.value })}
          placeholder="https://yourwebsite.com"
          className={inputClass}
        />
      </div>

      {/* Custom link */}
      <div>
        <label className={labelClass}>
          Custom link{" "}
          <span className="text-gray-600 font-normal">
            (optional — e.g. LeetCode, Devfolio)
          </span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            value={formData.customLinkLabel}
            onChange={(e) => updateFormData({ customLinkLabel: e.target.value })}
            placeholder="Label (e.g. LeetCode)"
            className={inputClass}
          />
          <input
            type="url"
            value={formData.customLinkUrl}
            onChange={(e) => updateFormData({ customLinkUrl: e.target.value })}
            placeholder="https://…"
            className={inputClass}
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

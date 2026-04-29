"use client";

import { TagInput } from "../TagInput";

const SUGGESTIONS = ["React", "Python", "Figma", "Node.js", "TypeScript", "MongoDB", "Java", "C++", "Next.js", "TailwindCSS"];

export function Skills({ formData, updateFormData }) {
  const available = SUGGESTIONS.filter((s) => !formData.skills.includes(s));

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-white">Skills</h2>
        <p className="text-sm text-gray-500 mt-1">Technologies and tools you know</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-1.5">
          Skills <span className="text-red-400">*</span>
        </label>
        <TagInput
          tags={formData.skills}
          onChange={(skills) => updateFormData({ skills })}
          placeholder="Type a skill and press Enter or comma…"
        />
        <p className="mt-2 text-xs text-gray-500">
          AI will automatically group these into Languages, Frameworks, Tools, etc.
        </p>
      </div>

      {/* Quick-add suggestions */}
      {available.length > 0 && (
        <div>
          <p className="text-xs text-gray-600 mb-2">
            Try:{" "}
            <span className="text-gray-700">React, Python, Figma…</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {available.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() =>
                  updateFormData({ skills: [...formData.skills, suggestion] })
                }
                className="px-3 py-1 text-xs rounded-full border border-dashed border-[#3a3a3a] text-gray-500 hover:text-white hover:border-white/40 transition-colors"
              >
                + {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {formData.skills.length > 0 && (
        <p className="text-xs text-gray-600">
          {formData.skills.length} skill{formData.skills.length !== 1 ? "s" : ""} added
        </p>
      )}
    </div>
  );
}

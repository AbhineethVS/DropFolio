"use client";

import { TagInput } from "../TagInput";

const SUGGESTIONS = ["React", "Python", "Figma", "Node.js", "TypeScript", "MongoDB", "Java", "C++", "Next.js", "TailwindCSS"];

export function Skills({ formData, updateFormData }) {
  const available = SUGGESTIONS.filter((s) => !formData.skills.includes(s));

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-black" style={{ color: "var(--foreground)" }}>
          Skills
        </h2>
        <p className="text-sm mt-1 font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}>
          Technologies and tools you know
        </p>
      </div>

      <div>
        <label className="nb-label">
          Skills <span className="text-red-500">*</span>
        </label>
        <TagInput
          tags={formData.skills}
          onChange={(skills) => updateFormData({ skills })}
          placeholder="Type a skill and press Enter or comma…"
        />
        <p
          className="mt-2 text-xs font-medium"
          style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}
        >
          AI will automatically group these into Languages, Frameworks, Tools, etc.
        </p>
      </div>

      {/* Quick-add suggestions */}
      {available.length > 0 && (
        <div>
          <p
            className="text-xs font-semibold mb-2"
            style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}
          >
            Quick add:
          </p>
          <div className="flex flex-wrap gap-2">
            {available.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => updateFormData({ skills: [...formData.skills, suggestion] })}
                className="nb-btn-dashed px-3 py-1 text-xs"
              >
                + {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {formData.skills.length > 0 && (
        <p
          className="text-xs font-semibold"
          style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}
        >
          {formData.skills.length} skill{formData.skills.length !== 1 ? "s" : ""} added
        </p>
      )}
    </div>
  );
}

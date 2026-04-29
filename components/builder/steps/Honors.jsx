"use client";

let _hId = 0;
const newHonorId = () => ++_hId;

const emptyHonor = () => ({
  id: newHonorId(),
  title: "",
  org: "",
  year: "",
  description: "",
  link: "",
});

export function Honors({ formData, updateFormData }) {
  const honors = formData.honors;

  const addHonor = () => {
    updateFormData({ honors: [...honors, emptyHonor()] });
  };

  const updateHonor = (id, updates) => {
    updateFormData({
      honors: honors.map((h) => (h.id === id ? { ...h, ...updates } : h)),
    });
  };

  const removeHonor = (id) => {
    updateFormData({ honors: honors.filter((h) => h.id !== id) });
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-black" style={{ color: "var(--foreground)" }}>
          Honors &amp; Awards
        </h2>
        <p className="text-sm mt-1 font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}>
          Recognition you&apos;ve received
        </p>
      </div>

      {/* Tip box */}
      <div
        className="flex items-start gap-2 px-3 py-2.5"
        style={{
          border: "2px solid var(--border)",
          borderRadius: "var(--radius-base)",
          background: "var(--background)",
        }}
      >
        <span className="text-sm mt-px">💡</span>
        <p className="text-xs font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 55%, transparent)" }}>
          No awards yet? You can skip this step — use the{" "}
          <span className="font-bold" style={{ color: "var(--foreground)" }}>
            &ldquo;Skip this step&rdquo;
          </span>{" "}
          button below.
        </p>
      </div>

      {honors.length === 0 && (
        <div
          className="text-center py-6 text-sm font-semibold"
          style={{
            border: "2px dashed var(--border)",
            borderRadius: "var(--radius-base)",
            color: "color-mix(in oklch, var(--foreground) 40%, transparent)",
          }}
        >
          No honors added yet.
        </div>
      )}

      <div className="space-y-4">
        {honors.map((honor, index) => (
          <div
            key={honor.id}
            className="p-4 space-y-4"
            style={{
              border: "2px solid var(--border)",
              borderRadius: "var(--radius-base)",
              background: "var(--background)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-black uppercase tracking-wider"
                style={{ color: "var(--main)" }}
              >
                Award {index + 1}
              </span>
              <button
                type="button"
                onClick={() => removeHonor(honor.id)}
                className="text-xs font-bold hover:text-red-500 transition-colors duration-150"
                style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}
              >
                Remove
              </button>
            </div>

            {/* Title */}
            <div>
              <label className="nb-label">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={honor.title}
                onChange={(e) => updateHonor(honor.id, { title: e.target.value })}
                placeholder="e.g. Smart India Hackathon Finalist"
                className="nb-input"
              />
            </div>

            {/* Org + Year */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="nb-label">
                  Issuing organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={honor.org}
                  onChange={(e) => updateHonor(honor.id, { org: e.target.value })}
                  placeholder="e.g. Ministry of Education, Google"
                  className="nb-input"
                />
              </div>
              <div>
                <label className="nb-label">
                  Year <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={honor.year}
                  onChange={(e) => updateHonor(honor.id, { year: e.target.value })}
                  placeholder="e.g. 2024"
                  className="nb-input"
                />
              </div>
            </div>

            {/* Short description */}
            <div>
              <label className="nb-label">
                Short description{" "}
                <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
                  (optional)
                </span>
              </label>
              <input
                type="text"
                value={honor.description}
                onChange={(e) => updateHonor(honor.id, { description: e.target.value })}
                placeholder="One line about what this was"
                className="nb-input"
              />
            </div>

            {/* Certificate link */}
            <div>
              <label className="nb-label">
                Certificate / link{" "}
                <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
                  (optional)
                </span>
              </label>
              <input
                type="url"
                value={honor.link}
                onChange={(e) => updateHonor(honor.id, { link: e.target.value })}
                placeholder="https://…"
                className="nb-input"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addHonor}
        className="nb-btn-dashed w-full py-3"
      >
        + {honors.length === 0 ? "Add an honor or award" : "Add another"}
      </button>
    </div>
  );
}

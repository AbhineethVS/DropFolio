"use client";

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-[#2a2a2a] bg-[#0d0d0d] text-white placeholder-gray-600 text-sm outline-none focus:border-white/40 transition-colors";
const labelClass = "block text-sm font-medium text-white/80 mb-1.5";

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
        <h2 className="text-xl font-semibold text-white">Honors &amp; Awards</h2>
        <p className="text-sm text-gray-500 mt-1">Recognition you&apos;ve received</p>
      </div>

      <div className="flex items-start gap-2 px-3 py-2.5 rounded-lg bg-[#161616] border border-[#2a2a2a]">
        <span className="text-gray-600 text-sm mt-px">💡</span>
        <p className="text-xs text-gray-500">
          No awards yet? You can skip this step — use the{" "}
          <span className="text-white/40">&ldquo;Skip this step&rdquo;</span> button below.
        </p>
      </div>

      {honors.length === 0 && (
        <div className="text-center py-6 text-gray-600 text-sm border border-dashed border-[#2a2a2a] rounded-xl">
          No honors added yet.
        </div>
      )}

      <div className="space-y-4">
        {honors.map((honor, index) => (
          <div
            key={honor.id}
            className="p-4 rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                Award {index + 1}
              </span>
              <button
                type="button"
                onClick={() => removeHonor(honor.id)}
                className="text-xs text-gray-600 hover:text-red-400 transition-colors"
              >
                Remove
              </button>
            </div>

            {/* Title */}
            <div>
              <label className={labelClass}>
                Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={honor.title}
                onChange={(e) => updateHonor(honor.id, { title: e.target.value })}
                placeholder="e.g. Smart India Hackathon Finalist"
                className={inputClass}
              />
            </div>

            {/* Org + Year */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Issuing organization <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={honor.org}
                  onChange={(e) => updateHonor(honor.id, { org: e.target.value })}
                  placeholder="e.g. Ministry of Education, Google"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Year <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={honor.year}
                  onChange={(e) => updateHonor(honor.id, { year: e.target.value })}
                  placeholder="e.g. 2024"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Short description */}
            <div>
              <label className={labelClass}>
                Short description{" "}
                <span className="text-gray-600 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={honor.description}
                onChange={(e) =>
                  updateHonor(honor.id, { description: e.target.value })
                }
                placeholder="One line about what this was"
                className={inputClass}
              />
            </div>

            {/* Certificate link */}
            <div>
              <label className={labelClass}>
                Certificate / link{" "}
                <span className="text-gray-600 font-normal">(optional)</span>
              </label>
              <input
                type="url"
                value={honor.link}
                onChange={(e) => updateHonor(honor.id, { link: e.target.value })}
                placeholder="https://…"
                className={inputClass}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addHonor}
        className="w-full py-3 text-sm text-gray-500 border border-dashed border-[#2a2a2a] rounded-xl hover:border-white/30 hover:text-white transition-colors"
      >
        + {honors.length === 0 ? "Add an honor or award" : "Add another"}
      </button>
    </div>
  );
}

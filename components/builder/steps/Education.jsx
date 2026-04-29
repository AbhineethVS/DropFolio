"use client";

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-[#333] bg-[#1a1a1a] text-white placeholder-gray-600 text-sm outline-none focus:border-white/40 transition-colors";
const labelClass = "block text-sm font-medium text-white/80 mb-1.5";

export function Education({ formData, updateFormData }) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-white">Education</h2>
        <p className="text-sm text-gray-500 mt-1">Your academic background</p>
      </div>

      {/* College */}
      <div>
        <label className={labelClass}>
          College / University <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={formData.college}
          onChange={(e) => updateFormData({ college: e.target.value })}
          placeholder="e.g. VIT Vellore"
          className={inputClass}
        />
      </div>

      {/* Branch */}
      <div>
        <label className={labelClass}>
          Branch / Major <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={formData.branch}
          onChange={(e) => updateFormData({ branch: e.target.value })}
          placeholder="e.g. Computer Science and Engineering"
          className={inputClass}
        />
      </div>

      {/* Year of study */}
      <div>
        <label className={labelClass}>
          Year of study <span className="text-red-400">*</span>
        </label>
        <select
          value={formData.yearOfStudy}
          onChange={(e) => updateFormData({ yearOfStudy: e.target.value })}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled className="bg-[#1a1a1a]">
            Select year
          </option>
          {["1st year", "2nd year", "3rd year", "4th year", "Graduated"].map((y) => (
            <option key={y} value={y} className="bg-[#1a1a1a]">
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* Graduation year + CGPA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Graduation year{" "}
            <span className="text-gray-600 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={formData.graduationYear}
            onChange={(e) => updateFormData({ graduationYear: e.target.value })}
            placeholder="e.g. 2026"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            CGPA / GPA{" "}
            <span className="text-gray-600 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={formData.cgpa}
            onChange={(e) => updateFormData({ cgpa: e.target.value })}
            placeholder="e.g. 8.7 / 10"
            className={inputClass}
          />
        </div>
      </div>

      {/* Relevant coursework */}
      <div>
        <label className={labelClass}>
          Relevant coursework{" "}
          <span className="text-gray-600 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          value={formData.coursework}
          onChange={(e) => updateFormData({ coursework: e.target.value })}
          placeholder="e.g. DSA, OS, DBMS, Computer Networks"
          className={inputClass}
        />
        <p className="mt-1 text-xs text-gray-500">Comma separated</p>
      </div>
    </div>
  );
}

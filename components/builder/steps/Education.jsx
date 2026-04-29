"use client";

export function Education({ formData, updateFormData }) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-black" style={{ color: "var(--foreground)" }}>
          Education
        </h2>
        <p className="text-sm mt-1 font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}>
          Your academic background
        </p>
      </div>

      {/* College */}
      <div>
        <label className="nb-label">
          College / University <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.college}
          onChange={(e) => updateFormData({ college: e.target.value })}
          placeholder="e.g. VIT Vellore"
          className="nb-input"
        />
      </div>

      {/* Branch */}
      <div>
        <label className="nb-label">
          Branch / Major <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.branch}
          onChange={(e) => updateFormData({ branch: e.target.value })}
          placeholder="e.g. Computer Science and Engineering"
          className="nb-input"
        />
      </div>

      {/* Year of study */}
      <div>
        <label className="nb-label">
          Year of study <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.yearOfStudy}
          onChange={(e) => updateFormData({ yearOfStudy: e.target.value })}
          className="nb-input cursor-pointer"
        >
          <option value="" disabled>
            Select year
          </option>
          {["1st year", "2nd year", "3rd year", "4th year", "Graduated"].map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* Graduation year + CGPA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="nb-label">
            Graduation year{" "}
            <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
              (optional)
            </span>
          </label>
          <input
            type="text"
            value={formData.graduationYear}
            onChange={(e) => updateFormData({ graduationYear: e.target.value })}
            placeholder="e.g. 2026"
            className="nb-input"
          />
        </div>
        <div>
          <label className="nb-label">
            CGPA / GPA{" "}
            <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
              (optional)
            </span>
          </label>
          <input
            type="text"
            value={formData.cgpa}
            onChange={(e) => updateFormData({ cgpa: e.target.value })}
            placeholder="e.g. 8.7 / 10"
            className="nb-input"
          />
        </div>
      </div>

      {/* Relevant coursework */}
      <div>
        <label className="nb-label">
          Relevant coursework{" "}
          <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
            (optional)
          </span>
        </label>
        <input
          type="text"
          value={formData.coursework}
          onChange={(e) => updateFormData({ coursework: e.target.value })}
          placeholder="e.g. DSA, OS, DBMS, Computer Networks"
          className="nb-input"
        />
        <p
          className="mt-1 text-xs font-medium"
          style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}
        >
          Comma separated
        </p>
      </div>
    </div>
  );
}

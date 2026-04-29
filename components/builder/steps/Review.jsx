export function Review({ formData }) {
  const sections = [
    {
      title: "Personal Info",
      items: [
        { label: "Name", value: formData.fullName },
        {
          label: "Slug",
          value: formData.slug ? `dropfolio.com/p/${formData.slug}` : null,
        },
        { label: "Title", value: formData.title },
        { label: "Location", value: formData.location },
        { label: "Open to Work", value: formData.openToWork ? "Yes" : null },
      ].filter((i) => i.value),
    },
    {
      title: "Education",
      items: [
        { label: "College", value: formData.college },
        { label: "Branch", value: formData.branch },
        { label: "Year", value: formData.yearOfStudy },
        { label: "CGPA", value: formData.cgpa },
      ].filter((i) => i.value),
    },
    {
      title: "Skills",
      items:
        formData.skills.length > 0
          ? [{ label: `${formData.skills.length} skills`, value: formData.skills.join(", ") }]
          : [],
    },
    {
      title: "Projects",
      items: formData.projects
        .filter((p) => p.name)
        .map((p) => ({
          label: p.name,
          value: p.techStack.length > 0 ? p.techStack.join(", ") : "—",
        })),
    },
    {
      title: "Honors & Awards",
      items: formData.honors
        .filter((h) => h.title)
        .map((h) => ({
          label: h.title,
          value: [h.org, h.year].filter(Boolean).join(" · ") || "—",
        })),
    },
    {
      title: "Contact",
      items: [
        { label: "Email", value: formData.email },
        { label: "GitHub", value: formData.github },
        { label: "LinkedIn", value: formData.linkedin },
        { label: "Twitter", value: formData.twitter },
      ].filter((i) => i.value),
    },
  ].filter((s) => s.items.length > 0);

  return (
    <div
      className="p-5 space-y-5"
      style={{
        border: "2px solid var(--border)",
        borderRadius: "var(--radius-base)",
        background: "var(--background)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="text-sm font-black" style={{ color: "var(--foreground)" }}>
          Review summary
        </h3>
        <span
          className="text-xs font-medium"
          style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}
        >
          — double-check before submitting
        </span>
      </div>

      {sections.length === 0 ? (
        <p
          className="text-xs font-medium"
          style={{ color: "color-mix(in oklch, var(--foreground) 40%, transparent)" }}
        >
          Nothing to preview yet.
        </p>
      ) : (
        sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <p
              className="text-[10px] font-black uppercase tracking-widest"
              style={{ color: "var(--main)" }}
            >
              {section.title}
            </p>
            {section.items.map((item) => (
              <div key={item.label} className="flex items-start gap-3 text-xs">
                <span
                  className="min-w-[88px] flex-shrink-0 pt-px font-semibold"
                  style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}
                >
                  {item.label}
                </span>
                <span
                  className="font-medium break-all leading-relaxed"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

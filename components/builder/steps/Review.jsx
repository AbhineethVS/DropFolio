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
    <div className="rounded-xl border border-[#2a2a2a] bg-[#0d0d0d] p-5 space-y-5">
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-medium text-white/70">Review summary</h3>
        <span className="text-xs text-gray-600">— double-check before submitting</span>
      </div>

      {sections.length === 0 ? (
        <p className="text-xs text-gray-600">Nothing to preview yet.</p>
      ) : (
        sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest">
              {section.title}
            </p>
            {section.items.map((item) => (
              <div key={item.label} className="flex items-start gap-3 text-xs">
                <span className="text-gray-600 min-w-[88px] flex-shrink-0 pt-px">
                  {item.label}
                </span>
                <span className="text-white/60 break-all leading-relaxed">{item.value}</span>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

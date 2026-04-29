const steps = [
  {
    number: "01",
    title: "Fill the form",
    description: "Add your raw details — bio, education, skills, and projects. No formatting needed.",
  },
  {
    number: "02",
    title: "AI polishes it",
    description: "Claude AI rewrites everything into crisp, professional copy in seconds.",
  },
  {
    number: "03",
    title: "Share your link",
    description: "Your portfolio is live at dropfolio.com/p/you. Send it to every recruiter.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="w-full py-20 px-4 md:px-6 bg-emerald-50 dark:bg-[#1a1a1a]"
      style={{
        borderTop: "var(--nb-border)",
        borderBottom: "var(--nb-border)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-black text-black dark:text-white mb-14">
          How it works
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-0">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex flex-col md:flex-row items-start flex-1">
              {/* Step card */}
              <div className="flex-1">
                <span className="text-5xl font-black text-[#34d399] leading-none block mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-black text-black dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-black/60 dark:text-white/60 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-6 pt-8 shrink-0">
                  <span className="text-2xl font-black text-black dark:text-white">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

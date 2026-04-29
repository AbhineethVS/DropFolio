const STEPS = [
  { number: 1, title: "Personal Info" },
  { number: 2, title: "Education" },
  { number: 3, title: "Skills" },
  { number: 4, title: "Projects" },
  { number: 5, title: "Honors" },
  { number: 6, title: "Social Links" },
];

export function StepIndicator({ currentStep }) {
  return (
    <div className="w-full">
      <div className="flex items-start">
        {STEPS.map((step, index) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <div key={step.number} className="flex items-center flex-1 min-w-0">
              {/* Circle + label */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-150"
                  style={{
                    border: "2px solid var(--border)",
                    background: isCompleted
                      ? "var(--foreground)"
                      : isCurrent
                      ? "var(--main)"
                      : "var(--secondary-background)",
                    color: isCompleted
                      ? "var(--background)"
                      : isCurrent
                      ? "var(--main-foreground)"
                      : "color-mix(in oklch, var(--foreground) 40%, transparent)",
                    boxShadow: isCurrent ? "var(--shadow)" : "none",
                  }}
                >
                  {isCompleted ? (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className="mt-1.5 text-[10px] hidden sm:block text-center max-w-[64px] leading-tight font-semibold"
                  style={{
                    color: isCurrent
                      ? "var(--foreground)"
                      : "color-mix(in oklch, var(--foreground) 40%, transparent)",
                  }}
                >
                  {step.title}
                </span>
              </div>

              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <div
                  className="flex-1 mx-1.5 mt-[-10px] sm:mt-[-16px] transition-all duration-200"
                  style={{
                    height: "2px",
                    background: isCompleted ? "var(--foreground)" : "var(--border)",
                    opacity: isCompleted ? 1 : 0.25,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

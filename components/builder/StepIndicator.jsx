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
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-200
                    ${
                      isCompleted
                        ? "bg-white text-black"
                        : isCurrent
                        ? "border-2 border-white text-white"
                        : "border border-[#333] text-gray-600"
                    }`}
                >
                  {isCompleted ? (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className={`mt-1.5 text-[10px] hidden sm:block text-center max-w-[64px] leading-tight
                    ${isCurrent ? "text-white" : "text-gray-600"}`}
                >
                  {step.title}
                </span>
              </div>

              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <div
                  className={`h-px flex-1 mx-1.5 mt-[-10px] sm:mt-[-16px] transition-colors duration-200
                    ${isCompleted ? "bg-white/30" : "bg-[#2a2a2a]"}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

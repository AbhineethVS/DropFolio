import { Zap, Sparkles, Link2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Launch in minutes",
    description: "Pick a template, add your work, go live. No code or design skills required.",
    rotate: "-rotate-1",
  },
  {
    icon: Sparkles,
    title: "AI writes the copy",
    description: "Claude AI turns your rough notes into polished, recruiter-ready content.",
    rotate: "rotate-0",
  },
  {
    icon: Link2,
    title: "One link, everywhere",
    description: "Share your portfolio with a single clean URL. Works on any device.",
    rotate: "rotate-1",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 w-full px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[36px] font-black text-black dark:text-white text-center mb-14">
          Everything you need to stand out
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, rotate }) => (
            <div
              key={title}
              className={`${rotate} bg-white dark:bg-[#1a1a1a] p-7 rounded-[var(--nb-radius)] border-2 border-black dark:border-white transition-all duration-150 hover:rotate-0 hover:-translate-y-1 hover:-translate-x-0.5 group cursor-default`}
              style={{ boxShadow: "var(--nb-shadow)" }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-[var(--nb-radius)] bg-[#34d399] border-2 border-black mb-5"
                style={{ boxShadow: "2px 2px 0px #000" }}
              >
                <Icon className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-lg font-black text-black dark:text-white mb-2">{title}</h3>
              <p className="text-sm font-medium text-black/60 dark:text-white/60 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

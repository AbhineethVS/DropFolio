import { Zap, Palette, Share2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Launch in minutes",
    description: "Pick a template, add your work, go live. No code required.",
  },
  {
    icon: Palette,
    title: "Fully customizable",
    description: "Fonts, colors, layouts — make it yours from top to bottom.",
  },
  {
    icon: Share2,
    title: "One link, anywhere",
    description: "Share your portfolio with a single clean link. Works everywhere.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 w-full px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-white tracking-tight">
            Everything you need to stand out
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#111111] border border-[#222222] rounded-2xl p-6 flex flex-col gap-4 transition-colors duration-200 hover:border-[#333333]"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <Icon className="w-5 h-5 text-white/70" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white">{title}</h3>
              <p className="text-[#a1a1a1] text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

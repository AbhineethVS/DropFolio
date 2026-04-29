"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 flex flex-col items-center text-center px-4 relative">
      {/* Dot grid pattern */}
      <div
        className="hero-dots absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #00000015 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto gap-6">
        {/* Badge pill */}
        <div
          className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#34d399] text-black text-sm font-bold rounded-full border-2 border-black"
          style={{ boxShadow: "var(--nb-shadow)" }}
        >
          <span>✦</span>
          <span>Free for CS students</span>
        </div>

        {/* Headline */}
        <h1
          className="text-[40px] md:text-[64px] font-black leading-tight tracking-tight text-black dark:text-white"
          style={{ fontWeight: 800 }}
        >
          Your portfolio,
          <br />
          built in minutes.
        </h1>

        {/* Subtext */}
        <p className="text-lg text-black/60 dark:text-white/60 max-w-xl leading-relaxed">
          Dump your raw details. Claude AI polishes them. Share one link with every recruiter.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link
            href="/sign-up"
            className="px-7 py-3 text-base font-bold text-black bg-[#34d399] rounded-[var(--nb-radius)] border-2 border-black transition-all duration-150 hover:-translate-x-px hover:-translate-y-px"
            style={{ boxShadow: "var(--nb-shadow)" }}
          >
            Get started free →
          </Link>
          <a
            href="#examples"
            className="px-7 py-3 text-base font-bold text-black dark:text-white bg-white dark:bg-[#1a1a1a] rounded-[var(--nb-radius)] border-2 border-black dark:border-white transition-all duration-150 hover:-translate-x-px hover:-translate-y-px"
            style={{ boxShadow: "var(--nb-shadow)" }}
          >
            View examples
          </a>
        </div>

        {/* Trust line */}
        <p className="text-sm text-black/50 dark:text-white/50 font-medium">
          No design skills needed&nbsp;•&nbsp;Takes 5 minutes&nbsp;•&nbsp;Totally free
        </p>

        {/* Before / After card */}
        <div
          className="w-full mt-6 rounded-[var(--nb-radius)] bg-white dark:bg-[#1a1a1a] border-2 border-black dark:border-white overflow-hidden"
          style={{ boxShadow: "var(--nb-shadow-lg)" }}
        >
          <div className="grid grid-cols-2 divide-x-2 divide-black dark:divide-white">
            {/* Left: You write */}
            <div className="p-5 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-black/50 dark:text-white/50 block mb-3">
                You write:
              </span>
              <p className="font-mono text-xs text-black/70 dark:text-white/70 leading-relaxed">
                {`hey im alex, i do web stuff mostly react and some node, built a few projects for college assignments, know git kinda, looking for internship`}
              </p>
            </div>

            {/* Divider badge */}
            <div className="relative col-span-0">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-[#34d399] border-2 border-black dark:border-white rounded-full flex items-center justify-center text-xs font-bold shadow">
                ✦
              </div>
            </div>

            {/* Right: AI polishes */}
            <div className="p-5 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block mb-3">
                AI polishes:
              </span>
              <p className="text-xs text-black/80 dark:text-white/80 leading-relaxed">
                {`Full-stack developer specializing in React and Node.js, with hands-on experience building production-ready web applications. Proficient in Git-based collaboration workflows and actively seeking impactful software engineering internships.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

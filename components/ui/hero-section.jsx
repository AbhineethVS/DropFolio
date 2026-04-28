"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-12 w-full flex justify-center items-center px-4 md:px-6">
      <div className="w-full max-w-7xl relative">
        <div
          className="relative overflow-hidden rounded-[48px] border border-white/10 bg-[#111111] shadow-sm min-h-[600px] flex flex-col items-center justify-center"
          style={{
            backgroundImage: `radial-gradient(ellipse at 60% 40%, #1a1a1a 0%, #0a0a0a 70%)`,
          }}
        >
          {/* Grain texture overlay */}
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Now in Public Beta
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.05]">
              Your portfolio, <br />
              <span className="text-white/60">built in minutes.</span>
            </h1>

            {/* Description */}
            <p className="text-white/50 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              DROPFOLIO lets you create stunning portfolios and resumes that stand out — no design skills needed.
              Just drop in your work and go live.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/sign-up"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-12 text-base font-medium text-black transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95"
              >
                <span>Get Started Free</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#examples"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-12 text-base font-medium text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                View Examples
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

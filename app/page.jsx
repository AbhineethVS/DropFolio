import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ExamplesSection } from "@/components/landing/ExamplesSection";
import { CTABanner } from "@/components/landing/CTABanner";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f]">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <HowItWorks />
        <ExamplesSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

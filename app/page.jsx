import { Navbar } from "@/components/ui/mini-navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ExamplesSection } from "@/components/landing/ExamplesSection";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Navbar />

      <main className="pt-28">
        <HeroSection />
        <FeaturesSection />
        <ExamplesSection />
      </main>

      <Footer />
    </div>
  );
}

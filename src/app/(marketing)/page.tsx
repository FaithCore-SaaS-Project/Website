import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import FeatureSection from "@/components/home/FeatureSection";
import Testimonials from "@/components/home/Testimonials";
import About from "@/components/home/About";
import PricingSection from "@/components/pricing/PricingSection";
import CTABanner from "@/components/home/CTABanner";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "FaithCore – Church Management System",
  description:
    "FaithCore helps churches streamline members, finances, certificates, events, and communications — all in one secure ecosystem.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trusted logos */}
      <TrustedBy />

      {/* 3. Features grid */}
      <FeatureSection />

      {/* 4. Testimonials */}
      <Testimonials />

      {/* 5. About */}
      <About />

      {/* 6. Pricing */}
      <PricingSection />

      {/* 7. CTA banner */}
      <CTABanner />

      {/* 8. Contact */}
      <Contact />
    </>
  );
}

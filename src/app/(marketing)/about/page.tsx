import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StatsSection from "@/components/about/StatsSection";
import MissionVision from "@/components/about/MissionVision";
import StorySection from "@/components/about/StorySection";
import TeamSection from "@/components/about/TeamSection";
import CTASection from "@/components/about/CTASection";

export const metadata: Metadata = {
  title: "About Us – FaithCore Church Management",
  description:
    "Learn about FaithCore's mission, values, and journey in empowering churches worldwide through secure and modern administrative systems.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#fafaff]">
      <AboutHero />
      <StatsSection />
      <MissionVision />
      <StorySection />
      <TeamSection />
      <CTASection />
    </main>
  );
}

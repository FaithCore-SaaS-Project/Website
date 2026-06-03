import type { Metadata } from "next";
import FeaturesPage from "@/components/features/FeaturesPage";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Features – FaithCore Church Management",
  description:
    "Explore all FaithCore features: member management, finance tracking, events, certificates, reports, and more — built for modern ministries.",
};

export default function FeaturesRoute() {
  return (
    <>
      <FeaturesPage />
      <CTABanner />
    </>
  );
}

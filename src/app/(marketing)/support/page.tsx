import type { Metadata } from "next";
import SupportHero from "@/components/support/SupportHero";
import QuickLinks from "@/components/support/QuickLinks";
import KnowledgeTopics from "@/components/support/KnowledgeTopics";
import TicketBanner from "@/components/support/TicketBanner";
import FAQSection from "@/components/support/FAQSection";
import WhatsAppBanner from "@/components/support/WhatsAppBanner";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Support Center – Kingdom Connect",
  description:
    "Find answers, browse our knowledge base, raise a ticket, or chat with our team on WhatsApp. Kingdom Connect support is here to help your ministry thrive.",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SupportPage() {
  return (
    <main className="bg-[#fafaff]">
      {/* 1. Hero + Search */}
      <SupportHero />

      {/* 2. Quick Links — Knowledge Base / Tickets / FAQ */}
      <QuickLinks />

      {/* 3. Knowledge Topics Grid */}
      <KnowledgeTopics />

      {/* 4. Still Need Help — Ticket Banner */}
      <TicketBanner />

      {/* 5. FAQ Accordion */}
      <FAQSection />

      {/* 6. WhatsApp Instant Support */}
      <WhatsAppBanner />
    </main>
  );
}

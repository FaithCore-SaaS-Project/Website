import { ReactNode } from "react";
import { BarChart3, Calendar, ShieldCheck, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES: Feature[] = [
  {
    icon: <Users size={28} />,
    title: "Member Management",
    description: "Manage church members and families with ease.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Finance Management",
    description: "Track giving, expenses, receipts, and reports.",
  },
  {
    icon: <Calendar size={28} />,
    title: "Event Management",
    description: "Organize church events and registrations.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Certificates",
    description: "Generate baptism and recommendation certificates.",
  },
];

// ─── FeatureCard ──────────────────────────────────────────────────────────────

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF2FB] text-[#1B2F5E]">
        {icon}
      </div>
      <h3 className="mt-8 text-2xl font-bold">{title}</h3>
      <p className="mt-4 leading-7 text-gray-600">{description}</p>
    </div>
  );
}

// ─── FeatureSection ───────────────────────────────────────────────────────────

export default function FeatureSection() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#1B2F5E]">
            Powerful Features
          </p>
          <h2 className="mt-4 text-5xl font-bold">
            Everything You Need To Manage Ministry
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Manage members, finances, certificates, giving, communication,
            reports, and events from one platform.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/features"
            id="feature-section-view-all"
            className="group inline-flex items-center gap-2 rounded-2xl bg-[#1B2F5E] px-8 py-4 font-semibold text-white shadow-md shadow-[#1B2F5E]/30 transition-all duration-200 hover:bg-[#15254A] hover:shadow-lg hover:shadow-[#1B2F5E]/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            View All Features
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

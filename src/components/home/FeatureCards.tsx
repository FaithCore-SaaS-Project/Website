import {
  Users,
  CalendarDays,
  HeartHandshake,
  BarChart3,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { ReactNode } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES: Feature[] = [
  {
    icon: <Users size={22} />,
    title: "Member Directory",
    description:
      "Manage your entire congregation in one searchable, filterable directory. Track families, life groups, and ministry involvement.",
    color: "text-[#5B3DF5]",
    bgColor: "bg-[#ede9fe]",
  },
  {
    icon: <CalendarDays size={22} />,
    title: "Event Management",
    description:
      "Plan, promote, and track events with RSVP management, automated reminders, and real-time attendance tracking.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: <HeartHandshake size={22} />,
    title: "Giving & Tithes",
    description:
      "Accept and track donations with automated receipts, giving statements, and transparent financial reporting.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Ministry Analytics",
    description:
      "Gain actionable insights into attendance trends, giving growth, and volunteer engagement with beautiful dashboards.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with role-based access control, encrypted data storage, and GDPR compliance tools.",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Mobile Access",
    description:
      "Empower your team to access member data, check-in attendees, and manage tasks from any device, anywhere.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
];

// ─── FeatureCard ──────────────────────────────────────────────────────────────

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="group flex flex-col gap-5 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.bgColor} ${feature.color} transition-transform duration-300 group-hover:scale-110`}
      >
        {feature.icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
        <p className="mt-2 text-sm leading-7 text-gray-600">{feature.description}</p>
      </div>
    </div>
  );
}

// ─── FeatureCards ─────────────────────────────────────────────────────────────

export default function FeatureCards() {
  return (
    <section id="feature-cards" className="py-24 bg-[#f8f9ff]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#5B3DF5]/20 bg-[#ede9fe]/70 px-4 py-1.5 text-sm font-medium text-[#5B3DF5]">
            Platform Features
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            Everything Your Church Needs
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            From member management to financial reporting, FaithCore covers every
            aspect of modern church administration.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

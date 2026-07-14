import { Users, Globe, BookOpen, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";

// ─── Stats ────────────────────────────────────────────────────────────────────

const STATS = [
  { label: "Churches Onboarded", value: "1,200+" },
  { label: "Members Managed", value: "500K+" },
  { label: "Countries", value: "40+" },
  { label: "Uptime", value: "99.9%" },
];

// ─── Values ───────────────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: <HeartHandshake size={22} />,
    title: "Ministry First",
    description:
      "Every decision we make is driven by the question: does this help the church serve its community better?",
  },
  {
    icon: <Users size={22} />,
    title: "People-Centered",
    description:
      "Software should serve people, not the other way around. FaithCore is built around human needs.",
  },
  {
    icon: <Globe size={22} />,
    title: "Globally Minded",
    description:
      "We serve churches in 40+ countries and design for diverse ministry contexts worldwide.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Transparency",
    description:
      "No hidden fees. No lock-in. We believe in honest, clear communication with our customers.",
  },
];

// ─── About ────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#1B2F5E]">
              About FaithCore
            </p>
            <h2 className="mt-4 text-5xl font-bold leading-tight">
              Built by Church Leaders, For Church Leaders
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              FaithCore was founded by a team with deep roots in church
              administration. We saw firsthand how outdated tools and manual
              processes drained energy from what matters most — ministry.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Today, we serve 1,200+ churches across 40+ countries with a
              platform that is secure, modern, and designed for how churches
              actually operate.
            </p>
            
            {/* View Full Story Link */}
            <div className="mt-8">
              <Link
                href="/about"
                id="home-about-section-view-more"
                className="group inline-flex items-center gap-2 rounded-2xl bg-[#1B2F5E] px-8 py-4 font-semibold text-white shadow-md shadow-[#1B2F5E]/30 transition-all duration-200 hover:bg-[#15254A] hover:shadow-lg hover:shadow-[#1B2F5E]/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                Read Our Full Story
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>


          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border bg-[#f8f9ff] p-8 text-center"
              >
                <p className="text-4xl font-extrabold text-[#1B2F5E]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <h3 className="text-center text-3xl font-bold text-gray-900">
            Our Core Values
          </h3>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border bg-[#f8f9ff] p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF2FB] text-[#1B2F5E]">
                  {v.icon}
                </div>
                <h4 className="mt-6 text-lg font-bold text-gray-900">
                  {v.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

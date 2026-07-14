"use client";

import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  Download,
  Laptop,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  id: number;
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  badge?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES: Feature[] = [
  {
    id: 1,
    icon: <Users size={26} />,
    number: "01",
    title: "Members Management",
    description:
      "Manage members, families, groups, attendance, and ministry information in one centralized, intuitive place. Never lose track of your congregation again.",
    points: [
      "Member & family profiles",
      "Attendance tracking",
      "Ministry groups",
      "Member communication",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    badge: "Most Popular",
  },
  {
    id: 2,
    icon: <Wallet size={26} />,
    number: "02",
    title: "Finance Management",
    description:
      "Track donations, tithes, expenses, and budgets with detailed reporting. Get a crystal-clear picture of your church's financial health at any moment.",
    points: [
      "Donation tracking",
      "Expense management",
      "Financial reports",
      "Budget categories",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    icon: <CalendarDays size={26} />,
    number: "03",
    title: "Events Management",
    description:
      "Organize church events, registrations, reminders, and calendars with ease. Keep your congregation informed and engaged every step of the way.",
    points: [
      "Event scheduling",
      "Online registrations",
      "RSVP system",
      "Automated reminders",
    ],
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 4,
    icon: <ShieldCheck size={26} />,
    number: "04",
    title: "Certificates",
    description:
      "Generate and verify baptism, membership, and recommendation certificates in seconds. Professional, tamper-proof, and always ready when you need them.",
    points: [
      "Certificate templates",
      "QR code verification",
      "Print-ready PDF export",
      "Digital certificates",
    ],
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 5,
    icon: <BarChart3 size={26} />,
    number: "05",
    title: "Reports & Analytics",
    description:
      "View detailed insights about church growth, finances, attendance, and giving. Make data-driven decisions that propel your ministry forward.",
    points: [
      "Growth analytics",
      "Financial charts",
      "Member reports",
      "Export & print",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop",
  },
];

const STATS = [
  { value: "500+", label: "Churches Served" },
  { value: "120K+", label: "Members Managed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.9★", label: "Average Rating" },
];

const DESKTOP_POINTS = [
  "Works fully offline",
  "Fast & secure by design",
  "Automatic updates",
  "Windows & macOS support",
];

const SECURITY_POINTS = [
  "Role-based access control",
  "End-to-end encrypted data",
  "Automated daily backups",
  "99.9% uptime guarantee",
];

// ─── Shared Button Components ─────────────────────────────────────────────────

function PrimaryButton({
  children,
  icon,
  id,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  id?: string;
}) {
  return (
    <button
      id={id}
      className="group inline-flex items-center gap-2 rounded-2xl bg-[#1B2F5E] px-7 py-3.5 font-semibold text-white shadow-md shadow-[#1B2F5E]/30 transition-all duration-200 hover:bg-[#15254A] hover:shadow-lg hover:shadow-[#1B2F5E]/40 hover:-translate-y-0.5 active:translate-y-0"
    >
      {children}
      {icon ?? (
        <ChevronRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </button>
  );
}

function OutlineButton({
  children,
  icon,
  id,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  id?: string;
}) {
  return (
    <button
      id={id}
      className="group inline-flex items-center gap-2 rounded-2xl border-2 border-[#1B2F5E] px-7 py-3.5 font-semibold text-[#1B2F5E] transition-all duration-200 hover:bg-[#1B2F5E] hover:text-white hover:-translate-y-0.5 active:translate-y-0"
    >
      {children}
      {icon ?? (
        <ChevronRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </button>
  );
}

function WhiteButton({
  children,
  icon,
  id,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  id?: string;
}) {
  return (
    <button
      id={id}
      className="group inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-semibold text-[#1B2F5E] shadow-md transition-all duration-200 hover:bg-gray-50 hover:-translate-y-0.5 active:translate-y-0"
    >
      {icon}
      {children}
    </button>
  );
}

// ─── Stat Badge ───────────────────────────────────────────────────────────────

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-3xl border bg-white px-8 py-6 shadow-sm">
      <span className="text-3xl font-extrabold text-[#1B2F5E]">{value}</span>
      <span className="text-sm font-medium text-gray-500">{label}</span>
    </div>
  );
}

// ─── Feature Row ──────────────────────────────────────────────────────────────

function FeatureRow({
  feature,
  reverse,
}: {
  feature: Feature;
  reverse: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-10 rounded-[36px] border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* ── Content ── */}
      <div className="flex flex-col">
        {/* Number + Badge row */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold tracking-widest text-gray-300">
            {feature.number}
          </span>
          {feature.badge && (
            <span className="rounded-full bg-[#1B2F5E] px-3 py-1 text-xs font-semibold text-white">
              {feature.badge}
            </span>
          )}
        </div>

        {/* Icon */}
        <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF2FB] text-[#1B2F5E]">
          {feature.icon}
        </div>

        {/* Title */}
        <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl">
          {feature.title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-base leading-8 text-gray-500 lg:text-lg">
          {feature.description}
        </p>

        {/* Check list */}
        <ul className="mt-7 space-y-3">
          {feature.points.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEF2FB] text-[#1B2F5E]">
                <Check size={13} strokeWidth={3} />
              </span>
              <span className="font-medium text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-9">
          <OutlineButton id={`feature-learn-more-${feature.id}`}>
            Explore {feature.title}
          </OutlineButton>
        </div>
      </div>

      {/* ── Image ── */}
      <div className="overflow-hidden rounded-[28px] border bg-[#f8f9ff] p-4">
        <Image
          src={feature.image}
          alt={feature.title}
          width={1400}
          height={900}
          className="w-full rounded-3xl object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

// ─── FeaturesPage ─────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <main className="bg-[#f8f9ff] text-[#111827]">

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b bg-white">
        {/* Background orb */}
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#1B2F5E]/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FB] px-5 py-2 text-sm font-semibold text-[#1B2F5E]">
            <Sparkles size={14} />
            Powerful Features
          </div>

          <h1 className="mt-7 max-w-3xl text-5xl font-extrabold leading-tight lg:text-6xl">
            Everything You Need
            <br />
            To{" "}
            <span className="text-[#1B2F5E]">Manage Your Church</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            FaithCore provides all the tools your church needs to stay
            organized, connected, and focused on ministry — without the
            complexity.
          </p>

          {/* Hero CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton id="hero-start-trial" icon={<ArrowRight size={16} />}>
              Start Free Trial
            </PrimaryButton>
            <button
              id="hero-view-demo"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-7 py-3.5 font-semibold text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-0.5"
            >
              View Live Demo
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FEATURE ROWS
      ════════════════════════════════════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-10 px-6">
          {/* Section label */}
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1B2F5E]/20 bg-[#EEF2FB]/70 px-4 py-1.5 text-sm font-medium text-[#1B2F5E]">
              <Zap size={13} />
              Core Capabilities
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
              Built for Modern Ministries
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
              Five powerful modules, one seamless experience.
            </p>
          </div>

          {/* Feature rows */}
          {FEATURES.map((feature, i) => (
            <FeatureRow
              key={feature.id}
              feature={feature}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          DESKTOP APP
      ════════════════════════════════════════ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 rounded-[40px] bg-gradient-to-br from-[#1B2F5E] via-[#6a4fff] to-[#7c5cff] px-10 py-16 text-white shadow-2xl shadow-[#1B2F5E]/30 lg:grid-cols-2">

            {/* Left */}
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <Laptop size={30} />
              </div>

              <h2 className="mt-7 text-4xl font-extrabold leading-tight lg:text-5xl">
                Desktop Application
              </h2>

              <p className="mt-5 text-base leading-8 text-purple-100 lg:text-lg">
                Use FaithCore with our powerful desktop software for
                Windows and macOS — with full offline support and automatic
                updates built right in.
              </p>

              <ul className="mt-7 space-y-3">
                {DESKTOP_POINTS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="font-medium text-purple-100">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Desktop CTA button */}
              <div className="mt-10">
                <WhiteButton
                  id="desktop-app-download"
                  icon={<Download size={18} />}
                >
                  Download Desktop App
                </WhiteButton>
              </div>
            </div>

            {/* Right – screenshot */}
            <div className="overflow-hidden rounded-[28px] bg-white/10 p-5 backdrop-blur">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                alt="FaithCore Desktop Application"
                width={1400}
                height={900}
                className="w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECURITY
      ════════════════════════════════════════ */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[40px] border bg-white px-10 py-16 shadow-sm">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* Left */}
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ecfdf5] text-green-600">
                  <ShieldCheck size={32} />
                </div>

                <h2 className="mt-7 text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl">
                  Security &amp; Reliability
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-500 lg:text-lg">
                  Enterprise-grade security keeps your church data
                  encrypted, backed up, and protected around the clock.
                </p>

                <ul className="mt-7 space-y-3">
                  {SECURITY_POINTS.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-green-600">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className="font-medium text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Security CTA */}
                <div className="mt-10">
                  <PrimaryButton id="security-learn-more">
                    Learn About Security
                  </PrimaryButton>
                </div>
              </div>

              {/* Right – shield visual */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1B2F5E]/20 to-[#8b5cf6]/20 blur-3xl" />
                  <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-[#1B2F5E] to-[#8b5cf6] shadow-2xl shadow-[#1B2F5E]/40 lg:h-80 lg:w-80">
                    <ShieldCheck size={90} className="text-white" />
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -right-4 top-8 rounded-2xl border bg-white px-4 py-2 shadow-lg">
                    <p className="text-xs font-bold text-gray-900">
                      AES-256 Encrypted
                    </p>
                    <p className="text-xs text-gray-400">Bank-grade security</p>
                  </div>
                  <div className="absolute -left-4 bottom-8 rounded-2xl border bg-white px-4 py-2 shadow-lg">
                    <p className="text-xs font-bold text-gray-900">
                      Daily Backups
                    </p>
                    <p className="text-xs text-gray-400">Zero data loss</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          BOTTOM CTA BANNER
      ════════════════════════════════════════ */}
      <section className="bg-[#0F172A] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-purple-300">
            <Sparkles size={13} />
            Ready to get started?
          </div>
          <h2 className="text-4xl font-extrabold lg:text-6xl">
            Transform Your Ministry Today
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Join hundreds of churches already using FaithCore to streamline
            administration and grow their ministry impact.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              id="cta-start-trial"
              className="group inline-flex items-center gap-2 rounded-2xl bg-[#1B2F5E] px-8 py-4 font-semibold text-white shadow-lg shadow-[#1B2F5E]/40 transition-all duration-200 hover:bg-[#15254A] hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Free Trial
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
            <button
              id="cta-book-demo"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5"
            >
              Book a Demo
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </section>

    </main>
  );
}

"use client";

// ─── Support (Home Section) ───────────────────────────────────────────────────

import {
  MessageCircle,
  Mail,
  Phone,
  Users,
  BookOpen,
  PlayCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// ── Data ──────────────────────────────────────────────────────────────────────

const channels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant help from our support team, Mon–Fri 9 AM – 6 PM EST.",
    badge: "Fastest",
    badgeColor: "bg-green-100 text-green-700",
    href: "#",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your issue and get a response within one business day.",
    badge: "24hr Reply",
    badgeColor: "bg-blue-50 text-blue-600",
    href: "mailto:support@faithcore.app",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk directly with a specialist for urgent or complex matters.",
    badge: "Priority Plans",
    badgeColor: "bg-orange-50 text-orange-600",
    href: "tel:+18005551234",
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with admins across thousands of churches sharing tips.",
    badge: "Free Access",
    badgeColor: "bg-purple-50 text-purple-600",
    href: "#",
  },
];

const resources = [
  { icon: BookOpen, label: "Knowledge Base", count: "120+ articles", href: "#" },
  { icon: PlayCircle, label: "Video Tutorials", count: "48 videos", href: "#" },
];

const faqs = [
  {
    q: "How do I add new members to my church?",
    a: "Go to the Members section in your dashboard, click 'Add Member', fill in the required fields, and hit Save. You can also bulk-import members via our CSV template.",
  },
  {
    q: "Can I assign different roles to staff members?",
    a: "Yes. FaithCore supports Super Admin, Admin, Staff, and View-Only roles. Navigate to Settings → User Roles to customise permissions for each role.",
  },
  {
    q: "How do I generate and send certificates?",
    a: "Head to the Certificates module, choose a template (or upload your own), select the member, fill in the details, and click 'Generate & Send'. Certificates are delivered instantly via email.",
  },
  {
    q: "Is my church data backed up automatically?",
    a: "Yes. All data is encrypted at rest and backed up daily to redundant cloud servers. You can also export a full backup from Settings → Data Management at any time.",
  },
];

// ── FAQ Item ──────────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
        open ? "border-[#1B2F5E]/30 shadow-md" : "hover:border-gray-300"
      }`}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-gray-900 text-sm md:text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#1B2F5E] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="border-t border-gray-100 px-6 pb-5 pt-4 text-sm text-gray-500 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Support() {
  return (
    <section id="support" className="bg-[#f8f9ff] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Section Header ──────────────────────────────────── */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#1B2F5E]">
            Support
          </p>
          <h2 className="mt-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            We&apos;re Always Here To Help
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
            Whether you&apos;re stuck on a feature or need urgent help, our team
            and resources have you covered — every step of the way.
          </p>
          <Link
            href="/support"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#1B2F5E] px-8 py-4 font-semibold text-white shadow-md shadow-[#1B2F5E]/30 hover:bg-[#15254A] hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Visit Support Center →
          </Link>
        </div>

        {/* ── Contact Channels ────────────────────────────────── */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, title, description, badge, badgeColor, href }) => (
            <a
              key={title}
              href={href}
              className="group flex flex-col rounded-3xl border bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#1B2F5E]/20"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF2FB] text-[#1B2F5E] transition-colors duration-300 group-hover:bg-[#1B2F5E] group-hover:text-white">
                <Icon size={26} />
              </div>

              {/* Badge */}
              <span className={`mt-5 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}>
                {badge}
              </span>

              <h3 className="mt-3 text-lg font-bold text-gray-900">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-gray-500 leading-relaxed">
                {description}
              </p>

              <span className="mt-5 text-sm font-semibold text-[#1B2F5E] group-hover:underline">
                Get Help →
              </span>
            </a>
          ))}
        </div>

        {/* ── Resources + FAQ ─────────────────────────────────── */}
        <div className="mt-10 grid gap-8 lg:grid-cols-5">

          {/* Quick Resources */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900">Quick Resources</h3>
            {resources.map(({ icon: Icon, label, count, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-5 rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-[#1B2F5E]/30 hover:-translate-y-0.5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2FB] text-[#1B2F5E] transition-colors group-hover:bg-[#1B2F5E] group-hover:text-white">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{label}</p>
                  <p className="text-sm font-semibold text-[#1B2F5E]">{count}</p>
                </div>
                <span className="ml-auto text-gray-300 group-hover:text-[#1B2F5E] transition-colors text-xl">
                  →
                </span>
              </a>
            ))}

            {/* CTA Card */}
            <div className="relative mt-2 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B2F5E] to-[#8066ff] p-7 text-white shadow-lg shadow-[#1B2F5E]/20">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <p className="text-lg font-bold">Still need help?</p>
              <p className="mt-2 text-sm text-white/80">
                Our team is online and ready to assist you right now.
              </p>
              <a
                href="mailto:support@faithcore.app"
                className="mt-5 inline-block rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-[#1B2F5E] hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-gray-900">
              Frequently Asked Questions
            </h3>
            <div className="mt-5 flex flex-col gap-4">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} {...faq} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

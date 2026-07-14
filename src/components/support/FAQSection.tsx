"use client";

// ─── FAQSection ───────────────────────────────────────────────────────────────

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I add members to my church?",
    a: "Go to the Members section in your dashboard, click 'Add Member', fill in the required fields, and hit Save. You can also bulk-import members via our CSV template.",
  },
  {
    q: "How do I record a donation or income?",
    a: "Navigate to Finance → Donations, click 'Record Donation', select the member (or leave anonymous), enter the amount and date, then save. Reports are updated instantly.",
  },
  {
    q: "Can I export reports to Excel or PDF?",
    a: "Yes. In the Reports module, select the report type and date range, then click the Export button in the top-right corner. Both Excel (.xlsx) and PDF formats are supported.",
  },
  {
    q: "How do I organise an event?",
    a: "Head to the Events module, click 'Create Event', fill in the name, date, location, and description, then publish. Members can register directly from the member portal.",
  },
  {
    q: "How do I reset my password?",
    a: "On the login page, click 'Forgot Password?', enter your email address, and you'll receive a reset link within a few minutes. Check your spam folder if it doesn't arrive.",
  },
  {
    q: "Can multiple staff members access the system?",
    a: "Absolutely. Under Settings → User Management, invite staff by email and assign them a role (Admin, Staff, or View-Only). Each person gets their own secure login.",
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
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-gray-900">{q}</span>
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

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 bg-[#fafaff]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Left — Heading */}
          <div className="flex flex-col justify-start">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#1B2F5E]">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl font-extrabold text-gray-900 leading-tight md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              Can&apos;t find the answer? Create a support ticket and we&apos;ll
              get back to you fast.
            </p>
          </div>

          {/* Right — Accordion */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

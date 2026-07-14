"use client";

import { ChevronDown } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    question: "Can I change my plan later?",
    answer:
      "Yes. You can upgrade or downgrade your subscription at any time from your FaithCore dashboard.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. Every new church can start with a 14-day free trial before choosing a paid plan.",
  },
  {
    question: "Is my church data secure?",
    answer:
      "Absolutely. We use encrypted connections, secure cloud storage, daily backups, and role-based access control.",
  },
  {
    question: "Do you provide support and training?",
    answer:
      "Yes. We provide onboarding assistance, documentation, tutorials, and priority support for eligible plans.",
  },
  {
    question: "Can I use FaithCore on multiple devices?",
    answer:
      "Yes. Depending on your plan, you can access FaithCore from multiple computers and mobile devices.",
  },
  {
    question: "Do you support custom church requirements?",
    answer:
      "Enterprise customers can request custom integrations, workflows, and advanced ministry solutions.",
  },
];

// ─── PricingFAQ ───────────────────────────────────────────────────────────────

export default function PricingFAQ() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex rounded-full bg-[#EEF2FB] px-5 py-2 text-sm font-semibold text-[#1B2F5E]">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="mt-6 text-4xl font-extrabold text-[#111827] md:text-5xl">
            Got Questions?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know about FaithCore pricing and plans.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-14 space-y-4">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-8 py-6">
                <span className="text-base font-semibold text-[#111827] lg:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className="shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <div className="border-t px-8 py-6 text-gray-600 leading-7">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Still have questions? Contact our support team and we&apos;ll be happy
            to help.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#1B2F5E] px-8 py-4 font-semibold text-white shadow-md shadow-[#1B2F5E]/30 transition-all duration-200 hover:bg-[#15254A] hover:-translate-y-0.5 active:translate-y-0">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

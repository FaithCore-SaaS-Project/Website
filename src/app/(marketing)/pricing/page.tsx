"use client";

import { useState } from "react";
import type { Metadata } from "next";
import PricingCards from "@/components/pricing/PricingCards";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import PricingBenefits from "@/components/pricing/PricingBenefits";
import PricingCTA from "@/components/pricing/PricingCTA";
import PricingFAQ from "@/components/pricing/PricingFAQ";

// ─── PricingPage ──────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main className="bg-[#f8f9ff] text-[#111827]">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">

            {/* Badge */}
            <div className="inline-flex rounded-full bg-[#ede9fe] px-5 py-2 text-sm font-semibold text-[#5B3DF5]">
              SIMPLE, TRANSPARENT PRICING
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
              Choose the Perfect Plan
              <br />
              for{" "}
              <span className="text-[#5B3DF5]">Your Church</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600">
              Start free and upgrade any time as your ministry grows.
            </p>

            {/* Billing Toggle */}
            <div className="mt-10 flex justify-center">
              <div className="flex rounded-2xl border bg-white p-2 shadow-sm">
                {/* Monthly */}
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`rounded-xl px-8 py-4 text-sm font-semibold transition-all duration-200 ${
                    !isAnnual
                      ? "bg-[#5B3DF5] text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Monthly Billing
                  <div className="text-xs font-normal opacity-80">
                    Pay month to month
                  </div>
                </button>

                {/* Annual */}
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`ml-2 rounded-xl px-8 py-4 text-sm font-semibold transition-all duration-200 ${
                    isAnnual
                      ? "bg-[#5B3DF5] text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Annual Billing
                  <div className="flex items-center justify-center gap-2 text-xs font-normal">
                    Pay once a year
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        isAnnual
                          ? "bg-white/20 text-white"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      Save 20%
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ─────────────────────────────────────── */}
      <PricingCards isAnnual={isAnnual} />

      {/* ── Comparison Table ──────────────────────────────────── */}
      <ComparisonTable />

      {/* ── Benefits Row ──────────────────────────────────────── */}
      <PricingBenefits />

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <PricingCTA />

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <PricingFAQ />

    </main>
  );
}

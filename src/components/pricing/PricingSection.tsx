"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Plan {
  title: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
  active?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLANS: Plan[] = [
  {
    title: "Free",
    monthlyPrice: "$0",
    annualPrice: "$0",
    features: ["100 Members", "1GB Storage", "Basic Features"],
  },
  {
    title: "Standard",
    monthlyPrice: "$69",
    annualPrice: "$59",
    features: ["2000 Members", "10GB Storage", "Priority Support"],
    active: true,
  },
  {
    title: "Premium",
    monthlyPrice: "$119",
    annualPrice: "$99",
    features: ["Unlimited Members", "100GB Storage", "Mobile App Access"],
  },
  {
    title: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: ["Dedicated Server", "AI Reporting", "Custom Integrations"],
  },
];

// ─── PricingCard ──────────────────────────────────────────────────────────────

function PricingCard({
  plan,
  isAnnual,
}: {
  plan: Plan;
  isAnnual: boolean;
}) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div
      className={`rounded-3xl border p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
        plan.active
          ? "border-[#5B3DF5] bg-[#f8f5ff] shadow-xl"
          : "bg-white shadow-sm"
      }`}
    >
      {plan.active && (
        <div className="mb-4 inline-block rounded-full bg-[#5B3DF5] px-3 py-1 text-xs font-bold text-white">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold">{plan.title}</h3>

      <div className="mt-5">
        <span className="text-5xl font-extrabold">{price}</span>
        {price !== "Custom" && price !== "$0" && (
          <span className="text-gray-500 text-sm ml-1">/mo</span>
        )}
      </div>

      {isAnnual && plan.monthlyPrice !== plan.annualPrice && price !== "Custom" && (
        <p className="mt-1 text-xs text-green-600 font-medium">Billed annually</p>
      )}

      <ul className="mt-8 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm">
            <Check size={17} className="shrink-0 text-green-500" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-10 w-full rounded-2xl py-4 font-semibold transition-colors ${
          plan.active
            ? "bg-[#5B3DF5] text-white hover:bg-[#4d31db]"
            : "border border-gray-300 hover:bg-gray-50"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

// ─── PricingSection ───────────────────────────────────────────────────────────

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#5B3DF5]">
            Simple Pricing
          </p>
          <h2 className="mt-4 text-5xl font-bold">Choose Your Plan</h2>
          <p className="mt-5 text-lg text-gray-600">
            Flexible pricing for ministries of every size.
          </p>

          {/* Monthly / Annual toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-1.5 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition-all ${
                !isAnnual
                  ? "bg-[#5B3DF5] text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all ${
                isAnnual
                  ? "bg-[#5B3DF5] text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Annual
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                  isAnnual ? "bg-white/20 text-white" : "bg-green-100 text-green-700"
                }`}
              >
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <PricingCard key={plan.title} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/pricing"
            id="pricing-section-view-all"
            className="group inline-flex items-center gap-2 rounded-2xl bg-[#5B3DF5] px-8 py-4 font-semibold text-white shadow-md shadow-[#5B3DF5]/30 transition-all duration-200 hover:bg-[#4d31db] hover:shadow-lg hover:shadow-[#5B3DF5]/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            View All Plans
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

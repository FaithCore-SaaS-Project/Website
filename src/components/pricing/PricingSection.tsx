"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles, Shield, HelpCircle } from "lucide-react";
import Link from "next/link";

interface Plan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
}

const PLANS: Plan[] = [
  {
    id: "free",
    name: "Starter Community",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Ideal for small home fellowships and new church plants.",
    features: [
      "Up to 50 active members",
      "500MB secure cloud storage",
      "Basic member records & directory",
      "Standard email support",
      "Desktop & Web basic access",
    ],
    cta: "Start Free",
  },
  {
    id: "basic",
    name: "Growth Church",
    monthlyPrice: 3300,
    annualPrice: 2970,
    description: "Great for growing single-campus congregations needing official paperwork.",
    features: [
      "Up to 150 members",
      "2GB secure cloud storage",
      "Official certificates & pastoral letters",
      "Tithe & offering recording",
      "Family relationship grouping",
      "Priority email support",
    ],
    cta: "Get Started",
  },
  {
    id: "standard",
    name: "Pro Ministry",
    popular: true,
    badge: "Most Recommended",
    monthlyPrice: 6300,
    annualPrice: 5670,
    description: "Complete operational suite for established churches with heavy weekly activity.",
    features: [
      "Up to 400 members",
      "5GB high-speed cloud storage",
      "Digital E-Receipts (Instant SMS & Email)",
      "Bank account & budget tracking",
      "Automated attendance analytics",
      "Event bookings & volunteer roster",
      "Multi-user roles with permissions",
    ],
    cta: "Start 14-Day Free Trial",
  },
  {
    id: "premium",
    name: "Enterprise Diocese",
    monthlyPrice: 11000,
    annualPrice: 9900,
    description: "Unlimited power for cathedrals, multi-branch ministries, and regional headquarters.",
    features: [
      "Up to 750+ members (expandable)",
      "15GB dedicated storage with cold backups",
      "Full audit logs & governance compliance",
      "Multi-campus financial reporting",
      "Custom letterhead & certificate watermark",
      "Dedicated 24/7 account manager",
      "Custom API & spreadsheet sync",
    ],
    cta: "Contact Enterprise Sales",
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-slate-50/60 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-3.5 py-1 text-xs font-semibold text-slate-800">
            <Sparkles size={13} className="text-indigo-600" />
            Transparent, Predictable Pricing
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Choose the plan that fits your congregation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No surprise overage fees. Upgrade, downgrade, or cancel anytime. All plans include 14 days free.
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div className="mt-9 inline-flex items-center rounded-xl bg-slate-200/60 p-1.5 border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-lg px-4 py-2 transition-all ${
                !isAnnual
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative rounded-lg px-4 py-2 transition-all ${
                isAnnual
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Annual Billing
              <span className="ml-1.5 rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] font-bold">
                Save 10%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-200 ${
                  plan.popular
                    ? "bg-slate-900 text-white shadow-2xl shadow-indigo-950/20 ring-2 ring-indigo-500 scale-105 z-10"
                    : "bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3.5 py-0.5 text-[11px] font-bold text-white shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-bold ${plan.popular ? "text-white" : "text-slate-900"}`}>
                      {plan.name}
                    </h3>
                  </div>

                  <p className={`mt-2 text-xs leading-relaxed ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {price === 0 ? "Free" : `LKR ${price.toLocaleString()}`}
                    </span>
                    {price > 0 && (
                      <span className={`text-xs ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                        /month
                      </span>
                    )}
                  </div>
                  {isAnnual && price > 0 && (
                    <p className={`text-[11px] mt-1 ${plan.popular ? "text-indigo-300" : "text-emerald-600 font-medium"}`}>
                      Billed annually (LKR {(price * 12).toLocaleString()}/yr)
                    </p>
                  )}

                  {/* Feature Checklist */}
                  <div className={`mt-7 pt-6 border-t ${plan.popular ? "border-slate-800" : "border-slate-100"} space-y-3`}>
                    <p className={`text-[11px] font-bold uppercase tracking-wider ${plan.popular ? "text-indigo-400" : "text-slate-400"}`}>
                      Included capabilities
                    </p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <Check 
                          size={15} 
                          className={`shrink-0 mt-0.5 ${plan.popular ? "text-indigo-400" : "text-indigo-600"}`} 
                        />
                        <span className={plan.popular ? "text-slate-300" : "text-slate-600"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="mt-8 pt-4">
                  <Link
                    href={plan.id === "free" ? "/register" : "/pricing"}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition-all ${
                      plan.popular
                        ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/30"
                        : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee footer note */}
        <div className="mt-14 text-center">
          <p className="inline-flex items-center gap-2 text-xs text-slate-500">
            <Shield size={14} className="text-emerald-500" />
            Every plan includes our 30-day money-back guarantee and automated daily backups.
          </p>
        </div>

      </div>
    </section>
  );
}

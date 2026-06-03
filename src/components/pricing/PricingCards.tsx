"use client";

import { Check } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Plan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  button: string;
  highlighted: boolean;
  badge?: string;
  features: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLANS: Plan[] = [
  {
    name: "Free",
    monthlyPrice: "LKR 0",
    annualPrice: "LKR 0",
    description: "Perfect for small churches getting started.",
    button: "Start Free",
    highlighted: false,
    features: [
      "Up to 100 Members",
      "1 GB Storage",
      "Member Management",
      "Basic Reports",
      "Community Support",
    ],
  },
  {
    name: "Basic",
    monthlyPrice: "LKR 4,900",
    annualPrice: "LKR 3,900",
    description: "Ideal for growing congregations.",
    button: "Choose Basic",
    highlighted: false,
    features: [
      "Up to 500 Members",
      "5 GB Storage",
      "Family Management",
      "Finance Tracking",
      "Email Support",
    ],
  },
  {
    name: "Standard",
    monthlyPrice: "LKR 9,900",
    annualPrice: "LKR 7,900",
    description: "Most popular plan for active ministries.",
    button: "Choose Standard",
    highlighted: true,
    badge: "MOST POPULAR",
    features: [
      "Up to 2,000 Members",
      "10 GB Storage",
      "Finance Module",
      "Certificates & Letters",
      "Events Management",
      "Priority Support",
      "AI Reports",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: "LKR 19,900",
    annualPrice: "LKR 15,900",
    description: "Everything your ministry needs.",
    button: "Choose Premium",
    highlighted: false,
    features: [
      "Unlimited Members",
      "100 GB Storage",
      "Desktop Application",
      "Mobile Application",
      "Advanced Analytics",
      "Dedicated Support",
      "Custom Branding",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    description: "For large ministries and organizations.",
    button: "Contact Sales",
    highlighted: false,
    features: [
      "Unlimited Everything",
      "Dedicated Infrastructure",
      "Custom Integrations",
      "Account Manager",
      "On-Premise Options",
      "SLA Guarantee",
      "Priority Development",
    ],
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
  const isCustom = price === "Custom";
  const isFree = plan.monthlyPrice === "LKR 0";

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[32px] border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        plan.highlighted ? "border-[#5B3DF5] ring-2 ring-[#5B3DF5]" : ""
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute right-4 top-4 rounded-full bg-[#5B3DF5] px-3 py-1 text-[10px] font-bold text-white">
          {plan.badge}
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-2xl font-bold text-[#111827]">{plan.name}</h3>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-500">{plan.description}</p>

      {/* Price */}
      <div className="mt-8">
        <span className="text-4xl font-extrabold text-[#111827]">{price}</span>
        {!isCustom && !isFree && (
          <span className="ml-2 text-sm text-gray-500">/month</span>
        )}
      </div>

      {/* Annual savings label */}
      {isAnnual && !isCustom && !isFree && (
        <p className="mt-1 text-xs font-medium text-green-600">
          Billed annually — save 20%
        </p>
      )}

      {/* CTA Button */}
      <button
        className={`mt-8 w-full rounded-2xl py-4 font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
          plan.highlighted
            ? "bg-[#5B3DF5] text-white shadow-md shadow-[#5B3DF5]/30 hover:bg-[#4c30d9]"
            : "border border-gray-300 hover:bg-gray-50"
        }`}
      >
        {plan.button}
      </button>

      {/* Divider */}
      <div className="my-8 border-t" />

      {/* Features */}
      <ul className="flex-1 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check size={18} className="mt-0.5 shrink-0 text-green-500" />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── PricingCards ─────────────────────────────────────────────────────────────

export default function PricingCards({ isAnnual }: { isAnnual: boolean }) {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-5">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>
      </div>
    </section>
  );
}

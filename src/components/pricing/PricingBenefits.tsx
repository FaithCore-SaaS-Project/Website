import { CalendarDays, ShieldCheck, RefreshCcw, XCircle } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: CalendarDays,
    title: "14-Day Free Trial",
    description: "No credit card required",
  },
  {
    icon: XCircle,
    title: "Cancel Anytime",
    description: "No long-term contracts",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Your data is safe with us",
  },
  {
    icon: RefreshCcw,
    title: "Regular Updates",
    description: "New features every month",
  },
];

// ─── PricingBenefits ──────────────────────────────────────────────────────────

export default function PricingBenefits() {
  return (
    <section className="pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 rounded-[24px] border bg-white p-6 shadow-sm md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-[#f8f9ff]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f3f0ff] text-[#5B3DF5]">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827]">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

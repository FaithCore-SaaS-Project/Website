import { CalendarDays, Phone, Church } from "lucide-react";

// ─── PricingCTA ───────────────────────────────────────────────────────────────

export default function PricingCTA() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[30px] bg-gradient-to-r from-[#0f0c5f] via-[#3b1fcf] to-[#6d28ff] p-10 text-white shadow-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}
            <div className="flex items-center gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
                <Church size={40} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-snug lg:text-3xl">
                  Still not sure which plan is right for you?
                </h2>
                <p className="mt-3 text-base text-purple-200">
                  We&apos;re here to help you find the perfect solution for your
                  church&apos;s needs.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-4 lg:shrink-0">
              <button className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-[#1B2F5E] transition-all duration-200 hover:bg-gray-50 hover:-translate-y-0.5 active:translate-y-0">
                <CalendarDays size={18} />
                Schedule a Demo
              </button>
              <button className="group inline-flex items-center gap-3 rounded-2xl border border-white/30 px-7 py-4 font-semibold text-white backdrop-blur transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0">
                <Phone size={18} />
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

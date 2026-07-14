import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

// ─── FeatureMini ─────────────────────────────────────────────────────────────

function FeatureMini({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FB] text-[#1B2F5E]">
        <Check size={18} />
      </div>
      <span className="font-medium text-gray-700">{text}</span>
    </div>
  );
}

// ─── HeroSection ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
        {/* ── Left: Copy ─────────────────────────────────── */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full bg-[#EEF2FB] px-4 py-2 text-sm font-medium text-[#1B2F5E]">
            ✨ All-In-One Church Management Platform
          </div>

          <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
            Manage Your Church.
            <br />
            Empower Ministry.
            <br />
            <span className="text-[#1B2F5E]">Impact More Lives.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            FaithCore helps churches streamline members, finances, certificates,
            events, and communications — all in one secure ecosystem.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="flex items-center gap-2 rounded-2xl bg-[#1B2F5E] px-7 py-4 font-semibold text-white hover:bg-[#15254A] transition-colors">
              Start Free Trial
              <ArrowRight size={18} />
            </button>
            <button className="rounded-2xl border border-gray-300 bg-white px-7 py-4 font-semibold hover:bg-gray-100 transition-colors">
              View Demo
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-10">
            <FeatureMini text="14-Day Free Trial" />
            <FeatureMini text="Easy To Use" />
            <FeatureMini text="Secure & Reliable" />
          </div>
        </div>

        {/* ── Right: Screenshot ───────────────────────────── */}
        <div className="relative">
          <div className="rounded-[32px] border bg-white p-5 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
              alt="FaithCore Dashboard Preview"
              width={1400}
              height={900}
              className="rounded-3xl w-full h-auto"
            />
          </div>
          {/* Decorative orbs */}
          <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-[#1B2F5E]/20 blur-3xl pointer-events-none" />
          <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

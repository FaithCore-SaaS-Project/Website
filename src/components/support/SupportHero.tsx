"use client";

// ─── SupportHero ──────────────────────────────────────────────────────────────

import { Search } from "lucide-react";

export default function SupportHero() {
  return (
    <section className="bg-gradient-to-br from-[#f7f5ff] to-white border-b py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="inline-flex rounded-full bg-[#EEF2FB] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1B2F5E]">
          Support Center
        </span>
        <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
          How can we{" "}
          <span className="text-[#1B2F5E]">help you?</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
          Find answers, solve issues and get the support you need for FaithCore.
        </p>

        {/* Search */}
        <div className="mt-10 flex max-w-2xl overflow-hidden rounded-2xl border bg-white shadow-lg shadow-gray-200/60">
          <input
            type="text"
            placeholder="Search for articles, topics or keywords..."
            className="flex-1 px-6 py-5 text-sm text-gray-800 outline-none placeholder-gray-400"
          />
          <button
            aria-label="Search"
            className="flex items-center gap-2 bg-[#1B2F5E] px-8 font-semibold text-white hover:bg-[#15254A] transition-colors text-sm"
          >
            <Search size={18} />
            Search
          </button>
        </div>

        {/* Quick Topic Pills */}
        <div className="mt-6 flex flex-wrap gap-3">
          {["Add Members", "Events", "Donations", "Reports", "Billing"].map(
            (item) => (
              <button
                key={item}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm hover:border-[#1B2F5E]/40 hover:text-[#1B2F5E] transition-colors"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}

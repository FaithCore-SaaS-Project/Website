"use client";

// ─── BlogHero ─────────────────────────────────────────────────────────────────

import { Search } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="bg-gradient-to-br from-[#f7f5ff] to-white border-b py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="inline-flex rounded-full bg-[#EEF2FB] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1B2F5E]">
          Blog &amp; Updates
        </span>
        <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
          Stay Informed.
          <br />
          <span className="text-[#1B2F5E]">Stay Ahead.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
          Latest product updates, news and tutorials to help you get the most
          out of FaithCore.
        </p>
        <div className="mt-10 flex max-w-xl overflow-hidden rounded-2xl border bg-white shadow-sm">
          <input
            type="text"
            className="flex-1 px-6 py-5 text-sm outline-none placeholder-gray-400"
            placeholder="Search articles..."
          />
          <button
            aria-label="Search"
            className="bg-[#1B2F5E] px-8 text-white hover:bg-[#15254A] transition-colors"
          >
            <Search size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

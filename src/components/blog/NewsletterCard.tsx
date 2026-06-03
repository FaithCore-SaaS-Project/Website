"use client";

// ─── NewsletterCard ───────────────────────────────────────────────────────────

import { Mail } from "lucide-react";

export default function NewsletterCard() {
  return (
    <div className="rounded-[30px] border bg-white p-8 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ede9fe] text-[#5B3DF5]">
        <Mail size={24} />
      </div>
      <h3 className="mt-6 text-2xl font-bold text-gray-900">
        Never Miss an Update
      </h3>
      <p className="mt-4 text-sm text-gray-500 leading-relaxed">
        Subscribe to receive the latest updates, tips and tutorials directly to
        your inbox.
      </p>
      <input
        type="email"
        placeholder="Enter your email"
        className="mt-6 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-[#5B3DF5] focus:ring-2 focus:ring-[#5B3DF5]/20 transition"
      />
      <button className="mt-4 w-full rounded-xl bg-[#5B3DF5] py-3 text-sm font-semibold text-white hover:bg-[#4d31db] transition-colors">
        Subscribe
      </button>
    </div>
  );
}

"use client";

// ─── TicketBanner ─────────────────────────────────────────────────────────────

import { TicketIcon } from "lucide-react";

export default function TicketBanner() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[35px] border bg-[#f5f2ff] p-10 md:p-14">
          {/* Decorative blob */}
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#1B2F5E]/10 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm text-[#1B2F5E]">
                <TicketIcon size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                  Still need help?
                </h2>
                <p className="mt-3 max-w-lg text-gray-600 leading-relaxed">
                  Can&apos;t find what you&apos;re looking for? Create a support
                  ticket and our team will get back to you within one business day.
                </p>
              </div>
            </div>

            <button className="shrink-0 rounded-2xl bg-[#1B2F5E] px-10 py-4 font-semibold text-white shadow-md shadow-[#1B2F5E]/30 hover:bg-[#15254A] transition-all hover:-translate-y-0.5 active:translate-y-0">
              Create New Ticket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

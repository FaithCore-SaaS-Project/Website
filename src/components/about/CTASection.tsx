"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="pb-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-[#5B3DF5] to-[#8066ff] p-10 md:p-14 text-white shadow-xl shadow-[#5B3DF5]/20">
          
          {/* Abstract background shapes */}
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-2xl" />

          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Let&apos;s Build a Stronger Church Together
              </h2>
              <p className="mt-4 text-base text-white/80 leading-relaxed">
                Join thousands of ministries already using FaithCore to securely streamline membership, manage church accounts, generate custom certificates, and coordinate impact.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 shrink-0 justify-center">
              <Link
                href="/#contact"
                className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white hover:bg-white/20 hover:border-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Contact Us
              </Link>
              <Link
                href="/register"
                className="rounded-2xl bg-white px-8 py-4 font-semibold text-[#5B3DF5] shadow-lg shadow-black/5 hover:bg-gray-50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

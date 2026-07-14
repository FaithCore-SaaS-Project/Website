"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-[#f7f5ff] to-white border-b py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex rounded-full bg-[#EEF2FB] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1B2F5E]">
            About Us
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Empowering Churches.
            <br />
            <span className="text-[#1B2F5E]">
              Transforming Ministries.
            </span>
          </h1>
          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
            FaithCore was built with one singular purpose — providing modern, secure, and intuitive tools that help churches manage their operations smoothly, so they can focus on their primary mission of ministry and impact.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-[#1B2F5E] px-8 py-4 text-white font-semibold shadow-md shadow-[#1B2F5E]/30 hover:bg-[#15254A] hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0">
              Watch Our Story
            </button>
            <Link
              href="/#contact"
              className="rounded-2xl border border-gray-300 bg-white px-8 py-4 text-gray-700 font-semibold hover:bg-gray-50 transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              Contact Sales
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2F5E]/10 to-transparent rounded-[32px] -rotate-2 scale-105" />
          <img
            src="/images/about-church.png"
            alt="FaithCore Church Ministry"
            className="relative w-full rounded-[32px] shadow-2xl border border-white/50 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

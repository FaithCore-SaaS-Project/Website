"use client";

import Link from "next/link";

export default function StorySection() {
  return (
    <section className="py-20 bg-white/30 border-t border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex rounded-full bg-[#ede9fe] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#5B3DF5]">
            Our Story
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Built by People
            <br />
            Who Understand Ministry
          </h2>
          <p className="mt-8 text-base leading-relaxed text-gray-600">
            FaithCore was founded by church leaders, custom developers, and active ministry volunteers who wanted to build a better solution for modern churches. We experienced the friction of fragmented software tools and decided to design an integrated ecosystem.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            From directories to donations, everything is built to respect how churches actually operate, ensuring that administration stays out of the way of your spiritual calling.
          </p>
          <div className="mt-10">
            <Link
              href="/register"
              className="inline-flex rounded-2xl border border-[#5B3DF5] px-8 py-4 text-[#5B3DF5] font-semibold hover:bg-[#5B3DF5] hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              Learn More About Our Journey
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8066ff]/10 to-transparent rounded-[32px] rotate-2 scale-105" />
          <img
            src="/images/story-image.jpg"
            alt="FaithCore Journey & Development"
            className="relative rounded-[32px] shadow-2xl border border-white/50 object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}

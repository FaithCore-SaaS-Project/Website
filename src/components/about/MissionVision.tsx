"use client";

import {
  Eye,
  Target,
} from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Vision Card */}
          <div className="group rounded-[32px] border border-gray-200 bg-white p-8 md:p-12 shadow-sm transition-all hover:shadow-xl hover:border-[#5B3DF5]/30 duration-300">
            <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
              Future Outlook
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Our Vision
            </h2>
            <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-md">
              To become the world&apos;s leading church management platform, empowering congregations and helping local leaders connect communities across every boundary.
            </p>
            <div className="mt-10 inline-flex rounded-2xl bg-[#ede9fe]/50 p-6 text-[#5B3DF5] transition-transform duration-300 group-hover:scale-110">
              <Eye size={48} />
            </div>
          </div>

          {/* Mission Card */}
          <div className="group rounded-[32px] border border-gray-200 bg-white p-8 md:p-12 shadow-sm transition-all hover:shadow-xl hover:border-[#5B3DF5]/30 duration-300">
            <span className="inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
              Daily Drive
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-md">
              Simplifying church administration through innovative, secure, and intuitive technology so ministries can focus on spiritual growth and human connection.
            </p>
            <div className="mt-10 inline-flex rounded-2xl bg-[#ede9fe]/50 p-6 text-[#5B3DF5] transition-transform duration-300 group-hover:scale-110">
              <Target size={48} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

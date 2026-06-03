"use client";

import {
  Church,
  Users,
  Globe,
  Calendar,
} from "lucide-react";

const stats = [
  {
    icon: Church,
    value: "1,500+",
    label: "Churches Worldwide",
  },
  {
    icon: Users,
    value: "250,000+",
    label: "Active Users",
  },
  {
    icon: Users,
    value: "10M+",
    label: "Members Managed",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries",
  },
  {
    icon: Calendar,
    value: "12+",
    label: "Years of Impact",
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-white/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 rounded-[32px] border border-gray-100 bg-white shadow-xl shadow-gray-100/40 overflow-hidden divide-y divide-x md:divide-y-0 divide-gray-100">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 text-center transition-all hover:bg-gray-50/50 group"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ede9fe] text-[#5B3DF5] transition-transform duration-300 group-hover:scale-110">
                <item.icon size={26} />
              </div>
              <h3 className="mt-5 text-3xl font-extrabold text-gray-900 md:text-4xl">
                {item.value}
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

// ─── BlogTabs ─────────────────────────────────────────────────────────────────

import { Bell, Megaphone, BookOpen } from "lucide-react";

const tabs = [
  {
    icon: Bell,
    label: "System Updates",
    description: "Platform improvements and release notes.",
  },
  {
    icon: Megaphone,
    label: "News & Announcements",
    description: "FaithCore milestones and community news.",
  },
  {
    icon: BookOpen,
    label: "Tutorials & Guides",
    description: "Step-by-step help to get the most out of your system.",
  },
];

export default function BlogTabs() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 lg:grid-cols-3">
          {tabs.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="group cursor-pointer rounded-3xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ede9fe] text-[#5B3DF5] group-hover:bg-[#5B3DF5] group-hover:text-white transition-colors">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{label}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

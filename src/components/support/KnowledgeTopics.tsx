"use client";

// ─── KnowledgeTopics ──────────────────────────────────────────────────────────

import {
  Rocket,
  Users,
  DollarSign,
  Calendar,
  MessageSquare,
  BarChart3,
  Settings,
  Puzzle,
} from "lucide-react";

const topics = [
  { title: "Getting Started", icon: Rocket },
  { title: "Members", icon: Users },
  { title: "Finance", icon: DollarSign },
  { title: "Events", icon: Calendar },
  { title: "Communications", icon: MessageSquare },
  { title: "Reports", icon: BarChart3 },
  { title: "Settings", icon: Settings },
  { title: "Integrations", icon: Puzzle },
];

export default function KnowledgeTopics() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Left — Heading + CTA */}
          <div className="flex flex-col justify-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#1B2F5E]">
              Knowledge Base
            </p>
            <h2 className="mt-4 text-4xl font-extrabold text-gray-900 leading-tight md:text-5xl">
              Find Help by Topic
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              Browse our knowledge base organised by topic to quickly find
              what you&apos;re looking for.
            </p>
            <button className="mt-8 w-fit rounded-2xl bg-[#1B2F5E] px-8 py-4 font-semibold text-white shadow-md shadow-[#1B2F5E]/30 hover:bg-[#15254A] transition-all hover:-translate-y-0.5 active:translate-y-0">
              View All Articles
            </button>
          </div>

          {/* Right — Topic Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {topics.map(({ title, icon: Icon }) => (
              <button
                key={title}
                className="group flex flex-col items-center rounded-2xl border bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:border-[#1B2F5E]/30 hover:-translate-y-0.5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF2FB] text-[#1B2F5E] transition-colors duration-300 group-hover:bg-[#1B2F5E] group-hover:text-white">
                  <Icon size={26} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-800 leading-snug">
                  {title}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

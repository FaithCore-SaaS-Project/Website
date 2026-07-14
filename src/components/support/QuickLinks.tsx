"use client";

// ─── QuickLinks ───────────────────────────────────────────────────────────────

import { BookOpen, Ticket, CircleHelp } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Browse hundreds of step-by-step articles for every feature.",
    button: "Browse Articles",
    href: "#",
  },
  {
    icon: Ticket,
    title: "My Tickets",
    description: "Track the status of your open and resolved support requests.",
    button: "View My Tickets",
    href: "#",
  },
  {
    icon: CircleHelp,
    title: "FAQ",
    description: "Quick answers to the most commonly asked questions.",
    button: "View FAQ",
    href: "#faq",
  },
];

export default function QuickLinks() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description, button, href }) => (
            <a
              key={title}
              href={href}
              className="group flex flex-col rounded-[30px] border bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 hover:border-[#1B2F5E]/20"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF2FB] text-[#1B2F5E] transition-colors duration-300 group-hover:bg-[#1B2F5E] group-hover:text-white">
                <Icon size={30} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">{title}</h3>
              <p className="mt-3 flex-1 text-sm text-gray-500 leading-relaxed">
                {description}
              </p>

              <span className="mt-6 font-semibold text-[#1B2F5E] group-hover:underline transition-all">
                {button} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

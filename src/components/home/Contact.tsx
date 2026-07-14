"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// ─── Contact ──────────────────────────────────────────────────────────────────

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to real API / email service
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#f8f9ff] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#1B2F5E]">
            Contact Us
          </p>
          <h2 className="mt-4 text-5xl font-bold">We&apos;d Love To Hear From You</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
            Have a question about FaithCore? Our team is ready to help.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* ── Contact Form ────────────────────────────── */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border bg-white p-10 shadow-sm text-center min-h-[340px]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl">
                ✔️
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
              <p className="text-gray-500 max-w-xs">
                Thanks for reaching out. Our team will get back to you within 1
                business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 rounded-xl bg-[#1B2F5E] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#15254A] transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-3xl border bg-white p-10 shadow-sm"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    required
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#1B2F5E] focus:ring-2 focus:ring-[#1B2F5E]/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    required
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#1B2F5E] focus:ring-2 focus:ring-[#1B2F5E]/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="john@church.org"
                  required
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#1B2F5E] focus:ring-2 focus:ring-[#1B2F5E]/20 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Church Name</label>
                <input
                  type="text"
                  placeholder="Grace Community Church"
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#1B2F5E] focus:ring-2 focus:ring-[#1B2F5E]/20 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help..."
                  required
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#1B2F5E] focus:ring-2 focus:ring-[#1B2F5E]/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="rounded-2xl bg-[#1B2F5E] py-4 font-semibold text-white hover:bg-[#15254A] transition-colors"
              >
                Send Message
              </button>
            </form>
          )}

          {/* ── Contact Info ────────────────────────────── */}
          <div className="flex flex-col justify-center gap-8">
            {[
              {
                icon: <Mail size={22} />,
                label: "Email",
                value: "hello@faithcore.app",
                href: "mailto:hello@faithcore.app",
              },
              {
                icon: <Phone size={22} />,
                label: "Phone",
                value: "+1 (800) 555-1234",
                href: "tel:+18005551234",
              },
              {
                icon: <MapPin size={22} />,
                label: "Location",
                value: "Available globally — fully remote.",
                href: "#",
              },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-5 rounded-2xl border bg-white p-6 shadow-sm hover:border-[#1B2F5E]/30 hover:shadow-md transition-all"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2FB] text-[#1B2F5E]">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {label}
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

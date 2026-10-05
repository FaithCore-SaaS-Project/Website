"use client";

import { useState } from "react";
import { Menu, X, Download, Globe } from "lucide-react";
import Link from "next/link";

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* ── Logo ───────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#C9A84C] overflow-hidden p-1">
            <img
              src="/images/logo.jpg"
              alt="FaithCore Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900 leading-tight">FaithCore</p>
            <p className="text-xs text-gray-500">Church Management System</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="/" className="font-medium hover:text-[#1B2F5E] transition-colors">
            Home
          </a>
          <a href="/features" className="font-medium hover:text-[#1B2F5E] transition-colors">
            Features
          </a>
          <a href="/pricing" className="font-medium hover:text-[#1B2F5E] transition-colors">
            Pricing
          </a>
          <a href="/#about" className="font-medium hover:text-[#1B2F5E] transition-colors">
            About
          </a>
          <a href="/#support" className="font-medium hover:text-[#1B2F5E] transition-colors">
            Support
          </a>
          <a href="/#contact" className="font-medium hover:text-[#1B2F5E] transition-colors">
            Contact
          </a>
        </nav>

        {/* ── Desktop Actions ─────────────────────────────── */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://app.faithcore.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-[#1B2F5E] font-semibold px-4 py-2.5 transition-all text-center flex items-center gap-2 text-sm shadow-sm"
          >
            <Globe size={16} className="text-[#5B3DF5]" />
            Web Portal
          </a>
          <Link
            href="/features#download"
            className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold shadow-md shadow-indigo-100/50 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 px-5 py-2.5 transition-all duration-200 text-center text-sm"
          >
            <Download size={16} />
            Download App
          </Link>
          <Link
            href="/pricing"
            className="rounded-xl bg-[#1B2F5E] px-5 py-2.5 font-medium text-white hover:bg-[#15254A] transition-colors text-center text-sm"
          >
            Get Started
          </Link>
        </div>

        {/* ── Mobile Toggle ───────────────────────────────── */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden text-gray-700 hover:text-[#1B2F5E] transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu Drawer ───────────────────────────── */}
      {mobileOpen && (
        <nav className="lg:hidden border-t bg-white px-6 py-6 flex flex-col gap-5 shadow-lg">
          <a
            href="/"
            onClick={() => setMobileOpen(false)}
            className="font-medium text-gray-700 hover:text-[#1B2F5E] transition-colors"
          >
            Home
          </a>
          <a
            href="/features"
            onClick={() => setMobileOpen(false)}
            className="font-medium text-gray-700 hover:text-[#1B2F5E] transition-colors"
          >
            Features
          </a>
          <a
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="font-medium text-gray-700 hover:text-[#1B2F5E] transition-colors"
          >
            Pricing
          </a>
          <a
            href="/#about"
            onClick={() => setMobileOpen(false)}
            className="font-medium text-gray-700 hover:text-[#1B2F5E] transition-colors"
          >
            About
          </a>
          <a
            href="/#support"
            onClick={() => setMobileOpen(false)}
            className="font-medium text-gray-700 hover:text-[#1B2F5E] transition-colors"
          >
            Support
          </a>
          <a
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="font-medium text-gray-700 hover:text-[#1B2F5E] transition-colors"
          >
            Contact
          </a>
          <div className="mt-2 flex flex-col gap-3 border-t pt-5">
            <a
              href="https://app.faithcore.org"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-[#1B2F5E] font-semibold px-5 py-3 transition-colors text-center flex items-center justify-center gap-2 text-sm shadow-sm"
            >
              <Globe size={18} className="text-[#5B3DF5]" />
              Web Portal (iPad / Web)
            </a>
            <Link
              href="/features#download"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold shadow-md flex items-center justify-center gap-2 px-5 py-3 transition-colors text-center text-sm"
            >
              <Download size={18} />
              Download App
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl bg-[#1B2F5E] px-5 py-3 font-medium text-white hover:bg-[#15254A] transition-colors text-center text-sm"
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import { Menu, X, Download, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* ── Brand Logo ───────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 shadow-sm overflow-hidden p-1.5 transition-transform group-hover:scale-105">
            <img
              src="/images/logo.jpg"
              alt="FaithCore Logo"
              className="h-full w-full object-contain rounded-md"
            />
          </div>
          <div>
            <span className="text-lg font-extrabold tracking-tight text-slate-900 leading-tight block">
              FaithCore
            </span>
            <span className="text-[10px] font-medium tracking-wide uppercase text-indigo-600 block">
              Church Operating Suite
            </span>
          </div>
        </Link>

        {/* ── Desktop Navigation Links ─────────────────────────── */}
        <nav className="hidden items-center gap-7 lg:flex text-xs font-semibold text-slate-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Overview
          </Link>
          <Link href="/features" className="hover:text-indigo-600 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-indigo-600 transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">
            About Us
          </Link>
          <Link href="/#support" className="hover:text-indigo-600 transition-colors">
            Support
          </Link>
          <Link href="/#contact" className="hover:text-indigo-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* ── Desktop Action CTAs ─────────────────────────────── */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://app.faithcore.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all"
          >
            <Globe size={14} className="text-indigo-600" />
            Web Portal
          </a>

          <Link
            href="/features#download"
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-all"
          >
            <Download size={14} />
            Desktop App
          </Link>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-indigo-600/30 hover:bg-indigo-500 transition-all"
          >
            Get Started
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* ── Mobile Menu Toggle ──────────────────────────────── */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 lg:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* ── Mobile Nav Dropdown ─────────────────────────────── */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-6 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-semibold text-slate-700">
            <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-indigo-600">
              Overview
            </Link>
            <Link href="/features" onClick={() => setMobileOpen(false)} className="hover:text-indigo-600">
              Features
            </Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="hover:text-indigo-600">
              Pricing
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-indigo-600">
              About Us
            </Link>
            <Link href="/#support" onClick={() => setMobileOpen(false)} className="hover:text-indigo-600">
              Support
            </Link>
            <Link href="/#contact" onClick={() => setMobileOpen(false)} className="hover:text-indigo-600">
              Contact
            </Link>
          </nav>

          <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-slate-100">
            <a
              href="https://app.faithcore.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-slate-700"
            >
              <Globe size={15} className="text-indigo-600" />
              Web Portal Login
            </a>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/30"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

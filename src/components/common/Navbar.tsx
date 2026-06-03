"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* ── Logo ───────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5B3DF5] text-white font-bold text-xl">
            FC
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900">FaithCore</p>
            <p className="text-sm text-gray-500">Church Management System</p>
          </div>
        </div>

        {/* ── Desktop Nav ─────────────────────────────────── */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a href="/" className="font-medium hover:text-[#5B3DF5] transition-colors">
            Home
          </a>
          <a href="/features" className="font-medium hover:text-[#5B3DF5] transition-colors">
            Features
          </a>
          <a href="/pricing" className="font-medium hover:text-[#5B3DF5] transition-colors">
            Pricing
          </a>
          <a href="/#about" className="font-medium hover:text-[#5B3DF5] transition-colors">
            About
          </a>
          <a href="/#contact" className="font-medium hover:text-[#5B3DF5] transition-colors">
            Contact
          </a>
        </nav>

        {/* ── Desktop Actions ─────────────────────────────── */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/login"
            className="rounded-xl border border-gray-300 px-5 py-2.5 font-medium hover:bg-gray-100 transition-colors text-center"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-xl bg-[#5B3DF5] px-5 py-2.5 font-medium text-white hover:bg-[#4d31db] transition-colors text-center"
          >
            Get Started
          </Link>
        </div>

        {/* ── Mobile Toggle ───────────────────────────────── */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden text-gray-700 hover:text-[#5B3DF5] transition-colors"
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
            className="font-medium text-gray-700 hover:text-[#5B3DF5] transition-colors"
          >
            Home
          </a>
          <a
            href="/features"
            onClick={() => setMobileOpen(false)}
            className="font-medium text-gray-700 hover:text-[#5B3DF5] transition-colors"
          >
            Features
          </a>
          <a
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="font-medium text-gray-700 hover:text-[#5B3DF5] transition-colors"
          >
            Pricing
          </a>
          <a
            href="/#about"
            onClick={() => setMobileOpen(false)}
            className="font-medium text-gray-700 hover:text-[#5B3DF5] transition-colors"
          >
            About
          </a>
          <a
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="font-medium text-gray-700 hover:text-[#5B3DF5] transition-colors"
          >
            Contact
          </a>
          <div className="mt-2 flex flex-col gap-3 border-t pt-5">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-gray-300 px-5 py-3 font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl bg-[#5B3DF5] px-5 py-3 font-medium text-white hover:bg-[#4d31db] transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

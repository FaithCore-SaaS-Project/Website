// ─── Footer ───────────────────────────────────────────────────────────────────

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d2b] py-16 text-gray-400">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Main Grid ──────────────────────────────────────── */}
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr_2fr]">

          {/* ── Brand ──────────────────────────────────────────── */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5B3DF5]">
                {/* Church / house icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-6 w-6"
                >
                  <path d="M11 2v2H9v2h2v1.09A7.001 7.001 0 0 0 5 14v6h14v-6a7.001 7.001 0 0 0-6-6.91V8h2V6h-2V2h-2zm1 8a5 5 0 1 1 0 10A5 5 0 0 1 12 10z" />
                  <path d="M10 2h4v2h-4zM10 4h1v4h2V4h1v2h-4z" />
                </svg>
              </div>
              <div>
                <p className="text-base font-bold text-white leading-tight">Kingdom Connect</p>
                <p className="text-xs text-gray-400">Church Management System</p>
              </div>
            </div>

            {/* Tagline */}
            <p className="mt-5 text-sm leading-7">
              Empowering churches to manage their ministry, connect with people,
              and impact more lives through technology.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:text-white hover:bg-white/10"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:text-white hover:bg-white/10"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:text-white hover:bg-white/10"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:text-white hover:bg-white/10"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* ── Product ────────────────────────────────────────── */}
          <div>
            <h3 className="font-semibold text-white">Product</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "Download", href: "#" },
                { label: "Updates", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Resources ──────────────────────────────────────── */}
          <div>
            <h3 className="font-semibold text-white">Resources</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: "Blog / Updates", href: "/blog", highlight: true },
                { label: "Help Center", href: "#" },
                { label: "Guides", href: "#" },
                { label: "Videos", href: "#" },
                { label: "System Requirements", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      link.highlight
                        ? "text-[#7c5cff] hover:text-[#a084ff]"
                        : "hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ────────────────────────────────────────── */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Stay Connected ─────────────────────────────────── */}
          <div>
            <h3 className="font-semibold text-white">Stay Connected</h3>
            <p className="mt-5 text-sm leading-6">
              Get the latest updates and tips for your ministry.
            </p>
            <div className="mt-4 flex overflow-hidden rounded-lg border border-white/10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 outline-none"
              />
              <button className="bg-[#5B3DF5] px-5 text-sm font-medium text-white whitespace-nowrap hover:bg-[#4d31db] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────────── */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm">
          © {new Date().getFullYear()} Kingdom Connect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

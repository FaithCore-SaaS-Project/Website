import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-400 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Main Grid ──────────────────────────────────────── */}
        <div className="grid gap-12 lg:grid-cols-5">

          {/* ── Brand column ──────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 p-1">
                <img
                  src="/images/logo.jpg"
                  alt="FaithCore Logo"
                  className="h-full w-full object-contain rounded-md"
                />
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight">FaithCore</span>
                <span className="text-[10px] block font-medium uppercase tracking-wider text-indigo-400">
                  Church Operating System
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Equipping ministries with dependable software for member engagement, transparent accounting, official letters, and global fellowship growth.
            </p>

            <div className="pt-2 flex gap-3 text-slate-400">
              <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors">
                <FaFacebookF size={13} />
              </a>
              <a href="#" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors">
                <FaTwitter size={13} />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors">
                <FaLinkedinIn size={13} />
              </a>
              <a href="#" aria-label="YouTube" className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors">
                <FaYoutube size={13} />
              </a>
            </div>
          </div>

          {/* ── Product links ─────────────────────────────────── */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Product</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Features & Architecture
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link href="/features#download" className="hover:text-white transition-colors">
                  Desktop Pro (Windows/Mac)
                </Link>
              </li>
              <li>
                <a href="https://app.faithcore.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Web Portal Kiosk
                </a>
              </li>
            </ul>
          </div>

          {/* ── Ministry Resources ─────────────────────────────── */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Resources</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Ministry Mission
                </Link>
              </li>
              <li>
                <Link href="/#support" className="hover:text-white transition-colors">
                  Knowledge Base & Docs
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">
                  Helpdesk & Live Ticket
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Compliance & Legal ─────────────────────────────── */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Security & Legal</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy (GDPR)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-white transition-colors">
                  Refund & Guarantee Policy
                </Link>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 border border-slate-800 px-2.5 py-1 text-[10px] text-emerald-400">
                  <ShieldCheck size={13} /> 256-Bit SSL Encrypted
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ──────────────────────────────────────── */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} FaithCore Technologies. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with devotion for church administrative excellence.
          </p>
        </div>

      </div>
    </footer>
  );
}

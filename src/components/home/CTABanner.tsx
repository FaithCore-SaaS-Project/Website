import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Laptop, Smartphone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 text-white">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-blue-500/15 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-950/80 border border-indigo-700/50 px-3.5 py-1 text-xs font-semibold text-indigo-300">
              <Shield size={14} />
              Setup Takes Less Than 2 Minutes
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl leading-tight">
              Ready to modernise your church administration?
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Empower your pastors, treasurers, and staff with the tools they need to lead with clarity and focus on ministry growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2.5 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all"
              >
                Start 14-Day Free Trial
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://app.faithcore.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-700 transition-all"
              >
                Open Cloud Web Portal
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400" /> Cancel anytime
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400" /> Instant CSV Data Import
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400" /> Free Onboarding Assistance
              </span>
            </div>
          </div>

          {/* Quick Platform Access Box */}
          <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Laptop size={18} className="text-indigo-400" /> Available across your preferred platforms
            </h3>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4 rounded-xl bg-slate-900/60 p-4 border border-slate-700/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                  <Laptop size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">FaithCore Pro Desktop (Windows & Mac)</h4>
                  <p className="text-xs text-slate-400 mt-1">Full offline database synchronization, fast native keyboard shortcuts, and automated local daily backup.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-slate-900/60 p-4 border border-slate-700/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">FaithCore Web & Mobile Cloud</h4>
                  <p className="text-xs text-slate-400 mt-1">Instant iPad kiosk check-in, pastor mobile dashboard, and church member portal accessible from any browser.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

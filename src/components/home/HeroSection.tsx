import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  CheckCircle2,
  ChevronRight,
  Layers,
  FileCheck2
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 pt-10 pb-20 lg:pt-16 lg:pb-32">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-tr from-blue-400/15 via-indigo-400/20 to-purple-400/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center">
          <Link
            href="/features"
            className="group inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md transition-all hover:border-indigo-400 hover:shadow-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="font-medium text-indigo-600">What&apos;s New</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-700">Next-Gen Church Management Suite 2.0</span>
            <ChevronRight size={14} className="text-slate-400 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.12]">
            The intelligent operating system for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              modern church ministry.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Effortlessly coordinate members, oversee transparent finances, issue official certificates, and automate communications — all built into a bank-grade desktop & web ecosystem.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Free 14-Day Trial
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://app.faithcore.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Explore Live Demo
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-500" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-500" /> Instant cloud synchronization
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-500" /> 256-bit encrypted data
            </span>
          </div>
        </div>

        {/* ── Realistic Interactive SaaS Mockup (Window Frame) ───────────────── */}
        <div className="mt-14 lg:mt-20">
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200/80 bg-white p-2.5 sm:p-4 shadow-2xl shadow-indigo-950/10 ring-1 ring-slate-900/5 backdrop-blur-xl">
            
            {/* macOS / App Top Bar Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 px-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-semibold text-slate-400 hidden sm:inline">
                  FaithCore Desktop Pro v2.4 • Connected (Grace Community Church)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live DB Sync
                </span>
              </div>
            </div>

            {/* Dashboard UI Simulation Preview */}
            <div className="grid grid-cols-12 gap-4 pt-4">
              
              {/* Left Mini Sidebar */}
              <div className="hidden md:flex md:col-span-3 flex-col gap-1.5 rounded-xl bg-slate-50/70 p-3 border border-slate-100 text-xs">
                <div className="px-2 py-1.5 font-bold uppercase tracking-wider text-[10px] text-slate-400">Navigation</div>
                <div className="flex items-center gap-2.5 rounded-lg bg-indigo-50/80 px-3 py-2 font-semibold text-indigo-700">
                  <TrendingUp size={15} /> Overview & Analytics
                </div>
                <div className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100">
                  <Users size={15} /> Member Directory (840)
                </div>
                <div className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100">
                  <DollarSign size={15} /> Tithes & E-Receipts
                </div>
                <div className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100">
                  <FileCheck2 size={15} /> Baptism Certificates
                </div>
                <div className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100">
                  <Calendar size={15} /> Ministry Schedules
                </div>
              </div>

              {/* Main Content Dashboard Grid */}
              <div className="col-span-12 md:col-span-9 space-y-4">
                
                {/* Metric Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>Total Registered Members</span>
                      <Users size={15} className="text-indigo-600" />
                    </div>
                    <div className="mt-2 text-2xl font-bold text-slate-900">1,248</div>
                    <div className="mt-1 text-[11px] text-emerald-600 font-medium">↑ +14% from last month</div>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>Monthly Tithes & Giving</span>
                      <DollarSign size={15} className="text-emerald-600" />
                    </div>
                    <div className="mt-2 text-2xl font-bold text-slate-900">LKR 482,500</div>
                    <div className="mt-1 text-[11px] text-emerald-600 font-medium">98.4% balanced automatically</div>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>Official Certificates Issued</span>
                      <FileCheck2 size={15} className="text-violet-600" />
                    </div>
                    <div className="mt-2 text-2xl font-bold text-slate-900">342</div>
                    <div className="mt-1 text-[11px] text-indigo-600 font-medium">Digital signatures verified</div>
                  </div>
                </div>

                {/* Simulated Data Activity Table */}
                <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-slate-800">Recent Ministry Contributions & E-Receipts</span>
                    <span className="text-[11px] font-medium text-indigo-600 cursor-pointer hover:underline">View All Records →</span>
                  </div>
                  <div className="mt-3 space-y-2.5 text-xs">
                    {[
                      { name: "David Perera", type: "Sunday Tithe", amount: "LKR 15,000", status: "Verified", time: "10 mins ago" },
                      { name: "St. John Fellowship", type: "Building Fund", amount: "LKR 50,000", status: "Verified", time: "1 hour ago" },
                      { name: "Grace Family Group", type: "Youth Ministry", amount: "LKR 8,500", status: "Verified", time: "3 hours ago" },
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50/60 p-2.5 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-2.5">
                          <div className="h-7 w-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[11px]">
                            {row.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800 leading-none">{row.name}</p>
                            <p className="text-[10px] text-slate-500 mt-0.5">{row.type} • {row.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-slate-900">{row.amount}</p>
                          <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[9px] font-medium bg-emerald-50 text-emerald-700">
                            {row.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Glowing Accent Beneath the Card */}
            <div className="absolute -inset-x-20 -bottom-10 h-32 bg-gradient-to-r from-blue-500/10 via-indigo-500/20 to-purple-500/10 blur-3xl pointer-events-none -z-10" />
          </div>
        </div>

      </div>
    </section>
  );
}

import { 
  Users, 
  Wallet, 
  CalendarDays, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Zap,
  BarChart2
} from "lucide-react";
import Link from "next/link";

interface Feature {
  icon: any;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
}

const FEATURES: Feature[] = [
  {
    icon: Users,
    badge: "Community & Families",
    title: "Comprehensive Member Directory",
    description: "Manage congregants, family links, baptism records, and vital milestones with automated search and filtering.",
    highlights: ["Family tree grouping", "Attendance & engagement tracking", "Custom member profiling"],
  },
  {
    icon: Wallet,
    badge: "Financial Transparency",
    title: "Tithes, E-Receipts & Budgets",
    description: "Accurately log tithes, generate instant branded digital receipts via SMS/Email, and compare budgets with real-time analytics.",
    highlights: ["Automated PDF & digital receipts", "Multiple bank account reconciliation", "Category-wise expense breakdown"],
  },
  {
    icon: Award,
    badge: "Official Documents",
    title: "Official Certificates & Letters",
    description: "Generate beautiful, verified Baptism, Marriage, and Dedication certificates with QR verification in seconds.",
    highlights: ["Pre-designed royal templates", "One-click batch generation", "Tamper-proof digital validation"],
  },
  {
    icon: CalendarDays,
    badge: "Event Operations",
    title: "Events, Volunteer & Facility Booking",
    description: "Plan Sunday services, reserve fellowship halls, send automated reminders, and schedule volunteer rosters effortlessly.",
    highlights: ["SMS/Email announcements", "Volunteer duty rotation", "Multi-hall scheduling"],
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-3.5 py-1 text-xs font-semibold text-indigo-700">
            <Sparkles size={13} className="text-indigo-600" />
            Enterprise-Grade Capabilities
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Built specifically for the way <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-700 bg-clip-text text-transparent">
              churches actually operate.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate messy spreadsheets, duplicate work, and administrative friction. FaithCore unites every aspect of your ministry into a unified control centre.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="group relative rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
                    <Icon size={24} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="space-y-2">
                    {feature.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platform Highlight Banner */}
        <div className="mt-12 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50/60 via-slate-50 to-purple-50/60 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900">Need advanced multi-campus or custom reports?</h4>
            <p className="text-sm text-slate-600">Explore in-depth specifications, offline desktop sync, and bank reconciliation tools.</p>
          </div>
          <Link
            href="/features"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all"
          >
            Explore Complete Feature Specs
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}

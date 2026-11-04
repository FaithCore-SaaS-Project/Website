import { 
  ShieldCheck, 
  Lock, 
  Cloud, 
  Award, 
  Building2, 
  HeartHandshake,
  CheckCircle2
} from "lucide-react";

const STATS = [
  { value: "99.98%", label: "Cloud Uptime", sub: "Enterprise SLA standard" },
  { value: "50,000+", label: "E-Receipts Issued", sub: "100% audit compliant" },
  { value: "256-Bit", label: "AES Encryption", sub: "Bank-level data security" },
  { value: "< 2 mins", label: "Average Setup Time", sub: "Ready out-of-the-box" },
];

const BADGES = [
  { name: "Grace Fellowship International", icon: Building2 },
  { name: "Bethel Assembly Ministries", icon: HeartHandshake },
  { name: "Calvary Community Church", icon: Building2 },
  { name: "Living Word Fellowship", icon: HeartHandshake },
  { name: "New Life Christian Center", icon: Building2 },
];

export default function TrustedBy() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Metric Stats Ribbon */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 border-b border-slate-200/80 pb-10">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</p>
              <p className="text-xs font-semibold text-indigo-600 mt-0.5">{stat.label}</p>
              <p className="text-[11px] text-slate-500">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Client Logos / Names Bar */}
        <div className="mt-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
            Trusted by growing ministries & church councils worldwide
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="flex items-center gap-2 text-slate-700 font-semibold text-xs sm:text-sm">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 shadow-2xl">
                    <Icon size={14} />
                  </div>
                  <span>{badge.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

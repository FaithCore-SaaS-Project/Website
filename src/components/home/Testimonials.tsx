import { Star, Quote, CheckCircle } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  church: string;
  location: string;
  avatarText: string;
  rating: number;
  metric: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rev. Michael Grant",
    role: "Senior Pastor",
    church: "Grace Community Church",
    location: "Colombo, Sri Lanka",
    avatarText: "MG",
    rating: 5,
    metric: "12 hrs saved / week",
    quote:
      "FaithCore transformed how we manage church contributions and member records. The instant SMS e-receipts gave our congregation 100% financial transparency. It's the most dependable tool our council has ever adopted.",
  },
  {
    id: 2,
    name: "Rev. Sarah Okafor",
    role: "Administrative Director",
    church: "Bethel Assemblies",
    location: "Kandy, Sri Lanka",
    avatarText: "SO",
    rating: 5,
    metric: "40% faster certificate issuance",
    quote:
      "Generating baptism and marriage certificates used to take days of searching through paper files. With FaithCore, we generate authenticated certificates with QR validation in under two minutes.",
  },
  {
    id: 3,
    name: "Deacon James Ruiz",
    role: "Finance & Operations Lead",
    church: "Living Word Fellowship",
    location: "Negombo, Sri Lanka",
    avatarText: "JR",
    rating: 5,
    metric: "Zero budget discrepancy",
    quote:
      "The budget vs. actual analytics and multi-bank reconciliations made our annual church auditing effortless. Our treasurer and audit team won't work without it.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Real Ministry Impact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Loved by Pastors, Treasurers & Administrators
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Discover why ministry leaders rely on FaithCore every week for smooth administrative stewardship.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/40 p-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Metric Pill & Stars */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2.5 py-0.5 text-[11px] font-semibold">
                    {item.metric}
                  </span>
                </div>

                {/* Quote */}
                <p className="mt-5 text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white font-bold text-xs shadow-sm">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.role} • <span className="font-medium text-slate-700">{item.church}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

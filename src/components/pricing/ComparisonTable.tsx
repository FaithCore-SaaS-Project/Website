import {
  Check,
  X,
  Users,
  HardDrive,
  UsersRound,
  Home,
  Wallet,
  CalendarDays,
  FileText,
  BarChart3,
  Mail,
  Monitor,
  Headphones,
  Sparkles,
  Puzzle,
  UserCog,
  Server,
  Shield,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type CellValue = boolean | string;

interface FeatureRow {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  free: CellValue;
  basic: CellValue;
  standard: CellValue;
  premium: CellValue;
  enterprise: CellValue;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES: FeatureRow[] = [
  { icon: Users,       label: "Members Limit",            free: "Up to 100", basic: "Up to 500", standard: "Up to 2,000", premium: "Unlimited",  enterprise: "Unlimited"  },
  { icon: HardDrive,   label: "Storage",                  free: "1 GB",      basic: "5 GB",      standard: "10 GB",       premium: "100 GB",    enterprise: "Custom"     },
  { icon: UsersRound,  label: "Member Management",        free: true,        basic: true,        standard: true,          premium: true,        enterprise: true         },
  { icon: Home,        label: "Family Management",        free: true,        basic: true,        standard: true,          premium: true,        enterprise: true         },
  { icon: Wallet,      label: "Finance & Donations",      free: true,        basic: true,        standard: true,          premium: true,        enterprise: true         },
  { icon: CalendarDays,label: "Events Management",        free: true,        basic: true,        standard: true,          premium: true,        enterprise: true         },
  { icon: FileText,    label: "Certificates & Letters",   free: "Limited",   basic: true,        standard: true,          premium: true,        enterprise: true         },
  { icon: BarChart3,   label: "Reports & Analytics",      free: "Limited",   basic: true,        standard: true,          premium: true,        enterprise: true         },
  { icon: Mail,        label: "Email & SMS",              free: false,       basic: true,        standard: true,          premium: true,        enterprise: true         },
  { icon: Monitor,     label: "Desktop Application",      free: false,       basic: true,        standard: true,          premium: true,        enterprise: true         },
  { icon: Headphones,  label: "Priority Support",         free: false,       basic: false,       standard: true,          premium: true,        enterprise: "Dedicated"  },
  { icon: Sparkles,    label: "AI Reports & Insights",    free: false,       basic: false,       standard: true,          premium: true,        enterprise: true         },
  { icon: Puzzle,      label: "Custom Integrations",      free: false,       basic: false,       standard: true,          premium: true,        enterprise: true         },
  { icon: UserCog,     label: "Dedicated Account Manager",free: false,       basic: false,       standard: false,         premium: true,        enterprise: true         },
  { icon: Server,      label: "On-Premise Option",        free: false,       basic: false,       standard: false,         premium: false,       enterprise: true         },
  { icon: Shield,      label: "SLA & Uptime Guarantee",   free: "99%",       basic: "99%",       standard: "99.5%",       premium: "99.9%",     enterprise: "99.9%"      },
];

// ─── Cell Renderer ────────────────────────────────────────────────────────────

function Cell({ value }: { value: CellValue }) {
  if (value === true)
    return <Check className="mx-auto text-green-500" size={18} />;
  if (value === false)
    return <X className="mx-auto text-red-400" size={18} />;
  return <span className="text-sm text-gray-700">{value}</span>;
}

// ─── ComparisonTable ──────────────────────────────────────────────────────────

export default function ComparisonTable() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#5B3DF5]">
            Compare Plans
          </p>
          <h2 className="mt-4 text-4xl font-extrabold text-[#111827]">
            Feature Comparison
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            A full side-by-side breakdown of everything included in each plan.
          </p>
        </div>

        <div className="overflow-hidden rounded-[30px] border bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b bg-gray-50 text-sm font-semibold text-gray-700">
                  <th className="px-6 py-5 text-left">Features</th>
                  <th className="px-6 py-5 text-center">Free</th>
                  <th className="px-6 py-5 text-center">Basic</th>
                  <th className="bg-[#f7f4ff] px-6 py-5 text-center text-[#5B3DF5]">
                    <div>Standard</div>
                    <span className="mt-1 inline-block rounded-full bg-[#5B3DF5] px-2 py-0.5 text-[10px] text-white">
                      Most Popular
                    </span>
                  </th>
                  <th className="px-6 py-5 text-center">Premium</th>
                  <th className="px-6 py-5 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((row, i) => {
                  const Icon = row.icon;
                  return (
                    <tr
                      key={i}
                      className="border-b last:border-b-0 transition-colors hover:bg-gray-50/50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3 text-sm font-medium text-gray-800">
                          <Icon size={15} className="shrink-0 text-gray-400" />
                          {row.label}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center"><Cell value={row.free} /></td>
                      <td className="px-6 py-4 text-center"><Cell value={row.basic} /></td>
                      <td className="bg-[#f7f4ff] px-6 py-4 text-center"><Cell value={row.standard} /></td>
                      <td className="px-6 py-4 text-center"><Cell value={row.premium} /></td>
                      <td className="px-6 py-4 text-center"><Cell value={row.enterprise} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

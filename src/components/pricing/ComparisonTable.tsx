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
  pro: CellValue;
  unlimited: CellValue;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES: FeatureRow[] = [
  { icon: Users,       label: "Members Limit",            free: "50",        basic: "150",       standard: "400",       premium: "750",       pro: "1,000",     unlimited: "♾️" },
  { icon: UserCog,     label: "Admin Users",              free: "2",         basic: "5",         standard: "10",        premium: "20",        pro: "30",        unlimited: "♾️" },
  { icon: HardDrive,   label: "Storage",                  free: "500 MB",    basic: "2 GB",      standard: "5 GB",      premium: "15 GB",     pro: "30 GB",     unlimited: "♾️" },
  { icon: Server,      label: "Departments Limit",        free: "3",         basic: "5",         standard: "15",        premium: "30",        pro: "50",        unlimited: "♾️" },
  { icon: UsersRound,  label: "Member Management",        free: true,        basic: true,        standard: true,        premium: true,        pro: true,        unlimited: true },
  { icon: Home,        label: "Family Management",        free: true,        basic: true,        standard: true,        premium: true,        pro: true,        unlimited: true },
  { icon: CalendarDays,label: "Events Management",        free: true,        basic: true,        standard: true,        premium: true,        pro: true,        unlimited: true },
  { icon: FileText,    label: "Certificates & Letters",   free: false,       basic: true,        standard: true,        premium: true,        pro: true,        unlimited: true },
  { icon: BarChart3,   label: "Reports & Analytics",      free: false,       basic: false,       standard: true,        premium: true,        pro: true,        unlimited: true },
  { icon: Mail,        label: "Email Notifications",      free: false,       basic: true,        standard: true,        premium: true,        pro: true,        unlimited: true },
  { icon: Monitor,     label: "Desktop Application",      free: true,        basic: true,        standard: true,        premium: true,        pro: true,        unlimited: true },
  { icon: Headphones,  label: "Support Level",            free: "Help Center",basic: "Email",     standard: "Priority",  premium: "Priority",  pro: "Dedicated", unlimited: "Account Manager" },
  { icon: Sparkles,    label: "Custom Roles",             free: false,       basic: false,       standard: true,        premium: true,        pro: true,        unlimited: true },
  { icon: Puzzle,      label: "Third-Party Integrations", free: false,       basic: false,       standard: false,       premium: true,        pro: true,        unlimited: true },
  { icon: Shield,      label: "Data Backup & Restore",    free: false,       basic: false,       standard: false,       premium: true,        pro: true,        unlimited: true },
  { icon: Server,      label: "Automated Backup Sched.",  free: false,       basic: false,       standard: false,       premium: false,       pro: true,        unlimited: true },
];

// ─── Cell Renderer ────────────────────────────────────────────────────────────

function Cell({ value }: { value: CellValue }) {
  if (value === true)
    return <Check className="mx-auto text-green-500" size={18} />;
  if (value === false)
    return <X className="mx-auto text-red-400" size={18} />;
  return <span className="text-sm font-semibold text-gray-700">{value}</span>;
}

// ─── ComparisonTable ──────────────────────────────────────────────────────────

export default function ComparisonTable() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#1B2F5E]">
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
                  <th className="bg-[#EEF2FB] px-6 py-5 text-center text-[#1B2F5E]">
                    <div>Standard</div>
                    <span className="mt-1 inline-block rounded-full bg-[#1B2F5E] px-2 py-0.5 text-[10px] text-white">
                      Most Popular
                    </span>
                  </th>
                  <th className="px-6 py-5 text-center">Premium</th>
                  <th className="px-6 py-5 text-center">Pro</th>
                  <th className="px-6 py-5 text-center">Unlimited</th>
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
                      <td className="bg-[#EEF2FB] px-6 py-4 text-center"><Cell value={row.standard} /></td>
                      <td className="px-6 py-4 text-center"><Cell value={row.premium} /></td>
                      <td className="px-6 py-4 text-center"><Cell value={row.pro} /></td>
                      <td className="px-6 py-4 text-center"><Cell value={row.unlimited} /></td>
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

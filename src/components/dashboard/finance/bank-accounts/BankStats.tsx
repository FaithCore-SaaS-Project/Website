"use client";

import { Landmark, Wallet, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";

interface StatItem {
  title: string;
  value: string;
  subtext: string;
  subtextColorClass: string;
  icon: any;
  iconBgClass: string;
}

const stats: StatItem[] = [
  {
    title: "Total Bank Accounts",
    value: "5",
    subtext: "All accounts",
    subtextColorClass: "text-gray-400 text-[11px] font-semibold",
    icon: Landmark,
    iconBgClass: "bg-[#8b5cf6] text-white",
  },
  {
    title: "Total Balance",
    value: "Rs. 4,125,750.00",
    subtext: "Across all accounts",
    subtextColorClass: "text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full text-[10px] font-semibold",
    icon: Wallet,
    iconBgClass: "bg-[#10b981] text-white",
  },
  {
    title: "This Month In",
    value: "Rs. 1,250,000.00",
    subtext: "Total credits",
    subtextColorClass: "text-[#3b82f6] bg-[#3b82f6]/10 px-2 py-0.5 rounded-full text-[10px] font-semibold",
    icon: ArrowDownToLine,
    iconBgClass: "bg-[#3b82f6] text-white",
  },
  {
    title: "This Month Out",
    value: "Rs. 875,000.00",
    subtext: "Total debits",
    subtextColorClass: "text-[#f59e0b] bg-[#f59e0b]/10 px-2 py-0.5 rounded-full text-[10px] font-semibold",
    icon: ArrowUpFromLine,
    iconBgClass: "bg-[#f59e0b] text-white",
  },
];

export default function BankStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex gap-4 items-center">
              <div
                className={`h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBgClass}`}
              >
                <Icon size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  {item.title}
                </p>
                <h3 className="text-2xl font-bold text-gray-800 tracking-tight mt-1 truncate">
                  {item.value}
                </h3>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className={item.subtextColorClass}>
                    {item.subtext}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

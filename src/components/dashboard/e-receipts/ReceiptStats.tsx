"use client";

import { FileText, Mail, Printer, DollarSign } from "lucide-react";

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
    title: "Total Receipts",
    value: "1,248",
    subtext: "+18 this month",
    subtextColorClass: "text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full text-[10px] font-semibold",
    icon: FileText,
    iconBgClass: "bg-[#8b5cf6] text-white",
  },
  {
    title: "Emailed Receipts",
    value: "1,102",
    subtext: "88.3% of total",
    subtextColorClass: "text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full text-[10px] font-semibold",
    icon: Mail,
    iconBgClass: "bg-[#10b981] text-white",
  },
  {
    title: "Printed Receipts",
    value: "146",
    subtext: "11.7% of total",
    subtextColorClass: "text-[#3b82f6] bg-[#3b82f6]/10 px-2 py-0.5 rounded-full text-[10px] font-semibold",
    icon: Printer,
    iconBgClass: "bg-[#3b82f6] text-white",
  },
  {
    title: "Total Amount",
    value: "Rs. 2,450,000.00",
    subtext: "This month",
    subtextColorClass: "text-gray-400 text-[11px] font-medium",
    icon: DollarSign,
    iconBgClass: "bg-[#f59e0b] text-white",
  },
];

export default function ReceiptStats() {
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

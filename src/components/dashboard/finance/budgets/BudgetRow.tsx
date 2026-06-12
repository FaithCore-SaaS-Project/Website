"use client";

import { Pencil, MoreVertical, Briefcase, Building2, Heart, Music, Users, Zap, BookOpen, AlertCircle } from "lucide-react";
import { Budget } from "@/types/budget";

interface BudgetRowProps {
  item: Budget;
}

// Icon and Color style mapper based on the color key
export const getBudgetStyle = (colorKey: string) => {
  switch (colorKey) {
    case "violet":
      return { icon: Briefcase, colorClass: "text-[#8b5cf6]", bgClass: "bg-[#8b5cf6]/10 border-[#8b5cf6]/20", barBg: "bg-[#8b5cf6]" };
    case "emerald":
      return { icon: Building2, colorClass: "text-[#10b981]", bgClass: "bg-[#10b981]/10 border-[#10b981]/20", barBg: "bg-[#10b981]" };
    case "orange":
      return { icon: Heart, colorClass: "text-[#f59e0b]", bgClass: "bg-[#f59e0b]/10 border-[#f59e0b]/20", barBg: "bg-[#f59e0b]" };
    case "blue":
      return { icon: Music, colorClass: "text-[#3b82f6]", bgClass: "bg-[#3b82f6]/10 border-[#3b82f6]/20", barBg: "bg-[#3b82f6]" };
    case "purple":
      return { icon: Users, colorClass: "text-[#a855f7]", bgClass: "bg-[#a855f7]/10 border-[#a855f7]/20", barBg: "bg-[#a855f7]" };
    case "red":
      return { icon: Users, colorClass: "text-[#ef4444]", bgClass: "bg-[#ef4444]/10 border-[#ef4444]/20", barBg: "bg-[#ef4444]" };
    case "cyan":
      return { icon: Zap, colorClass: "text-[#06b6d4]", bgClass: "bg-[#06b6d4]/10 border-[#06b6d4]/20", barBg: "bg-[#06b6d4]" };
    case "yellow":
      return { icon: BookOpen, colorClass: "text-[#eab308]", bgClass: "bg-[#eab308]/10 border-[#eab308]/20", barBg: "bg-[#eab308]" };
    default:
      return { icon: AlertCircle, colorClass: "text-gray-500", bgClass: "bg-gray-100 border-gray-200", barBg: "bg-gray-500" };
  }
};

export default function BudgetRow({ item }: BudgetRowProps) {
  const { icon: Icon, bgClass: iconStyle, barBg } = getBudgetStyle(item.iconColorKey);

  // Format currency
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <tr className="border-b border-gray-50 hover:bg-[#f8f9ff]/50 transition-colors duration-150">
      {/* Budget Name & Description */}
      <td className="p-4 align-middle">
        <div className="flex items-center gap-3">
          <div className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 border ${iconStyle}`}>
            <Icon size={16} />
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm leading-tight">
              {item.name}
            </h4>
            <p className="text-xs text-gray-400 mt-0.5 leading-none">
              {item.description}
            </p>
          </div>
        </div>
      </td>

      {/* Budget Type */}
      <td className="p-4 align-middle">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            item.type === "Operating"
              ? "bg-purple-50 text-purple-700 border-purple-100"
              : item.type === "Capital"
              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
              : "bg-amber-50 text-amber-700 border-amber-100"
          }`}
        >
          {item.type}
        </span>
      </td>

      {/* Period (Double-line date) */}
      <td className="p-4 align-middle text-[11px] text-gray-400 font-semibold leading-tight">
        <div className="block">{item.startDate}</div>
        <div className="block mt-0.5">{item.endDate}</div>
      </td>

      {/* Total Budget */}
      <td className="p-4 align-middle font-bold text-gray-700 text-sm">
        {formatAmount(item.totalBudget)}
      </td>

      {/* Spent */}
      <td className="p-4 align-middle font-bold text-gray-700 text-sm">
        {formatAmount(item.spent)}
      </td>

      {/* Progress Bar */}
      <td className="p-4 align-middle">
        <div className="flex items-center gap-2.5">
          <div className="w-20 bg-gray-100 rounded-full h-1.5 overflow-hidden shrink-0">
            <div
              className={`h-full rounded-full transition-all duration-500 ${barBg}`}
              style={{ width: `${item.progress}%` }}
            />
          </div>
          <span className="text-xs font-bold text-gray-500">{item.progress}%</span>
        </div>
      </td>

      {/* Status */}
      <td className="p-4 align-middle">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            item.status === "Completed"
              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
              : "bg-blue-50 text-blue-700 border-blue-100"
          }`}
        >
          {item.status}
        </span>
      </td>

      {/* Actions */}
      <td className="p-4 align-middle">
        <div className="flex gap-2">
          <button className="border border-gray-200 hover:border-[#5b3df5] hover:text-[#5b3df5] p-2 rounded-xl bg-white transition-all duration-200">
            <Pencil size={14} />
          </button>
          <button className="border border-gray-200 hover:border-gray-300 text-gray-400 hover:text-gray-600 p-2 rounded-xl bg-white transition-all duration-200">
            <MoreVertical size={14} />
          </button>
        </div>
      </td>
    </tr>
  );
}

"use client";

import {
  TrendingUp,
  Gift,
  Heart,
  Calendar,
  Home,
  Church,
  Zap,
  Users,
  Wrench,
  Paperclip,
  Pencil,
  Trash2,
  AlertCircle
} from "lucide-react";
import { Category } from "@/types/category";

interface CategoryRowProps {
  item: Category;
  isSelected: boolean;
  onSelect: () => void;
}

// Icon mapping helper
export const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case "tithes":
      return { icon: TrendingUp, bg: "bg-emerald-50 text-emerald-600 border-emerald-100" };
    case "offerings":
      return { icon: Gift, bg: "bg-blue-50 text-blue-600 border-blue-100" };
    case "donations":
      return { icon: Heart, bg: "bg-purple-50 text-purple-600 border-purple-100" };
    case "event":
      return { icon: Calendar, bg: "bg-amber-50 text-amber-600 border-amber-100" };
    case "hall-rent":
      return { icon: Home, bg: "bg-cyan-50 text-cyan-600 border-cyan-100" };
    case "ministry":
      return { icon: Church, bg: "bg-rose-50 text-rose-600 border-rose-100" };
    case "utilities":
      return { icon: Zap, bg: "bg-yellow-50 text-yellow-600 border-yellow-100" };
    case "salaries":
      return { icon: Users, bg: "bg-indigo-50 text-indigo-600 border-indigo-100" };
    case "maintenance":
      return { icon: Wrench, bg: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100" };
    case "office":
      return { icon: Paperclip, bg: "bg-slate-50 text-slate-600 border-slate-100" };
    default:
      return { icon: AlertCircle, bg: "bg-gray-50 text-gray-600 border-gray-100" };
  }
};

export default function CategoryRow({ item, isSelected, onSelect }: CategoryRowProps) {
  const { icon: Icon, bg: iconStyle } = getCategoryIcon(item.iconName);

  return (
    <tr
      onClick={onSelect}
      className={`border-b border-gray-50 hover:bg-[#f8f9ff]/50 transition-colors duration-150 cursor-pointer ${
        isSelected ? "bg-[#1B2F5E]/5" : ""
      }`}
    >
      {/* Category Name & Icon */}
      <td className="p-4 align-middle">
        <div className="flex items-center gap-3">
          <div className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 border ${iconStyle}`}>
            <Icon size={16} />
          </div>
          <span className="font-bold text-gray-800 text-sm">
            {item.name}
          </span>
        </div>
      </td>

      {/* Type */}
      <td className="p-4 align-middle">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            item.type === "Income"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
              : "bg-rose-50 text-rose-700 border border-rose-100"
          }`}
        >
          {item.type}
        </span>
      </td>

      {/* Description */}
      <td className="p-4 align-middle text-sm text-gray-500 max-w-xs truncate">
        {item.description}
      </td>

      {/* Status */}
      <td className="p-4 align-middle">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            item.status === "Active"
              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
              : "bg-gray-50 text-gray-500 border-gray-100"
          }`}
        >
          {item.status}
        </span>
      </td>

      {/* Created Date */}
      <td className="p-4 align-middle text-sm text-gray-500 font-medium">
        {item.date}
      </td>

      {/* Actions */}
      <td className="p-4 align-middle" onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-2">
          <button
            onClick={onSelect}
            className={`border p-2 rounded-xl transition-all duration-200 ${
              isSelected
                ? "bg-[#1B2F5E] border-[#1B2F5E] text-white"
                : "border-gray-200 hover:border-[#1B2F5E] text-gray-400 hover:text-[#1B2F5E] bg-white"
            }`}
            title="Edit Category Details"
          >
            <Pencil size={14} />
          </button>
          <button className="border border-gray-200 hover:border-rose-300 hover:bg-rose-50 text-gray-400 hover:text-rose-600 p-2 rounded-xl bg-white transition-all duration-200" title="Delete Category">
            <Trash2 size={14} />
          </button>
        </div>
      </td>
    </tr>
  );
}

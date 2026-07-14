"use client";

import { Eye, MoreVertical, Wallet, Landmark, Mail, Printer, CheckCircle } from "lucide-react";
import { Receipt } from "@/types/receipt";

interface ReceiptRowProps {
  item: Receipt;
  isSelected: boolean;
  onSelect: () => void;
}

export default function ReceiptRow({ item, isSelected, onSelect }: ReceiptRowProps) {
  // Category badge styles mapper
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Tithes":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "Offerings":
        return "bg-blue-50 text-blue-700 border-blue-100";
      case "Donations":
        return "bg-amber-50 text-amber-700 border-amber-100";
      case "Thanksgiving":
        return "bg-purple-50 text-purple-700 border-purple-100";
      case "Other Income":
        return "bg-slate-50 text-slate-700 border-slate-100";
      case "Event":
        return "bg-violet-50 text-violet-700 border-violet-100";
      default:
        return "bg-gray-50 text-gray-700 border-gray-100";
    }
  };

  // Format currency
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <tr
      className={`border-b border-gray-50 hover:bg-[#f8f9ff]/50 transition-colors duration-150 ${
        isSelected ? "bg-[#1B2F5E]/5" : ""
      }`}
    >
      {/* Receipt No */}
      <td className="p-4 align-middle text-sm font-semibold text-gray-700">
        {item.id}
      </td>

      {/* Date */}
      <td className="p-4 align-middle text-sm text-gray-500 font-medium">
        {item.date}
      </td>

      {/* From / Member */}
      <td className="p-4 align-middle">
        <div>
          <h4 className="text-sm font-bold text-gray-800 leading-tight">
            {item.member.name}
          </h4>
          <p className="text-xs text-gray-400 mt-0.5 leading-none">
            {item.member.email}
          </p>
        </div>
      </td>

      {/* Category */}
      <td className="p-4 align-middle">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryStyles(
            item.category
          )}`}
        >
          {item.category}
        </span>
      </td>

      {/* Amount */}
      <td className="p-4 align-middle font-bold text-emerald-600 text-sm">
        {formatAmount(item.amount)}
      </td>

      {/* Payment Method */}
      <td className="p-4 align-middle">
        <div className="flex items-center gap-1.5 text-xs text-gray-600 font-semibold bg-gray-50 border border-gray-100 rounded-lg px-2 py-1 w-max">
          {item.paymentMethod === "Cash" ? (
            <>
              <Wallet size={13} className="text-emerald-500" />
              <span>Cash</span>
            </>
          ) : (
            <>
              <Landmark size={13} className="text-blue-500" />
              <span>Bank Transfer</span>
            </>
          )}
        </div>
      </td>

      {/* Status */}
      <td className="p-4 align-middle">
        {item.status === "Emailed" ? (
          <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
            <CheckCircle size={12} className="text-emerald-600" />
            <span>Emailed</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 bg-purple-50 border border-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
            <Printer size={12} className="text-purple-600" />
            <span>Printed</span>
          </span>
        )}
      </td>

      {/* Actions */}
      <td className="p-4 align-middle">
        <div className="flex gap-2">
          <button
            onClick={onSelect}
            className={`border p-2 rounded-xl transition-all duration-200 ${
              isSelected
                ? "bg-[#1B2F5E] border-[#1B2F5E] text-white"
                : "border-gray-200 hover:border-[#1B2F5E] text-gray-400 hover:text-[#1B2F5E] bg-white"
            }`}
            title="Preview Receipt"
          >
            <Eye size={16} />
          </button>
          <button className="border border-gray-200 hover:border-gray-300 text-gray-400 hover:text-gray-600 p-2 rounded-xl bg-white transition-all duration-200">
            <MoreVertical size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}

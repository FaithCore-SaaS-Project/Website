"use client";

import { Pencil, MoreVertical } from "lucide-react";
import { BankAccount } from "@/types/bank-account";

interface BankAccountRowProps {
  item: BankAccount;
  isSelected: boolean;
  onSelect: () => void;
}

// Bank Logo Color Style mapper
export const getBankStyles = (logoKey: string) => {
  switch (logoKey) {
    case "hnb":
      return { initials: "HNB", bg: "bg-[#0b2545] text-white border-[#134074]", label: "Hatton National Bank" };
    case "commercial":
      return { initials: "COM", bg: "bg-[#0077b6] text-white border-[#0096c7]", label: "Commercial Bank" };
    case "peoples":
      return { initials: "PEO", bg: "bg-[#2a9d8f] text-white border-[#264653]", label: "People's Bank" };
    case "boc":
      return { initials: "BOC", bg: "bg-[#fcbf49] text-gray-950 border-[#f77f00]", label: "Bank of Ceylon" };
    case "ntb":
      return { initials: "NTB", bg: "bg-[#f77f00] text-white border-[#fcbf49]", label: "Nations Trust Bank" };
    default:
      return { initials: "BNK", bg: "bg-gray-700 text-white border-gray-600", label: "Bank Account" };
  }
};

export default function BankAccountRow({ item, isSelected, onSelect }: BankAccountRowProps) {
  const bankStyle = getBankStyles(item.logoKey);

  // Format currency
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <tr
      onClick={onSelect}
      className={`border-b border-gray-50 hover:bg-[#f8f9ff]/50 transition-colors duration-150 cursor-pointer ${
        isSelected ? "bg-[#1B2F5E]/5" : ""
      }`}
    >
      {/* Bank Name with Circular Logo */}
      <td className="p-4 align-middle">
        <div className="flex items-center gap-3">
          <div
            className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 border text-[10px] font-black tracking-wider shadow-sm ${bankStyle.bg}`}
          >
            {bankStyle.initials}
          </div>
          <span className="font-bold text-gray-800 text-sm">
            {item.bankName}
          </span>
        </div>
      </td>

      {/* Account Name */}
      <td className="p-4 align-middle text-sm text-gray-700 font-semibold">
        {item.accountName}
      </td>

      {/* Account Number */}
      <td className="p-4 align-middle text-sm text-gray-500 font-medium">
        {item.accountNumber}
      </td>

      {/* Account Type */}
      <td className="p-4 align-middle">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            item.accountType === "Current"
              ? "bg-purple-50 text-purple-700 border-purple-100"
              : "bg-emerald-50 text-emerald-700 border-emerald-100"
          }`}
        >
          {item.accountType}
        </span>
      </td>

      {/* Balance */}
      <td className="p-4 align-middle font-bold text-emerald-600 text-sm">
        Rs. {formatAmount(item.balance)}
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
            title="Preview Details"
          >
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

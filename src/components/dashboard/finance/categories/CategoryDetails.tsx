"use client";

import { Pencil, Trash2, Info } from "lucide-react";
import { Category } from "@/types/category";
import { getCategoryIcon } from "./CategoryRow";

interface CategoryDetailsProps {
  category: Category | null;
}

export default function CategoryDetails({ category }: CategoryDetailsProps) {
  if (!category) {
    return (
      <div className="space-y-5">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center min-h-[350px]">
          <div className="h-14 w-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-3">
            <Info size={24} />
          </div>
          <h3 className="font-bold text-gray-700">No Category Selected</h3>
          <p className="text-xs text-gray-400 mt-1.5 max-w-[200px]">
            Select a category from the list to view its complete summary details.
          </p>
        </div>
      </div>
    );
  }

  const { icon: Icon, bg: iconStyle } = getCategoryIcon(category.iconName);

  // Format currency
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="space-y-5">
      {/* Category Main Details */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        {/* Header Block */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`h-16 w-16 rounded-full flex items-center justify-center shrink-0 border-2 ${iconStyle}`}>
            <Icon size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-800 tracking-tight leading-tight">
              {category.name}
            </h2>
            <span
              className={`inline-block mt-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${
                category.type === "Income"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                  : "bg-rose-50 text-rose-700 border-rose-100"
              }`}
            >
              {category.type}
            </span>
          </div>
        </div>

        {/* Metadata Listing */}
        <div className="space-y-4 text-xs font-semibold text-gray-500">
          <div className="flex justify-between items-start">
            <span className="text-gray-400">Description</span>
            <span className="text-gray-700 text-right max-w-[160px] leading-tight">
              {category.description}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Type</span>
            <span className={category.type === "Income" ? "text-emerald-600" : "text-rose-600"}>
              {category.type}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Status</span>
            <span className={category.status === "Active" ? "text-emerald-600" : "text-gray-400"}>
              {category.status}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Created On</span>
            <span className="text-gray-700">
              {category.date} {category.createdTime}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Created By</span>
            <span className="text-gray-700">{category.createdBy}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Total Transactions</span>
            <span className="text-gray-700">{category.transactions}</span>
          </div>
          
          <div className="border-t border-dashed border-gray-100 my-2" />

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 font-bold">Total Amount</span>
            <span
              className={`font-black text-base ${
                category.type === "Income" ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              Rs. {formatAmount(category.totalAmount)}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <button className="w-full mt-6 bg-[#5b3df5] hover:bg-[#4d31db] text-white py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold shadow-md shadow-[#5b3df5]/10 hover:shadow-lg transition-all duration-200">
          <Pencil size={14} />
          Edit Category
        </button>
        <button className="w-full mt-3 border border-rose-200 hover:border-rose-300 bg-white hover:bg-rose-50 text-rose-500 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all duration-200">
          <Trash2 size={14} />
          Delete Category
        </button>
      </div>

      {/* Info Guide Box */}
      <div className="bg-[#f8f9ff] border border-gray-100 rounded-2xl p-5 shadow-sm">
        <div className="flex gap-3 items-start">
          <div className="text-blue-500 mt-0.5 shrink-0">
            <Info size={18} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm">Category Types</h3>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed font-semibold">
              Income categories are used for all incoming transactions (Tithing, Offerings, Events sales).
            </p>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed font-semibold">
              Expense categories are used for all outgoing transactions (Utilities, Maintenance, Salaries).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

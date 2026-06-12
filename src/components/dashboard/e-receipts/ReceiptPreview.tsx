"use client";

import { Mail, Printer, Download, Church, ChevronDown } from "lucide-react";
import { Receipt } from "@/types/receipt";

interface ReceiptPreviewProps {
  receipt: Receipt | null;
}

export default function ReceiptPreview({ receipt }: ReceiptPreviewProps) {
  if (!receipt) {
    return (
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-full flex flex-col items-center justify-center text-center">
        <div className="h-16 w-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-4">
          <Church size={28} />
        </div>
        <h3 className="font-bold text-gray-700 text-lg">No Receipt Selected</h3>
        <p className="text-sm text-gray-400 mt-2 max-w-[200px]">
          Click the eye icon on any receipt to view its official preview.
        </p>
      </div>
    );
  }

  // Format currency
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col h-full justify-between">
      {/* Title & Top Action Icons */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Receipt Preview</h2>
        <div className="flex items-center gap-3">
          <button className="p-1.5 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-gray-600 transition-colors" title="Download PDF">
            <Download size={18} />
          </button>
          <button className="p-1.5 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-gray-600 transition-colors" title="Print Raw">
            <Printer size={18} />
          </button>
        </div>
      </div>

      {/* Official Receipt Card */}
      <div className="border border-gray-100 rounded-xl p-5 bg-[#fafbff] flex-1 flex flex-col justify-between">
        {/* Church Header */}
        <div className="text-center">
          <div className="inline-flex h-10 w-10 rounded-full bg-[#5b3df5]/10 items-center justify-center text-[#5b3df5] mb-2">
            <Church size={20} />
          </div>
          <h3 className="text-sm font-extrabold text-[#5b3df5] tracking-wide uppercase leading-tight">
            Kingdom Connect Church
          </h3>
          <p className="text-[9px] text-gray-400 mt-0.5 font-semibold italic">
            Growing Together in Faith & Love
          </p>
        </div>

        {/* Title */}
        <h4 className="text-center font-black text-gray-800 text-xs tracking-[0.2em] my-4 uppercase">
          Official Receipt
        </h4>

        {/* Metadata grid */}
        <div className="space-y-2 text-[11px] text-gray-500 font-medium">
          <div className="flex justify-between">
            <span className="text-gray-400">Receipt No.</span>
            <span className="font-bold text-gray-700">{receipt.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Date</span>
            <span className="text-gray-700">{receipt.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Received From</span>
            <span className="text-gray-700 font-bold">{receipt.member.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Email</span>
            <span className="text-gray-700 truncate max-w-[150px]">{receipt.member.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Phone</span>
            <span className="text-gray-700">{receipt.member.phone || "+94 77 123 4567"}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-4" />

        {/* Invoice Item list */}
        <div className="space-y-2 text-xs font-semibold">
          <div className="flex justify-between text-gray-400 text-[10px] uppercase tracking-wider font-bold">
            <span>Description</span>
            <span>Amount (Rs.)</span>
          </div>
          <div className="flex justify-between text-gray-700 mt-2 font-medium">
            <span>{receipt.description}</span>
            <span>{formatAmount(receipt.amount)}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-4" />

        {/* Total amount */}
        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-gray-500">Total Amount</span>
          <span className="font-black text-[#5b3df5] text-base">
            Rs. {formatAmount(receipt.amount)}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-4" />

        {/* Payment & Collector Info */}
        <div className="space-y-2 text-[11px] text-gray-500 font-medium">
          <div className="flex justify-between">
            <span className="text-gray-400">Payment Method</span>
            <span className="text-gray-700 font-bold">{receipt.paymentMethod}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Received By</span>
            <span className="text-gray-700 font-bold">{receipt.receivedBy}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-4" />

        {/* Footer note and Signature */}
        <div className="flex flex-col items-center">
          <p className="text-[10px] text-gray-400 font-semibold italic text-center">
            "Thank you for your generous giving."
          </p>
          <div className="mt-4 text-center">
            {/* Signature styled elegantly */}
            <span className="font-serif italic text-lg text-[#5b3df5] tracking-wide block leading-none">
              {receipt.receivedBy}
            </span>
            <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider mt-1 block">
              Authorised Signature
            </span>
          </div>
        </div>
      </div>

      {/* Card Buttons */}
      <div className="mt-5 space-y-3 shrink-0">
        <button className="w-full bg-[#5b3df5] hover:bg-[#4d31db] text-white py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold shadow-md shadow-[#5b3df5]/10 hover:shadow-lg transition-all duration-200">
          <Mail size={16} />
          Email Receipt
        </button>
        <div className="flex gap-2">
          <button className="flex-1 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all duration-200">
            <Printer size={16} />
            Print Receipt
          </button>
          <button className="border border-gray-200 hover:border-gray-300 hover:bg-gray-50 p-3 rounded-xl flex items-center justify-center text-gray-500 transition-all duration-200">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

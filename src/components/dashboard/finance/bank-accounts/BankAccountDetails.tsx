"use client";

import { Info, ReceiptText, Pencil, Ban } from "lucide-react";
import { BankAccount } from "@/types/bank-account";
import { getBankStyles } from "./BankAccountRow";

interface BankAccountDetailsProps {
  account: BankAccount | null;
}

export default function BankAccountDetails({ account }: BankAccountDetailsProps) {
  if (!account) {
    return (
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center min-h-[350px]">
        <div className="h-14 w-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-3">
          <Info size={24} />
        </div>
        <h3 className="font-bold text-gray-700">No Account Selected</h3>
        <p className="text-xs text-gray-400 mt-1.5 max-w-[200px]">
          Select a bank account from the list to view its complete properties.
        </p>
      </div>
    );
  }

  const bankStyle = getBankStyles(account.logoKey);

  // Format currency
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full">
      <div>
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mb-6">Account Details</h2>

        {/* Bank Header Info */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`h-14 w-14 rounded-full flex items-center justify-center shrink-0 border-2 text-[12px] font-black tracking-wider shadow-sm ${bankStyle.bg}`}
          >
            {bankStyle.initials}
          </div>
          <div>
            <h3 className="font-extrabold text-gray-800 text-base leading-tight">
              {account.bankName}
            </h3>
            <p className="text-xs text-gray-400 font-semibold mt-1">
              {account.accountName}
            </p>
          </div>
        </div>

        {/* Metadata grid */}
        <div className="space-y-4 text-xs font-semibold text-gray-500">
          <div className="flex justify-between">
            <span className="text-gray-400">Account Number</span>
            <span className="text-gray-800 font-bold">{account.accountNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Account Type</span>
            <span className="text-gray-700">{account.accountType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Branch</span>
            <span className="text-gray-700">{account.branch}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Currency</span>
            <span className="text-gray-700">{account.currency}</span>
          </div>
          
          <div className="border-t border-dashed border-gray-100 my-2" />

          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">Available Balance</span>
            <span className="text-emerald-600 font-black text-sm">
              Rs. {formatAmount(account.balance)}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">Ledger Balance</span>
            <span className="text-gray-700 font-bold">
              Rs. {formatAmount(account.ledgerBalance)}
            </span>
          </div>

          <div className="border-t border-dashed border-gray-100 my-2" />

          <div className="flex justify-between">
            <span className="text-gray-400">Last Statement Date</span>
            <span className="text-gray-700">{account.lastStatementDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Added On</span>
            <span className="text-gray-700">{account.addedOn}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Added By</span>
            <span className="text-gray-700">{account.addedBy}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Status</span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${
                account.status === "Active"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                  : "bg-gray-50 text-gray-500 border-gray-100"
              }`}
            >
              {account.status}
            </span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 space-y-3 shrink-0">
        <button className="w-full bg-[#5b3df5] hover:bg-[#4d31db] text-white py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold shadow-md shadow-[#5b3df5]/10 hover:shadow-lg transition-all duration-200">
          <ReceiptText size={16} />
          View Transactions
        </button>
        <button className="w-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all duration-200">
          <Pencil size={16} />
          Edit Account
        </button>
        <button className="w-full border border-rose-200 hover:border-rose-300 bg-white hover:bg-rose-50 text-rose-500 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all duration-200">
          <Ban size={16} />
          Deactivate Account
        </button>
      </div>
    </div>
  );
}

"use client";

import BudgetRow from "./BudgetRow";
import { Budget } from "@/types/budget";
import { ChevronLeft, ChevronRight, Info, ArrowRight } from "lucide-react";
import Link from "next/link";

interface BudgetsTableProps {
  budgets: Budget[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
  pageSize: number;
}

export default function BudgetsTable({
  budgets,
  currentPage,
  setCurrentPage,
  totalItems,
  pageSize,
}: BudgetsTableProps) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="space-y-6 flex-1 flex flex-col justify-between">
      {/* Table Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800">All Budgets</h2>
            {totalItems > 0 && (
              <span className="text-xs text-gray-400 font-semibold bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1">
                Showing {startItem}-{endItem} of {totalItems}
              </span>
            )}
          </div>

          {/* Grid Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-50 bg-[#f8f9ff]/60">
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Budget Name
                  </th>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Budget Type
                  </th>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Period
                  </th>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Total Budget (Rs.)
                  </th>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Spent (Rs.)
                  </th>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider w-24">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {budgets.length > 0 ? (
                  budgets.map((item) => <BudgetRow key={item.id} item={item} />)
                ) : (
                  <tr>
                    <td colSpan={8} className="p-12 text-center text-gray-400 font-medium">
                      No budgets found matching the filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 p-5 border-t border-gray-50 bg-white">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-10 w-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 disabled:opacity-50 disabled:pointer-events-none bg-white transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-10 w-10 rounded-xl text-sm font-bold transition-all duration-200 ${
                  currentPage === page
                    ? "bg-[#1B2F5E] text-white shadow-md shadow-[#1B2F5E]/10"
                    : "border border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-700 bg-white"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="h-10 w-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 disabled:opacity-50 disabled:pointer-events-none bg-white transition-all duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Info Help Banner underneath the table */}
      <div className="bg-[#f8f9ff] border border-gray-100 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex gap-3 items-center min-w-0">
          <div className="text-[#1B2F5E] shrink-0">
            <Info size={20} />
          </div>
          <div className="text-xs font-semibold text-gray-500 leading-normal">
            <span className="font-bold text-gray-800">About Budgets:</span> Budgets help you plan and track your church's financial goals. Create budgets by categories or ministries and monitor your spending against the planned amounts.
          </div>
        </div>
        <Link
          href="/dashboard/finance/budgets/help"
          className="text-xs font-bold text-[#1B2F5E] hover:text-[#15254A] flex items-center gap-1 shrink-0 group transition-colors duration-200"
        >
          <span>Learn more about budgeting</span>
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
}

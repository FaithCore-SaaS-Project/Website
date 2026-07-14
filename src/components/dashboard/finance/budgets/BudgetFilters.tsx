"use client";

import { Search, Filter } from "lucide-react";
import { BudgetType, BudgetStatus } from "@/types/budget";

interface BudgetFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  yearFilter: string;
  setYearFilter: (year: string) => void;
  typeFilter: string;
  setTypeFilter: (type: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
}

export default function BudgetFilters({
  searchQuery,
  setSearchQuery,
  yearFilter,
  setYearFilter,
  typeFilter,
  setTypeFilter,
  statusFilter,
  setStatusFilter,
}: BudgetFiltersProps) {
  const years = ["2025", "2024", "2023"];
  const types: (BudgetType | "All Budget Types")[] = ["All Budget Types", "Operating", "Capital", "Ministry"];
  const statuses: (BudgetStatus | "All Status")[] = ["All Status", "In Progress", "Completed"];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 mt-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search */}
        <div className="relative lg:col-span-2">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by budget name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f8f9ff] border border-gray-100 focus:border-[#1B2F5E] focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Year Filter */}
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="w-full bg-[#f8f9ff] border border-gray-100 focus:border-[#1B2F5E] focus:bg-white rounded-xl py-3 px-4 text-sm outline-none transition-all duration-200 text-gray-800 cursor-pointer appearance-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1.25rem',
            backgroundRepeat: 'no-repeat',
            paddingRight: '2.5rem'
          }}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {/* Budget Type Filter */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="w-full bg-[#f8f9ff] border border-gray-100 focus:border-[#1B2F5E] focus:bg-white rounded-xl py-3 px-4 text-sm outline-none transition-all duration-200 text-gray-800 cursor-pointer appearance-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1.25rem',
            backgroundRepeat: 'no-repeat',
            paddingRight: '2.5rem'
          }}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type === "All Budget Types" ? type : `${type} Budgets`}
            </option>
          ))}
        </select>

        {/* Filters Button */}
        <button className="w-full bg-[#f8f9ff] border border-gray-200 hover:bg-[#EEF2FB]/30 hover:border-[#1B2F5E]/30 hover:text-[#1B2F5E] text-gray-600 rounded-xl flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold transition-all duration-200">
          <Filter size={18} />
          Filters
        </button>
      </div>
    </div>
  );
}

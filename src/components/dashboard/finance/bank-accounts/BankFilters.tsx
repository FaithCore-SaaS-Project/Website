"use client";

import { Search, Filter } from "lucide-react";
import { BankAccountType, BankAccountStatus } from "@/types/bank-account";

interface BankFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  typeFilter: string;
  setTypeFilter: (type: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
}

export default function BankFilters({
  searchQuery,
  setSearchQuery,
  typeFilter,
  setTypeFilter,
  statusFilter,
  setStatusFilter,
}: BankFiltersProps) {
  const types: (BankAccountType | "All Account Types")[] = ["All Account Types", "Savings", "Current"];
  const statuses: (BankAccountStatus | "All Status")[] = ["All Status", "Active", "Inactive"];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 mt-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by bank name or account name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f8f9ff] border border-gray-100 focus:border-[#1B2F5E] focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Account Types Dropdown */}
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
              {type === "All Account Types" ? type : `${type} Accounts`}
            </option>
          ))}
        </select>

        {/* Status Dropdown */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full bg-[#f8f9ff] border border-gray-100 focus:border-[#1B2F5E] focus:bg-white rounded-xl py-3 px-4 text-sm outline-none transition-all duration-200 text-gray-800 cursor-pointer appearance-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1.25rem',
            backgroundRepeat: 'no-repeat',
            paddingRight: '2.5rem'
          }}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status === "All Status" ? status : `${status} Accounts`}
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

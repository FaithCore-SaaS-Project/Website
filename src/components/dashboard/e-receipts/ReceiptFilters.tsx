"use client";

import { Search, Filter, Calendar } from "lucide-react";
import { ReceiptCategory, PaymentMethod } from "@/types/receipt";

interface ReceiptFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  methodFilter: string;
  setMethodFilter: (method: string) => void;
  dateFilter: string;
  setDateFilter: (date: string) => void;
}

export default function ReceiptFilters({
  searchQuery,
  setSearchQuery,
  categoryFilter,
  setCategoryFilter,
  methodFilter,
  setMethodFilter,
  dateFilter,
  setDateFilter,
}: ReceiptFiltersProps) {
  const categories: (ReceiptCategory | "All Categories")[] = [
    "All Categories",
    "Tithes",
    "Offerings",
    "Donations",
    "Thanksgiving",
    "Other Income",
    "Event",
  ];

  const methods: (PaymentMethod | "All Payment Methods")[] = [
    "All Payment Methods",
    "Cash",
    "Bank Transfer",
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 mt-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search */}
        <div className="relative lg:col-span-1.5">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by receipt no., name, or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f8f9ff] border border-gray-100 focus:border-[#5b3df5] focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Date Selector */}
        <div className="relative">
          <Calendar
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="w-full bg-[#f8f9ff] border border-gray-100 focus:border-[#5b3df5] focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 text-gray-800"
          />
        </div>

        {/* Categories Dropdown */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full bg-[#f8f9ff] border border-gray-100 focus:border-[#5b3df5] focus:bg-white rounded-xl py-3 px-4 text-sm outline-none transition-all duration-200 text-gray-800 cursor-pointer appearance-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1.25rem',
            backgroundRepeat: 'no-repeat',
            paddingRight: '2.5rem'
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Payment Methods Dropdown */}
        <select
          value={methodFilter}
          onChange={(e) => setMethodFilter(e.target.value)}
          className="w-full bg-[#f8f9ff] border border-gray-100 focus:border-[#5b3df5] focus:bg-white rounded-xl py-3 px-4 text-sm outline-none transition-all duration-200 text-gray-800 cursor-pointer appearance-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1.25rem',
            backgroundRepeat: 'no-repeat',
            paddingRight: '2.5rem'
          }}
        >
          {methods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>

        {/* Filters Button */}
        <button className="w-full bg-[#f8f9ff] border border-gray-200 hover:bg-[#ede9fe]/30 hover:border-[#5b3df5]/30 hover:text-[#5b3df5] text-gray-600 rounded-xl flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold transition-all duration-200">
          <Filter size={18} />
          Filters
        </button>
      </div>
    </div>
  );
}

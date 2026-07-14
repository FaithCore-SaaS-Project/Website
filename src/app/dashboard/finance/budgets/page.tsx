"use client";

import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { Budget } from "@/types/budget";
import BudgetStats from "@/components/dashboard/finance/budgets/BudgetStats";
import BudgetFilters from "@/components/dashboard/finance/budgets/BudgetFilters";
import BudgetsTable from "@/components/dashboard/finance/budgets/BudgetsTable";
import BudgetSidebar from "@/components/dashboard/finance/budgets/BudgetSidebar";

// Mock data matching the screenshot exactly
const mockBudgets: Budget[] = [
  {
    id: "BGT-001",
    name: "Ministry Operations",
    description: "General ministry expenses",
    type: "Operating",
    startDate: "01 Jan 2025",
    endDate: "31 Dec 2025",
    totalBudget: 800000,
    spent: 520000,
    progress: 65,
    status: "In Progress",
    iconColorKey: "violet",
  },
  {
    id: "BGT-002",
    name: "Building Maintenance",
    description: "Church building upkeep",
    type: "Capital",
    startDate: "01 Jan 2025",
    endDate: "31 Dec 2025",
    totalBudget: 600000,
    spent: 310000,
    progress: 52,
    status: "In Progress",
    iconColorKey: "emerald",
  },
  {
    id: "BGT-003",
    name: "Outreach Programs",
    description: "Community outreach expenses",
    type: "Ministry",
    startDate: "01 Jan 2025",
    endDate: "31 Dec 2025",
    totalBudget: 400000,
    spent: 280000,
    progress: 70,
    status: "In Progress",
    iconColorKey: "orange",
  },
  {
    id: "BGT-004",
    name: "Worship Ministry",
    description: "Worship and music expenses",
    type: "Ministry",
    startDate: "01 Jan 2025",
    endDate: "31 Dec 2025",
    totalBudget: 300000,
    spent: 195000,
    progress: 65,
    status: "In Progress",
    iconColorKey: "blue",
  },
  {
    id: "BGT-005",
    name: "Youth Ministry",
    description: "Youth programs and activities",
    type: "Ministry",
    startDate: "01 Jan 2025",
    endDate: "31 Dec 2025",
    totalBudget: 250000,
    spent: 120750,
    progress: 48,
    status: "In Progress",
    iconColorKey: "purple",
  },
  {
    id: "BGT-006",
    name: "Staff Salaries",
    description: "Staff salaries and benefits",
    type: "Operating",
    startDate: "01 Jan 2025",
    endDate: "31 Dec 2025",
    totalBudget: 900000,
    spent: 900000,
    progress: 100,
    status: "Completed",
    iconColorKey: "red",
  },
  {
    id: "BGT-007",
    name: "Utilities",
    description: "Electricity, Water, Internet etc.",
    type: "Operating",
    startDate: "01 Jan 2025",
    endDate: "31 Dec 2025",
    totalBudget: 150000,
    spent: 104000,
    progress: 69,
    status: "In Progress",
    iconColorKey: "cyan",
  },
  {
    id: "BGT-008",
    name: "Education Ministry",
    description: "Sunday School & Training",
    type: "Ministry",
    startDate: "01 Jan 2025",
    endDate: "31 Dec 2025",
    totalBudget: 200000,
    spent: 89000,
    progress: 45,
    status: "In Progress",
    iconColorKey: "yellow",
  },
];

export default function BudgetsPage() {
  // Page filtering states
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("2025");
  const [typeFilter, setTypeFilter] = useState("All Budget Types");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;

  // Filtered Budgets
  const filteredBudgets = useMemo(() => {
    return mockBudgets.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesYear = item.startDate.includes(yearFilter) || item.endDate.includes(yearFilter);
      const matchesType = typeFilter === "All Budget Types" || item.type === typeFilter;
      const matchesStatus = statusFilter === "All Status" || item.status === statusFilter;

      return matchesSearch && matchesYear && matchesType && matchesStatus;
    });
  }, [searchQuery, yearFilter, typeFilter, statusFilter]);

  // Paginated Budgets
  const paginatedBudgets = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredBudgets.slice(startIndex, startIndex + pageSize);
  }, [filteredBudgets, currentPage, pageSize]);

  return (
    <div className="flex flex-col gap-6">
      {/* Title Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-800">Budgets</h1>
          <p className="text-sm text-gray-400 mt-1 font-semibold">
            Dashboard <span className="mx-1 text-gray-300">/</span> Finance <span className="mx-1 text-gray-300">/</span> Budgets
          </p>
        </div>

        {/* Action Button */}
        <button className="bg-[#1B2F5E] hover:bg-[#15254A] text-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-bold shadow-md shadow-[#1B2F5E]/10 hover:shadow-lg transition-all duration-200">
          <Plus size={18} />
          Create New Budget
        </button>
      </div>

      {/* Metrics stats row */}
      <BudgetStats />

      {/* Inputs Filter Bar */}
      <BudgetFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        yearFilter={yearFilter}
        setYearFilter={setYearFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Grid Split Content layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8.5 xl:col-span-9 flex flex-col">
          <BudgetsTable
            budgets={paginatedBudgets}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={filteredBudgets.length}
            pageSize={pageSize}
          />
        </div>
        <div className="lg:col-span-3.5 xl:col-span-3 flex flex-col">
          <BudgetSidebar />
        </div>
      </div>
    </div>
  );
}

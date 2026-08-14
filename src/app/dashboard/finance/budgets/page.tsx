"use client";

import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { Budget } from "@/types/budget";
import BudgetStats from "@/components/dashboard/finance/budgets/BudgetStats";
import BudgetFilters from "@/components/dashboard/finance/budgets/BudgetFilters";
import BudgetsTable from "@/components/dashboard/finance/budgets/BudgetsTable";
import BudgetSidebar from "@/components/dashboard/finance/budgets/BudgetSidebar";

import { useEffect } from "react";
import { fetchApi } from "@/lib/api";

export default function BudgetsPage() {
  // Page filtering states
  const [budgetsData, setBudgetsData] = useState<Budget[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("2025");
  const [typeFilter, setTypeFilter] = useState("All Budget Types");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchApi('/api/budgets');
        const formatted = data.map((d: any) => {
          const total = parseFloat(d.budget_amount) || 0;
          const spent = parseFloat(d.spent_amount) || 0;
          const progress = total > 0 ? Math.round((spent / total) * 100) : 0;
          
          return {
            id: d.id.toString(),
            name: d.name,
            description: d.description || '',
            type: d.type,
            startDate: d.period_start ? new Date(d.period_start).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A',
            endDate: d.period_end ? new Date(d.period_end).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A',
            totalBudget: total,
            spent: spent,
            progress: progress,
            status: d.status || 'In Progress',
            iconColorKey: d.type === 'Operating' ? 'violet' : d.type === 'Capital' ? 'emerald' : 'orange',
          };
        });
        setBudgetsData(formatted);
      } catch (err) {
        console.error("Failed to fetch budgets", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const pageSize = 10;

  // Filtered Budgets
  const filteredBudgets = useMemo(() => {
    return budgetsData.filter((item) => {
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

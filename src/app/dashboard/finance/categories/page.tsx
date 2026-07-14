"use client";

import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { Category } from "@/types/category";
import CategoriesStats from "@/components/dashboard/finance/categories/CategoriesStats";
import CategoriesFilters from "@/components/dashboard/finance/categories/CategoriesFilters";
import CategoriesTable from "@/components/dashboard/finance/categories/CategoriesTable";
import CategoryDetails from "@/components/dashboard/finance/categories/CategoryDetails";

// Full mockup data matching screenshot exactly
const mockCategories: Category[] = [
  {
    id: "CAT-001",
    name: "Tithes",
    type: "Income",
    description: "Tithes received from members",
    status: "Active",
    date: "10 Feb 2025",
    createdTime: "09:30 AM",
    createdBy: "Pastor John",
    transactions: 156,
    totalAmount: 2450000,
    iconName: "tithes",
  },
  {
    id: "CAT-002",
    name: "Offerings",
    type: "Income",
    description: "Offerings and thanksgiving gifts",
    status: "Active",
    date: "10 Feb 2025",
    createdTime: "10:15 AM",
    createdBy: "Pastor John",
    transactions: 320,
    totalAmount: 1845000,
    iconName: "offerings",
  },
  {
    id: "CAT-003",
    name: "Donations",
    type: "Income",
    description: "General donations",
    status: "Active",
    date: "11 Feb 2025",
    createdTime: "02:20 PM",
    createdBy: "Pastor John",
    transactions: 84,
    totalAmount: 1250000,
    iconName: "donations",
  },
  {
    id: "CAT-004",
    name: "Event Income",
    type: "Income",
    description: "Income from church events",
    status: "Active",
    date: "12 Feb 2025",
    createdTime: "11:00 AM",
    createdBy: "Pastor John",
    transactions: 42,
    totalAmount: 850000,
    iconName: "event",
  },
  {
    id: "CAT-005",
    name: "Hall Rent",
    type: "Income",
    description: "Income from hall rentals",
    status: "Active",
    date: "12 Feb 2025",
    createdTime: "04:30 PM",
    createdBy: "Pastor John",
    transactions: 18,
    totalAmount: 450000,
    iconName: "hall-rent",
  },
  {
    id: "CAT-006",
    name: "Ministry Expenses",
    type: "Expense",
    description: "Expenses related to ministries",
    status: "Active",
    date: "10 Feb 2025",
    createdTime: "09:00 AM",
    createdBy: "Pastor John",
    transactions: 98,
    totalAmount: 680000,
    iconName: "ministry",
  },
  {
    id: "CAT-007",
    name: "Utilities",
    type: "Expense",
    description: "Electricity, Water, Internet etc.",
    status: "Active",
    date: "10 Feb 2025",
    createdTime: "11:30 AM",
    createdBy: "Pastor John",
    transactions: 45,
    totalAmount: 240000,
    iconName: "utilities",
  },
  {
    id: "CAT-008",
    name: "Salaries",
    type: "Expense",
    description: "Staff salaries and allowances",
    status: "Active",
    date: "11 Feb 2025",
    createdTime: "09:00 AM",
    createdBy: "Pastor John",
    transactions: 24,
    totalAmount: 950000,
    iconName: "salaries",
  },
  {
    id: "CAT-009",
    name: "Maintenance",
    type: "Expense",
    description: "Building and equipment maintenance",
    status: "Active",
    date: "11 Feb 2025",
    createdTime: "03:00 PM",
    createdBy: "Pastor John",
    transactions: 37,
    totalAmount: 380000,
    iconName: "maintenance",
  },
  {
    id: "CAT-010",
    name: "Office Expenses",
    type: "Expense",
    description: "Stationery and office expenses",
    status: "Active",
    date: "12 Feb 2025",
    createdTime: "10:00 AM",
    createdBy: "Pastor John",
    transactions: 112,
    totalAmount: 154000,
    iconName: "office",
  },
];

export default function CategoriesPage() {
  // Page Filtering States
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>("CAT-001");

  const pageSize = 10;

  // Filtered Categories logic
  const filteredCategories = useMemo(() => {
    return mockCategories.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = typeFilter === "All Types" || item.type === typeFilter;
      const matchesStatus = statusFilter === "All Status" || item.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [searchQuery, typeFilter, statusFilter]);

  // Paginated Categories
  const paginatedCategories = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredCategories.slice(startIndex, startIndex + pageSize);
  }, [filteredCategories, currentPage, pageSize]);

  // Active Category selection preview
  const selectedCategory = useMemo(() => {
    return mockCategories.find((item) => item.id === selectedCategoryId) || null;
  }, [selectedCategoryId]);

  return (
    <div className="flex flex-col gap-6">
      {/* Title Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-800">
            Categories
          </h1>
          <p className="text-sm text-gray-400 mt-1 font-semibold">
            Dashboard <span className="mx-1 text-gray-300">/</span> Finance <span className="mx-1 text-gray-300">/</span> Categories
          </p>
        </div>
        
        {/* Header Action button */}
        <button className="bg-[#1B2F5E] hover:bg-[#15254A] text-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-bold shadow-md shadow-[#1B2F5E]/10 hover:shadow-lg transition-all duration-200">
          <Plus size={18} />
          Add New Category
        </button>
      </div>

      {/* Summary Statistics */}
      <CategoriesStats />

      {/* Inputs Filter Bar */}
      <CategoriesFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Split Grid Body (Table list and Detailed card) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 flex flex-col">
          <CategoriesTable
            categories={paginatedCategories}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={(cat) => setSelectedCategoryId(cat.id)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={filteredCategories.length}
            pageSize={pageSize}
          />
        </div>
        <div className="lg:col-span-4 flex flex-col h-full">
          <CategoryDetails category={selectedCategory} />
        </div>
      </div>
    </div>
  );
}

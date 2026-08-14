"use client";

import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { Category } from "@/types/category";
import CategoriesStats from "@/components/dashboard/finance/categories/CategoriesStats";
import CategoriesFilters from "@/components/dashboard/finance/categories/CategoriesFilters";
import CategoriesTable from "@/components/dashboard/finance/categories/CategoriesTable";
import CategoryDetails from "@/components/dashboard/finance/categories/CategoryDetails";

import { useEffect } from "react";
import { fetchApi } from "@/lib/api";

export default function CategoriesPage() {
  // Page Filtering States
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchApi('/api/finance-categories');
        const formatted = data.map((d: any) => ({
          id: d.id.toString(),
          name: d.name,
          type: d.type,
          description: d.description || '',
          status: d.status || 'Active',
          date: d.created_on ? new Date(d.created_on).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A',
          createdTime: '', // Not strictly required, backend stores created_at
          createdBy: d.created_by || 'Admin',
          transactions: 0, // In a real app this would be an aggregation
          totalAmount: 0,
          iconName: d.type === 'Income' ? 'donations' : 'utilities',
        }));
        setCategoriesData(formatted);
        if (formatted.length > 0) {
          setSelectedCategoryId(formatted[0].id);
        }
      } catch (err) {
        console.error("Failed to fetch finance categories", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const pageSize = 10;

  // Filtered Categories logic
  const filteredCategories = useMemo(() => {
    return categoriesData.filter((item) => {
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
    return categoriesData.find((item) => item.id === selectedCategoryId) || null;
  }, [categoriesData, selectedCategoryId]);

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

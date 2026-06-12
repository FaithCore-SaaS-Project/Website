"use client";

import CategoryRow from "./CategoryRow";
import CategoriesPagination from "./CategoriesPagination";
import { Category } from "@/types/category";

interface CategoriesTableProps {
  categories: Category[];
  selectedCategoryId: string | null;
  onSelectCategory: (category: Category) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
  pageSize: number;
}

export default function CategoriesTable({
  categories,
  selectedCategoryId,
  onSelectCategory,
  currentPage,
  setCurrentPage,
  totalItems,
  pageSize,
}: CategoriesTableProps) {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between h-full">
      <div>
        {/* Table Panel Header */}
        <div className="p-5 border-b border-gray-50 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800">
            All Categories
          </h2>
          {totalItems > 0 && (
            <span className="text-xs text-gray-400 font-semibold bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1">
              Showing {startItem}-{endItem} of {totalItems}
            </span>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-50 bg-[#f8f9ff]/60">
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Category Name
                </th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Description
                </th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Created On
                </th>
                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider w-24">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 ? (
                categories.map((item) => (
                  <CategoryRow
                    key={item.id}
                    item={item}
                    isSelected={selectedCategoryId === item.id}
                    onSelect={() => onSelectCategory(item)}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-gray-400 font-medium animate-pulse">
                    No categories found matching the filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Centered Pagination */}
      <CategoriesPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={totalItems}
        pageSize={pageSize}
      />
    </div>
  );
}

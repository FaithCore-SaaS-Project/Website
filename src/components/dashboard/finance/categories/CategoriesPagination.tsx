"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoriesPaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
  pageSize: number;
}

export default function CategoriesPagination({
  currentPage,
  setCurrentPage,
  totalItems,
  pageSize,
}: CategoriesPaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-1.5 p-5 border-t border-gray-50">
      {/* Previous */}
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="h-10 w-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 disabled:opacity-50 disabled:pointer-events-none bg-white transition-all duration-200"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Pages */}
      {pages.map((page) => {
        const isActive = currentPage === page;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`h-10 w-10 rounded-xl text-sm font-bold transition-all duration-200 ${
              isActive
                ? "bg-[#5b3df5] text-white shadow-md shadow-[#5b3df5]/10"
                : "border border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-700 bg-white"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="h-10 w-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 disabled:opacity-50 disabled:pointer-events-none bg-white transition-all duration-200"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

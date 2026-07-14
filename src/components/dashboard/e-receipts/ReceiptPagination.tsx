"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReceiptPaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalReceipts: number;
  pageSize: number;
}

export default function ReceiptPagination({
  currentPage,
  setCurrentPage,
  totalReceipts,
  pageSize,
}: ReceiptPaginationProps) {
  const totalPages = Math.ceil(totalReceipts / pageSize);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show page 1, 2, 3, 4, 5, ..., totalPages
      pages.push(1, 2, 3, 4, 5);
      pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const pages = getPageNumbers();
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalReceipts);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border-t border-gray-50">
      {/* Display text */}
      <p className="text-sm text-gray-400 font-medium">
        Showing <span className="font-semibold text-gray-700">{startItem}</span> to{" "}
        <span className="font-semibold text-gray-700">{endItem}</span> of{" "}
        <span className="font-semibold text-gray-700">{totalReceipts.toLocaleString()}</span> receipts
      </p>

      {/* Page controls */}
      <div className="flex items-center gap-1.5">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="h-10 w-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 disabled:opacity-50 disabled:pointer-events-none bg-white transition-all duration-200"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Page Buttons */}
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipses-${index}`}
                className="h-10 w-10 flex items-center justify-center text-gray-400 font-semibold select-none"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = currentPage === pageNum;

          return (
            <button
              key={`page-${pageNum}`}
              onClick={() => setCurrentPage(pageNum)}
              className={`h-10 w-10 rounded-xl text-sm font-bold transition-all duration-200 ${
                isActive
                  ? "bg-[#1B2F5E] text-white shadow-md shadow-[#1B2F5E]/10"
                  : "border border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-700 bg-white"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="h-10 w-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 disabled:opacity-50 disabled:pointer-events-none bg-white transition-all duration-200"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

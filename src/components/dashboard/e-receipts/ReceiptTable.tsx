"use client";

import ReceiptRow from "./ReceiptRow";
import ReceiptPagination from "./ReceiptPagination";
import { Receipt } from "@/types/receipt";

interface ReceiptTableProps {
  receipts: Receipt[];
  selectedReceiptId: string | null;
  onSelectReceipt: (receipt: Receipt) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalReceipts: number;
  pageSize: number;
}

export default function ReceiptTable({
  receipts,
  selectedReceiptId,
  onSelectReceipt,
  currentPage,
  setCurrentPage,
  totalReceipts,
  pageSize,
}: ReceiptTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between h-full">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 bg-[#f8f9ff]/60">
              <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Receipt No.
              </th>
              <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                From / Member
              </th>
              <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Amount (Rs.)
              </th>
              <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Method
              </th>
              <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider w-24">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {receipts.length > 0 ? (
              receipts.map((item) => (
                <ReceiptRow
                  key={item.id}
                  item={item}
                  isSelected={selectedReceiptId === item.id}
                  onSelect={() => onSelectReceipt(item)}
                />
              ))
            ) : (
              <tr>
                <td colSpan={8} className="p-12 text-center text-gray-400 font-medium">
                  No receipts found matching the filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <ReceiptPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalReceipts={totalReceipts}
        pageSize={pageSize}
      />
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { Download, Plus } from "lucide-react";
import { Receipt } from "@/types/receipt";
import ReceiptStats from "@/components/dashboard/e-receipts/ReceiptStats";
import ReceiptFilters from "@/components/dashboard/e-receipts/ReceiptFilters";
import ReceiptTable from "@/components/dashboard/e-receipts/ReceiptTable";
import ReceiptPreview from "@/components/dashboard/e-receipts/ReceiptPreview";

import { useEffect } from "react";
import { fetchApi } from "@/lib/api";

export default function EReceiptsPage() {
  // Page states
  const [receiptsData, setReceiptsData] = useState<Receipt[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [methodFilter, setMethodFilter] = useState("All Payment Methods");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedReceiptId, setSelectedReceiptId] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchApi('/api/receipts');
        const formatted = data.map((d: any) => ({
          id: d.receipt_no,
          date: new Date(d.receipt_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          member: {
            name: d.member_name,
            email: d.member_email || 'N/A',
            phone: d.member_phone || 'N/A'
          },
          category: d.category,
          amount: parseFloat(d.amount),
          paymentMethod: d.method,
          status: d.status,
          description: d.description || '',
          receivedBy: d.received_by
        }));
        setReceiptsData(formatted);
        if (formatted.length > 0) {
          setSelectedReceiptId(formatted[0].id);
        }
      } catch (err) {
        console.error("Failed to fetch receipts", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const pageSize = 10;

  // Date parsing utility to compare against YYYY-MM-DD input
  const matchesDateFilter = (itemDateStr: string, filterDateStr: string) => {
    if (!filterDateStr) return true;
    
    // Convert YYYY-MM-DD (e.g. 2025-05-24) to match target date parts
    const filterDate = new Date(filterDateStr);
    const filterYear = filterDate.getFullYear();
    const filterMonth = filterDate.getMonth(); // 0-indexed
    const filterDay = filterDate.getDate();

    // Parse mock date "24 May 2025"
    const parts = itemDateStr.split(" ");
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const monthIndex = months.findIndex(m => parts[1].toLowerCase().startsWith(m.toLowerCase()));
      const year = parseInt(parts[2], 10);

      if (monthIndex !== -1) {
        return year === filterYear && monthIndex === filterMonth && day === filterDay;
      }
    }
    return false;
  };

  // Filtered receipts
  const filteredReceipts = useMemo(() => {
    return receiptsData.filter((item) => {
      const matchesSearch =
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.member.email.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        categoryFilter === "All Categories" || item.category === categoryFilter;

      const matchesMethod =
        methodFilter === "All Payment Methods" || item.paymentMethod === methodFilter;

      const matchesDate = matchesDateFilter(item.date, dateFilter);

      return matchesSearch && matchesCategory && matchesMethod && matchesDate;
    });
  }, [searchQuery, categoryFilter, methodFilter, dateFilter]);

  // Paginated receipts
  const paginatedReceipts = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredReceipts.slice(startIndex, startIndex + pageSize);
  }, [filteredReceipts, currentPage, pageSize]);

  // Selected receipt detail
  const selectedReceipt = useMemo(() => {
    return receiptsData.find((item) => item.id === selectedReceiptId) || null;
  }, [receiptsData, selectedReceiptId]);

  return (
    <div className="flex flex-col gap-6">
      {/* Title Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-800">
            E-Receipts
          </h1>
          <p className="text-sm text-gray-400 mt-1 font-semibold">
            Dashboard <span className="mx-1 text-gray-300">/</span> E-Receipts <span className="mx-1 text-gray-300">/</span> All Receipts
          </p>
        </div>
        
        {/* Header Actions */}
        <div className="flex items-center gap-3">
          <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-bold shadow-sm transition-all duration-200">
            <Download size={18} className="text-gray-500" />
            Export
          </button>
          <button className="bg-[#1B2F5E] hover:bg-[#15254A] text-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-bold shadow-md shadow-[#1B2F5E]/10 hover:shadow-lg transition-all duration-200">
            <Plus size={18} />
            Create New Receipt
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <ReceiptStats />

      {/* Filters Container */}
      <ReceiptFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        methodFilter={methodFilter}
        setMethodFilter={setMethodFilter}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
      />

      {/* Main Grid Content (Table & Preview) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8.5 xl:col-span-9 flex flex-col">
          <ReceiptTable
            receipts={paginatedReceipts}
            selectedReceiptId={selectedReceiptId}
            onSelectReceipt={(receipt) => setSelectedReceiptId(receipt.id)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalReceipts={filteredReceipts.length}
            pageSize={pageSize}
          />
        </div>
        <div className="lg:col-span-3.5 xl:col-span-3 flex flex-col h-full min-h-[580px]">
          <ReceiptPreview receipt={selectedReceipt} />
        </div>
      </div>
    </div>
  );
}

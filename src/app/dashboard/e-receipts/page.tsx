"use client";

import { useState, useMemo } from "react";
import { Download, Plus } from "lucide-react";
import { Receipt } from "@/types/receipt";
import ReceiptStats from "@/components/dashboard/e-receipts/ReceiptStats";
import ReceiptFilters from "@/components/dashboard/e-receipts/ReceiptFilters";
import ReceiptTable from "@/components/dashboard/e-receipts/ReceiptTable";
import ReceiptPreview from "@/components/dashboard/e-receipts/ReceiptPreview";

// Mock Data matching the screenshot exactly
const mockReceipts: Receipt[] = [
  {
    id: "RCP-2025-1082",
    date: "24 May 2025",
    member: { name: "Saman Perera", email: "saman@email.com", phone: "+94 77 123 4567" },
    category: "Tithes",
    amount: 25000,
    paymentMethod: "Cash",
    status: "Emailed",
    description: "Tithes - May 2025",
    receivedBy: "Pastor John",
  },
  {
    id: "RCP-2025-1081",
    date: "24 May 2025",
    member: { name: "Kumara Family", email: "kumara@email.com", phone: "+94 77 987 6543" },
    category: "Offerings",
    amount: 15000,
    paymentMethod: "Cash",
    status: "Emailed",
    description: "Offerings - Sunday Service",
    receivedBy: "Pastor John",
  },
  {
    id: "RCP-2025-1080",
    date: "24 May 2025",
    member: { name: "Nadeesha Fernando", email: "nadeesha@email.com", phone: "+94 71 222 3344" },
    category: "Donations",
    amount: 50000,
    paymentMethod: "Bank Transfer",
    status: "Emailed",
    description: "Donation for Church Building Fund",
    receivedBy: "Pastor John",
  },
  {
    id: "RCP-2025-1079",
    date: "23 May 2025",
    member: { name: "Isuru Jayasinghe", email: "isuru@email.com", phone: "+94 76 555 4433" },
    category: "Tithes",
    amount: 20000,
    paymentMethod: "Bank Transfer",
    status: "Emailed",
    description: "Tithes - May 2025",
    receivedBy: "Pastor John",
  },
  {
    id: "RCP-2025-1078",
    date: "23 May 2025",
    member: { name: "De Silva Family", email: "desilva@email.com", phone: "+94 77 444 5566" },
    category: "Thanksgiving",
    amount: 12000,
    paymentMethod: "Cash",
    status: "Printed",
    description: "Thanksgiving Offering",
    receivedBy: "Pastor John",
  },
  {
    id: "RCP-2025-1077",
    date: "22 May 2025",
    member: { name: "Shenal Perera", email: "shenal@email.com", phone: "+94 70 888 9900" },
    category: "Offerings",
    amount: 10000,
    paymentMethod: "Cash",
    status: "Emailed",
    description: "Sunday Weekly Offering",
    receivedBy: "Pastor John",
  },
  {
    id: "RCP-2025-1076",
    date: "22 May 2025",
    member: { name: "Anonymous", email: "anonymous", phone: "N/A" },
    category: "Donations",
    amount: 30000,
    paymentMethod: "Bank Transfer",
    status: "Emailed",
    description: "General Donation",
    receivedBy: "Pastor John",
  },
  {
    id: "RCP-2025-1075",
    date: "21 May 2025",
    member: { name: "Fernando Family", email: "fernando@email.com", phone: "+94 77 111 2233" },
    category: "Other Income",
    amount: 25000,
    paymentMethod: "Cash",
    status: "Emailed",
    description: "Hall Renting Income",
    receivedBy: "Pastor John",
  },
  {
    id: "RCP-2025-1074",
    date: "21 May 2025",
    member: { name: "Perera Family", email: "perera@email.com", phone: "+94 72 333 4455" },
    category: "Tithes",
    amount: 18000,
    paymentMethod: "Cash",
    status: "Printed",
    description: "Tithes - Mid Month",
    receivedBy: "Pastor John",
  },
  {
    id: "RCP-2025-1073",
    date: "20 May 2025",
    member: { name: "Youth Group", email: "youthgroup@email.com", phone: "+94 75 777 8899" },
    category: "Event",
    amount: 8000,
    paymentMethod: "Cash",
    status: "Emailed",
    description: "Youth Fellowship Event Ticket Sale",
    receivedBy: "Pastor John",
  },
];

export default function EReceiptsPage() {
  // Page states
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [methodFilter, setMethodFilter] = useState("All Payment Methods");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedReceiptId, setSelectedReceiptId] = useState<string | null>("RCP-2025-1082");

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
    return mockReceipts.filter((item) => {
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
    return mockReceipts.find((item) => item.id === selectedReceiptId) || null;
  }, [selectedReceiptId]);

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
          <button className="bg-[#5b3df5] hover:bg-[#4d31db] text-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-bold shadow-md shadow-[#5b3df5]/10 hover:shadow-lg transition-all duration-200">
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

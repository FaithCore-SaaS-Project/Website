"use client";

import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { BankAccount } from "@/types/bank-account";
import BankStats from "@/components/dashboard/finance/bank-accounts/BankStats";
import BankFilters from "@/components/dashboard/finance/bank-accounts/BankFilters";
import BankAccountsTable from "@/components/dashboard/finance/bank-accounts/BankAccountsTable";
import BankAccountDetails from "@/components/dashboard/finance/bank-accounts/BankAccountDetails";
import AccountSummary from "@/components/dashboard/finance/bank-accounts/AccountSummary";

// Mock data matching the screenshot details exactly
const mockBankAccounts: BankAccount[] = [
  {
    id: "CAT-HNB-001",
    bankName: "Hatton National Bank",
    accountName: "Main Church Account",
    accountNumber: "1210 1200 1234 567",
    accountType: "Current",
    balance: 2145600,
    currency: "LKR",
    branch: "Kandy City Branch",
    ledgerBalance: 2145600,
    lastStatementDate: "20 May 2025",
    addedOn: "15 Jan 2024",
    addedBy: "Pastor John",
    status: "Active",
    logoKey: "hnb",
  },
  {
    id: "CAT-COM-002",
    bankName: "Commercial Bank",
    accountName: "Building Fund Account",
    accountNumber: "8001 0012 3456",
    accountType: "Savings",
    balance: 1250000,
    currency: "LKR",
    branch: "Kandy City Branch",
    ledgerBalance: 1250000,
    lastStatementDate: "20 May 2025",
    addedOn: "15 Jan 2024",
    addedBy: "Pastor John",
    status: "Active",
    logoKey: "commercial",
  },
  {
    id: "CAT-PEO-003",
    bankName: "People's Bank",
    accountName: "Mission Fund Account",
    accountNumber: "1632 1000 7890",
    accountType: "Savings",
    balance: 480750,
    currency: "LKR",
    branch: "Kandy City Branch",
    ledgerBalance: 480750,
    lastStatementDate: "20 May 2025",
    addedOn: "15 Jan 2024",
    addedBy: "Pastor John",
    status: "Active",
    logoKey: "peoples",
  },
  {
    id: "CAT-BOC-004",
    bankName: "Bank of Ceylon",
    accountName: "Salary Account",
    accountNumber: "0001 2345 6789",
    accountType: "Current",
    balance: 199400,
    currency: "LKR",
    branch: "Kandy City Branch",
    ledgerBalance: 199400,
    lastStatementDate: "20 May 2025",
    addedOn: "15 Jan 2024",
    addedBy: "Pastor John",
    status: "Active",
    logoKey: "boc",
  },
  {
    id: "CAT-NTB-005",
    bankName: "Nations Trust Bank",
    accountName: "Youth Ministry Account",
    accountNumber: "3000 9876 5432",
    accountType: "Savings",
    balance: 50000,
    currency: "LKR",
    branch: "Kandy City Branch",
    ledgerBalance: 50000,
    lastStatementDate: "20 May 2025",
    addedOn: "15 Jan 2024",
    addedBy: "Pastor John",
    status: "Active",
    logoKey: "ntb",
  },
];

export default function BankAccountsPage() {
  // Filtering states
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Account Types");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>("CAT-HNB-001");

  const pageSize = 10;

  // Filtered Accounts
  const filteredAccounts = useMemo(() => {
    return mockBankAccounts.filter((item) => {
      const matchesSearch =
        item.bankName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.accountName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.accountNumber.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = typeFilter === "All Account Types" || item.accountType === typeFilter;
      const matchesStatus = statusFilter === "All Status" || item.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [searchQuery, typeFilter, statusFilter]);

  // Paginated Accounts
  const paginatedAccounts = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredAccounts.slice(startIndex, startIndex + pageSize);
  }, [filteredAccounts, currentPage, pageSize]);

  // Selected Account details object
  const selectedAccount = useMemo(() => {
    return mockBankAccounts.find((item) => item.id === selectedAccountId) || null;
  }, [selectedAccountId]);

  return (
    <div className="flex flex-col gap-6">
      {/* Title Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-800">
            Bank Accounts
          </h1>
          <p className="text-sm text-gray-400 mt-1 font-semibold">
            Dashboard <span className="mx-1 text-gray-300">/</span> Finance <span className="mx-1 text-gray-300">/</span> Bank Accounts
          </p>
        </div>

        {/* Action Button */}
        <button className="bg-[#1B2F5E] hover:bg-[#15254A] text-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-bold shadow-md shadow-[#1B2F5E]/10 hover:shadow-lg transition-all duration-200">
          <Plus size={18} />
          Add New Bank Account
        </button>
      </div>

      {/* Metrics Row */}
      <BankStats />

      {/* Filters bar */}
      <BankFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Split Grid Section (Table and details panel) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 flex flex-col">
          <BankAccountsTable
            accounts={paginatedAccounts}
            selectedAccountId={selectedAccountId}
            onSelectAccount={(acc) => setSelectedAccountId(acc.id)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={filteredAccounts.length}
            pageSize={pageSize}
          />
        </div>
        <div className="lg:col-span-4 flex flex-col h-full min-h-[420px]">
          <BankAccountDetails account={selectedAccount} />
        </div>
      </div>

      {/* Bottom Full-Width Account Summary chart details */}
      <div className="mt-2">
        <AccountSummary accounts={mockBankAccounts} />
      </div>
    </div>
  );
}

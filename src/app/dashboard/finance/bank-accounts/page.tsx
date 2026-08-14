"use client";

import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { BankAccount } from "@/types/bank-account";
import BankStats from "@/components/dashboard/finance/bank-accounts/BankStats";
import BankFilters from "@/components/dashboard/finance/bank-accounts/BankFilters";
import BankAccountsTable from "@/components/dashboard/finance/bank-accounts/BankAccountsTable";
import BankAccountDetails from "@/components/dashboard/finance/bank-accounts/BankAccountDetails";
import AccountSummary from "@/components/dashboard/finance/bank-accounts/AccountSummary";

import { useEffect } from "react";
import { fetchApi } from "@/lib/api";

export default function BankAccountsPage() {
  // Filtering states
  const [bankAccountsData, setBankAccountsData] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Account Types");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchApi('/api/bank-accounts');
        const formatted = data.map((d: any) => ({
          id: d.id.toString(),
          bankName: d.bank_name,
          accountName: d.account_name,
          accountNumber: d.account_number,
          accountType: d.account_type,
          balance: parseFloat(d.balance),
          currency: d.currency || 'LKR',
          branch: d.branch || 'Main Branch',
          ledgerBalance: parseFloat(d.ledger_balance || d.balance),
          lastStatementDate: d.last_statement_date ? new Date(d.last_statement_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A',
          addedOn: d.created_on ? new Date(d.created_on).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A',
          addedBy: d.created_by || 'Admin',
          status: d.status || 'Active',
          logoKey: d.bank_name.toLowerCase().includes('hatton') ? 'hnb' : 
                   d.bank_name.toLowerCase().includes('commercial') ? 'commercial' :
                   d.bank_name.toLowerCase().includes('people') ? 'peoples' :
                   d.bank_name.toLowerCase().includes('ceylon') ? 'boc' : 'ntb',
        }));
        setBankAccountsData(formatted);
        if (formatted.length > 0) {
          setSelectedAccountId(formatted[0].id);
        }
      } catch (err) {
        console.error("Failed to fetch bank accounts", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const pageSize = 10;

  // Filtered Accounts
  const filteredAccounts = useMemo(() => {
    return bankAccountsData.filter((item) => {
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
    return bankAccountsData.find((item) => item.id === selectedAccountId) || null;
  }, [bankAccountsData, selectedAccountId]);

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
        <AccountSummary accounts={bankAccountsData} />
      </div>
    </div>
  );
}

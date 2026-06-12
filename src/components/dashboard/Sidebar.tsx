"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  DollarSign,
  Mail,
  Award,
  FileText,
  Calendar,
  BarChart3,
  Folder,
  Network,
  UserCog,
  Settings,
  HelpCircle,
  Crown,
  ChevronDown,
  ChevronRight,
  Church
} from "lucide-react";

interface MenuItem {
  name: string;
  icon: any;
  href: string;
  hasSubmenu?: boolean;
  submenu?: { name: string; href: string }[];
}

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Members", icon: Users, href: "/dashboard/members" },
    { name: "Families", icon: UserCheck, href: "/dashboard/families" },
    {
      name: "Finance",
      icon: DollarSign,
      href: "/dashboard/finance",
      hasSubmenu: true,
      submenu: [
        { name: "Overview", href: "/dashboard/finance/overview" },
        { name: "Income", href: "/dashboard/finance/income" },
        { name: "Expenses", href: "/dashboard/finance/expenses" },
        { name: "E-Receipts", href: "/dashboard/e-receipts" },
        { name: "Categories", href: "/dashboard/finance/categories" },
        { name: "Bank Accounts", href: "/dashboard/finance/bank-accounts" },
        { name: "Budgets", href: "/dashboard/finance/budgets" },
      ],
    },
    { name: "Letters", icon: Mail, href: "/dashboard/letters" },
    { name: "Certificates", icon: Award, href: "/dashboard/certificates" },
    { name: "Events", icon: Calendar, href: "/dashboard/events" },
    { name: "Reports", icon: BarChart3, href: "/dashboard/reports" },
    { name: "Documents", icon: Folder, href: "/dashboard/documents" },
    { name: "Departments", icon: Network, href: "/dashboard/departments" },
    { name: "Users & Roles", icon: UserCog, href: "/dashboard/users-roles", hasSubmenu: true },
    { name: "Settings", icon: Settings, href: "/dashboard/settings" },
    { name: "Support", icon: HelpCircle, href: "/dashboard/support" },
  ];

  return (
    <aside className="w-64 bg-[#0d0f1e] text-gray-400 flex flex-col h-screen overflow-y-auto border-r border-[#1a1c30] shrink-0 scrollbar-thin scrollbar-thumb-gray-800">
      {/* Brand Header */}
      <div className="p-6 border-b border-[#1a1c30] flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#5b3df5] to-[#8b5cf6] flex items-center justify-center text-white shrink-0">
          <Church size={22} />
        </div>
        <div className="min-w-0">
          <h2 className="text-white font-bold text-base leading-tight truncate">Kingdom Connect</h2>
          <p className="text-[10px] text-gray-500 font-medium tracking-wider uppercase leading-none mt-0.5">Church Management</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          // Determine if item or its submenu is active
          const isDirectActive = pathname === item.href;
          const isSubmenuActive = item.submenu?.some(sub => pathname === sub.href) || false;
          const isActive = isDirectActive || isSubmenuActive;

          return (
            <div key={item.name} className="space-y-1">
              <Link
                href={item.submenu ? item.submenu[1].href : item.href}
                className={`flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-[#5b3df5] text-white font-semibold shadow-lg shadow-[#5b3df5]/10"
                    : "hover:bg-[#181a30] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={20}
                    className={`transition-colors duration-200 ${
                      isActive ? "text-white" : "text-gray-500 group-hover:text-white"
                    }`}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                {item.hasSubmenu && (
                  <div>
                    {item.name === "Finance" ? (
                      <ChevronDown size={14} className={isActive ? "text-white" : "text-gray-500"} />
                    ) : (
                      <ChevronRight size={14} className="text-gray-500" />
                    )}
                  </div>
                )}
              </Link>

              {/* Submenu rendering with connecting tree lines */}
              {item.name === "Finance" && isActive && (
                <div className="relative pl-6 ml-5 my-1 border-l border-[#232646] space-y-1">
                  {item.submenu?.map((sub) => {
                    const isSubActive = pathname === sub.href;
                    return (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`flex items-center py-2 px-3 rounded-lg text-xs relative transition-all duration-200 ${
                          isSubActive
                            ? "text-white font-semibold bg-[#1a1c38]"
                            : "text-gray-500 hover:text-white hover:bg-[#15172d]"
                        }`}
                      >
                        {/* Tree line connector */}
                        <div className="absolute left-[-24px] top-1/2 w-4 h-[1px] bg-[#232646]" />
                        {isSubActive && (
                          <span className="absolute left-[-26px] top-[14px] w-1 h-1 rounded-full bg-[#5b3df5]" />
                        )}
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Premium Subscription Plan Box */}
      <div className="p-4 m-4 rounded-2xl bg-gradient-to-br from-[#13152d] to-[#1a1c3e] border border-[#232646] flex flex-col items-center text-center">
        <div className="h-10 w-10 rounded-full bg-[#ffaa00]/10 flex items-center justify-center text-[#ffaa00] mb-3">
          <Crown size={20} />
        </div>
        <h4 className="text-white font-semibold text-sm">Premium Plan</h4>
        <p className="text-[11px] text-gray-500 mt-1">Valid Until 31 Dec 2025</p>
        <button className="mt-4 w-full bg-[#5b3df5]/10 hover:bg-[#5b3df5] text-[#8b7dfa] hover:text-white text-xs py-2.5 px-4 rounded-xl font-semibold transition-all duration-200">
          View Plan Details
        </button>
      </div>
    </aside>
  );
}

"use client";

import { Menu, Search, Bell, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
      {/* Left side: Hamburger and Search */}
      <div className="flex items-center gap-6 flex-1 max-w-xl">
        <button className="text-gray-500 hover:text-gray-700 transition-colors md:hidden">
          <Menu size={22} />
        </button>
        <div className="relative w-full">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search members, receipts, families..."
            className="w-full bg-[#f8f9ff] text-sm text-gray-800 pl-11 pr-4 py-3 rounded-xl border border-transparent focus:border-[#5b3df5] focus:bg-white outline-none transition-all duration-200 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right side: Action Badges and User Profile */}
      <div className="flex items-center gap-8">
        {/* Notifications */}
        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-all duration-200">
          <div className="relative">
            <Bell size={20} className="text-gray-500" />
            <span className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-[#ef4444] text-[9px] font-bold text-white flex items-center justify-center rounded-full ring-2 ring-white">
              8
            </span>
          </div>
          <span className="text-sm font-medium text-gray-600 hidden lg:inline">Notifications</span>
        </button>

        {/* Messages */}
        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-all duration-200">
          <div className="relative">
            <Mail size={20} className="text-gray-500" />
            <span className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-[#5b3df5] text-[9px] font-bold text-white flex items-center justify-center rounded-full ring-2 ring-white">
              4
            </span>
          </div>
          <span className="text-sm font-medium text-gray-600 hidden lg:inline">Messages</span>
        </button>

        {/* Divider */}
        <div className="h-8 w-[1px] bg-gray-200 hidden sm:block" />

        {/* User Info */}
        <div className="flex items-center gap-3 cursor-pointer group select-none">
          <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#5b3df5] transition-all duration-200">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Pastor John"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left hidden sm:block">
            <h4 className="text-sm font-bold text-gray-800 leading-none">Pastor John</h4>
            <p className="text-[11px] text-gray-400 mt-1 font-medium leading-none">Super Admin</p>
          </div>
          <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors hidden sm:block" />
        </div>
      </div>
    </header>
  );
}

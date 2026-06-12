"use client";

import { Info } from "lucide-react";

interface LegendItem {
  name: string;
  amount: number;
  percentage: number;
  color: string;
}

const legendItems: LegendItem[] = [
  { name: "Staff Salaries", amount: 900000, percentage: 25.0, color: "#ef4444" },
  { name: "Ministry Operations", amount: 800000, percentage: 22.2, color: "#8b5cf6" },
  { name: "Building Maintenance", amount: 600000, percentage: 16.7, color: "#10b981" },
  { name: "Outreach", amount: 400000, percentage: 11.1, color: "#f59e0b" },
  { name: "Worship Ministry", amount: 300000, percentage: 8.3, color: "#3b82f6" },
  { name: "Youth Ministry", amount: 250000, percentage: 6.9, color: "#a855f7" },
  { name: "Education Ministry", amount: 200000, percentage: 5.6, color: "#eab308" },
  { name: "Utilities", amount: 150000, percentage: 4.2, color: "#64748b" },
];

const activities = [
  { text: "Ministry Operations budget updated", time: "2 hours ago" },
  { text: "Building Maintenance budget created", time: "1 day ago" },
  { text: "Outreach Programs budget updated", time: "3 days ago" },
];

export default function BudgetSidebar() {
  const totalBudget = 3600000;
  const totalSpent = 2430750;
  const remaining = totalBudget - totalSpent;
  const progressPercent = (totalSpent / totalBudget) * 100; // 67.52%

  // SVG parameters
  const radius = 60;
  const strokeWidth = 18;
  const circumference = 2 * Math.PI * radius; // ~376.99
  const center = radius + strokeWidth; // 60 + 18 = 78
  const svgSize = center * 2; // 156

  // Calculate slice coordinates
  let accumulatedPercentage = 0;
  const slices = legendItems.map((item) => {
    const slicePercentage = item.percentage / 100;
    const strokeLength = slicePercentage * circumference;
    const strokeOffset = -(accumulatedPercentage * circumference);
    accumulatedPercentage += slicePercentage;

    return {
      name: item.name,
      color: item.color,
      strokeLength,
      strokeOffset,
    };
  });

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* 1. Budget Overview Card (SVG doughnut chart) */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 text-sm mb-4">Budget Overview (This Year)</h3>
        
        {/* Doughnut Chart */}
        <div className="flex justify-center relative my-4">
          <div className="relative" style={{ width: svgSize, height: svgSize }}>
            <svg
              width={svgSize}
              height={svgSize}
              viewBox={`0 0 ${svgSize} ${svgSize}`}
              className="-rotate-90 transform"
            >
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="transparent"
                stroke="#f8f9fa"
                strokeWidth={strokeWidth}
              />
              {slices.map((slice, i) => (
                <circle
                  key={i}
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="transparent"
                  stroke={slice.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${slice.strokeLength} ${circumference}`}
                  strokeDashoffset={slice.strokeOffset}
                  className="transition-all duration-300"
                />
              ))}
            </svg>

            {/* Inner center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">
                Total Budget
              </span>
              <span className="text-xs font-black text-gray-800 mt-0.5">
                Rs. {formatAmount(totalBudget).split(".")[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Legend listing */}
        <div className="mt-5 space-y-2.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
          {legendItems.map((item, i) => (
            <div key={i} className="flex justify-between items-center text-[10px] font-semibold">
              <div className="flex items-center gap-2 min-w-0">
                <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-gray-500 truncate">{item.name}</span>
              </div>
              <div className="text-right pl-3 text-gray-700 shrink-0">
                <span>{item.percentage.toFixed(1)}%</span>
                <span className="text-[8px] text-gray-400 font-medium block">
                  Rs. {formatAmount(item.amount).split(".")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Budget Summary Card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 text-sm mb-4">Budget Summary</h3>
        <div className="space-y-3.5 text-xs font-semibold text-gray-500">
          <div className="flex justify-between">
            <span className="text-gray-400">Total Budgeted</span>
            <span className="text-gray-800">Rs. {formatAmount(totalBudget)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Total Spent</span>
            <span className="text-gray-800">Rs. {formatAmount(totalSpent)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Remaining Budget</span>
            <span className="text-emerald-600 font-bold">Rs. {formatAmount(remaining)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Overall Progress</span>
            <span className="text-[#5b3df5] font-black">{progressPercent.toFixed(1)}%</span>
          </div>
        </div>

        {/* Progress Fill bar */}
        <div className="mt-5">
          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-[#5b3df5] h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3. Recent Budget Activities Card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800 text-sm">Recent Activities</h3>
          <button className="text-[10px] font-bold text-[#5b3df5] hover:text-[#4d31db]">View All</button>
        </div>
        
        <ul className="space-y-4">
          {activities.map((act, i) => (
            <li key={i} className="flex gap-2.5 items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-[#5b3df5] mt-1.5 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-700 leading-snug">
                  {act.text}
                </p>
                <span className="text-[9px] text-gray-400 font-semibold block mt-0.5">
                  {act.time}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

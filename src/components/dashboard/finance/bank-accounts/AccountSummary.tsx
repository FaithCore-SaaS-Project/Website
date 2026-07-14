"use client";

import { BankAccount } from "@/types/bank-account";

interface AccountSummaryProps {
  accounts: BankAccount[];
}

const colors = [
  "#1B2F5E", // HNB - Violet
  "#00b4d8", // Commercial - Cyan
  "#10b981", // Peoples - Emerald
  "#f59e0b", // BOC - Orange/Amber
  "#ec4899", // Nations Trust - Pink/Rose
];

export default function AccountSummary({ accounts }: AccountSummaryProps) {
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  // Compute SVG Doughnut Chart parameters
  const radius = 70;
  const strokeWidth = 24;
  const circumference = 2 * Math.PI * radius; // 2 * 3.14159 * 70 = 439.82
  const center = radius + strokeWidth; // 70 + 24 = 94
  const svgSize = center * 2; // 188

  let accumulatedPercentage = 0;
  const chartSlices = accounts.map((acc, index) => {
    const percentage = totalBalance > 0 ? acc.balance / totalBalance : 0;
    const strokeLength = percentage * circumference;
    const strokeOffset = -(accumulatedPercentage * circumference);
    accumulatedPercentage += percentage;

    return {
      id: acc.id,
      name: acc.bankName,
      accountName: acc.accountName,
      balance: acc.balance,
      percentage: percentage * 100,
      strokeLength,
      strokeOffset,
      color: colors[index % colors.length],
    };
  });

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Account Summary</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Pure SVG Doughnut Chart */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative" style={{ width: svgSize, height: svgSize }}>
            <svg
              width={svgSize}
              height={svgSize}
              viewBox={`0 0 ${svgSize} ${svgSize}`}
              className="-rotate-90 transform"
            >
              {/* Background Gray Circle */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="transparent"
                stroke="#f1f5f9"
                strokeWidth={strokeWidth}
              />
              {/* Slices */}
              {chartSlices.map((slice) => (
                <circle
                  key={slice.id}
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="transparent"
                  stroke={slice.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${slice.strokeLength} ${circumference}`}
                  strokeDashoffset={slice.strokeOffset}
                  strokeLinecap={slice.percentage > 1 ? "round" : "butt"}
                  className="transition-all duration-500 ease-out"
                />
              ))}
            </svg>

            {/* Centered Labels */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                Total Balance
              </span>
              <span className="text-sm font-black text-gray-800 mt-1">
                Rs. {formatAmount(totalBalance).split(".")[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Account Balance Legends */}
        <div className="lg:col-span-7 space-y-4">
          <div className="max-h-[220px] overflow-y-auto pr-2 space-y-3 scrollbar-thin">
            {chartSlices.map((slice) => (
              <div key={slice.id} className="flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Legend Dot */}
                  <span
                    className="h-2.5 w-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: slice.color }}
                  />
                  <div className="truncate">
                    <span className="text-gray-700 block leading-tight truncate">
                      {slice.name}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium truncate block mt-0.5">
                      {slice.accountName}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0 pl-4">
                  <span className="text-gray-800 block">
                    Rs. {formatAmount(slice.balance)}
                  </span>
                  <span className="text-[10px] text-gray-400 font-semibold block mt-0.5">
                    {slice.percentage.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 pt-3" />

          {/* Total Footer Row */}
          <div className="flex justify-between items-center text-sm font-black text-gray-800">
            <span>Total</span>
            <div className="text-right">
              <span>Rs. {formatAmount(totalBalance)}</span>
              <span className="text-[10px] text-gray-400 font-bold block mt-0.5">
                100%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

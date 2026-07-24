"use client";

import { useState } from "react";
import { Check } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Plan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  button: string;
  highlighted: boolean;
  badge?: string;
  features: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLANS: Plan[] = [
  {
    name: "Free",
    monthlyPrice: "LKR 0",
    annualPrice: "LKR 0",
    description: "Perfect for small churches getting started.",
    button: "Start Free",
    highlighted: false,
    features: [
      "Up to 50 Members",
      "2 Admin Users",
      "500 MB Storage",
      "3 Departments limit",
      "Basic Member Records & Families",
      "Events & Documents Storage",
    ],
  },
  {
    name: "Basic",
    monthlyPrice: "LKR 3,300",
    annualPrice: "LKR 2,640",
    description: "Ideal for growing congregations.",
    button: "Choose Basic",
    highlighted: false,
    features: [
      "Up to 150 Members",
      "300 Free SMS included",
      "5 Admin Users",
      "2 GB Storage",
      "5 Departments limit",
      "Certificates & Letters PDF",
      "Finance Charts & Online Giving (Mobile)",
      "CSV Data Export",
    ],
  },
  {
    name: "Standard",
    monthlyPrice: "LKR 6,300",
    annualPrice: "LKR 5,040",
    description: "Most popular plan for active ministries.",
    button: "Choose Standard",
    highlighted: true,
    badge: "MOST POPULAR",
    features: [
      "Up to 400 Members",
      "800 Free SMS included",
      "10 Admin Users",
      "5 GB Storage",
      "15 Departments limit",
      "Bank Accounts & Budgets planning",
      "E-Receipts (Email & Print Layout)",
      "All 8 Report types & Attendance",
      "Custom Roles & Permissions",
      "Mobile Push Notifications",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: "LKR 11,000",
    annualPrice: "LKR 8,800",
    description: "Everything your large ministry needs.",
    button: "Choose Premium",
    highlighted: false,
    features: [
      "Up to 750 Members",
      "1,500 Free SMS included",
      "20 Admin Users",
      "15 GB Storage",
      "30 Departments limit",
      "Export Reports to CSV",
      "Third-Party Integrations (Stripe/QB)",
      "Data Backup & Restore",
      "System Audit Logs",
      "Priority Email & Phone Support",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: "LKR 18,500",
    annualPrice: "LKR 14,800",
    description: "Built for large active multi-ministries.",
    button: "Choose Pro",
    highlighted: false,
    features: [
      "Up to 1,000 Members",
      "2,000 Free SMS included",
      "30 Admin Users",
      "30 GB Storage",
      "50 Departments limit",
      "Automated Backup Scheduling",
      "Backup Storage Management",
      "Dedicated Technical Support",
    ],
  },
  {
    name: "Unlimited",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    description: "For dioceses and denomination networks.",
    button: "Contact Sales",
    highlighted: false,
    features: [
      "Unlimited Members & Users",
      "Custom SMS Packages",
      "Unlimited Storage & Departments",
      "Dedicated Account Manager",
      "Custom pricing agreements",
    ],
  },
];

// ─── PricingCard ──────────────────────────────────────────────────────────────

function PricingCard({
  plan,
  isAnnual,
  onSelectPlan
}: {
  plan: Plan;
  isAnnual: boolean;
  onSelectPlan: (plan: Plan) => void;
}) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const isCustom = price === "Custom";
  const isFree = plan.monthlyPrice === "LKR 0";

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[32px] border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        plan.highlighted ? "border-[#1B2F5E] ring-2 ring-[#1B2F5E]" : ""
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute right-4 top-4 rounded-full bg-[#1B2F5E] px-3 py-1 text-[10px] font-bold text-white">
          {plan.badge}
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-xl font-bold text-[#111827]">{plan.name}</h3>

      {/* Description */}
      <p className="mt-3 text-xs text-gray-500 min-h-[32px]">{plan.description}</p>

      {/* Price */}
      <div className="mt-6">
        <span className="text-2xl font-extrabold text-[#111827]">{price}</span>
        {!isCustom && !isFree && (
          <span className="ml-1 text-xs text-gray-500">/month</span>
        )}
      </div>

      {/* Annual savings label */}
      {isAnnual && !isCustom && !isFree && (
        <p className="mt-1 text-[10px] font-medium text-green-600">
          Billed annually — save 20%
        </p>
      )}

      {/* CTA Button */}
      <button
        onClick={() => {
          const hasToken = typeof window !== "undefined" && !!localStorage.getItem("token");
          if (isFree || isCustom || !hasToken) {
            window.location.href = `/register?plan=${plan.name}`;
            return;
          }
          onSelectPlan(plan);
        }}
        className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
          plan.highlighted
            ? "bg-[#1B2F5E] text-white shadow-md shadow-[#1B2F5E]/30 hover:bg-[#15254A]"
            : "border border-gray-300 hover:bg-gray-50"
        }`}
      >
        {plan.button}
      </button>

      {/* Divider */}
      <div className="my-6 border-t" />

      {/* Features */}
      <ul className="flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check size={14} className="mt-0.5 shrink-0 text-green-500" />
            <span className="text-xs text-gray-700 leading-normal">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Checkout Modal ────────────────────────────────────────────────────────────

function CheckoutModal({
  plan,
  isAnnual,
  onClose
}: {
  plan: Plan | null;
  isAnnual: boolean;
  onClose: () => void;
}) {
  const [loadingPaypal, setLoadingPaypal] = useState(false);
  const [loadingPayhere, setLoadingPayhere] = useState(false);

  if (!plan) return null;

  const handlePaypal = async () => {
    setLoadingPaypal(true);
    const apiHost = process.env.NEXT_PUBLIC_API_URL || "https://api.faithcore.org";
    try {
      const response = await fetch(`${apiHost}/api/checkout/paypal`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          plan_name: plan.name,
          is_annual: isAnnual,
          success_url: window.location.origin + "/register/success",
          cancel_url: window.location.origin + "/pricing?payment=cancel"
        })
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("PayPal Checkout failed. Please try again.");
        setLoadingPaypal(false);
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to payment server.");
      setLoadingPaypal(false);
    }
  };

  const handlePayhere = async () => {
    setLoadingPayhere(true);
    const apiHost = process.env.NEXT_PUBLIC_API_URL || "https://api.faithcore.org";
    try {
      const response = await fetch(`${apiHost}/api/checkout/payhere`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          plan_name: plan.name,
          is_annual: isAnnual,
          success_url: window.location.origin + "/register/success",
          cancel_url: window.location.origin + "/pricing?payment=cancel"
        })
      });
      const data = await response.json();
      
      if (data.payhere_url) {
        // Create hidden form to submit to PayHere
        const form = document.createElement("form");
        form.method = "POST";
        form.action = data.payhere_url;

        Object.keys(data).forEach(key => {
          if (key !== "payhere_url") {
            const hiddenField = document.createElement("input");
            hiddenField.type = "hidden";
            hiddenField.name = key;
            hiddenField.value = data[key];
            form.appendChild(hiddenField);
          }
        });

        document.body.appendChild(form);
        form.submit();
      } else {
        alert("PayHere Checkout failed. Please try again.");
        setLoadingPayhere(false);
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to payment server.");
      setLoadingPayhere(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">Checkout</h3>
        <p className="text-sm text-gray-500 mb-6">
          You selected the <span className="font-bold text-[#1B2F5E]">{plan.name}</span> plan. How would you like to pay?
        </p>

        <div className="space-y-4">
          <button
            onClick={handlePayhere}
            disabled={loadingPaypal || loadingPayhere}
            className="w-full flex items-center justify-center gap-2 bg-[#2D3192] hover:bg-[#20236a] text-white py-4 rounded-xl font-bold transition-all disabled:opacity-50"
          >
            {loadingPayhere ? "Processing..." : "Pay with PayHere"}
            <span className="text-[10px] font-normal bg-white/20 px-2 py-0.5 rounded-full ml-1">Sri Lanka</span>
          </button>

          <button
            onClick={handlePaypal}
            disabled={loadingPaypal || loadingPayhere}
            className="w-full flex items-center justify-center gap-2 bg-[#0070BA] hover:bg-[#005ea6] text-white py-4 rounded-xl font-bold transition-all disabled:opacity-50"
          >
            {loadingPaypal ? "Processing..." : "Pay with PayPal"}
            <span className="text-[10px] font-normal bg-white/20 px-2 py-0.5 rounded-full ml-1">International</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── PricingCards ─────────────────────────────────────────────────────────────

export default function PricingCards({ isAnnual }: { isAnnual: boolean }) {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <section className="pb-20 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {PLANS.map((plan) => (
            <PricingCard 
              key={plan.name} 
              plan={plan} 
              isAnnual={isAnnual} 
              onSelectPlan={setSelectedPlan}
            />
          ))}
        </div>
      </div>

      {/* SMS Top-up Section */}
      <div className="mx-auto max-w-4xl px-6 mt-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#1B2F5E] to-[#203a7a] p-8 sm:p-10 shadow-2xl relative overflow-hidden text-white flex flex-col md:flex-row items-center gap-8">
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl" />
          
          <div className="flex-1 relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-black mb-2 flex items-center justify-center md:justify-start gap-3">
              <span className="bg-white/10 p-2 rounded-xl border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              Need more SMS?
            </h3>
            <p className="text-blue-100 text-sm mt-3 leading-relaxed">
              If you run out of your monthly free SMS allocation, you can easily purchase top-up credits from your dashboard. <strong className="text-white">Credits never expire!</strong>
            </p>
          </div>
          
          <div className="w-full md:w-auto relative z-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-full">
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex justify-between items-center gap-4 border-b border-white/10 pb-2">
                  <span className="font-bold">500 <span className="text-blue-200 text-xs font-normal">SMS</span></span>
                  <span className="font-bold text-blue-200">Rs. 500</span>
                </div>
                <div className="flex justify-between items-center gap-4 border-b border-white/10 pb-2">
                  <span className="font-bold">1,000 <span className="text-blue-200 text-xs font-normal">SMS</span></span>
                  <span className="font-bold text-blue-200">Rs. 1,000</span>
                </div>
                <div className="flex justify-between items-center gap-4 pt-1">
                  <span className="font-bold">2,000 <span className="text-blue-200 text-xs font-normal">SMS</span></span>
                  <span className="font-bold text-blue-200">Rs. 2,000</span>
                </div>
                <div className="flex justify-between items-center gap-4 pt-1">
                  <span className="font-bold">5,000 <span className="text-blue-200 text-xs font-normal">SMS</span></span>
                  <span className="font-bold text-blue-200">Rs. 5,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal 
        plan={selectedPlan} 
        isAnnual={isAnnual} 
        onClose={() => setSelectedPlan(null)} 
      />
    </section>
  );
}

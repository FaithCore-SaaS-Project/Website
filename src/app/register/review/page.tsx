"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Building2,
  User,
  CheckCircle,
  ArrowLeft,
  ShieldCheck,
  Check,
  AlertCircle
} from "lucide-react";

export default function ReviewCreatePage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activationCode, setActivationCode] = useState("");
  const [error, setError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("Free");

  const [churchInfo, setChurchInfo] = useState<any>({
    churchName: "Faith Community Church",
    denomination: "Pentecostal",
    address: "123 Main Street",
    city: "Colombo",
    country: "Sri Lanka",
    province: "Western Province",
    phoneNumber: "+94 71 234 5678",
    email: "info@church.com",
    website: "",
  });

  const [adminInfo, setAdminInfo] = useState<any>({
    firstName: "Pastor John",
    lastName: "Smith",
    email: "john@church.com",
    phone: "+94 71 123 4567",
    username: "johnsmith",
    password: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedChurch = sessionStorage.getItem("register_church_info");
      const savedAdmin = sessionStorage.getItem("register_admin_info");
      const savedPlan = sessionStorage.getItem("selected_plan");
      if (savedChurch) {
        try { setChurchInfo(JSON.parse(savedChurch)); } catch(e) {}
      }
      if (savedAdmin) {
        try { setAdminInfo(JSON.parse(savedAdmin)); } catch(e) {}
      }
      if (savedPlan) {
        setSelectedPlan(savedPlan);
      }
    }
  }, []);

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }
    
    setIsSubmitting(true);
    setError("");

    try {
      const apiHost = process.env.NEXT_PUBLIC_API_URL || "https://api.faithcore.org";
      const response = await fetch(`${apiHost}/api/register`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          church_name: churchInfo.churchName,
          denomination: churchInfo.denomination,
          address: churchInfo.address,
          city: churchInfo.city,
          country: churchInfo.country,
          church_phone: churchInfo.phoneNumber,
          church_email: churchInfo.email,
          first_name: adminInfo.firstName,
          last_name: adminInfo.lastName,
          email: adminInfo.email,
          phone: adminInfo.phone,
          password: adminInfo.password,
          plan_name: selectedPlan,
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed. Please check details and try again.");
      }

      setActivationCode(data.church?.registration_no || "FC-XXXXXX");

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", adminInfo.firstName + " " + adminInfo.lastName);
        localStorage.setItem("tenantId", data.church?.id);
        localStorage.setItem("churchName", data.church?.church_name);
      }

      sessionStorage.removeItem("register_church_info");
      sessionStorage.removeItem("register_admin_info");

      setIsSubmitting(false);
      setShowSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f5ff] text-[#111827]">
      
      {/* ── Success Modal Overlay ───────────────────────────── */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md transition-all duration-300">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl animate-in scale-in duration-300">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-500">
              <Check size={44} strokeWidth={3} className="animate-bounce" />
            </div>
            <h2 className="mt-6 text-3xl font-black text-gray-900">
              Account Created!
            </h2>
            
            {selectedPlan !== "Free" ? (
              <>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Your account has been initialized on the <span className="font-bold text-[#1B2F5E]">{selectedPlan} Plan</span>. To activate your paid plan features, please proceed to checkout.
                </p>
                <div className="mt-6 p-4 rounded-2xl bg-indigo-50 border border-indigo-100/80 text-center">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block">YOUR CHURCH ACTIVATION ID</span>
                  <strong className="text-2xl font-mono text-[#1B2F5E] mt-1.5 block tracking-widest">{activationCode}</strong>
                  <p className="text-[10px] text-indigo-500/80 mt-1 leading-normal">
                    Save this ID. You will need it to log in to the Desktop App.
                  </p>
                </div>
                <button
                  onClick={() => router.push("/pricing")}
                  className="mt-8 w-full py-4 bg-green-600 text-white font-bold rounded-2xl shadow-lg shadow-green-600/20 hover:bg-green-700 hover:shadow-xl transition-all duration-200"
                >
                  Proceed to Payment
                </button>
                <p className="mt-4 text-xs text-gray-400">
                  Complete your checkout to activate your subscription.
                </p>
              </>
            ) : (
              <>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Your FaithCore organization tenant and administrator accounts have been initialized successfully on the Free Plan.
                </p>
                <div className="mt-6 p-4 rounded-2xl bg-indigo-50 border border-indigo-100/80 text-center">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block">YOUR CHURCH ACTIVATION ID</span>
                  <strong className="text-2xl font-mono text-[#1B2F5E] mt-1.5 block tracking-widest">{activationCode}</strong>
                  <p className="text-[10px] text-indigo-500/80 mt-1 leading-normal">
                    Use this ID to activate your Desktop Software and invite your members in the Mobile App!
                  </p>
                </div>
                <button
                  onClick={() => router.push("/features#download")}
                  className="mt-8 w-full py-4 bg-[#1B2F5E] text-white font-bold rounded-2xl shadow-lg shadow-[#1B2F5E]/20 hover:bg-[#15254A] hover:shadow-xl transition-all duration-200"
                >
                  Download Desktop App
                </button>
                <p className="mt-4 text-xs text-gray-400">
                  Install the desktop app to log in and manage your church using your Activation ID.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <div className="flex min-h-screen items-center justify-center p-6 md:p-12 xl:p-16">
        <div className="w-full max-w-5xl rounded-[40px] bg-white p-8 shadow-xl border border-gray-100/80 md:p-12">
          
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF2FB] text-[#1B2F5E]">
              <CheckCircle size={40} />
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Review &amp; Create
            </h1>
            <p className="mt-2 text-gray-500">
              Please double check your configuration details prior to initiating server setup
            </p>
          </div>

          {/* Stepper Progress */}
          <div className="mt-8 flex items-center justify-center gap-4 md:gap-8">
            <Step number="1" title="Church Info" completed />
            <div className="h-0.5 w-8 bg-green-500" />
            <Step number="2" title="Admin Details" completed />
            <div className="h-0.5 w-8 bg-green-500" />
            <Step number="3" title="Review & Create" active />
          </div>

          {/* Review Details Container */}
          <div className="mt-12 space-y-8">
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 flex items-center gap-3 text-red-700 animate-in fade-in">
                <AlertCircle className="shrink-0" size={24} />
                <p className="text-sm font-semibold">{error}</p>
              </div>
            )}
            
            {/* Church Information review block */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3 border-b pb-4">
                <Building2 className="text-[#1B2F5E]" size={24} />
                <h2 className="text-xl font-bold text-gray-900">
                  Church Information
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <InfoItem label="Church Name" value={churchInfo.churchName} />
                <InfoItem label="Denomination" value={churchInfo.denomination} />
                <InfoItem label="Address" value={churchInfo.address} />
                <InfoItem label="City" value={churchInfo.city} />
                <InfoItem label="Country" value={churchInfo.country} />
                <InfoItem label="Province / State" value={churchInfo.province} />
                <InfoItem label="Phone Number" value={churchInfo.phoneNumber} />
                <InfoItem label="Church Email" value={churchInfo.email} />
              </div>
            </div>

            {/* Admin Information review block */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3 border-b pb-4">
                <User className="text-[#1B2F5E]" size={24} />
                <h2 className="text-xl font-bold text-gray-900">
                  Administrator Details
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <InfoItem label="Full Name" value={`${adminInfo.firstName} ${adminInfo.lastName}`} />
                <InfoItem label="Username" value={adminInfo.username} />
                <InfoItem label="Email Address" value={adminInfo.email} />
                <InfoItem label="Phone Number" value={adminInfo.phone} />
              </div>
            </div>

            {/* Subscription Plan selection card */}
            <div className="rounded-3xl border border-[#1B2F5E]/20 bg-[#faf9ff] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#1B2F5E]" size={24} />
                <h2 className="text-xl font-bold text-gray-900">
                  Selected Plan
                </h2>
              </div>
              <div className="mt-6 flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-bold text-[#1B2F5E]">
                    Standard Plan
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Up to 2,000 Members • Desktop Companion App • Finance Accounting Module • Custom Certificates
                  </p>
                </div>
                <div className="mt-4 text-left sm:mt-0 sm:text-right shrink-0">
                  <h3 className="text-2xl font-black text-gray-900">
                    LKR 9,900
                  </h3>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    per month
                  </p>
                </div>
              </div>
            </div>

            {/* Terms and conditions agreement checkbox */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <label className="flex items-start gap-3 select-none cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-[#1B2F5E] focus:ring-[#1B2F5E]/30 cursor-pointer"
                />
                <span className="text-sm text-gray-600 leading-relaxed">
                  I agree to the FaithCore Terms of Service, Privacy Policy, automated billing subscription terms, and database security guidelines.
                </span>
              </label>
            </div>

            {/* Form actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
              <Link
                href="/register/admin-details"
                className="flex items-center justify-center gap-3 rounded-2xl border border-gray-300 px-8 py-4 font-bold text-gray-700 hover:bg-gray-50 transition-all duration-200 text-center"
              >
                <ArrowLeft size={18} />
                Back
              </Link>
              <button
                onClick={handleCreateAccount}
                disabled={!agreed || isSubmitting}
                className={`rounded-2xl px-12 py-4 font-bold text-white shadow-md transition-all duration-200 ${
                  agreed && !isSubmitting
                    ? "bg-[#1B2F5E] shadow-[#1B2F5E]/30 hover:bg-[#4c30df] hover:shadow-lg hover:shadow-[#1B2F5E]/40 hover:-translate-y-0.5 active:translate-y-0"
                    : "bg-gray-300 cursor-not-allowed text-gray-500 shadow-none"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Deploying System...
                  </span>
                ) : (
                  "Create Church Account"
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

function Step({
  number,
  title,
  completed = false,
  active = false,
}: {
  number: string;
  title: string;
  completed?: boolean;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full font-bold text-sm shadow-sm transition-all ${
          active
            ? "bg-[#1B2F5E] text-white shadow-[#1B2F5E]/30"
            : completed
            ? "bg-green-500 text-white shadow-green-500/30"
            : "border border-gray-200 bg-white text-gray-400"
        }`}
      >
        {number}
      </div>
      <span className={`mt-2 hidden text-xs font-semibold md:block ${active ? "text-[#1B2F5E]" : completed ? "text-green-600" : "text-gray-400"}`}>
        {title}
      </span>
    </div>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-gray-50/50 p-4 border border-gray-100">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-gray-800">
        {value}
      </p>
    </div>
  );
}

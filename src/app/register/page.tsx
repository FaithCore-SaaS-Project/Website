"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Users,
  ShieldCheck,
  Heart,
  BarChart3,
  Building2,
  MapPin,
  Globe,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  
  // State variables for form inputs
  const [churchName, setChurchName] = useState("");
  const [denomination, setDenomination] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("Sri Lanka");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  // Load from sessionStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const planParam = params.get("plan");
      if (planParam) {
        sessionStorage.setItem("selected_plan", planParam);
      } else if (!sessionStorage.getItem("selected_plan")) {
        sessionStorage.setItem("selected_plan", "Free");
      }

      const saved = sessionStorage.getItem("register_church_info");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.churchName) setChurchName(parsed.churchName);
          if (parsed.denomination) setDenomination(parsed.denomination);
          if (parsed.address) setAddress(parsed.address);
          if (parsed.city) setCity(parsed.city);
          if (parsed.country) setCountry(parsed.country);
          if (parsed.province) setProvince(parsed.province);
          if (parsed.postalCode) setPostalCode(parsed.postalCode);
          if (parsed.phoneNumber) setPhoneNumber(parsed.phoneNumber);
          if (parsed.email) setEmail(parsed.email);
          if (parsed.website) setWebsite(parsed.website);
        } catch (e) {
          console.error("Failed to parse church info", e);
        }
      }
    }
  }, []);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      sessionStorage.setItem(
        "register_church_info",
        JSON.stringify({
          churchName,
          denomination,
          address,
          city,
          country,
          province,
          postalCode,
          phoneNumber,
          email,
          website,
        })
      );
    }

    // Navigate to Step 2: Admin Details
    router.push("/register/admin-details");
  };

  return (
    <main className="min-h-screen bg-[#f7f5ff] text-[#111827]">
      <div className="grid min-h-screen lg:grid-cols-[40%_60%]">
        
        {/* ── LEFT SIDE: Brand Sidebar ─────────────────────────────────── */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#fcfbff] to-[#f3f0ff] px-12 py-12 xl:px-16">
          
          {/* Logo & Header */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B2F5E] font-black text-white text-2xl shadow-lg shadow-[#1B2F5E]/30 hover:scale-105 transition-transform duration-200">
              FC
            </Link>
            <div>
              <h2 className="text-2xl font-black tracking-tight text-gray-900">
                FaithCore
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Church Management System
              </p>
            </div>
          </div>

          {/* Heading */}
          <div className="my-10 max-w-lg">
            <h1 className="text-5xl font-black leading-[1.15] text-gray-900 xl:text-6xl">
              Let&apos;s Get Your
              <br />
              Church Set Up
              <span className="bg-gradient-to-r from-[#1B2F5E] to-[#8066ff] bg-clip-text text-transparent">
                {" "}Together
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Create your organization tenant and unlock specialized tools for member directories, secure financial accounting, customized certificates, and event coordination.
            </p>

            {/* Feature List */}
            <div className="mt-12 space-y-7">
              <Feature
                icon={<Users size={22} />}
                title="All-in-One Solution"
                desc="Consolidate all database features, reports, communications, and finances."
              />
              <Feature
                icon={<ShieldCheck size={22} />}
                title="Secure & Reliable"
                desc="Enterprise-grade cloud encryption, strict data access controls, and backups."
              />
              <Feature
                icon={<BarChart3 size={22} />}
                title="Trusted by Churches"
                desc="Empowering over 1,500+ active ministries and growing daily."
              />
              <Feature
                icon={<Heart size={22} />}
                title="Made for Ministry"
                desc="Intuitively customized layouts designed for pastoral administrative workflows."
              />
            </div>
          </div>

          {/* Bottom Card */}
          <div className="max-w-sm rounded-2xl bg-white/80 p-5 shadow-lg shadow-[#1B2F5E]/5 backdrop-blur-md border border-white/50">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3 shrink-0">
                <div className="h-9 w-9 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-indigo-700">A</div>
                <div className="h-9 w-9 rounded-full bg-violet-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-violet-700">M</div>
                <div className="h-9 w-9 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-purple-700">J</div>
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">
                  Trusted by 1,500+ Churches
                </h4>
                <p className="text-xs text-gray-500">
                  Active worldwide across multiple denominations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT SIDE: Step 1 Registration Form ─────────────────────── */}
        <div className="flex items-center justify-center p-6 md:p-12 xl:p-16">
          <div className="w-full max-w-4xl rounded-3xl bg-white p-8 shadow-xl shadow-gray-200/50 border border-gray-100/80 md:p-12">
            
            {/* Header */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF2FB] text-[#1B2F5E]">
                <Building2 size={28} />
              </div>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900">
                Create Your Church Account
              </h2>
              <p className="mt-2 text-gray-500">
                Fill in the details below to initialize Step 1 of onboarding
              </p>
            </div>

            {/* Stepper Progress */}
            <div className="mt-8 flex items-center justify-center gap-4 md:gap-8">
              <Step active number="1" title="Church Information" />
              <div className="h-0.5 w-8 bg-gray-200" />
              <Step number="2" title="Admin Details" />
              <div className="h-0.5 w-8 bg-gray-200" />
              <Step number="3" title="Review & Create" />
            </div>

            {/* Form */}
            <form onSubmit={handleNextStep} className="mt-10 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                
                {/* Church Name */}
                <Input
                  label="Church Name"
                  required
                  value={churchName}
                  onChange={setChurchName}
                  icon={<Building2 size={18} />}
                  placeholder="e.g. Faith Community Church"
                />

                {/* Denomination select */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Denomination
                  </label>
                  <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 focus-within:border-[#1B2F5E] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1B2F5E]/10 transition-all">
                    <Building2 size={18} className="text-gray-400 shrink-0" />
                    <select
                      required
                      value={denomination}
                      onChange={(e) => setDenomination(e.target.value)}
                      className="ml-3 w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none cursor-pointer"
                    >
                      <option value="" disabled>Select denomination</option>
                      <option value="Pentecostal">Pentecostal</option>
                      <option value="Baptist">Baptist</option>
                      <option value="Methodist">Methodist</option>
                      <option value="Anglican">Anglican</option>
                      <option value="Assembly of God">Assembly of God</option>
                      <option value="Non-Denominational">Non-Denominational</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Address */}
                <Input
                  label="Address"
                  required
                  value={address}
                  onChange={setAddress}
                  icon={<MapPin size={18} />}
                  placeholder="Enter church street address"
                />

                {/* City */}
                <Input
                  label="City"
                  required
                  value={city}
                  onChange={setCity}
                  icon={<MapPin size={18} />}
                  placeholder="Enter city"
                />

                {/* Country */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Country
                  </label>
                  <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 focus-within:border-[#1B2F5E] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1B2F5E]/10 transition-all">
                    <Globe size={18} className="text-gray-400 shrink-0" />
                    <select
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="ml-3 w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none cursor-pointer"
                    >
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="India">India</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                </div>

                {/* State / Province */}
                <Input
                  label="State / Province"
                  required
                  value={province}
                  onChange={setProvince}
                  icon={<MapPin size={18} />}
                  placeholder="Enter State or Province"
                />

                {/* Postal Code */}
                <Input
                  label="Postal Code"
                  required
                  value={postalCode}
                  onChange={setPostalCode}
                  icon={<MapPin size={18} />}
                  placeholder="Postal/ZIP code"
                />

                {/* Phone Number */}
                <Input
                  label="Phone Number"
                  required
                  type="tel"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  icon={<Phone size={18} />}
                  placeholder="+94 71 234 5678"
                />
              </div>

              {/* Email */}
              <Input
                label="Church Email"
                required
                type="email"
                value={email}
                onChange={setEmail}
                icon={<Mail size={18} />}
                placeholder="church@example.com"
              />

              {/* Website */}
              <Input
                label="Church Website (Optional)"
                type="url"
                value={website}
                onChange={setWebsite}
                icon={<Globe size={18} />}
                placeholder="https://yourchurch.com"
              />

              {/* Security Notice */}
              <div className="rounded-2xl border border-gray-200 bg-[#faf9ff] p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={24} className="text-[#1B2F5E] shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">
                      Your data is safe with us
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Industry-standard TLS encryption, rigid storage protocols, and custom tenant sandboxes keep church information protected.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1B2F5E] py-4 text-base font-semibold text-white shadow-md shadow-[#1B2F5E]/30 hover:bg-[#4b30df] hover:shadow-lg hover:shadow-[#1B2F5E]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Continue to Admin Details
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </form>

            {/* Back to Login Link */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Already have an account?
              <Link href="/login" className="ml-2 font-bold text-[#1B2F5E] hover:text-[#4b30df] hover:underline transition-all">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FB] text-[#1B2F5E] shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 leading-tight">{title}</h3>
        <p className="mt-1 text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  active = false,
}: {
  number: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-sm shadow-sm transition-all ${
          active
            ? "bg-[#1B2F5E] text-white shadow-[#1B2F5E]/30"
            : "border border-gray-200 bg-white text-gray-400"
        }`}
      >
        {number}
      </div>
      <span className={`mt-2 hidden text-xs font-semibold md:block ${active ? "text-[#1B2F5E]" : "text-gray-400"}`}>
        {title}
      </span>
    </div>
  );
}

function Input({
  label,
  placeholder,
  value,
  onChange,
  icon,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  icon?: React.ReactNode;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 focus-within:border-[#1B2F5E] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1B2F5E]/10 transition-all">
        {icon && <div className="text-gray-400 shrink-0">{icon}</div>}
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${icon ? "ml-3" : ""} w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none`}
        />
      </div>
    </div>
  );
}

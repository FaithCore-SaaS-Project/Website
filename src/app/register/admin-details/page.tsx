"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function AdminDetailsPage() {
  const router = useRouter();

  // State variables for inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Navigate to Step 3: Review Details
    router.push("/register/review");
  };

  return (
    <main className="min-h-screen bg-[#f7f5ff] text-[#111827]">
      <div className="flex min-h-screen items-center justify-center p-6 md:p-12 xl:p-16">
        <div className="w-full max-w-5xl rounded-[40px] bg-white p-8 shadow-xl border border-gray-100/80 md:p-12">
          
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#ede9fe] text-[#5B3DF5]">
              <User size={36} />
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Admin Details
            </h1>
            <p className="mt-2 text-gray-500">
              Create the primary administrator account for your FaithCore system
            </p>
          </div>

          {/* Stepper Progress */}
          <div className="mt-8 flex items-center justify-center gap-4 md:gap-8">
            <Step number="1" title="Church Info" completed />
            <div className="h-0.5 w-8 bg-green-500" />
            <Step number="2" title="Admin Details" active />
            <div className="h-0.5 w-8 bg-gray-200" />
            <Step number="3" title="Review & Create" />
          </div>

          {/* Form */}
          <form onSubmit={handleNextStep} className="mt-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              
              {/* First Name */}
              <Input
                label="Pastor / Admin First Name"
                required
                value={firstName}
                onChange={setFirstName}
                placeholder="Enter first name"
                icon={<User size={18} />}
              />

              {/* Last Name */}
              <Input
                label="Last Name"
                required
                value={lastName}
                onChange={setLastName}
                placeholder="Enter last name"
                icon={<User size={18} />}
              />

              {/* Email */}
              <Input
                label="Email Address"
                type="email"
                required
                value={email}
                onChange={setEmail}
                placeholder="admin@church.com"
                icon={<Mail size={18} />}
              />

              {/* Phone */}
              <Input
                label="Phone Number"
                type="tel"
                required
                value={phone}
                onChange={setPhone}
                placeholder="+94 71 234 5678"
                icon={<Phone size={18} />}
              />

              {/* Username */}
              <div className="md:col-span-2">
                <Input
                  label="Username"
                  required
                  value={username}
                  onChange={setUsername}
                  placeholder="Choose an administrator username (e.g. pastorjohn)"
                  icon={<User size={18} />}
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 focus-within:border-[#5B3DF5] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#5B3DF5]/10 transition-all">
                  <Lock size={18} className="text-gray-400 shrink-0" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="ml-3 w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600 shrink-0 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>
                <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 focus-within:border-[#5B3DF5] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#5B3DF5]/10 transition-all">
                  <Lock size={18} className="text-gray-400 shrink-0" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm admin password"
                    className="ml-3 w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-400 hover:text-gray-600 shrink-0 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="rounded-2xl border border-gray-200 bg-[#faf9ff] p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck size={24} className="text-[#5B3DF5] shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-gray-900">
                    Secure Administrator Account
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    This account will serve as the system Super Administrator. It grants full reading, writing, financial tracking, and security credential editing authorizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Form actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
              <Link
                href="/register"
                className="flex items-center justify-center gap-3 rounded-2xl border border-gray-300 px-8 py-4 font-bold text-gray-700 hover:bg-gray-50 transition-all duration-200 text-center"
              >
                <ArrowLeft size={18} />
                Back
              </Link>
              <button
                type="submit"
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#5B3DF5] px-10 py-4 font-bold text-white shadow-md shadow-[#5B3DF5]/30 hover:bg-[#4c30df] hover:shadow-lg hover:shadow-[#5B3DF5]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Continue
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

function Step({
  number,
  title,
  active = false,
  completed = false,
}: {
  number: string;
  title: string;
  active?: boolean;
  completed?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full font-bold text-sm shadow-sm transition-all ${
          active
            ? "bg-[#5B3DF5] text-white shadow-[#5B3DF5]/30"
            : completed
            ? "bg-green-500 text-white shadow-green-500/30"
            : "border border-gray-200 bg-white text-gray-400"
        }`}
      >
        {number}
      </div>
      <span className={`mt-2 hidden text-xs font-semibold md:block ${active ? "text-[#5B3DF5]" : completed ? "text-green-600" : "text-gray-400"}`}>
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
      <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 focus-within:border-[#5B3DF5] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#5B3DF5]/10 transition-all">
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

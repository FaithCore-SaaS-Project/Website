"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Users,
  Wallet,
  CalendarDays,
  BarChart3,
  Hash,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState<"email" | "code">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [churchCode, setChurchCode] = useState("");
  const [passcode, setPasscode] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login and redirect to the dashboard
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#f7f5ff] text-[#111827]">
      <div className="grid min-h-screen lg:grid-cols-2">
        
        {/* ── LEFT SIDE: Brand & Benefits ──────────────────────────────── */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#fcfbff] to-[#f3f0ff] px-12 py-16 xl:px-20">
          
          {/* Logo & Header */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B3DF5] font-black text-white text-2xl shadow-lg shadow-[#5B3DF5]/30 hover:scale-105 transition-transform duration-200">
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

          {/* Value Propositions */}
          <div className="my-12 max-w-xl">
            <h1 className="text-5xl font-black leading-[1.15] text-gray-900 xl:text-6xl">
              Manage Your Church.
              <br />
              Empower Your Ministry.
              <br />
              <span className="bg-gradient-to-r from-[#5B3DF5] to-[#8066ff] bg-clip-text text-transparent">
                Impact More Lives.
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              An all-in-one platform built to consolidate member information, track donations, organize events, generate certificates, and empower ministries.
            </p>

            {/* Features Row */}
            <div className="mt-12 space-y-6">
              <Feature
                icon={<Users size={22} />}
                title="Member Management"
                desc="Keep your church members and families organized in a robust directory."
              />
              <Feature
                icon={<Wallet size={22} />}
                title="Finance & Donations"
                desc="Securely track tithes, offerings, expenses, and issue giving receipts."
              />
              <Feature
                icon={<CalendarDays size={22} />}
                title="Events & Schedules"
                desc="Manage service bookings, ministry calendar, and registrations."
              />
              <Feature
                icon={<BarChart3 size={22} />}
                title="Reports & Insights"
                desc="Harness automatic visual metrics on giving trends and growth."
              />
              <Feature
                icon={<ShieldCheck size={22} />}
                title="Secure & Reliable"
                desc="Bank-grade encryption safeguards your congregation's sensitive data."
              />
            </div>
          </div>

          {/* Social Proof trust badge */}
          <div className="max-w-md rounded-2xl bg-white/80 p-5 shadow-lg shadow-[#5b3df5]/5 backdrop-blur-md border border-white/50">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ede9fe] text-[#5B3DF5]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  Trusted by 1,500+ Churches
                </h3>
                <p className="text-xs text-gray-500">
                  Providing fast, secure management across ministries globally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT SIDE: Login form ──────────────────────────────────── */}
        <div className="flex items-center justify-center bg-gray-50/50 p-6 md:p-12 xl:p-20">
          <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-xl shadow-gray-200/50 border border-gray-100/80 md:p-12">
            
            <div className="text-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Welcome Back! 👋
              </h2>
              <p className="mt-3 text-gray-500">
                Sign in to your FaithCore account
              </p>
            </div>

            {/* Billing / Auth Tabs */}
            <div className="mt-8 grid grid-cols-2 border-b">
              <button
                onClick={() => setLoginMethod("email")}
                className={`pb-4 font-semibold text-sm transition-all duration-200 border-b-2 ${
                  loginMethod === "email"
                    ? "border-[#5B3DF5] text-[#5B3DF5]"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setLoginMethod("code")}
                className={`pb-4 font-semibold text-sm transition-all duration-200 border-b-2 ${
                  loginMethod === "code"
                    ? "border-[#5B3DF5] text-[#5B3DF5]"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                Login with Church Code
              </button>
            </div>

            <form onSubmit={handleSignIn} className="mt-8 space-y-5">
              {loginMethod === "email" ? (
                <>
                  {/* Email Field */}
                  <div>
                    <label className="mb-2.5 block text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 focus-within:border-[#5B3DF5] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#5B3DF5]/10 transition-all">
                      <Mail size={18} className="text-gray-400 shrink-0" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="ml-3 w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <div className="mb-2.5 flex justify-between">
                      <label className="text-sm font-semibold text-gray-700">
                        Password
                      </label>
                      <button type="button" className="text-xs font-semibold text-[#5B3DF5] hover:text-[#4b30df] transition-colors">
                        Forgot Password?
                      </button>
                    </div>
                    <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 focus-within:border-[#5B3DF5] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#5B3DF5]/10 transition-all">
                      <Lock size={18} className="text-gray-400 shrink-0" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="ml-3 w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-600 shrink-0 transition-colors"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Church Code Field */}
                  <div>
                    <label className="mb-2.5 block text-sm font-semibold text-gray-700">
                      Church Code
                    </label>
                    <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 focus-within:border-[#5B3DF5] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#5B3DF5]/10 transition-all">
                      <Hash size={18} className="text-gray-400 shrink-0" />
                      <input
                        type="text"
                        required
                        value={churchCode}
                        onChange={(e) => setChurchCode(e.target.value)}
                        placeholder="e.g. FC-10029"
                        className="ml-3 w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                      />
                    </div>
                  </div>

                  {/* Passcode Field */}
                  <div>
                    <label className="mb-2.5 block text-sm font-semibold text-gray-700">
                      Passcode
                    </label>
                    <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 focus-within:border-[#5B3DF5] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#5B3DF5]/10 transition-all">
                      <Lock size={18} className="text-gray-400 shrink-0" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        placeholder="Enter admin passcode"
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
                </>
              )}

              {/* Remember Options */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2.5 text-sm font-medium text-gray-600 select-none cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-[#5B3DF5] focus:ring-[#5B3DF5]/30 cursor-pointer"
                  />
                  Remember me
                </label>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Keep me signed in
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5B3DF5] py-4 text-base font-semibold text-white shadow-md shadow-[#5B3DF5]/30 hover:bg-[#4b30df] hover:shadow-lg hover:shadow-[#5B3DF5]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Sign In
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-100"></div>
              <span className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                or continue with
              </span>
              <div className="h-px flex-1 bg-gray-100"></div>
            </div>

            {/* Social Logins */}
            <div className="grid gap-3 sm:grid-cols-2">
              <button className="flex items-center justify-center gap-2.5 rounded-2xl border border-gray-200 bg-white py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all duration-200">
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.64 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2.5 rounded-2xl border border-gray-200 bg-white py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all duration-200">
                <svg className="h-4 w-4 shrink-0 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm12 0h10v10H13V13z" />
                </svg>
                Microsoft
              </button>
            </div>

            {/* Footer Form link */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Don&apos;t have an account?
              <Link href="/register" className="ml-2 font-bold text-[#5B3DF5] hover:text-[#4b30df] hover:underline transition-all">
                Create Account
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
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ede9fe] text-[#5B3DF5] shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 leading-tight">{title}</h3>
        <p className="mt-1 text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

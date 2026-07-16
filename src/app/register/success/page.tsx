"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Download, ArrowRight, Copy, Check } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function RegisterSuccessPage() {
  const [activationCode, setActivationCode] = useState("FC-XXXXXX");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const code = localStorage.getItem("activationCode");
      if (code) {
        setActivationCode(code);
      }
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(activationCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F9FC]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-2xl bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-2xl shadow-indigo-900/5 text-center animate-in fade-in zoom-in duration-300">
          
          {/* Success Checkmark Circle */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100">
            <CheckCircle2 size={56} strokeWidth={1.5} className="animate-pulse" />
          </div>

          <h1 className="mt-8 text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
            Subscription Activated!
          </h1>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
            Thank you! Your payment has been processed successfully and your FaithCore organization space has been activated.
          </p>

          {/* Activation ID Box */}
          <div className="mt-8 p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100/60 max-w-md mx-auto relative overflow-hidden">
            <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest block">YOUR CHURCH ACTIVATION ID</span>
            
            <div className="flex items-center justify-center gap-3 mt-2">
              <strong className="text-3xl font-mono text-[#1B2F5E] tracking-widest pl-6">
                {activationCode}
              </strong>
              
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-indigo-100/60 rounded-lg text-indigo-500 transition-colors"
                title="Copy Code"
              >
                {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
              </button>
            </div>

            <p className="text-[11px] text-indigo-600/80 mt-2 leading-relaxed max-w-xs mx-auto">
              Please save this ID. It is required to log in to the Desktop Client.
            </p>
          </div>

          {/* Step by Step Onboarding */}
          <div className="mt-10 text-left max-w-md mx-auto space-y-5">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">NEXT STEPS</h3>
            
            <div className="flex items-start gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">1</span>
              <div>
                <p className="text-xs font-bold text-gray-900">Download the App</p>
                <p className="text-[11px] text-gray-500">Download the installer for Windows or macOS below.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">2</span>
              <div>
                <p className="text-xs font-bold text-gray-900">Launch &amp; Enter Activation ID</p>
                <p className="text-[11px] text-gray-500">Launch the desktop app and enter your Activation ID ({activationCode}).</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">3</span>
              <div>
                <p className="text-xs font-bold text-gray-900">Log In</p>
                <p className="text-[11px] text-gray-500">Enter your Administrator Email and Password to begin managing your church.</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/features#download"
              className="w-full sm:flex-1 py-4 bg-[#1B2F5E] text-white font-bold rounded-2xl shadow-lg shadow-[#1B2F5E]/20 hover:bg-[#15254A] hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Desktop App
            </Link>
            
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold rounded-2xl border border-gray-200 transition-colors flex items-center justify-center gap-1.5"
            >
              Return Home
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

import React from 'react';
import { FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | FaithCore',
  description: 'Terms and Conditions for using FaithCore Church Management Software.',
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="relative bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white/50 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-2xl mb-6 shadow-sm shadow-brand-200/50">
            <FileText className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-display">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-slate-500 font-medium">
            Effective Date: August 3, 2026
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 prose prose-slate prose-lg max-w-none">
          <p className="lead text-xl text-slate-700 font-medium mb-8">
            These Terms and Conditions (“Terms”) govern access to and use of FaithCore, a Church Management Software (SaaS) platform owned and operated by JS Christian Productions (Pvt) Ltd (“Company,” “we,” “our,” or “us”).
          </p>
          <p className="text-slate-600 mb-8">
            FaithCore includes the FaithCore website, web-based software platform, desktop applications, mobile applications, subscription services, and related products and services (collectively, the “Services”). By registering for, purchasing, accessing, downloading, or using FaithCore, you agree to these Terms. If you are using FaithCore on behalf of a church or other organization, you represent that you are authorized to accept these Terms on behalf of that organization. If you do not agree to these Terms, you should not access or use the Services.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">1</span>
              About FaithCore
            </h2>
            <p className="text-slate-600 mb-4">FaithCore is a church management platform designed to assist churches and authorized organizations with managing administrative and operational activities.</p>
            <p className="text-slate-600 mb-4">Depending on the applicable subscription plan and available features, FaithCore may provide functionality relating to: Church and organization management, Member management, Attendance management, Giving and donation records, Financial and administrative records, Events and registrations, Announcements and communications, Prayer requests, User roles and permissions, Reports and related administrative functionality, Desktop, web, and mobile access, Data synchronization and related cloud services.</p>
            <p className="text-slate-600 mb-4">Features may differ depending on the subscription plan, application version, platform, organization configuration, and availability of particular Services.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">2</span>
              Eligibility and Authority
            </h2>
            <p className="text-slate-600 mb-4">You must have the legal capacity and appropriate authority to create or operate a FaithCore account.</p>
            <p className="text-slate-600 mb-4">If you create an account on behalf of a church or organization, you confirm that:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
              <li>You are authorized to represent that organization for purposes of using FaithCore;</li>
              <li>The information provided during registration is accurate to the best of your knowledge; and</li>
              <li>You have appropriate authority to enter and manage information submitted through the Services.</li>
            </ul>
            <p className="text-slate-600 mb-4">Users must not impersonate another person or organization or provide intentionally false or misleading registration information.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">3</span>
              Account Registration
            </h2>
            <p className="text-slate-600 mb-4">Certain FaithCore Services require registration. When registering, users may be required to provide information including Church or organization information, Administrator information, Email address, Telephone number, Password, and Other information required to establish the account.</p>
            <p className="text-slate-600 mb-4">FaithCore may assign a unique Church Activation ID, registration identifier, invite code, or similar identifier to an organization. You are responsible for ensuring that registration information remains accurate and up to date.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">4</span>
              Account Security
            </h2>
            <p className="text-slate-600 mb-4">Users are responsible for maintaining the confidentiality and security of their Passwords, OTP verification codes, Activation IDs where applicable, Account credentials, and Authentication information.</p>
            <p className="text-slate-600 mb-4">You must not knowingly allow unauthorized persons to access your account. You should notify us promptly if you believe an account or credential has been compromised. We may take reasonable security measures, including temporarily restricting access to an account, where we suspect unauthorized activity, fraud, abuse, or a security threat.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">5</span>
              Church Administrators and Member Accounts
            </h2>
            <p className="text-slate-600 mb-4">FaithCore may provide different account types and permission levels. Church administrators may be permitted to create, manage, approve, restrict, or otherwise administer accounts and information associated with their organization. Members may access features made available to them by their church and according to their assigned permissions. Access to administrative functionality is subject to role-based authorization and the configuration of the relevant church account.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">6</span>
              Subscription Plans & Pricing
            </h2>
            <p className="text-slate-600 mb-4">Certain FaithCore Services are provided through free or paid subscription plans. Available plans, pricing, features, usage limits, and subscription periods will be displayed on the FaithCore website or communicated during the purchasing process. Subscription plans may differ based on factors such as Number of members, Available features, Storage or usage limits, and Subscription duration.</p>
            <p className="text-slate-600 mb-4">Customers should review the applicable plan details before purchasing. We may introduce, modify, or discontinue subscription plans from time to time. Changes affecting an existing paid subscription will be handled in accordance with applicable law and the terms presented to the customer.</p>
            <p className="text-slate-600 mb-4">Prices for FaithCore subscription plans are displayed on the official FaithCore website or during checkout. Unless otherwise stated, customers are responsible for any applicable taxes, charges, or fees associated with their purchase. We may change pricing for future purchases or renewal periods. Where required, customers will be informed of applicable pricing before completing a transaction.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">7</span>
              Payments
            </h2>
            <p className="text-slate-600 mb-4">Payments for FaithCore subscriptions may be processed through PayHere and/or other authorized third-party payment service providers. By making a payment, you agree to provide accurate billing and transaction information. Payment processing may also be subject to the applicable payment provider’s terms and policies.</p>
            <p className="text-slate-600 mb-4">JS Christian Productions (Pvt) Ltd does not directly store complete payment card information such as full card numbers or card security codes where those details are processed by the applicable payment service provider.</p>
            <p className="text-slate-600 mb-4">A subscription may be activated after successful confirmation of payment. If a payment fails, is declined, reversed, disputed, or otherwise not successfully completed, access to paid features may not be activated or may be restricted as appropriate.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">8</span>
              Cancellation & Refunds
            </h2>
            <p className="text-slate-600 mb-4">Customers may request cancellation of a subscription according to the cancellation options made available through FaithCore or by contacting us. Cancellation of a subscription does not necessarily result in an automatic refund. Refund eligibility is determined according to the applicable Refund & Cancellation Policy and applicable law. Unless otherwise stated or required by law, cancellation generally prevents future renewal while access may continue until the end of an already-paid subscription period.</p>
            <p className="text-slate-600 mb-4">Refund requests are handled according to the FaithCore Refund & Cancellation Policy published on the official FaithCore website. Nothing in these Terms limits any non-waivable consumer rights available under applicable law.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">9</span>
              Acceptable Use
            </h2>
            <p className="text-slate-600 mb-4">You agree to use FaithCore only for lawful and authorized purposes. You must not:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
              <li>Use FaithCore for unlawful or fraudulent activities;</li>
              <li>Attempt to gain unauthorized access to another user’s or church’s account;</li>
              <li>Access or attempt to access data belonging to another organization without authorization;</li>
              <li>Circumvent authentication, permissions, security controls, or usage limits;</li>
              <li>Upload malicious software or harmful code;</li>
              <li>Intentionally interfere with the availability or operation of the Services;</li>
              <li>Attempt to exploit vulnerabilities in the Services;</li>
              <li>Use automated methods to improperly extract or scrape information;</li>
              <li>Use FaithCore to distribute unlawful, harmful, abusive, or fraudulent content;</li>
              <li>Misrepresent your identity or authority;</li>
              <li>Reverse engineer, decompile, or attempt to derive proprietary source code except where such restriction is prohibited by applicable law;</li>
              <li>Resell, sublicense, or commercially redistribute FaithCore without written authorization.</li>
            </ul>
            <p className="text-slate-600 mb-4">We may investigate suspected violations and take reasonable action where necessary.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">10</span>
              Church and Member Data
            </h2>
            <p className="text-slate-600 mb-4">Churches and organizations are responsible for information they enter, upload, collect, or manage through FaithCore. The relevant organization is responsible for ensuring that Information is collected lawfully; Appropriate permissions or consent are obtained where required; Users are granted appropriate access; Information entered into the platform is reasonably accurate; FaithCore is used in accordance with applicable privacy and data protection requirements.</p>
            <p className="text-slate-600 mb-4">FaithCore processes information according to our Privacy Policy and the functionality of the Services.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">11</span>
              Intellectual Property
            </h2>
            <p className="text-slate-600 mb-4">FaithCore, including its software, source code, design, user interfaces, branding, logos, graphics, documentation, and related materials, is owned by or licensed to JS Christian Productions (Pvt) Ltd and is protected by applicable intellectual property laws. Except for the limited right to use the Services according to these Terms, no ownership rights are transferred to users.</p>
            <p className="text-slate-600 mb-4">“FaithCore” and associated branding may not be copied, reproduced, or commercially used without appropriate authorization.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">12</span>
              Disclaimer of Warranties
            </h2>
            <p className="text-slate-600 mb-4">FaithCore is provided on an “as available” basis to the extent permitted by applicable law. While we take reasonable steps to maintain the reliability, security, and functionality of the Services, we do not guarantee that FaithCore will always be uninterrupted, completely error-free, or suitable for every particular organizational requirement. Nothing in these Terms excludes warranties or rights that cannot legally be excluded.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">13</span>
              Limitation of Liability
            </h2>
            <p className="text-slate-600 mb-4">To the maximum extent permitted by applicable law, JS Christian Productions (Pvt) Ltd will not be liable for indirect, incidental, special, consequential, or similar losses arising solely from the use or inability to use FaithCore, except where such liability cannot legally be excluded or limited. Nothing in these Terms excludes or limits liability where exclusion or limitation is prohibited by applicable law.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">14</span>
              Governing Law
            </h2>
            <p className="text-slate-600 mb-4">These Terms are governed by the applicable laws of Sri Lanka, without prejudice to any mandatory consumer protection rights or other legal rights that may apply to a user. Any disputes relating to these Terms or the Services will be handled in accordance with applicable Sri Lankan law and the jurisdiction of the competent courts, subject to any mandatory legal requirements.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">15</span>
              Contact Us
            </h2>
            <p className="text-slate-600 mb-6">For questions regarding these Terms, subscriptions, payments, or FaithCore Services, please contact:</p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-2">
              <p className="font-bold text-gray-900">JS Christian Productions (Pvt) Ltd</p>
              <p className="text-slate-700">Product: FaithCore – Church Management Software (SaaS)</p>
              <p className="text-slate-700 mt-2"><strong>Website:</strong> <a href="https://faithcore.org" className="text-brand-600 hover:underline">www.faithcore.org</a></p>
              <p className="text-slate-700"><strong>Email:</strong> <a href="mailto:support@faithcore.org" className="text-brand-600 hover:underline">support@faithcore.org</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

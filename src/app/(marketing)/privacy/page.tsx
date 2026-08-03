import React from 'react';
import { ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | FaithCore',
  description: 'Learn about how FaithCore collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Header Section */}
      <div className="relative bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white/50 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-2xl mb-6 shadow-sm shadow-brand-200/50">
            <ShieldCheck className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-display">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-slate-500 font-medium">
            Effective Date: August 3, 2026
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 prose prose-slate prose-lg max-w-none">
          <p className="lead text-xl text-slate-700 font-medium mb-8">
            JS Christian Productions (Pvt) Ltd (“FaithCore,” “we,” “our,” or “us”) operates the FaithCore website, web-based software platform, mobile applications, and related products and services (collectively, the “Services”).
          </p>
          
          <p className="text-slate-600 mb-8">
            FaithCore provides software and digital services designed to help churches and other authorized organizations manage their operations, members, communications, activities, and related information. This Privacy Policy explains how we collect, use, store, disclose, and protect personal information when churches, organizations, administrators, staff members, members, and other users access or use the FaithCore Services. By accessing or using the Services, you acknowledge the practices described in this Privacy Policy.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">1</span>
              Information We Collect
            </h2>
            <p className="text-slate-600 mb-4">The information we collect depends on how you interact with FaithCore and which features are used by you or your organization.</p>
            
            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Account and Profile Information</h3>
            <p className="text-slate-600 mb-3">When an account is created or managed through FaithCore, we may collect information such as:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Profile photo</li>
              <li>Account credentials and authentication information</li>
              <li>User role and permissions</li>
              <li>Church or organization affiliation</li>
              <li>Other profile information provided by the user or organization</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Church and Organization Information</h3>
            <p className="text-slate-600 mb-3">Organizations using FaithCore may enter and manage information relating to their operations and members, including:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
              <li>Church or organization details</li>
              <li>Member records</li>
              <li>Ministry and group information</li>
              <li>Staff and administrator information</li>
              <li>Attendance information</li>
              <li>Events and activities</li>
              <li>Communication information</li>
              <li>Organizational records</li>
              <li>Other information submitted through the Services</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Content Provided by Users</h3>
            <p className="text-slate-600 mb-6">We may process information that users voluntarily create, submit, upload, or otherwise provide through FaithCore, including forms, messages, images, documents, profile information, and other content supported by the Services.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Photos, Camera, and Media</h3>
            <p className="text-slate-600 mb-6">Certain FaithCore features may allow users to select or upload photos, images, or other media. Where applicable, FaithCore will request the appropriate device permission before accessing photos, cameras, or other protected device functionality. We use such access only to provide the feature requested by the user.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Device and Technical Information</h3>
            <p className="text-slate-600 mb-3">When users access the FaithCore website, software platform, or mobile applications, we may automatically receive limited technical information such as:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
              <li>Device type and operating system</li>
              <li>Browser type and application version</li>
              <li>IP address</li>
              <li>Device or application identifiers where applicable</li>
              <li>Diagnostic, crash, and error information</li>
              <li>Security and authentication information</li>
              <li>General usage information</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">2</span>
              How We Use Personal Information
            </h2>
            <p className="text-slate-600 mb-3">We may use personal information to:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <li>Create and manage user accounts</li>
              <li>Authenticate users</li>
              <li>Provide FaithCore functionality</li>
              <li>Manage churches, organizations, members, and authorized users</li>
              <li>Provide administrative and organizational features</li>
              <li>Process information submitted through the Services</li>
              <li>Provide customer and technical support</li>
              <li>Send important service-related communications</li>
              <li>Maintain the security and integrity of the Services</li>
              <li>Detect and prevent unauthorized access, fraud, or abuse</li>
              <li>Diagnose errors and technical problems</li>
              <li>Improve the performance and reliability of FaithCore</li>
              <li>Develop and improve features</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Enforce applicable agreements and policies</li>
            </ul>
            <p className="font-bold text-brand-700 bg-brand-50 p-4 rounded-xl border border-brand-100">We do not sell personal information.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">3</span>
              Organizations Using FaithCore
            </h2>
            <p className="text-slate-600 mb-4">FaithCore is a software platform that may be used by independent churches and other organizations. Organizations may enter, manage, and process information about their members, staff, administrators, and other individuals through FaithCore.</p>
            <p className="text-slate-600 mb-4">Depending on the circumstances, an organization using FaithCore may determine what information is collected and how that information is used. Organizations are responsible for ensuring that they have appropriate authorization, consent, or another lawful basis where required to collect and process personal information through FaithCore.</p>
            <p className="text-slate-600 mb-4">Authorized administrators within an organization may be able to access and manage information associated with that organization’s FaithCore account. If your personal information was entered into FaithCore by a church or organization, you may also contact that organization directly regarding its use of your information.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">4</span>
              How We Share Information
            </h2>
            <p className="text-slate-600 mb-4 font-semibold">We do not sell or rent personal information.</p>
            <p className="text-slate-600 mb-4">We may disclose information in limited circumstances, including:</p>
            
            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Service Providers</h3>
            <p className="text-slate-600 mb-3">We may use trusted third-party providers to help operate FaithCore, including providers of cloud hosting, database services, authentication, email communications, application distribution, error monitoring, and security services. These providers process information only as necessary to provide their respective services.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Organization Administrators</h3>
            <p className="text-slate-600 mb-3">Information belonging to an organization may be accessible to authorized administrators or other authorized users within that organization according to their assigned roles and permissions.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Legal Requirements</h3>
            <p className="text-slate-600 mb-3">We may disclose information where we reasonably believe disclosure is necessary to comply with applicable law, respond to lawful requests, protect legal rights or individuals, investigate fraud/security incidents, or protect the integrity of FaithCore.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">5</span>
              Data Security
            </h2>
            <p className="text-slate-600 mb-4">We take reasonable administrative, organizational, and technical measures designed to protect personal information against unauthorized access, disclosure, alteration, loss, or destruction. Where appropriate, information transmitted is protected using secure network technologies such as HTTPS/TLS. Access to certain information is also restricted through authentication and role-based authorization.</p>
            <p className="text-slate-600 italic">However, no internet transmission, software platform, or electronic storage system can be guaranteed to be completely secure.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">6</span>
              Data Retention & Account Deletion
            </h2>
            <p className="text-slate-600 mb-4">We retain personal information for as long as reasonably necessary to provide the Services, fulfill the purposes described in this policy, and comply with legal requirements. When information is no longer reasonably required, we may delete or anonymize it.</p>
            <p className="text-slate-600 mb-4">Users may request deletion of their FaithCore account and associated personal information through available platform functionality or by contacting us. If an account is managed by a church, certain requests may need to be handled by the organization's administrator.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">7</span>
              Children’s Privacy
            </h2>
            <p className="text-slate-600 mb-4">FaithCore is primarily intended for use by churches, organizations, administrators, staff, and authorized users. Some organizations may use FaithCore to maintain information relating to children or minors as part of legitimate church activities. Organizations are responsible for obtaining any parental or guardian authorization required by applicable law.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">8</span>
              Contact Us
            </h2>
            <p className="text-slate-600 mb-6">If you have questions about this Privacy Policy, FaithCore’s privacy practices, or would like to submit a privacy or data deletion request, please contact:</p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-2">
              <p className="font-bold text-gray-900">JS Christian Productions (Pvt) Ltd</p>
              <p className="text-slate-700">FaithCore Platform</p>
              <p className="text-slate-700 mt-2"><strong>Website:</strong> <a href="https://faithcore.org" className="text-brand-600 hover:underline">faithcore.org</a></p>
              <p className="text-slate-700"><strong>Email:</strong> <a href="mailto:privacy@faithcore.org" className="text-brand-600 hover:underline">privacy@faithcore.org</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

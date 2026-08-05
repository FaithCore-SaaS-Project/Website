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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 prose prose-slate prose-lg max-w-none">
          <p className="lead text-xl text-slate-700 font-medium mb-8">
            JS Christian Productions (Pvt) Ltd (“Company,” “we,” “our,” or “us”) owns and operates FaithCore, a cloud-based Church Management Software (SaaS) platform, including the FaithCore website, web-based software platform, desktop applications, mobile applications, and related products and services (collectively, the “Services”).
          </p>
          <p className="text-slate-600 mb-8">
            We respect the privacy of our customers, church administrators, members, and other users of FaithCore. This Privacy Policy explains the types of information we collect and process, how we use and protect that information, when information may be shared, and the choices and rights available to users. By accessing or using FaithCore, you acknowledge the practices described in this Privacy Policy.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">1</span>
              Information We Collect
            </h2>
            <p className="text-slate-600 mb-4">The information we collect depends on how you interact with FaithCore and which features are used by you or your church or organization.</p>
            
            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">1.1 Account and Profile Information</h3>
            <p className="text-slate-600 mb-3">We may collect information such as:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
              <li>Full name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Account credentials</li>
              <li>Profile information</li>
              <li>Church or organization name</li>
              <li>Church identifiers and invite codes</li>
              <li>User roles and permissions</li>
              <li>Other information voluntarily provided when creating or managing an account</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">1.2 Church and Membership Information</h3>
            <p className="text-slate-600 mb-3">Churches and authorized administrators may use FaithCore to enter and manage information relating to their organization and members, including:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
              <li>Member names and contact information</li>
              <li>Membership information</li>
              <li>Ministry, group, or role information</li>
              <li>Attendance-related information</li>
              <li>Event and registration information</li>
              <li>Announcements</li>
              <li>Giving and donation records</li>
              <li>Church administrative records</li>
              <li>Other information entered by authorized users</li>
            </ul>
            <p className="text-slate-600 mb-6">The relevant church or organization is responsible for ensuring that it has appropriate authority or other lawful grounds to collect and process information it enters into FaithCore.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">1.3 Prayer Requests and User-Submitted Content</h3>
            <p className="text-slate-600 mb-3">FaithCore may allow users to submit prayer requests and other content.</p>
            <p className="text-slate-600 mb-3">Depending on the options selected by the user and the functionality provided by the relevant church, such content may be private, accessible to authorized church administrators, or shared with members of the relevant church community.</p>
            <p className="text-slate-600 mb-6">Users should avoid including unnecessary sensitive personal information in content intended to be shared with others.</p>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">1.4 Technical and Usage Information</h3>
            <p className="text-slate-600 mb-3">When FaithCore is accessed or used, we may automatically collect certain technical and operational information, including:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
              <li>Device type</li>
              <li>Operating system</li>
              <li>Browser type where applicable</li>
              <li>Application version</li>
              <li>IP address</li>
              <li>Login and authentication activity</li>
              <li>Usage information</li>
              <li>Error and diagnostic information</li>
              <li>Performance information</li>
              <li>Security and system logs</li>
            </ul>
            <p className="text-slate-600 mb-6">We use such information to operate, secure, troubleshoot, maintain, and improve FaithCore.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">2</span>
              Payment and Subscription Information
            </h2>
            <p className="text-slate-600 mb-3">FaithCore is offered through subscription plans and may require payment for access to certain Services.</p>
            <p className="text-slate-600 mb-3">Payments for FaithCore subscriptions may be processed through PayHere and/or other authorized third-party payment service providers.</p>
            <p className="text-slate-600 mb-3">JS Christian Productions (Pvt) Ltd does not directly store complete payment card details such as full card numbers, card security codes (CVV/CVC), or other complete card credentials processed by the payment service provider.</p>
            <p className="text-slate-600 mb-3">We may receive and retain limited transaction and subscription information, including:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
              <li>Transaction reference or payment identifier</li>
              <li>Payment status</li>
              <li>Subscription plan</li>
              <li>Billing amount</li>
              <li>Currency</li>
              <li>Payment date</li>
              <li>Renewal status</li>
              <li>Subscription status</li>
              <li>Other limited transaction information required to manage the subscription</li>
            </ul>
            <p className="text-slate-600 mb-3">We may use this information to activate and manage subscriptions, confirm payments, maintain accounting and transaction records, provide customer support, investigate payment issues, prevent fraud, and comply with applicable legal obligations.</p>
            <p className="text-slate-600 mb-6">Payment processing is also subject to the applicable payment service provider’s terms, privacy policies, and security practices.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">3</span>
              How We Use Information
            </h2>
            <p className="text-slate-600 mb-3">We may use information processed through FaithCore to:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <li>Create and manage user accounts</li>
              <li>Authenticate and verify users</li>
              <li>Operate the FaithCore platform</li>
              <li>Manage churches and organizational accounts</li>
              <li>Provide membership management functionality</li>
              <li>Manage user roles and permissions</li>
              <li>Provide event and registration functionality</li>
              <li>Provide announcements and communications</li>
              <li>Provide prayer request functionality</li>
              <li>Maintain giving and donation records</li>
              <li>Process and manage subscriptions</li>
              <li>Confirm and reconcile payments</li>
              <li>Provide customer and technical support</li>
              <li>Send account, security, payment, and service-related notifications</li>
              <li>Diagnose errors and technical problems</li>
              <li>Maintain platform security</li>
              <li>Prevent fraud, misuse, and unauthorized access</li>
              <li>Improve the performance, functionality, and reliability of FaithCore</li>
              <li>Maintain appropriate business and financial records</li>
              <li>Enforce applicable agreements and policies</li>
              <li>Comply with applicable legal and regulatory obligations</li>
            </ul>
            <p className="font-bold text-brand-700 bg-brand-50 p-4 rounded-xl border border-brand-100">We do not sell users’ personal information.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">4</span>
              Multi-Tenant Data Separation
            </h2>
            <p className="text-slate-600 mb-4">FaithCore operates as a multi-tenant SaaS platform that may serve multiple independent churches and organizations. Data associated with each church or organization is logically separated and associated with the relevant organizational account. Access to information is controlled through mechanisms such as authentication, account associations, church identifiers, user roles, and permissions. Users are intended to access only the information they are authorized to access within their respective church or organization.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">5</span>
              Churches and Organizations Using FaithCore
            </h2>
            <p className="text-slate-600 mb-4">Churches and organizations using FaithCore may collect, enter, manage, and otherwise process information about their members and authorized users through the Services. Depending on the circumstances, the relevant church or organization may determine what member information is collected, why that information is collected, who is permitted to access it, and how the information is used within the organization.</p>
            <p className="text-slate-600 mb-4">Accordingly, certain requests concerning member records may need to be directed to the relevant church or organization. FaithCore provides technology that enables authorized churches and organizations to manage such information.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">6</span>
              How We Share Information
            </h2>
            <p className="text-slate-600 mb-4 font-semibold">We do not sell or rent personal information.</p>
            <p className="text-slate-600 mb-4">We may disclose or make information available to trusted service providers where reasonably necessary to operate and provide FaithCore, including providers supporting: Cloud infrastructure and hosting, Payment processing, Email delivery, Notifications, Authentication and security, Analytics and diagnostics, Technical infrastructure, Customer support and related operational services.</p>
            <p className="text-slate-600 mb-4">These service providers may process information as necessary to perform services on our behalf and are subject to their respective contractual, privacy, security, and legal obligations.</p>
            <p className="text-slate-600 mb-4">We may also disclose information when reasonably necessary to comply with applicable law or legal process, respond to lawful requests from authorities, protect against fraud, misuse, or security threats, protect the rights, property, or safety of JS Christian Productions (Pvt) Ltd, FaithCore, our customers, users, or others, or establish, exercise, or defend legal claims.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">7</span>
              Data Security
            </h2>
            <p className="text-slate-600 mb-4">We take reasonable administrative, organizational, and technical measures designed to protect information processed through FaithCore from unauthorized access, loss, misuse, alteration, or disclosure. These measures may include: User authentication, Role-based access controls, Tenant-level access restrictions, Secure communications, Restricted administrative access, Security monitoring, and Infrastructure and application security measures.</p>
            <p className="text-slate-600 mb-4 italic">However, no internet-based service, software system, or electronic storage method can be guaranteed to be completely secure.</p>
            <p className="text-slate-600 mb-4">Users are responsible for maintaining the confidentiality of their passwords, OTPs, verification codes, and other authentication credentials. Users should immediately contact us or their church administrator if they believe their account has been compromised.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">8</span>
              Data Retention
            </h2>
            <p className="text-slate-600 mb-4">We retain information for as long as reasonably necessary to provide and maintain the Services, maintain active accounts, manage subscriptions, maintain transaction and accounting records, provide customer support, resolve disputes, prevent fraud and security incidents, enforce agreements, and meet applicable legal, regulatory, tax, or accounting requirements.</p>
            <p className="text-slate-600 mb-4">Retention periods may vary depending on the type of information, its purpose, contractual obligations, and applicable legal requirements. When information is no longer reasonably required, we may delete, anonymize, or securely dispose of it, subject to applicable legal and operational requirements.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">9</span>
              Account and Data Deletion
            </h2>
            <p className="text-slate-600 mb-4">Users may request deletion of their FaithCore account and eligible personal information, subject to applicable legal, contractual, and operational requirements. Because certain member information may be entered and managed by a church or organization, requests relating to such records may need to be directed to the relevant church administrator.</p>
            <p className="text-slate-600 mb-4">Authorized church administrators may contact FaithCore regarding the deletion or management of their organization’s account and associated data.</p>
            <p className="text-slate-600 mb-4">We may retain certain information where reasonably necessary for legal compliance, accounting and financial records, payment and transaction records, fraud prevention, security, dispute resolution, enforcement of agreements, and other legitimate legal or operational requirements.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">10</span>
              User Rights and Choices
            </h2>
            <p className="text-slate-600 mb-4">Subject to applicable law and the circumstances of the request, users may have the ability to request access to certain personal information, correct inaccurate or incomplete information, update account information, request deletion of eligible personal information, withdraw certain optional permissions or consent, or raise concerns regarding the handling of personal information.</p>
            <p className="text-slate-600 mb-4">We may need to verify the identity of the person making a request before processing it. Where information is managed by a particular church or organization, we may direct the user to that organization to process the request.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">11</span>
              Mobile Application Permissions
            </h2>
            <p className="text-slate-600 mb-4">FaithCore mobile applications may request permission to access certain device functionality where necessary to provide specific features. Depending on the functionality used, this may include access to Notifications, Camera, Photos or media, or other device functionality necessary for an enabled feature.</p>
            <p className="text-slate-600 mb-4">Users can generally manage these permissions through their device settings. FaithCore will request permissions where relevant to the functionality being used.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">12</span>
              Cookies and Similar Technologies
            </h2>
            <p className="text-slate-600 mb-4">The FaithCore website and web-based Services may use cookies, local storage, session storage, or similar technologies to authenticate users, maintain login sessions, remember user preferences, protect account security, provide essential website functionality, monitor performance, diagnose technical issues, and improve the Services.</p>
            <p className="text-slate-600 mb-4">Users may be able to manage certain cookie settings through their browser. Disabling essential cookies or similar technologies may prevent certain parts of FaithCore from functioning correctly.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">13</span>
              Third-Party Services
            </h2>
            <p className="text-slate-600 mb-4">FaithCore may rely on or integrate with third-party services to provide certain functionality, including payment processing, hosting, email delivery, notifications, infrastructure, and other operational services. Third-party providers operate according to their own terms, privacy policies, and security practices. Where a user leaves FaithCore to access an independent third-party website or service, the user’s interaction with that service is governed by the third party’s applicable policies.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">14</span>
              Children’s Privacy
            </h2>
            <p className="text-slate-600 mb-4">FaithCore is a church management platform intended to be used by churches, organizations, administrators, authorized personnel, and their communities. A church or organization may use FaithCore to maintain information relating to children or minors where appropriate for legitimate church administration purposes.</p>
            <p className="text-slate-600 mb-4">The relevant church or organization is responsible for obtaining any consent, parental or guardian authorization, or other lawful basis required under applicable law before entering or processing information relating to minors. Children should not independently create or use FaithCore accounts where parental, guardian, or organizational authorization is legally required. If we become aware that information has been collected or processed contrary to applicable legal requirements, we may take appropriate steps to address the matter.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">15</span>
              International Data Processing
            </h2>
            <p className="text-slate-600 mb-4">FaithCore may use cloud infrastructure and third-party service providers that process or store information in jurisdictions outside the user’s country. Accordingly, information may be transferred to or processed in countries whose data protection laws differ from those of the user’s location. Where applicable, we take reasonable measures designed to protect information processed through the Services.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">16</span>
              Service Communications
            </h2>
            <p className="text-slate-600 mb-4">We may send communications that are reasonably necessary to operate and provide FaithCore, including account verification messages, OTP and authentication messages, password-related communications, security alerts, subscription notifications, payment confirmations, renewal notifications, important service announcements, and technical or administrative communications.</p>
            <p className="text-slate-600 mb-4">Certain operational communications may be necessary for the provision, security, or administration of the Services and therefore may not be optional.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">17</span>
              Business Changes
            </h2>
            <p className="text-slate-600 mb-4">If JS Christian Productions (Pvt) Ltd undergoes a merger, acquisition, restructuring, financing, sale of assets, or similar business transaction, information associated with FaithCore may be transferred as part of that transaction where permitted by applicable law. Any successor or acquiring entity would be expected to handle such information in accordance with applicable privacy obligations.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">18</span>
              Changes to This Privacy Policy
            </h2>
            <p className="text-slate-600 mb-4">We may update this Privacy Policy from time to time to reflect changes in FaithCore features and Services, business operations, technology, third-party services, or legal or regulatory requirements.</p>
            <p className="text-slate-600 mb-4">When this Privacy Policy is updated, the revised version will be published with an updated effective date. Where appropriate, material changes may also be communicated through FaithCore, our website, email, or another suitable method.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">19</span>
              Contact Us
            </h2>
            <p className="text-slate-600 mb-6">If you have questions, concerns, or requests regarding this Privacy Policy or the processing of personal information through FaithCore, please contact:</p>
            
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

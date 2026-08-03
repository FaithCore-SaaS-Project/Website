import React from 'react';
import { HelpCircle, MessageCircleQuestion } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | FaithCore',
  description: 'Find answers to common questions about FaithCore church management software.',
};

const faqs = [
  {
    q: 'What is FaithCore?',
    a: 'FaithCore is a church management platform designed to help churches manage members, finances, events, announcements, giving, reports, and day-to-day administration through desktop, web, and mobile solutions.'
  },
  {
    q: 'Who can use FaithCore?',
    a: 'FaithCore is designed for churches and ministries of different sizes. Church administrators, pastors, authorized staff, and church members can use different parts of the platform based on their roles.'
  },
  {
    q: 'How do I get started with FaithCore?',
    a: 'Choose a subscription plan on the FaithCore website, register your church and administrator account, complete the payment process, and activate your FaithCore account. You can then download the desktop software and begin using the platform.'
  },
  {
    q: 'How do I log in to the FaithCore Desktop App?',
    a: 'Church administrators can log in using their registered email address, password, and Church Activation ID provided during registration.'
  },
  {
    q: 'What is a Church Activation ID?',
    a: 'The Church Activation ID is a unique identifier assigned to your church when your FaithCore account is created. It helps identify and securely connect your church account to FaithCore services.'
  },
  {
    q: 'How do church members join the FaithCore Mobile App?',
    a: 'Members can enter the Invite Code provided by their church, verify their email using an OTP, create their account, and then access their church through the FaithCore Mobile App.'
  },
  {
    q: 'Can members from one church access another church’s information?',
    a: 'No. FaithCore is designed with tenant-level data isolation. Users are associated with their respective church, and access is controlled according to their account and permissions.'
  },
  {
    q: 'What can members do through the Mobile App?',
    a: 'Depending on the features enabled by their church, members can access announcements, events, giving information, prayer requests, member-related features, their profile, and other church services.'
  },
  {
    q: 'Can FaithCore be used without an internet connection?',
    a: 'Certain desktop functionality may be available offline. When an internet connection is available, supported data can synchronize with FaithCore’s online services. Online features such as authentication and cloud-based services require connectivity.'
  },
  {
    q: 'Is FaithCore available for Windows and macOS?',
    a: 'Yes. FaithCore Desktop is designed to support Windows and macOS. Availability of specific versions can be checked on the FaithCore download page.'
  },
  {
    q: 'Is there a FaithCore Mobile App?',
    a: 'Yes. FaithCore provides a mobile application for church members, with support for iOS and Android subject to platform availability.'
  },
  {
    q: 'Does FaithCore support different administrator roles?',
    a: 'Yes. FaithCore supports role-based access so that administrators, co-administrators, staff, and other authorized users can be given appropriate permissions.'
  },
  {
    q: 'What happens if our subscription expires?',
    a: 'Access to subscription-dependent functionality may be restricted until the subscription is renewed. Your church can renew its subscription to restore eligible services.'
  },
  {
    q: 'Can we change our subscription plan later?',
    a: 'Yes. Eligible churches can change or renew their subscription according to the plans and options currently offered by FaithCore.'
  },
  {
    q: 'Is our church data secure?',
    a: 'FaithCore uses security measures such as authentication, access controls, role-based permissions, secure communications, and tenant separation designed to protect church and member information.'
  },
  {
    q: 'Does FaithCore sell users’ personal information?',
    a: 'No. FaithCore does not sell users’ personal information. More information about how data is handled is available in the FaithCore Privacy Policy.'
  },
  {
    q: 'What should I do if I forget my password?',
    a: 'Use the available password recovery option or contact your church administrator or FaithCore support, depending on your account type.'
  },
  {
    q: 'Can a church change its member Invite Code?',
    a: 'Where this feature is enabled, authorized church administrators can revoke an existing Invite Code and generate a new one for security purposes.'
  },
  {
    q: 'Can multiple staff members use FaithCore?',
    a: 'Yes. Churches can provide authorized staff members with individual accounts and appropriate roles and permissions, subject to their FaithCore plan and configuration.'
  },
  {
    q: 'How can I contact FaithCore for support?',
    a: 'You can contact the FaithCore support team through the contact or support options provided on the official FaithCore website.'
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Header Section */}
      <div className="relative bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white/50 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-2xl mb-6 shadow-sm shadow-brand-200/50">
            <MessageCircleQuestion className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-display">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Everything you need to know about FaithCore and how it can empower your church administration.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-10">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details 
                key={idx} 
                className="group border border-slate-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden bg-white hover:bg-slate-50 transition-colors duration-200"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer select-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.q}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 group-open:bg-brand-100 text-slate-500 group-open:text-brand-600 transition-colors duration-200">
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                
                <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-white">
                  <p className="text-slate-600 leading-relaxed text-[16px]">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 bg-brand-50 rounded-2xl p-6 text-center border border-brand-100">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Still have questions?</h4>
            <p className="text-slate-600 mb-4">Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.</p>
            <a 
              href="mailto:support@faithcore.org" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold shadow-sm hover:bg-brand-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

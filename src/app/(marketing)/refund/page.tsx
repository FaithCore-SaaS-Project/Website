import React from 'react';
import { RefreshCcw } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | FaithCore',
  description: 'Learn about our policies regarding subscription cancellations and refunds.',
};

export default function RefundCancellationPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="relative bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white/50 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-2xl mb-6 shadow-sm shadow-brand-200/50">
            <RefreshCcw className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-display">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-4 text-lg text-slate-500 font-medium">
            Effective Date: August 3, 2026
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 prose prose-slate prose-lg max-w-none">
          <p className="lead text-xl text-slate-700 font-medium mb-8">
            This Refund & Cancellation Policy applies to subscriptions and paid services offered through FaithCore, a Church Management Software (SaaS) platform owned and operated by JS Christian Productions (Pvt) Ltd (“Company,” “we,” “our,” or “us”).
          </p>
          <p className="text-slate-600 mb-8">
            This Policy explains the circumstances under which customers may cancel a FaithCore subscription or request a refund. By purchasing a paid FaithCore subscription, you acknowledge and agree to this Refund & Cancellation Policy, subject to any rights available to you under applicable law.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">1</span>
              FaithCore Subscriptions & Payments
            </h2>
            <p className="text-slate-600 mb-4">FaithCore may offer free and paid subscription plans with different features, limits, and subscription periods. The applicable Subscription price, Billing period, Features, Member or usage limits, and Renewal terms will be displayed on the FaithCore website or during the applicable purchase process. Customers should review their selected plan carefully before completing payment.</p>
            <p className="text-slate-600 mb-4">Payments for FaithCore subscriptions may be processed through PayHere and/or other authorized third-party payment service providers. After a successful payment, we may receive transaction information such as the payment status, transaction reference, amount, currency, and payment date. FaithCore does not directly store complete payment card details processed by the applicable payment service provider.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">2</span>
              Subscription Activation
            </h2>
            <p className="text-slate-600 mb-4">A paid FaithCore subscription is generally activated after successful payment confirmation. Customers should contact FaithCore Support if payment has been successfully completed but the purchased subscription has not been activated within a reasonable period. We may request information such as the registered email address, church name, transaction reference, payment date, and payment amount to investigate the transaction.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">3</span>
              Cancellation of a Subscription
            </h2>
            <p className="text-slate-600 mb-4">Customers may cancel their FaithCore subscription through any cancellation functionality made available within the Services or by contacting FaithCore Support.</p>
            <p className="text-slate-600 mb-4">Unless otherwise stated during purchase:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
              <li>Cancellation prevents future renewal or future billing where recurring billing is enabled.</li>
              <li>Cancellation does not normally terminate an already-paid subscription immediately.</li>
              <li>The customer may continue using eligible paid features until the end of the current paid subscription period.</li>
              <li>No further subscription payment will be charged after cancellation takes effect, except for amounts already due or transactions initiated before the cancellation became effective.</li>
            </ul>
            <p className="text-slate-600 mb-4">Customers are encouraged to submit cancellation requests before the next scheduled renewal date.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">4</span>
              Refund Eligibility
            </h2>
            <p className="text-slate-600 mb-4">Because FaithCore provides access to digital SaaS services following subscription activation, payments are generally non-refundable once the purchased subscription has been successfully activated and made available to the customer.</p>
            <p className="text-slate-600 mb-4">However, we may provide a full or partial refund where appropriate in circumstances including:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
              <li>A duplicate payment for the same subscription;</li>
              <li>An incorrect amount charged due to a verified payment or system error;</li>
              <li>A payment completed successfully but the purchased subscription could not be activated due to a verified technical issue attributable to FaithCore;</li>
              <li>A charge made after a cancellation had validly taken effect due to a verified system or billing error;</li>
              <li>A service failure that materially prevents the customer from accessing the purchased Service and cannot reasonably be resolved;</li>
              <li>Another circumstance where a refund is required under applicable law.</li>
            </ul>
            <p className="text-slate-600 mb-4">Each refund request may be reviewed individually.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">5</span>
              Non-Refundable Circumstances
            </h2>
            <p className="text-slate-600 mb-4">Subject to applicable law, refunds will generally not be provided where:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
              <li>The customer changes their mind after the subscription has been activated;</li>
              <li>The customer no longer wishes to use FaithCore;</li>
              <li>The customer fails to use the Services during the subscription period;</li>
              <li>The customer purchased an unsuitable plan without reviewing the available plan information;</li>
              <li>The customer fails to cancel before a scheduled renewal where recurring billing was clearly disclosed;</li>
              <li>Access is restricted because of a material violation of the FaithCore Terms & Conditions;</li>
              <li>The issue results from the customer’s device, internet connection, unsupported software environment, or third-party service outside FaithCore’s reasonable control;</li>
              <li>The customer provides incorrect registration or account information that prevents normal use of the Service;</li>
              <li>A feature expected by the customer was not included in the purchased plan and was not advertised as part of that plan.</li>
            </ul>
            <p className="text-slate-600 mb-4">Nothing in this section limits any rights that cannot lawfully be excluded.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">6</span>
              Refund Request Procedure
            </h2>
            <p className="text-slate-600 mb-4">To request a refund, customers should contact FaithCore using the official support contact details published on the FaithCore website.</p>
            <p className="text-slate-600 mb-4">A refund request should include sufficient information for us to identify and verify the transaction. We may request additional information where reasonably necessary to investigate the request, prevent fraud, or verify account ownership. Submitting a refund request does not automatically guarantee approval.</p>
            <p className="text-slate-600 mb-4">Customers should submit refund requests for duplicate charges, incorrect charges, activation failures, or other payment-related issues within 14 days of the relevant transaction, where reasonably possible. Requests submitted after this period may still be reviewed where required by applicable law or where exceptional circumstances justify further consideration.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">7</span>
              Approved Refunds
            </h2>
            <p className="text-slate-600 mb-4">If a refund is approved, we will initiate the refund using the original payment method where reasonably possible or another appropriate method permitted by the applicable payment provider.</p>
            <p className="text-slate-600 mb-4">The time required for the refunded amount to appear in the customer’s account may depend on PayHere or another payment provider, The customer’s bank, Card network, Payment method, and Processing and settlement timelines. FaithCore cannot guarantee the exact time taken by an independent bank or payment provider to complete a refund after it has been initiated.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm mr-3">8</span>
              Contact Us
            </h2>
            <p className="text-slate-600 mb-6">For subscription cancellations, billing issues, duplicate payments, or refund requests, please contact:</p>
            
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

import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-[#0F172A] py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row">
        <div>
          <h2 className="text-5xl font-bold">
            Ready To Transform Your Ministry?
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-gray-300">
            Join churches already using FaithCore to streamline administration
            and grow ministry impact.
          </p>
        </div>

        <button className="flex shrink-0 items-center gap-2 rounded-2xl bg-[#5B3DF5] px-8 py-4 font-semibold hover:bg-[#4d31db] transition-colors">
          Start Free Trial
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

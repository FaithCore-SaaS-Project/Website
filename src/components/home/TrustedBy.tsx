// ─── Trusted logos ────────────────────────────────────────────────────────────

const TRUSTED_NAMES = [
  "Grace Church",
  "Faith Community",
  "New Hope",
  "Bethel Church",
  "Living Word",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TrustedBy() {
  return (
    <section className="border-y bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Trusted By Ministries Worldwide
        </p>

        <div className="mt-10 grid grid-cols-2 gap-10 lg:grid-cols-5">
          {TRUSTED_NAMES.map((name) => (
            <div key={name} className="text-lg font-semibold text-gray-700">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

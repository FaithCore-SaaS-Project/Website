import { Star, Quote } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Testimonial {
  id: number;
  name: string;
  role: string;
  church: string;
  avatar: string;
  rating: number;
  quote: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Pastor Michael Grant",
    role: "Senior Pastor",
    church: "Grace Community Church",
    avatar: "MG",
    rating: 5,
    quote:
      "FaithCore transformed how we run our church operations. Tracking tithes, managing our 800-member directory, and scheduling ministry teams is now effortless. It's the single best investment we've made.",
  },
  {
    id: 2,
    name: "Rev. Sarah Okafor",
    role: "Administrative Director",
    church: "Bethel Ministries",
    avatar: "SO",
    rating: 5,
    quote:
      "The onboarding was seamless and the support team was incredible. We migrated 10 years of member data without a single issue. Our staff productivity has increased by 40%.",
  },
  {
    id: 3,
    name: "Deacon James Ruiz",
    role: "Operations Lead",
    church: "Living Word Chapel",
    avatar: "JR",
    rating: 5,
    quote:
      "We tried three other platforms before FaithCore. Nothing compares. The event management and donation reporting tools alone were worth the switch. Highly recommend to any growing church.",
  },
];

// ─── TestimonialCard ──────────────────────────────────────────────────────────

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative flex flex-col gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5B3DF5]/10">
      {/* Quote icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ede9fe] text-[#5B3DF5]">
        <Quote size={18} />
      </div>

      {/* Stars */}
      <div className="flex text-amber-400">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
      </div>

      {/* Quote text */}
      <blockquote className="flex-1 text-gray-600 leading-7 text-sm">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5B3DF5] text-white text-sm font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-500">
            {testimonial.role} · {testimonial.church}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-[#f8f9ff] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#5B3DF5]/20 bg-[#ede9fe]/70 px-4 py-1.5 text-sm font-medium text-[#5B3DF5]">
            Customer Stories
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            Loved by Church Leaders
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            See how churches of all sizes are using FaithCore to streamline
            operations and grow their ministries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

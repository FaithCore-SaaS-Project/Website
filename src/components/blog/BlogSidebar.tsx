"use client";

// ─── BlogSidebar ──────────────────────────────────────────────────────────────

import NewsletterCard from "./NewsletterCard";

const categories = [
  { label: "System Updates", count: 18 },
  { label: "News & Announcements", count: 12 },
  { label: "Tutorials & Guides", count: 24 },
  { label: "All Articles", count: 54 },
];

const popularArticles = [
  "How to Add Members",
  "Understanding User Roles",
  "Accepting Donations Online",
  "Mobile App Guide",
];

export default function BlogSidebar() {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="rounded-[30px] border bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-gray-900">Categories</h3>
        <ul className="mt-6 space-y-4">
          {categories.map(({ label, count }) => (
            <li
              key={label}
              className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-sm text-gray-600 transition hover:bg-[#f7f5ff] hover:text-[#5B3DF5]"
            >
              <span>{label}</span>
              <span className="rounded-full bg-[#ede9fe] px-2.5 py-0.5 text-xs font-semibold text-[#5B3DF5]">
                {count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Articles */}
      <div className="rounded-[30px] border bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-gray-900">Popular Articles</h3>
        <ul className="mt-6 space-y-4">
          {popularArticles.map((item, i) => (
            <li
              key={item}
              className="flex cursor-pointer items-start gap-3 border-b pb-4 last:border-b-0 last:pb-0 text-sm text-gray-600 hover:text-[#5B3DF5] transition-colors"
            >
              <span className="mt-0.5 text-xs font-bold text-[#5B3DF5]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <NewsletterCard />
    </div>
  );
}

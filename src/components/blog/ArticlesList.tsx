"use client";

// ─── ArticlesList ──────────────────────────────────────────────────────────────

const articles = [
  {
    title: "New Dashboard: More Insights at a Glance",
    image: "/images/blog/dashboard.jpg",
    tag: "System Update",
    date: "May 29, 2024",
    excerpt:
      "Our redesigned dashboard brings real-time analytics, member activity, and key metrics front and centre so you spend less time hunting for data.",
  },
  {
    title: "Enhanced Security For Your Church Data",
    image: "/images/blog/security.jpg",
    tag: "Security",
    date: "May 15, 2024",
    excerpt:
      "We've rolled out end-to-end encryption for member records and financial data, giving your congregation the privacy protection they deserve.",
  },
  {
    title: "How To Create and Manage Church Events",
    image: "/images/blog/events.jpg",
    tag: "Tutorial",
    date: "May 03, 2024",
    excerpt:
      "A step-by-step walkthrough for setting up recurring services, special gatherings, and online registrations within Kingdom Connect.",
  },
  {
    title: "Kingdom Connect Community Summit 2024",
    image: "/images/blog/community.jpg",
    tag: "News",
    date: "Apr 20, 2024",
    excerpt:
      "Hundreds of church leaders gathered to share best practices. Here's everything that was announced at this year's landmark event.",
  },
];

const tagColors: Record<string, string> = {
  "System Update": "bg-blue-50 text-blue-600",
  Security: "bg-red-50 text-red-600",
  Tutorial: "bg-green-50 text-green-600",
  News: "bg-yellow-50 text-yellow-700",
};

export default function ArticlesList() {
  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <article
          key={article.title}
          className="rounded-[30px] border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Thumbnail */}
            <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-[#ede9fe]">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Graceful fallback while real images are added
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Placeholder icon shown when image fails */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl opacity-20">📰</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between lg:col-span-2">
              <div>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    tagColors[article.tag] ?? "bg-[#ede9fe] text-[#5B3DF5]"
                  }`}
                >
                  {article.tag}
                </span>
                <h3 className="mt-4 text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
                  {article.title}
                </h3>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
                <span>{article.date}</span>
                <button className="font-semibold text-[#5B3DF5] hover:text-[#4d31db] transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

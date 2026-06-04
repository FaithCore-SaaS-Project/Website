import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogTabs from "@/components/blog/BlogTabs";
import ArticlesList from "@/components/blog/ArticlesList";
import BlogSidebar from "@/components/blog/BlogSidebar";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Blog & Updates – FaithCore",
  description:
    "Stay informed with the latest FaithCore product updates, ministry news, tutorials, and guides to get the most out of your church management system.",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  return (
    <main className="bg-[#fafaff]">
      {/* 1. Hero + Search */}
      <BlogHero />

      {/* 2. Category Tabs */}
      <BlogTabs />

      {/* 3. Articles + Sidebar */}
      <section className="py-10 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Articles feed */}
            <div className="lg:col-span-2">
              <ArticlesList />
            </div>

            {/* Sidebar */}
            <div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

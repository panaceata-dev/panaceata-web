"use client";

import PageHero from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, User } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "The Future of Cloud Migration: Trends to Watch in 2025",
    excerpt:
      "Cloud migration continues to evolve rapidly. Discover the key trends shaping enterprise cloud strategies and how to stay ahead of the curve.",
    category: "Cloud",
    author: "Panaceata Team",
    date: "March 15, 2025",
    readTime: "5 min read",
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/263366e49_generated_1c84f0ac.png",
  },
  {
    title: "How AI is Transforming Application Modernization",
    excerpt:
      "Artificial intelligence is revolutionizing how legacy applications are assessed, refactored, and modernized. Learn about the latest AI-driven approaches.",
    category: "AI & ML",
    author: "Panaceata Team",
    date: "March 8, 2025",
    readTime: "7 min read",
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/e5c86a91b_generated_f4112315.png",
  },
  {
    title: "Building Scalable Data Pipelines: A Practical Guide",
    excerpt:
      "A comprehensive guide to designing and implementing data pipelines that scale with your business needs, from batch processing to real-time streaming.",
    category: "Data Engineering",
    author: "Panaceata Team",
    date: "February 28, 2025",
    readTime: "8 min read",
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/137b9b109_generated_6419fdc8.png",
  },
  {
    title: "Why Outsource Development? Benefits Beyond Cost Savings",
    excerpt:
      "Outsourcing software development offers much more than cost savings. Explore the strategic advantages that help businesses innovate faster.",
    category: "Business",
    author: "Panaceata Team",
    date: "February 20, 2025",
    readTime: "4 min read",
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/d2fee1fab_generated_870439a2.png",
  },
  {
    title: "Managed Cloud Operations: Best Practices for 2025",
    excerpt:
      "Learn the best practices for managing cloud infrastructure efficiently, including cost optimization, security, and performance monitoring strategies.",
    category: "Cloud",
    author: "Panaceata Team",
    date: "February 12, 2025",
    readTime: "6 min read",
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/93570f2be_generated_c01812ae.png",
  },
  {
    title: "Digital Transformation: Lessons from 50+ Projects",
    excerpt:
      "After delivering 50+ successful projects, we share the key lessons learned and common pitfalls to avoid in your digital transformation journey.",
    category: "Digital Transformation",
    author: "Panaceata Team",
    date: "February 5, 2025",
    readTime: "10 min read",
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/7cd460fb0_generated_87430cf9.png",
  },
];

const categories = [
  "All",
  "Cloud",
  "AI & ML",
  "Data Engineering",
  "Business",
  "Digital Transformation",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Our Blog"
        title="Insights &"
        highlight="Perspectives"
        description="Stay up to date with the latest trends, best practices, and insights from our team of technology experts."
      />

      {/* Categories */}
      <section className="py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer px-4 py-1.5 text-sm"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="bg-card rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="font-semibold px-8 border-foreground/20 hover:bg-foreground/5"
            >
              Load More Articles <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest articles and insights delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 rounded-lg border border-border/60 bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 px-6">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

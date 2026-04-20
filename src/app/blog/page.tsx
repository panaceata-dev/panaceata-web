import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata(
  "Blog | Tech Insights & Digital Transformation Tips | Panaceata",
  "Read insights on cloud migration, application modernization, data engineering, and digital transformation from Panaceata tech experts.",
  "/blog"
);

const blogPosts = [
  { title: "The Future of Cloud Migration: Trends to Watch in 2025", excerpt: "Cloud migration continues to evolve rapidly. Discover the key trends shaping enterprise cloud strategies.", category: "Cloud", date: "March 15, 2025", readTime: "5 min read", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80" },
  { title: "How AI is Transforming Application Modernization", excerpt: "Artificial intelligence is revolutionizing how legacy applications are assessed, refactored, and modernized.", category: "AI & ML", date: "March 8, 2025", readTime: "7 min read", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" },
  { title: "Building Scalable Data Pipelines: A Practical Guide", excerpt: "A comprehensive guide to designing and implementing data pipelines that scale with your business needs.", category: "Data Engineering", date: "February 28, 2025", readTime: "8 min read", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
  { title: "Why Outsource Development? Benefits Beyond Cost Savings", excerpt: "Outsourcing software development offers much more than cost savings. Explore the strategic advantages.", category: "Business", date: "February 20, 2025", readTime: "4 min read", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" },
  { title: "Managed Cloud Operations: Best Practices for 2025", excerpt: "Learn the best practices for managing cloud infrastructure efficiently, including cost optimization.", category: "Cloud", date: "February 12, 2025", readTime: "6 min read", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { title: "Digital Transformation: Lessons from 50+ Projects", excerpt: "After delivering 50+ successful projects, we share the key lessons learned and common pitfalls to avoid.", category: "Digital Transformation", date: "February 5, 2025", readTime: "10 min read", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" },
];

export default function Blog() {
  return (
    <div className="pt-16">
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center scroll-reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Blog</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Insights &amp; Perspectives</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Stay up to date with the latest trends, best practices, and insights from our team of technology experts.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover-lift">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{post.excerpt}</p>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

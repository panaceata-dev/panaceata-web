import Link from "next/link";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata(
  "Products | Innovative Software Solutions | Panaceata",
  "Explore Panaceata's products: TutorFramework LMS, GiggleNShine Daycare Management, Loan Management System, and more custom solutions.",
  "/products"
);

const products = [
  {
    name: "TutorFramework",
    category: "Learning Management System",
    desc: "A comprehensive LMS platform designed to streamline educational content delivery, student management, and course administration for institutions of all sizes.",
    features: ["Course Management", "Student Tracking", "Assessment Tools", "Content Library"],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
  },
  {
    name: "GiggleNShine",
    category: "Daycare Management System",
    desc: "Simplifies daycare operations from enrollment to billing. Manage check-ins, communication with parents, scheduling, and financial tracking all in one place.",
    features: ["Enrollment Management", "Daily Check-in/out", "Billing & Invoicing", "Parent Communication"],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    ),
  },
  {
    name: "Loan Management System",
    category: "FinTech Solution",
    desc: "A robust financial technology solution for managing loan portfolios, automating approval workflows, tracking repayments, and generating compliance reports.",
    features: ["Loan Processing", "Payment Tracking", "Risk Assessment", "Compliance Reports"],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
    ),
  },
  {
    name: "IQSparker",
    category: "Spark Your Learning Journey",
    desc: "An interactive learning platform that gamifies education through quizzes, challenges, and adaptive learning paths to keep learners engaged and motivated.",
    features: ["Interactive Quizzes", "Adaptive Learning", "Progress Analytics", "Gamification"],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
  },
  {
    name: "Business Management System",
    category: "HR Solution",
    desc: "A comprehensive business management suite handling HR operations, employee management, payroll processing, and organizational workflows.",
    features: ["HR Management", "Payroll Processing", "Employee Portal", "Workflow Automation"],
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
  },
];

export default function Products() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center scroll-reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Products</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Explore Our Product Range</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Innovative software solutions that empower businesses and individuals across industries.</p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16 max-w-5xl mx-auto px-6 space-y-6">
        {products.map((p) => (
          <div key={p.name} className="bg-white rounded-2xl p-8 border border-gray-100 hover-lift flex items-start gap-6">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
              {p.icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {p.category}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span key={f} className="text-gray-500 text-xs font-medium px-3 py-1 rounded-full border border-gray-200">{f}</span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <Link href="/contact" className="shrink-0 mt-6 text-gray-300 hover:text-primary transition">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-white px-6">
        <div className="max-w-2xl mx-auto text-center scroll-reveal">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-300 mb-8">Our products can be customized to fit your specific needs, or we can build something entirely new from scratch.</p>
          <Link href="/contact" className="bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-teal-700 transition inline-block">Discuss Your Project</Link>
        </div>
      </section>
    </div>
  );
}

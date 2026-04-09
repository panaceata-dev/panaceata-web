"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "./Services";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const caseStudies = [
  "Telemedicine Solution",
  "Plant Disease Detection",
  "E-Commerce Solution",
  "Mobile Device Management",
  "NFC Attendance Solution",
  "Parking Solution",
  "Retailer Distributor System",
  "Document Management",
  "AI Conversational Support",
];

export default function CaseStudies() {
  const gridRef = useScrollReveal();

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Experience Our Project Journey"
          description="Real-world solutions we've built for clients across industries."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4 stagger-children"
        >
          {caseStudies.map((study) => (
            <Link
              key={study}
              href="/case-studies"
              className="block p-5 lg:p-6 rounded-xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-sm lg:text-base font-medium text-foreground group-hover:text-primary transition-colors">
                {study}
              </span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary mt-2 transition-colors group-hover:translate-x-1 duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

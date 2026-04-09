"use client";

import { Quote } from "lucide-react";
import { SectionHeader } from "./Services";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Julia Herdman",
    role: "CEO",
    company: "Street UK Group",
    quote:
      "Panaceata treat us as a valued business partner and not just another client. We value the contribution they make to our business.",
  },
  {
    name: "Josh Lee",
    role: "Asst. Mgr - Backend Operations",
    company: "Wireless Shop LLC",
    quote:
      "Panaceata has been an absolute game-changer for our business! Their commitment to excellence is unparalleled.",
  },
  {
    name: "Crystal Costa",
    role: "Director",
    company: "Northshore Learning Center, USA",
    quote:
      "Customer service is always willing to help when we need assistance and can answer our questions effectively. Definitely recommend.",
  },
];

export default function Testimonials() {
  const gridRef = useScrollReveal();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Testimonials"
          title="What Others Say About Us"
          description="Trusted by businesses worldwide, from startups to enterprises."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group bg-card rounded-2xl border border-border/60 p-6 lg:p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

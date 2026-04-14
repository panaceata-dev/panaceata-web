"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Prageeth Perera",
    role: "Owner, Kids Learning Path",
    quote:
      "Managing our daycare center has never been easier. Gigglenshine simplifies everything, from enrollment to billing, exceeding our expectations and helping us run smoothly.",
  },
  {
    name: "Julia Herdman",
    role: "CEO, Street UK Group",
    quote:
      "Panaceata treat us as a valued business partner and not just another client. We value the contribution they make to our business.",
  },
  {
    name: "Josh Lee",
    role: "Asst. Mgr - Backend Operations, Wireless Shop LLC",
    quote:
      "Panaceata has been an absolute game-changer for our business! Their commitment to excellence is unparalleled.",
  },
  {
    name: "Crystal Costa",
    role: "Director, Northshore Learning Center, USA",
    quote:
      "Customer service is always willing to help when we need assistance and can answer our questions effectively. Definitely recommend.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#142952]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — white text on dark bg */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="font-semibold text-sm mb-4 tracking-widest uppercase text-primary block">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            What Others Say About Us
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Trusted by businesses worldwide, from startups to enterprises.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 lg:p-8 hover-lift"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

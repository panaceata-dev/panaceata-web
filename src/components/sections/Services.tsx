"use client";

import {
  Layers,
  Cloud,
  Database,
  Code2,
  Server,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Layers,
    title: "Application Modernization",
    description:
      "Revamp outdated applications with the latest technologies and industry best practices for enhanced performance.",
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/e5c86a91b_generated_f4112315.png",
  },
  {
    icon: Cloud,
    title: "Cloud Migration Services",
    description:
      "Seamlessly transition your infrastructure to leading cloud platforms with improved agility and cost savings.",
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/263366e49_generated_1c84f0ac.png",
  },
  {
    icon: Database,
    title: "Data Engineering & BI",
    description:
      "Transform raw data into actionable intelligence with advanced analytics tools and techniques.",
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/137b9b109_generated_6419fdc8.png",
  },
  {
    icon: Code2,
    title: "Outsource Development",
    description:
      "Boost your development capabilities with a skilled dedicated team delivering high-quality solutions.",
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/d2fee1fab_generated_870439a2.png",
  },
  {
    icon: Server,
    title: "Managed Cloud Operations",
    description:
      "Comprehensive cloud support ensuring your environment is optimized, secure, and scalable.",
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/93570f2be_generated_c01812ae.png",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="text-center mb-12 lg:mb-16 animate-reveal">
      <span className="font-display font-semibold text-sm mb-4 tracking-wide uppercase text-primary block">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}

export { SectionHeader };

export default function Services() {
  const gridRef = useScrollReveal();

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Endless Options. One Provider."
          description="From cloud migration to application modernization, we deliver comprehensive technology solutions that drive business growth."
        />

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

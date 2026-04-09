"use client";

import PageHero from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/Services";
import { Button } from "@/components/ui/button";
import {
  Layers,
  Cloud,
  Database,
  Code2,
  Server,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Layers,
    title: "Application Modernization",
    description:
      "Revamp outdated applications with the latest technologies and industry best practices for enhanced performance, scalability, and user experience.",
    features: [
      "Legacy system assessment & planning",
      "Microservices architecture migration",
      "API development & integration",
      "UI/UX modernization",
      "Performance optimization",
      "Cloud-native transformation",
    ],
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/e5c86a91b_generated_f4112315.png",
  },
  {
    icon: Cloud,
    title: "Cloud Migration Services",
    description:
      "Seamlessly transition your infrastructure to leading cloud platforms with improved agility, security, and cost savings.",
    features: [
      "Cloud readiness assessment",
      "Migration strategy & roadmap",
      "AWS, Azure & GCP expertise",
      "Hybrid cloud solutions",
      "Cost optimization",
      "Security & compliance",
    ],
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/263366e49_generated_1c84f0ac.png",
  },
  {
    icon: Database,
    title: "Data Engineering & BI",
    description:
      "Transform raw data into actionable intelligence with advanced analytics tools, data pipelines, and business intelligence dashboards.",
    features: [
      "Data pipeline development",
      "Data warehouse design",
      "ETL/ELT processes",
      "Business intelligence dashboards",
      "Real-time analytics",
      "Machine learning integration",
    ],
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/137b9b109_generated_6419fdc8.png",
  },
  {
    icon: Code2,
    title: "Outsource Development",
    description:
      "Boost your development capabilities with a skilled dedicated team delivering high-quality, scalable solutions on time and within budget.",
    features: [
      "Dedicated development teams",
      "Staff augmentation",
      "Full-stack development",
      "Agile project management",
      "Quality assurance & testing",
      "DevOps & CI/CD pipelines",
    ],
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/d2fee1fab_generated_870439a2.png",
  },
  {
    icon: Server,
    title: "Managed Cloud Operations",
    description:
      "Comprehensive cloud support ensuring your environment is optimized, secure, and scalable with 24/7 monitoring and management.",
    features: [
      "24/7 monitoring & support",
      "Infrastructure management",
      "Security management",
      "Cost optimization",
      "Backup & disaster recovery",
      "Performance tuning",
    ],
    image:
      "https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/93570f2be_generated_c01812ae.png",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We start by understanding your business objectives, technical requirements, and challenges to define a clear project scope.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Our architects design a comprehensive solution with detailed timelines, milestones, and resource allocation.",
  },
  {
    step: "03",
    title: "Design & Prototype",
    description:
      "We create intuitive UI/UX designs and interactive prototypes, iterating based on your feedback.",
  },
  {
    step: "04",
    title: "Development & Testing",
    description:
      "Agile development with continuous integration, thorough testing, and regular demos to keep you in the loop.",
  },
  {
    step: "05",
    title: "Deployment & Support",
    description:
      "Seamless deployment with comprehensive training, documentation, and ongoing support to ensure success.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Our Services"
        title="Endless Options."
        highlight="One Provider."
        description="From cloud migration to application modernization, we deliver comprehensive technology solutions that drive business growth."
      />

      {/* Services Detail */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  render={<Link href="/contact" />}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div
                className={`rounded-2xl overflow-hidden border border-border/60 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Deliver Results"
            description="A proven methodology that ensures quality, transparency, and successful outcomes."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((item) => (
              <div
                key={item.step}
                className="bg-card rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:border-primary/30 transition-all group text-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-primary">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how our services can help you achieve your technology goals.
          </p>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-14 text-base"
          >
            Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

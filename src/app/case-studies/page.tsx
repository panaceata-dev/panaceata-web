"use client";

import PageHero from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/Services";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Stethoscope,
  Leaf,
  ShoppingCart,
  Smartphone,
  NfcIcon,
  Car,
  FileText,
  MessageSquare,
  Package,
} from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    icon: Stethoscope,
    title: "Telemedicine Solution",
    industry: "Healthcare",
    challenge:
      "A healthcare provider needed to deliver remote consultations during pandemic restrictions while maintaining HIPAA compliance and quality patient care.",
    solution:
      "Built a secure telemedicine platform with HD video conferencing, electronic health records integration, and automated appointment scheduling.",
    results: [
      "200% increase in patient reach",
      "40% reduction in no-show rates",
      "99.9% uptime achieved",
    ],
  },
  {
    icon: Leaf,
    title: "Plant Disease Detection",
    industry: "Agriculture",
    challenge:
      "Farmers in developing regions needed an affordable way to identify crop diseases early to prevent devastating crop losses.",
    solution:
      "Developed an AI-powered mobile app using computer vision to detect plant diseases from leaf images with 95%+ accuracy.",
    results: [
      "95%+ detection accuracy",
      "30% reduction in crop losses",
      "50K+ downloads in first year",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solution",
    industry: "Retail",
    challenge:
      "A growing retailer needed to expand from physical stores to an omnichannel presence with inventory management across multiple locations.",
    solution:
      "Delivered a complete e-commerce platform with multi-vendor marketplace, real-time inventory sync, and integrated payment processing.",
    results: [
      "150% increase in online sales",
      "60% faster order processing",
      "35% improvement in inventory accuracy",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Device Management",
    industry: "Enterprise IT",
    challenge:
      "A large enterprise with 10,000+ mobile devices needed centralized management, security enforcement, and compliance monitoring.",
    solution:
      "Implemented an enterprise MDM solution with remote device management, policy enforcement, app distribution, and real-time compliance tracking.",
    results: [
      "10,000+ devices managed",
      "99% compliance rate achieved",
      "70% reduction in IT support tickets",
    ],
  },
  {
    icon: NfcIcon,
    title: "NFC Attendance Solution",
    industry: "Education",
    challenge:
      "An educational institution needed to replace manual attendance tracking with a contactless, automated system integrated with their existing HR platform.",
    solution:
      "Built an NFC-based attendance system with real-time tracking, automated reporting, geofencing, and seamless HR/payroll integration.",
    results: [
      "100% attendance accuracy",
      "80% time saved in administration",
      "Seamless payroll integration",
    ],
  },
  {
    icon: Car,
    title: "Parking Solution",
    industry: "Smart City",
    challenge:
      "A city parking authority needed to modernize parking management across 50+ facilities with real-time availability and automated billing.",
    solution:
      "Developed an IoT-enabled smart parking system with sensor integration, license plate recognition, mobile payments, and analytics dashboards.",
    results: [
      "25% increase in parking revenue",
      "40% reduction in search time",
      "Real-time occupancy tracking",
    ],
  },
  {
    icon: Package,
    title: "Retailer Distributor System",
    industry: "Supply Chain",
    challenge:
      "A distributor network needed better coordination between retailers and suppliers with real-time order tracking and inventory visibility.",
    solution:
      "Created a unified platform connecting retailers with distributors, featuring automated ordering, route optimization, and demand forecasting.",
    results: [
      "45% faster order fulfillment",
      "30% reduction in stockouts",
      "20% improvement in delivery efficiency",
    ],
  },
  {
    icon: FileText,
    title: "Document Management",
    industry: "Legal & Compliance",
    challenge:
      "A legal firm needed a secure, searchable document management system with version control, audit trails, and role-based access.",
    solution:
      "Built a cloud-native document management platform with OCR, full-text search, automated workflows, and comprehensive compliance features.",
    results: [
      "60% faster document retrieval",
      "100% audit compliance",
      "50% reduction in manual processing",
    ],
  },
  {
    icon: MessageSquare,
    title: "AI Conversational Support",
    industry: "Customer Service",
    challenge:
      "A service company needed to handle increasing customer inquiries 24/7 without proportionally scaling their support team.",
    solution:
      "Deployed an AI-powered conversational support system with natural language understanding, multi-channel integration, and seamless human handoff.",
    results: [
      "70% of queries auto-resolved",
      "24/7 customer support coverage",
      "50% reduction in response time",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Case Studies"
        title="Experience Our"
        highlight="Project Journey"
        description="Real-world solutions we've built for clients across industries, delivering measurable results and lasting impact."
      />

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="bg-card rounded-2xl border border-border/60 p-6 lg:p-8 hover:shadow-lg hover:border-primary/30 transition-all group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <study.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <span className="text-xs text-primary font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Challenge
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Solution
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-border/50">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    Key Results
                  </h4>
                  <ul className="space-y-1">
                    {study.results.map((result) => (
                      <li
                        key={result}
                        className="text-xs text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Start Your Journey"
            title="Ready to Be Our Next Success Story?"
            description="Let's discuss how we can help you achieve similar results for your business."
          />
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-14 text-base"
          >
            Get In Touch <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

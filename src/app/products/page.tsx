"use client";

import PageHero from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/Services";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Leaf,
  ShoppingCart,
  Smartphone,
  NfcIcon,
  Car,
} from "lucide-react";
import Link from "next/link";

const products = [
  {
    icon: Stethoscope,
    title: "Telemedicine Platform",
    tagline: "Virtual Healthcare Solution",
    description:
      "A comprehensive telemedicine solution enabling healthcare providers to deliver remote consultations, manage patient records, and streamline clinical workflows with secure video conferencing and real-time health monitoring.",
    features: [
      "HD video consultations",
      "Electronic health records",
      "Appointment scheduling",
      "Prescription management",
      "HIPAA-compliant security",
      "Multi-platform support",
    ],
  },
  {
    icon: Leaf,
    title: "Plant Disease Detection",
    tagline: "AI-Powered Agriculture",
    description:
      "An AI-powered mobile application that uses computer vision and deep learning to identify plant diseases from leaf images, providing farmers with instant diagnosis and treatment recommendations.",
    features: [
      "AI image recognition",
      "Real-time disease detection",
      "Treatment recommendations",
      "Crop health monitoring",
      "Offline capability",
      "Multi-language support",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Suite",
    tagline: "Complete Retail Solution",
    description:
      "A full-featured e-commerce platform with inventory management, payment processing, order fulfillment, and customer engagement tools designed for modern retail businesses.",
    features: [
      "Multi-vendor marketplace",
      "Payment gateway integration",
      "Inventory management",
      "Order tracking system",
      "Customer analytics",
      "Mobile-responsive design",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Device Management",
    tagline: "Enterprise MDM Solution",
    description:
      "An enterprise-grade mobile device management platform enabling organizations to manage, secure, and monitor their fleet of mobile devices across iOS, Android, and Windows platforms.",
    features: [
      "Device enrollment & provisioning",
      "Remote lock & wipe",
      "App distribution",
      "Policy management",
      "Compliance monitoring",
      "Real-time tracking",
    ],
  },
  {
    icon: NfcIcon,
    title: "NFC Attendance System",
    tagline: "Smart Attendance Tracking",
    description:
      "A contactless attendance tracking solution using NFC technology, providing real-time attendance monitoring, automated reporting, and integration with existing HR and payroll systems.",
    features: [
      "NFC-based check-in/out",
      "Real-time attendance tracking",
      "Automated reports",
      "HR system integration",
      "Geofencing support",
      "Analytics dashboard",
    ],
  },
  {
    icon: Car,
    title: "Smart Parking Solution",
    tagline: "Intelligent Parking Management",
    description:
      "An IoT-enabled smart parking management system that provides real-time parking availability, automated billing, license plate recognition, and data analytics for parking operators.",
    features: [
      "Real-time availability tracking",
      "License plate recognition",
      "Automated billing",
      "Mobile app integration",
      "Analytics & reporting",
      "Multi-facility management",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Our Products"
        title="Innovative Solutions"
        highlight="Built to Scale"
        description="Explore our suite of products designed to solve real-world business challenges across industries."
      />

      {/* Products Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className="bg-card rounded-2xl border border-border/60 p-6 lg:p-8 hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {product.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <span className="text-xs text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Custom Development"
            title="Need a Custom Solution?"
            description="Our products can be customized to fit your specific needs, or we can build something entirely new from scratch."
          />
          <div className="flex justify-center">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-14 text-base"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./Services";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTA() {
  const formRef = useScrollReveal();

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          eyebrow="Ready to Get Started?"
          title="Let's Build Something Great Together"
          description="Tell us about your project and we'll get back to you within 24 hours."
        />

        <div
          ref={formRef}
          className="bg-card rounded-2xl p-6 lg:p-10 border border-border/60 shadow-sm animate-reveal"
        >
          {/* Contact Form */}
          <form className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full h-10 rounded-lg border border-border/60 bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full h-10 rounded-lg border border-border/60 bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full h-10 rounded-lg border border-border/60 bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Service Interest
                </label>
                <select className="w-full h-10 rounded-lg border border-border/60 bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="">General Inquiry</option>
                  <option value="app-modernization">
                    Application Modernization
                  </option>
                  <option value="cloud-migration">Cloud Migration</option>
                  <option value="data-engineering">
                    Data Engineering & BI
                  </option>
                  <option value="outsource-dev">Outsource Development</option>
                  <option value="managed-cloud">
                    Managed Cloud Operations
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Your Message *
              </label>
              <textarea
                required
                rows={4}
                className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 text-base"
            >
              Discuss Your Project{" "}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

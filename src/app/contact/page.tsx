"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const offices = [
  {
    country: "USA",
    company: "Panaceata Inc",
    address: "5 Senator Buck Court, South Glastonbury, CT 06073, USA",
    phone: "+1 (860) 593-2437",
  },
  {
    country: "SRI LANKA",
    company: "Panaceata (Private) Limited",
    address: "328/2, Temple Lane, Kaduwela Road, Battaramulla, Sri Lanka",
    phone: "+94 011 287 62 00",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Info */}
            <div className="animate-fade-in-up">
              <span className="font-display font-semibold text-sm tracking-wider uppercase text-primary block mb-4">
                Contact Us
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
                Let&apos;s Start a Conversation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                Find out what we can do for you. Share your project details and
                our team will get back to you within 24 hours.
              </p>

              {/* Email */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <a
                    href="mailto:info@panaceata.com"
                    className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    info@panaceata.com
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-4 mb-10">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">
                    Response Time
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Within 24 hours
                  </p>
                </div>
              </div>

              {/* Our Offices */}
              <h2 className="font-display text-xl font-bold text-foreground mb-4">
                Our Offices
              </h2>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div
                    key={office.country}
                    className="bg-card rounded-xl border border-border/60 p-5"
                  >
                    <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-1">
                      {office.country}
                    </p>
                    <p className="text-base font-semibold text-foreground mb-2">
                      {office.company}
                    </p>
                    <div className="flex items-start gap-2 mb-1.5">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        {office.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        {office.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-card rounded-2xl border border-border/60 p-6 lg:p-8 shadow-sm">
                <h2 className="font-display text-xl font-bold text-foreground mb-1">
                  Send us a message
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  We&apos;d love to hear about your project.
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Full Name *"
                    />
                    <input
                      type="email"
                      required
                      className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Email Address *"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Company Name"
                    />
                    <input
                      type="tel"
                      className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Country"
                    />
                    <select className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                      <option value="">Service Interest</option>
                      <option value="app-modernization">
                        Application Modernization
                      </option>
                      <option value="cloud-migration">Cloud Migration</option>
                      <option value="data-engineering">
                        Data Engineering &amp; BI
                      </option>
                      <option value="outsource-dev">
                        Outsource Development
                      </option>
                      <option value="managed-cloud">
                        Managed Cloud Operations
                      </option>
                    </select>
                  </div>
                  <textarea
                    required
                    rows={6}
                    className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-vertical"
                    placeholder="Your Message *"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-13 text-base rounded-xl"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

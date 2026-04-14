"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand / About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="text-primary">P</span>anaceata
              </span>
            </Link>
            <p className="text-sm text-accent-foreground/70 leading-relaxed mb-6">
              A global custom software development company with offices in the
              USA and Sri Lanka, helping businesses accelerate digital
              transformation.
            </p>
            <p className="text-xs text-accent-foreground/50">
              Your Potential Delivered.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 tracking-wide uppercase text-primary">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  Application Modernization
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  Managed Cloud Operations
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  Data Engineering &amp; BI
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  Outsource Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 tracking-wide uppercase text-primary">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 tracking-wide uppercase text-primary">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-accent-foreground/70">
                  5 Senator Buck Court, South Glastonbury, CT 06073, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-accent-foreground/70">
                  +1 (860) 593-2437
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-accent-foreground/70">
                  info@panaceata.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-accent-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-accent-foreground/50">
            &copy; {new Date().getFullYear()} Panaceata Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/panaceata"
              target="_blank"
              rel="noreferrer"
              className="text-accent-foreground/50 hover:text-primary transition-colors text-xs"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/panaceata"
              target="_blank"
              rel="noreferrer"
              className="text-accent-foreground/50 hover:text-primary transition-colors text-xs"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/panaceata"
              target="_blank"
              rel="noreferrer"
              className="text-accent-foreground/50 hover:text-primary transition-colors text-xs"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

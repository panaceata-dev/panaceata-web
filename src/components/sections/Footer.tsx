"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Teal accent bar at top */}
      <div className="h-1 bg-primary" />

      <div className="bg-[#0f1f2e] text-white pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold inline-block mb-4">
              <span className="text-primary">P</span>anaceata
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A global custom software development company with offices in the
              USA and Sri Lanka, helping businesses accelerate digital
              transformation worldwide.
            </p>
            <p className="text-primary text-sm">Your Potential Delivered.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary font-semibold text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Application Modernization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Managed Cloud Operations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Data Engineering & BI
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Outsource Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-primary font-semibold text-sm uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-semibold text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-400">
                  5 Senator Buck Court, South Glastonbury, CT 06073, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-gray-400">+1 (860) 593-2437</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-400">info@panaceata.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Panaceata Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/company/panaceata"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/panaceata"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/panaceata"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

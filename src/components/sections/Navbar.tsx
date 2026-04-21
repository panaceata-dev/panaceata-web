"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setVisible(true));
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 250);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-display text-2xl font-bold tracking-tight">
              <span className="text-primary">P</span>
              <span className="text-foreground">anaceata</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold px-6 h-11 bg-primary text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Get In Touch
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-250 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
          />

          {/* Panel */}
          <div
            className={`absolute top-0 right-0 h-full w-60 bg-background border-l border-border shadow-2xl flex flex-col transition-transform duration-250 ease-in-out ${
              visible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-border shrink-0">
              <Link
                href="/"
                onClick={closeMenu}
                className="font-display text-xl font-bold tracking-tight"
              >
                <span className="text-primary">P</span>
                <span className="text-foreground">anaceata</span>
              </Link>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-1 px-4 py-5 flex-1 overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="px-5 py-5 border-t border-border shrink-0">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2.5 rounded-md shadow transition-colors text-sm"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

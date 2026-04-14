"use client";

import { useEffect } from "react";

/**
 * Observes all elements with scroll-animation classes and adds
 * `is-visible` when they enter the viewport.
 * Call once in a top-level client component.
 */
export function useReveal() {
  useEffect(() => {
    const selectors = ".scroll-reveal, .stagger, .scroll-slide-left, .scroll-slide-right, .scroll-scale";
    const elements = document.querySelectorAll(selectors);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

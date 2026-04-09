"use client";

import { SectionHeader } from "./Services";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function GlobalPresence() {
  const imgRef = useScrollReveal();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Global Reach"
          title="Globally Present"
          description="With offices in the USA and Sri Lanka, we serve clients across the globe with a follow-the-sun delivery model."
        />

        <div
          ref={imgRef}
          className="rounded-2xl overflow-hidden border border-border/30 animate-reveal"
        >
          <img
            src="https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/7cd460fb0_generated_87430cf9.png"
            alt="Panaceata global office locations"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

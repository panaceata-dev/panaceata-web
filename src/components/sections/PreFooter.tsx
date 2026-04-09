"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PreFooter() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <>
      {/* We Serve the World */}
      <section className="py-16 lg:py-20 border-b border-border/50">
        <div
          ref={ref1}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-reveal"
        >
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
            We Serve the World Together With You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to Panaceata, your trusted technology partner. We offer a
            comprehensive range of services to meet your digital needs with our
            holistic approach and dedication to excellence.
          </p>
        </div>
      </section>

      {/* Why Choose Panaceata */}
      <section className="py-16 bg-secondary">
        <div
          ref={ref2}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-reveal"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">
              Why Choose Panaceata?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We go beyond being a mere service provider — we become your
              digital accelerator. Our experienced team collaborates closely with
              you through requirement analysis, UI/UX prototyping, architectural
              design, development, quality assurance, security, and seamless
              deployments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

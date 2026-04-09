"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function AnimatedCounter({
  value,
  suffix = "",
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericValue));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-16 lg:py-20 border-b border-border/50">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 stagger-children"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter value="50" suffix="+" label="Projects Delivered" />
          <AnimatedCounter value="2" label="Global Offices" />
          <AnimatedCounter value="98" suffix="%" label="Client Satisfaction" />
          <AnimatedCounter value="8" suffix="+" label="Years Experience" />
        </div>
      </div>
    </section>
  );
}

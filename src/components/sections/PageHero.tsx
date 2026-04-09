"use client";

import { Zap } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-primary text-xs font-semibold tracking-wider uppercase mb-6">
          <Zap className="w-4 h-4" />
          {eyebrow}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-primary">{highlight}</span>
            </>
          )}
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}

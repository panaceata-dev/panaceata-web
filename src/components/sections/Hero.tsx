"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image + Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69d57762e0f16dce3d358cd8/ed48d4efa_generated_0e1dd6b1.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-6 animate-fade-in-up">
            <Zap className="w-3.5 h-3.5" />
            Your Trusted Technology Partner
          </span>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
            Innovate.
            <br />
            Collaborate.
            <br />
            <span className="text-primary">Succeed.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-400">
            A global digital software solutions provider helping companies
            accelerate their digital transformation journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-14 text-base shadow"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              render={<Link href="/services" />}
              size="lg"
              variant="outline"
              className="font-semibold px-8 h-14 text-base border-foreground/20 hover:bg-foreground/5"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

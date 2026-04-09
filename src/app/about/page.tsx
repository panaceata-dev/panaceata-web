"use client";

import PageHero from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/Services";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Lightbulb,
  Shield,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace emerging technologies and creative thinking to deliver cutting-edge solutions that give our clients a competitive edge.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in building strong partnerships with our clients, working together to understand challenges and deliver meaningful results.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty, transparency, and ethical conduct in every engagement and interaction.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering exceptional quality in every project, continuously improving our processes and exceeding expectations.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description:
      "With offices in the USA and Sri Lanka, we bring diverse perspectives and follow-the-sun delivery for maximum efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Driven",
    description:
      "We focus on solutions that drive measurable business growth, ensuring every investment delivers tangible returns.",
  },
];

const milestones = [
  {
    year: "2016",
    title: "Company Founded",
    description:
      "Panaceata was established with a vision to deliver world-class software solutions from South Glastonbury, CT.",
  },
  {
    year: "2018",
    title: "Sri Lanka Office",
    description:
      "Expanded globally with a development center in Battaramulla, Sri Lanka, enabling follow-the-sun delivery.",
  },
  {
    year: "2020",
    title: "Cloud Practice Launch",
    description:
      "Launched dedicated cloud migration and managed cloud operations practices to meet growing demand.",
  },
  {
    year: "2022",
    title: "50+ Projects Milestone",
    description:
      "Reached the milestone of 50+ successfully delivered projects across multiple industries and geographies.",
  },
  {
    year: "2024",
    title: "AI & Data Engineering",
    description:
      "Expanded service offerings to include AI-powered solutions and advanced data engineering capabilities.",
  },
];

const leadership = [
  {
    name: "Chamitha Hewavitharana",
    role: "Chief Executive Officer",
    description:
      "Visionary leader with 15+ years in software development and digital transformation, driving Panaceata's global strategy.",
  },
  {
    name: "Technical Leadership",
    role: "VP of Engineering",
    description:
      "Seasoned engineering leader overseeing architecture, quality, and delivery across all client engagements.",
  },
  {
    name: "Operations Team",
    role: "Director of Operations",
    description:
      "Ensuring seamless project delivery and client satisfaction through efficient processes and dedicated support.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="About Us"
        title="Empowering Digital"
        highlight="Transformation"
        description="We are a global custom software development company helping businesses accelerate their digital transformation journey with innovative solutions."
      />

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl border border-border/60 p-8 lg:p-10 hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses worldwide with innovative, scalable, and
                secure technology solutions that drive growth, efficiency, and
                competitive advantage. We strive to be a trusted partner in every
                client&apos;s digital transformation journey.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border/60 p-8 lg:p-10 hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally recognized technology partner known for
                delivering transformative digital solutions that create lasting
                value. We envision a future where every business can harness the
                full potential of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Values"
            title="What Drives Us Forward"
            description="Our core values define who we are and guide every decision we make."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl border border-border/60 p-6 lg:p-8 hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="Milestones That Define Us"
            description="From a small team to a global technology partner, here's our story."
          />
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">
                      {milestone.year}
                    </span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Leadership"
            title="Meet Our Team"
            description="The experienced professionals driving Panaceata's vision and growth."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-card rounded-2xl border border-border/60 p-6 lg:p-8 hover:shadow-lg hover:border-primary/30 transition-all text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {person.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {person.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {person.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "8+", label: "Years Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "2", label: "Global Offices" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

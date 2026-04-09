import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import GlobalPresence from "@/components/sections/GlobalPresence";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import PreFooter from "@/components/sections/PreFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Services />
      <GlobalPresence />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <PreFooter />
    </div>
  );
}

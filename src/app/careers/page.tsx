import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata(
  "Careers at Panaceata | Join Our Tech Team",
  "Join Panaceata's growing team of talented developers and tech professionals. Explore career opportunities in software development and cloud solutions.",
  "/careers"
);

export default function Careers() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Careers</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Take Your Career to the Next Level
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            At Panaceata, we empower each other and work with the latest technologies. But it&apos;s not yet complete. We&apos;re looking for amazing new talent to make us even better. That could be you!
          </p>
        </div>
      </section>

      {/* Latest Openings */}
      <section className="bg-[#142952] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl font-bold text-[#fafafa] mb-4">Latest Openings</h2>
          </div>

          <div className="scroll-reveal">
            <div className="bg-white/10 rounded-2xl p-10 text-center border border-white/15">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-300 text-lg">There are no job openings at this moment.</p>
              <p className="text-gray-400 text-sm mt-2">Check back soon — new positions are added regularly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Dream Job */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center scroll-reveal">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Didn&apos;t Find Your Dream Job Listed Here?</h2>
          <p className="text-gray-500 mb-6">
            Let us know your interest area and send us your profile to
          </p>
          <a href="mailto:careers@panaceata.com" className="text-primary font-semibold text-lg hover:underline">
            careers@panaceata.com
          </a>
          <p className="text-gray-500 mt-4">and we&apos;ll let you know if something comes up.</p>
        </div>
      </section>
    </div>
  );
}

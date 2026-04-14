import { sendContactEmail } from "@/app/actions/contact";
import ServiceSelect from "@/components/ServiceSelect";
import CaptchaWidget from "@/components/CaptchaWidget";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10 scroll-reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Ready to Get Started?
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-muted-foreground">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 lg:p-10 border border-[#E2E8F0] shadow-md scroll-reveal">
          <form action={sendContactEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" required placeholder="Full Name *" className="h-[44px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-sm text-gray-900 placeholder-[#94A3B8] outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30" />
              <input type="email" name="email" required placeholder="Email Address *" className="h-[44px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-sm text-gray-900 placeholder-[#94A3B8] outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="company" placeholder="Company Name" className="h-[44px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-sm text-gray-900 placeholder-[#94A3B8] outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30" />
              <input type="tel" name="phone" placeholder="Phone Number" className="h-[44px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-sm text-gray-900 placeholder-[#94A3B8] outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="country" placeholder="Country" className="h-[44px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-sm text-gray-900 placeholder-[#94A3B8] outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30" />
              <ServiceSelect />
            </div>
            <textarea name="message" required placeholder="Your Message *" rows={4} className="min-h-[120px] w-full resize-none rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-3 text-sm text-gray-900 placeholder-[#94A3B8] outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30" />
            <CaptchaWidget />

            <button
              type="submit"
              className="flex h-[48px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#0F766E] text-base font-semibold text-white shadow transition-colors hover:bg-[#0D6D66]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

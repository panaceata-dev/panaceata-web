import { sendContactEmail } from "@/app/actions/contact";
import ServiceSelect from "@/components/ServiceSelect";
import CaptchaWidget from "@/components/CaptchaWidget";

export default async function Contact({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;

  return (
    <main>
      <section className="pt-28 lg:pt-36 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* ── Left Column: Info ── */}
            <div className="scroll-slide-left">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Contact Us
              </span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Let&apos;s Start a Conversation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Find out what we can do for you. Share your project details and
                our team will get back to you within 24 hours.
              </p>

              {/* Contact Info Items */}
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">info@panaceata.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Response Time</p>
                    <p className="text-sm font-medium text-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
                Our Offices
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-card border border-border/60 hover-lift">
                  <p className="text-xs font-semibold tracking-wide uppercase text-primary mb-1">USA</p>
                  <p className="text-sm font-medium text-foreground">Panaceata Inc</p>
                  <div className="flex items-start gap-2 mt-2">
                    <svg className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    <p className="text-xs text-muted-foreground">5 Senator Buck Court, South Glastonbury, CT 06073, USA</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <svg className="w-3.5 h-3.5 text-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <p className="text-xs text-muted-foreground">+1 (860) 593-2437</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-card border border-border/60 hover-lift">
                  <p className="text-xs font-semibold tracking-wide uppercase text-primary mb-1">Sri Lanka</p>
                  <p className="text-sm font-medium text-foreground">Panaceata (Private) Limited</p>
                  <div className="flex items-start gap-2 mt-2">
                    <svg className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    <p className="text-xs text-muted-foreground">328/2, Temple Lane, Kaduwela Road, Battaramulla, Sri Lanka</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <svg className="w-3.5 h-3.5 text-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <p className="text-xs text-muted-foreground">+94 011 287 62 00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column: Form ── */}
            <div className="sticky top-28 self-start scroll-slide-right">
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0] shadow-md max-w-[600px]">
                <h2 className="font-display text-xl font-bold mb-1 text-foreground">
                  Send us a message
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  We&apos;d love to hear about your project.
                </p>

                {status === "sent" && (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="text-primary w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-sm text-muted-foreground">
                      Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <a href="/contact" className="mt-6 inline-block text-sm text-primary font-medium hover:underline">
                      Send another message
                    </a>
                  </div>
                )}

                {status === "error" && (
                  <p className="text-sm text-destructive mb-4">
                    Something went wrong. Please try again.
                  </p>
                )}

                {status !== "sent" && (
                  <form action={sendContactEmail} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" name="name" required placeholder="Full Name *" className="h-[44px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-sm text-gray-900 placeholder-[#94A3B8] outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30" />
                      <input type="email" name="email" required placeholder="Email Address *" className="h-[44px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-sm text-gray-900 placeholder-[#94A3B8] outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" name="company" placeholder="Company Name" className="h-[44px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-sm text-gray-900 placeholder-[#94A3B8] outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30" />
                      <input type="tel" name="phone" placeholder="Phone Number" className="h-[44px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-sm text-gray-900 placeholder-[#94A3B8] outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" name="country" placeholder="Country" className="h-[44px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 text-sm text-gray-900 placeholder-[#94A3B8] outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30" />
                      <ServiceSelect />
                    </div>

                    <textarea name="message" required placeholder="Your Message *" rows={5} className="min-h-[120px] w-full resize-none rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-3 text-sm text-gray-900 placeholder-[#94A3B8] outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30" />

                    <CaptchaWidget />

                    <button
                      type="submit"
                      className="flex h-[48px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#0F766E] text-base font-semibold text-white shadow transition-colors hover:bg-[#0D6D66]"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

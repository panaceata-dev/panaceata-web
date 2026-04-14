import Link from "next/link";

const caseStudies = [
  { title: "Telemedicine Solution", industry: "Healthcare", desc: "Built a secure telemedicine platform with HD video conferencing, electronic health records integration, and automated appointment scheduling.", results: ["200% increase in patient reach", "40% reduction in no-show rates", "99.9% uptime achieved"], img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" },
  { title: "Plant Disease Detection", industry: "Agriculture", desc: "Developed an AI-powered mobile app using computer vision to detect plant diseases from leaf images with 95%+ accuracy.", results: ["95%+ detection accuracy", "30% reduction in crop losses", "50K+ downloads in first year"], img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" },
  { title: "E-Commerce Solution", industry: "Retail", desc: "Delivered a complete e-commerce platform with multi-vendor marketplace, real-time inventory sync, and integrated payment processing.", results: ["150% increase in online sales", "60% faster order processing", "35% improvement in inventory accuracy"], img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
  { title: "Mobile Device Management", industry: "Enterprise IT", desc: "Implemented an enterprise MDM solution with remote device management, policy enforcement, and real-time compliance tracking.", results: ["10,000+ devices managed", "99% compliance rate achieved", "70% reduction in IT support tickets"], img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80" },
  { title: "NFC Attendance Solution", industry: "Education", desc: "Built an NFC-based attendance system with real-time tracking, automated reporting, geofencing, and seamless HR/payroll integration.", results: ["100% attendance accuracy", "80% time saved in administration", "Seamless payroll integration"], img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80" },
  { title: "Parking Solution", industry: "Smart City", desc: "Developed an IoT-enabled smart parking system with sensor integration, license plate recognition, mobile payments, and analytics.", results: ["25% increase in parking revenue", "40% reduction in search time", "Real-time occupancy tracking"], img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80" },
];

export default function CaseStudies() {
  return (
    <div className="pt-16">
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center scroll-reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Experience Our Project Journey</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Real-world solutions we&apos;ve built for clients across industries, delivering measurable results.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover-lift">
              <img src={cs.img} alt={cs.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">{cs.industry}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{cs.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{cs.desc}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Results</p>
                  <ul className="space-y-1.5">
                    {cs.results.map((r) => (
                      <li key={r} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 mb-16 bg-[#142952] text-white px-6">
        <div className="max-w-2xl mx-auto text-center scroll-reveal">
          <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-gray-300 mb-8">Let&apos;s discuss how we can help you achieve similar results for your business.</p>
          <Link href="/contact" className="bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-teal-700 transition inline-block">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}

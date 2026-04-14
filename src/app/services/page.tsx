import Link from "next/link";

const services = [
  { title: "Application Modernization Services", desc: "Experience enhanced performance and improved user satisfaction with our cutting-edge application modernization services. We revamp your outdated applications, incorporating the latest technologies and industry best practices.", features: ["Legacy System Migration", "UI/UX Redesign", "Microservices Architecture", "Performance Optimization"], img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80" },
  { title: "Cloud Migration Services", desc: "Embrace the flexibility and scalability of the cloud with our seamless migration services. Our experts assess your infrastructure and design a customized migration strategy to ensure a smooth transition.", features: ["Infrastructure Assessment", "Migration Strategy", "Multi-Cloud Support", "Zero Downtime Migration"], img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80" },
  { title: "Data Engineering & BI Services", desc: "Leverage the power of data to drive informed decision-making. Our data engineering and business intelligence services help you extract meaningful insights from vast datasets.", features: ["Data Pipeline Design", "Real-time Analytics", "Dashboard Development", "Predictive Modeling"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80" },
  { title: "Outsource Development Services", desc: "Boost your development capabilities without straining your resources. Our reliable outsource development services provide you with a skilled team dedicated to turning your ideas into reality.", features: ["Dedicated Teams", "Agile Methodology", "Full-Stack Development", "Quality Assurance"], img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80" },
  { title: "Managed Cloud Operations", desc: "Focus on your core business while we take care of your cloud infrastructure. Our managed cloud services provide comprehensive support, ensuring your cloud environment is optimized, secure, and scalable.", features: ["24/7 Monitoring", "Security Management", "Auto-Scaling", "Cost Optimization"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80" },
];

export default function Services() {
  return (
    <div className="pt-16">
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center scroll-reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">We Serve the World Together With You</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Welcome to Panaceata, your trusted technology partner. We offer a comprehensive range of services to meet your digital needs.</p>
        </div>
      </section>

      <section className="bg-[#142952] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center scroll-reveal">
          <h2 className="text-2xl font-bold mb-4">Why Choose Panaceata?</h2>
          <p className="text-gray-300 leading-relaxed">We go beyond being a mere service provider — we become your digital accelerator. Our experienced team collaborates closely with you through requirement analysis, UI/UX prototyping, architectural design, development, quality assurance, security, and seamless deployments.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 space-y-24">
        {services.map((s, i) => (
          <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
            <div className={`flex-1 ${i % 2 === 0 ? "scroll-slide-left" : "scroll-slide-right"}`}>
              <h2 className="text-2xl font-black text-gray-900 mb-4">{s.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {s.features.map((f) => (
                  <span key={f} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">{f}</span>
                ))}
              </div>
              <Link href="/contact" className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-700 transition text-sm inline-block">Discuss This Service</Link>
            </div>
            <div className={`flex-1 ${i % 2 === 0 ? "scroll-slide-right" : "scroll-slide-left"}`}>
              <img src={s.img} alt={s.title} className="w-full rounded-2xl shadow-md object-cover h-72" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

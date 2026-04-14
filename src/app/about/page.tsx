export default function About() {
  return (
    <div className="pt-16">
      {/* Hero — side by side */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-slide-left">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">Walking With You Throughout Your Journey</h1>
            <p className="text-gray-500 text-lg mb-6">Panaceata is a global digital software solutions provider who helps small to enterprise level companies accelerate their digital transformation.</p>
            <p className="text-gray-500 leading-relaxed">Are you an innovator, a startup, or an entrepreneur? Does your idea have the potential to change the world? We know the struggles you face — crossing the digital barriers being one of the hardest, yet one of the most essential. Panaceata loves bringing your idea to life by becoming your trusted digital partner, through thick and thin.</p>
          </div>
          <div className="scroll-slide-right">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Panaceata team collaborating" className="w-full rounded-2xl object-cover h-96" />
          </div>
        </div>
      </section>

      {/* Vision & Mission — white cards on dark navy */}
      <section className="bg-[#142952] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 stagger">
          <div className="bg-white rounded-2xl p-10 hover-lift">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-500 leading-relaxed">Create a better world with equal opportunity for all inventors. We envision a future where every great idea has the technical foundation to become reality.</p>
          </div>
          <div className="bg-white rounded-2xl p-10 hover-lift">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-500 leading-relaxed">Be the most trusted technology partner for inventors in the productization journey. Eliminate all technical barriers to bring concepts to tangible products that serve people&apos;s needs.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "4", label: "Global Offices" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "8+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black text-primary">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values — centered, SVG icons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 scroll-reveal">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">What Drives Us Forward</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Our core values shape every project we undertake and every relationship we build.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {[
              { title: "Client-Centric", desc: "We treat every client as a valued business partner, not just another project.", icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
              { title: "Innovation First", desc: "We stay ahead of the technology curve to deliver cutting-edge solutions.", icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
              { title: "Excellence", desc: "Rigorous quality assurance and security at every step of development.", icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> },
              { title: "Global Reach", desc: "Offices in the USA and Sri Lanka, delivering technology solutions to clients across the globe.", icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
            ].map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">{v.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

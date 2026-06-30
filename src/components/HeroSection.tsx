export function HeroSection() {
  return (
    <section className="relative pt-0 pb-0 px-6 md:px-10 overflow-hidden">
      <figure className="absolute inset-0 m-0">
        <img
          alt="Clean modern telehealth workspace with prescription packaging, health forms, and warm natural light representing the WellPeps digital care process"
          title="How WellPeps Works — Clinician-guided telehealth, step by step"
          className="w-full h-full object-cover object-top"
          width="1920"
          height="500"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          src="/images/how-it-works-01-clean-modern-telehealth-workspace-with-p.jpg"
        />
        <figcaption className="sr-only">
          Clean modern telehealth workspace with prescription packaging, health forms, and warm natural light — representing the WellPeps digital care process. Complete your intake online, get provider review, receive discreet delivery if prescribed.
        </figcaption>
      </figure>
      <div className="absolute inset-0 bg-gradient-to-b from-[#082B59]/55 via-[#1565C0]/30 to-[#2EA8F7]/15"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/25"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-5 md:px-0 pt-28 md:pt-32 pb-16 md:pb-20">
        <p className="text-[#D8A53A] text-xs font-semibold uppercase tracking-widest mb-4">The Process</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>How WellPeps Works</h1>
        <p className="text-blue-100 text-base max-w-2xl mx-auto leading-relaxed">Choose your goal, complete a secure online intake, and get reviewed by a licensed provider. Treatment is prescribed only when clinically appropriate and ships discreetly if prescribed.</p>
        <div className="mt-6 max-w-2xl mx-auto border-t border-white/10 pt-5 space-y-2">
          <p className="text-white/90 text-sm font-semibold leading-relaxed">WellPeps is a telehealth platform that connects you with independent licensed medical providers. All medical decisions and prescriptions are made solely by those providers.</p>
          <p className="text-white/60 text-xs leading-relaxed">WellPeps is not a pharmacy or a medical practice. All medical services are provided by independent licensed medical providers, and medications are fulfilled by state-licensed compounding pharmacies. Availability varies by state. Some states require a synchronous initial visit.</p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a data-clarity-tag="hiw-hero-intake" className="bg-[#1565C0] text-white font-semibold px-8 py-3.5 rounded-full text-sm whitespace-nowrap hover:bg-[#0F56AF] transition-all duration-200 cursor-pointer hover:-translate-y-0.5" href="/intake">Start Your Intake</a>
          <a data-clarity-tag="hiw-hero-find-program" className="bg-white/10 border border-white/30 text-white font-medium px-8 py-3.5 rounded-full text-sm whitespace-nowrap hover:bg-white/20 transition-all duration-200 cursor-pointer" href="/eligibility">Find My Program</a>
        </div>
      </div>
      <div className="absolute bottom-[-2px] left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F7F9FC" />
        </svg>
      </div>
    </section>
  );
}

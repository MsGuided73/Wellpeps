export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F4F9FF]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-16 md:pb-24">
        <div className="grid items-center gap-10 md:gap-14 md:grid-cols-2">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF5FF] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1565C0]">
              <i className="ri-shield-check-line text-xs"></i>
              Physician-Founded · Pharmacy-Backed
            </span>
            <h1
              className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] text-[#153B73]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Personalized Wellness.{" "}
              <span className="text-[#1565C0]">Simplified.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#4B5C73] max-w-lg">
              Access personalized treatment programs designed around your unique
              health goals — with licensed providers, ongoing support, and
              medications delivered to your door.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/intake"
                data-clarity-tag="home-hero-assessment"
                className="inline-flex items-center justify-center bg-[#1565C0] text-white font-semibold px-7 py-3.5 rounded-full text-sm whitespace-nowrap hover:bg-[#0F56AF] shadow-lg shadow-[#1565C0]/25 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              >
                Start Your Free Assessment
              </a>
              <a
                href="/programs"
                data-clarity-tag="home-hero-programs"
                className="inline-flex items-center justify-center bg-white border-2 border-[#1565C0] text-[#1565C0] font-semibold px-7 py-3.5 rounded-full text-sm whitespace-nowrap hover:bg-[#EAF5FF] transition-all duration-200 cursor-pointer"
              >
                Explore Our Programs
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#7A8899]">
              <span className="flex items-center gap-1.5">
                <i className="ri-checkbox-circle-line text-[#1565C0]"></i>
                100% online intake
              </span>
              <span className="flex items-center gap-1.5">
                <i className="ri-checkbox-circle-line text-[#1565C0]"></i>
                Licensed providers
              </span>
              <span className="flex items-center gap-1.5">
                <i className="ri-checkbox-circle-line text-[#1565C0]"></i>
                Discreet delivery
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#EAF5FF] to-[#2EA8F7]/20 blur-2xl" />
            <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-[#082B59]/15 ring-1 ring-[#082B59]/5">
              <img
                src="/images/wellpeps-hero-couple.webp"
                alt="A couple living well with personalized care from WellPeps"
                className="w-full h-full object-cover object-center"
                width={1200}
                height={800}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

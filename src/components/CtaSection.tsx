export function CtaSection() {
  return (
    <section className="bg-[#1565C0] py-20 px-6 md:px-10">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#1565C0]/20 border border-[#1565C0]/40 rounded-full px-4 py-1.5 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#1565C0] "></span>
          <span className="text-[#1565C0] text-xs font-semibold">Clinician-Guided Programs</span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Ready to Get Started?
        </h2>
        <p className="text-blue-100 text-base mb-3 leading-relaxed">
          Complete your intake and an independent licensed provider reviews your case. Whether you are exploring weight loss, energy &amp; longevity, men&apos;s health, or longevity care, treatment is recommended only when clinically appropriate. No insurance required. Discreet. Delivered to your door.
        </p>
        <p className="text-blue-200 text-sm mb-8">Free to start. No commitment.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            className="bg-[#1565C0] text-white font-semibold px-10 py-4 rounded-full text-base whitespace-nowrap hover:bg-[#0F56AF] transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
            href="/intake"
          >
            Start Your Intake
          </a>
          <a
            className="bg-white/10 border border-white/30 text-white font-medium px-8 py-4 rounded-full text-base whitespace-nowrap hover:bg-white/20 transition-all duration-200 cursor-pointer"
            href="/eligibility"
          >
            Find My Program
          </a>
        </div>
        <p className="text-blue-200/50 text-xs mt-5 max-w-md mx-auto leading-relaxed">
          Availability and care process may vary by state. Some states require a live video consultation before treatment.
        </p>
        <div className="mt-6">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white/90 bg-white/10">
              <i className="ri-stethoscope-line text-[#1565C0]"></i>Licensed Medical Providers
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white/90 bg-white/10">
              <i className="ri-capsule-line text-[#1565C0]"></i>Licensed Compounding Pharmacy
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white/90 bg-white/10">
              <i className="ri-shield-check-line text-[#1565C0]"></i>Privacy Protected
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white/90 bg-white/10">
              <i className="ri-truck-line text-[#1565C0]"></i>Shipping Included If Prescribed
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white/90 bg-white/10">
              <i className="ri-lock-2-line text-[#1565C0]"></i>Secure &amp; Private
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white/90 bg-white/10">
              <i className="ri-hospital-line text-[#1565C0]"></i>No Insurance Needed
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <div className="flex flex-row items-center gap-3 ">
            <a
              href="https://www.legitscript.com/websites/?checker_keywords=openwaterrx.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Verify LegitScript Approval for www.openwaterrx.com"
              className="flex-shrink-0 cursor-pointer"
              aria-label="LegitScript certified — click to verify on legitscript.com (opens in new tab)"
            >
              <img
                alt="Verify Approval for www.openwaterrx.com"
                width="73"
                height="79"
                src="/images/how-it-works-08-verify-approval-for-www-openwaterrx-com.png"
                style={{ width: "73px", height: "79px", display: "block" }}
              />
            </a>
            <div className="flex flex-col items-start gap-0.5">
              <p
                className="text-xs font-bold uppercase tracking-widest leading-tight"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(255, 255, 255, 0.85)" }}
              >
                LegitScript Certified
              </p>
              <p
                className="text-[11px] leading-snug"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(255, 255, 255, 0.45)" }}
              >
                OpenWater RX is LegitScript‑certified.{" "}
                <a
                  href="https://www.legitscript.com/websites/?checker_keywords=openwaterrx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 cursor-pointer"
                  aria-label="Click to verify LegitScript certification on legitscript.com"
                  style={{ color: "rgba(255, 255, 255, 0.55)" }}
                >
                  Click the seal to verify.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#082B59] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 pt-14 md:pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-12">
          <div className="col-span-1 lg:col-span-2">
            <span
              className="block mb-5"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "22px",
                fontWeight: 700,
                color: "white",
              }}
            >
              WellPeps
            </span>
            <p className="text-sm text-blue-100 leading-relaxed max-w-sm">
              Online prescription care. Licensed providers. Transparent pricing.
              Telehealth for weight loss, men&apos;s health, energy, and
              performance. Reviewed by licensed providers, delivered to your
              door.
            </p>
            <address className="not-italic mt-5 flex flex-col gap-2">
              <a
                href="tel:+19413155217"
                className="inline-flex items-center gap-2 text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
              >
                <i className="ri-phone-line text-[#1565C0]"></i> (941) 315-5217
              </a>
              <a
                href="mailto:members@openwaterrx.com"
                className="inline-flex items-center gap-2 text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
              >
                <i className="ri-mail-line text-[#1565C0]"></i>{" "}
                members@openwaterrx.com
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-blue-100">
                <i className="ri-map-pin-line text-[#1565C0]"></i> Tampa, FL
              </span>
            </address>
            <div className="mt-5 bg-white/10 border border-white/15 rounded-xl px-4 py-3 max-w-sm">
              <p className="text-xs text-blue-100 leading-relaxed">
                <i className="ri-stethoscope-line text-[#1565C0] mr-1"></i>
                <strong className="text-white">Medically Reviewed</strong> by
                licensed medical providers. All clinical content is reviewed for
                accuracy.
              </p>
            </div>
            <div className="mt-5 max-w-sm">
              <div className="block rounded-xl border p-5 bg-white/5 border-white/10 ">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="inline-flex items-center gap-[1px] text-sm"
                    aria-label="5 out of 5 stars"
                  >
                    <span className="text-[#00B67A]">★</span>
                    <span className="text-[#00B67A]">★</span>
                    <span className="text-[#00B67A]">★</span>
                    <span className="text-[#00B67A]">★</span>
                    <span className="text-[#00B67A]">★</span>
                  </span>
                  <span className="text-base font-bold text-white">
                    4.97/5.0
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-white/60">
                  Rated <strong className="text-white/90">Excellent</strong> on
                  Trustpilot
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-white/40">
                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    Trustpilot
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 bg-white/10 border border-white/15 rounded-xl px-4 py-4 max-w-sm">
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
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(255, 255, 255, 0.85)",
                    }}
                  >
                    LegitScript Certified
                  </p>
                  <p
                    className="text-[11px] leading-snug"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(255, 255, 255, 0.45)",
                    }}
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
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-5 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/how-it-works"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/eligibility"
                >
                  Is This Right For Me?
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/faq"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/medical-glossary"
                >
                  Medical Glossary
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/resources"
                >
                  Patient Resources
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-5 text-white">
              Treatments
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/weight-loss"
                >
                  Weight Loss
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/energy-longevity"
                >
                  Energy &amp; Longevity
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/sexual-health"
                >
                  Sexual Health
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/weight-loss"
                >
                  Semaglutide
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/weight-loss"
                >
                  Tirzepatide
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/semaglutide-vs-tirzepatide"
                >
                  Compare Programs
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/nad-peptide-therapy"
                >
                  NAD+ Peptide Therapy
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/programs"
                >
                  Programs Hub
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
            </ul>
            <h4 className="text-sm font-semibold uppercase tracking-widest mt-7 mb-5 text-white">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.accessdata.fda.gov/scripts/drugshortages/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="FDA Drug Shortage Database (opens in new tab)"
                  className="text-xs text-blue-200 hover:text-[#1565C0] transition-colors leading-snug block active:opacity-80"
                >
                  FDA Drug Shortage Database{" "}
                  <i className="ri-external-link-line text-[10px]"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/33567185/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="STEP 1 Trial (NEJM) (opens in new tab)"
                  className="text-xs text-blue-200 hover:text-[#1565C0] transition-colors leading-snug block active:opacity-80"
                >
                  STEP 1 Trial (NEJM){" "}
                  <i className="ri-external-link-line text-[10px]"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/35658024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SURMOUNT-1 Trial (NEJM) (opens in new tab)"
                  className="text-xs text-blue-200 hover:text-[#1565C0] transition-colors leading-snug block active:opacity-80"
                >
                  SURMOUNT-1 Trial (NEJM){" "}
                  <i className="ri-external-link-line text-[10px]"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.fda.gov/drugs/human-drug-compounding"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="FDA on Compounding (opens in new tab)"
                  className="text-xs text-blue-200 hover:text-[#1565C0] transition-colors leading-snug block active:opacity-80"
                >
                  FDA on Compounding{" "}
                  <i className="ri-external-link-line text-[10px]"></i>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-5 text-white">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/terms-of-service"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/terms-and-conditions"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/cancellation-policy"
                >
                  Cancellation &amp; Refund Policy
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/hipaa-notice"
                >
                  HIPAA Notice
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/telehealth-consent"
                >
                  Telehealth Consent
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-100 hover:text-[#1565C0] transition-colors active:opacity-80"
                  href="/accessibility"
                >
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <h4 className="text-sm font-semibold uppercase tracking-widest mb-2 text-white flex items-center gap-2">
                <i className="ri-map-2-line text-[#1565C0] text-base"></i>Areas
                We Serve
              </h4>
              <p className="text-xs text-blue-100 leading-relaxed mb-3">
                Telehealth care is available where permitted. Availability varies
                by state, treatment type, provider review, and pharmacy access.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/alabama"
                >
                  Alabama
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/arizona"
                >
                  Arizona
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/california"
                >
                  California
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/colorado"
                >
                  Colorado
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/connecticut"
                >
                  Connecticut
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/florida"
                >
                  Florida
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/georgia"
                >
                  Georgia
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/illinois"
                >
                  Illinois
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/indiana"
                >
                  Indiana
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/maryland"
                >
                  Maryland
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/massachusetts"
                >
                  Massachusetts
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/michigan"
                >
                  Michigan
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/minnesota"
                >
                  Minnesota
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/missouri"
                >
                  Missouri
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/nevada"
                >
                  Nevada
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/new-jersey"
                >
                  New Jersey
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/new-york"
                >
                  New York
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/north-carolina"
                >
                  North Carolina
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/ohio"
                >
                  Ohio
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/oregon"
                >
                  Oregon
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/pennsylvania"
                >
                  Pennsylvania
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/south-carolina"
                >
                  South Carolina
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/tennessee"
                >
                  Tennessee
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/texas"
                >
                  Texas
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/utah"
                >
                  Utah
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/virginia"
                >
                  Virginia
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/washington"
                >
                  Washington
                </a>
                <a
                  className="text-[11px] font-semibold bg-white/10 text-blue-100 hover:text-[#1565C0] hover:bg-white/15 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/locations/wisconsin"
                >
                  Wisconsin
                </a>
                <a
                  className="text-[11px] font-semibold bg-[#1565C0]/20 text-[#1565C0] hover:bg-[#1565C0]/30 px-2.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98] transition-transform"
                  href="/glp1-weight-loss-nationwide"
                >
                  View all states →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5">
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-white flex items-center gap-2">
              <i className="ri-hospital-line text-[#1565C0] text-base"></i>
              Pharmacy &amp; Clinical Network
            </h4>
            <p className="text-xs text-blue-100 leading-relaxed mb-3">
              Medications are dispensed by licensed U.S. pharmacies, including:
            </p>
            <ul className="space-y-1.5 mb-3">
              <li className="flex items-center gap-2 text-xs text-blue-200">
                <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-[#1565C0] text-[10px]"></i>
                </div>
                RedRock Pharmacy (Utah)
              </li>
              <li className="flex items-center gap-2 text-xs text-blue-200">
                <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-[#1565C0] text-[10px]"></i>
                </div>
                HealthWarehouse (Kentucky)
              </li>
              <li className="flex items-center gap-2 text-xs text-blue-200">
                <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-[#1565C0] text-[10px]"></i>
                </div>
                Precision Compounding Pharmacy (New York)
              </li>
              <li className="flex items-center gap-2 text-xs text-blue-200">
                <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-[#1565C0] text-[10px]"></i>
                </div>
                Triad Rx (Texas)
              </li>
            </ul>
            <p className="text-[11px] text-blue-300 leading-relaxed">
              Pharmacy partners may vary based on medication and patient
              location.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5">
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-white flex items-center gap-2">
              <i className="ri-map-2-line text-[#1565C0] text-base"></i>
              Availability
            </h4>
            <p className="text-xs text-blue-100 leading-relaxed mb-3">
              WellPeps facilitates care across the United States.
              Availability varies by state, treatment pathway, provider
              availability, and clinical review.
            </p>
            <p className="text-[11px] text-blue-300 leading-relaxed">
              Some states impose additional restrictions or disclosure
              requirements. Treatment options may not be available in every
              state or may require additional steps.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[10px] font-semibold bg-white/10 text-blue-100 px-2.5 py-1 rounded-full">
                U.S. Telehealth
              </span>
              <span className="text-[10px] font-semibold bg-white/10 text-blue-100 px-2.5 py-1 rounded-full">
                Availability Varies by State
              </span>
              <span className="text-[10px] font-semibold bg-white/10 text-blue-100 px-2.5 py-1 rounded-full">
                100% Telehealth
              </span>
              <span className="text-[10px] font-semibold bg-white/10 text-blue-100 px-2.5 py-1 rounded-full">
                No In-Person Visit (Most Cases)
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1565C0]/20 flex-shrink-0">
                <i className="ri-phone-line text-[#1565C0] text-sm"></i>
              </div>
              <div>
                <p className="text-[10px] text-blue-300 uppercase tracking-widest font-semibold">
                  Phone
                </p>
                <a
                  href="tel:+19413155217"
                  className="text-sm font-semibold text-white hover:text-[#1565C0] transition-colors active:opacity-80"
                >
                  (941) 315-5217
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1565C0]/20 flex-shrink-0">
                <i className="ri-mail-line text-[#1565C0] text-sm"></i>
              </div>
              <div>
                <p className="text-[10px] text-blue-300 uppercase tracking-widest font-semibold">
                  Email
                </p>
                <a
                  href="mailto:members@openwaterrx.com"
                  className="text-sm font-semibold text-white hover:text-[#1565C0] transition-colors active:opacity-80"
                >
                  members@openwaterrx.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1565C0]/20 flex-shrink-0">
                <i className="ri-map-pin-line text-[#1565C0] text-sm"></i>
              </div>
              <div>
                <p className="text-[10px] text-blue-300 uppercase tracking-widest font-semibold">
                  Address
                </p>
                <p className="text-sm font-semibold text-white">
                  Tampa, FL 33607
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 py-1">
            <a
              className="text-xs text-blue-200 hover:text-[#1565C0] transition-colors font-medium whitespace-nowrap active:opacity-80"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            <a
              className="text-xs text-blue-200 hover:text-[#1565C0] transition-colors font-medium whitespace-nowrap active:opacity-80"
              href="/terms-of-service"
            >
              Terms of Service
            </a>
            <a
              className="text-xs text-blue-200 hover:text-[#1565C0] transition-colors font-medium whitespace-nowrap active:opacity-80"
              href="/terms-and-conditions"
            >
              Terms &amp; Conditions
            </a>
            <a
              className="text-xs text-blue-200 hover:text-[#1565C0] transition-colors font-medium whitespace-nowrap active:opacity-80"
              href="/cancellation-policy"
            >
              Cancellation &amp; Refund Policy
            </a>
            <a
              className="text-xs text-blue-200 hover:text-[#1565C0] transition-colors font-medium whitespace-nowrap active:opacity-80"
              href="/hipaa-notice"
            >
              HIPAA Notice
            </a>
            <a
              className="text-xs text-blue-200 hover:text-[#1565C0] transition-colors font-medium whitespace-nowrap active:opacity-80"
              href="/telehealth-consent"
            >
              Telehealth Consent
            </a>
            <a
              className="text-xs text-blue-200 hover:text-[#1565C0] transition-colors font-medium whitespace-nowrap active:opacity-80"
              href="/contact"
            >
              Contact
            </a>
          </div>
          <div className="border border-white/10 rounded-xl overflow-hidden">
            <div className="bg-white/5 px-6 py-5">
              <p className="text-xs text-white/90 leading-relaxed text-center font-medium">
                Compounded medications are not approved finished drug products.
                They are not reviewed by the FDA for safety, effectiveness, or
                quality in the same manner as commercially manufactured drugs.
                Medications are prescribed only when a patient has a specific
                medical need. WellPeps does not provide medical advice.
                Individual results vary and are not guaranteed. © 2026 Open Water
                Rx LLC.
              </p>
            </div>
            <button
              aria-expanded="false"
              className="w-full flex items-center justify-center gap-1.5 py-3 border-t border-white/10 text-[11px] text-blue-300 hover:text-[#1565C0] transition-colors cursor-pointer bg-white/[0.03] hover:bg-white/[0.06] active:bg-white/[0.08]"
            >
              <i className="ri-arrow-down-s-line text-sm"></i>View full legal
              disclosures
            </button>
          </div>
          <p className="text-xs text-blue-300 text-center pt-1">
            © 2026 WellPeps LLC. All rights reserved. Tampa, FL | Telehealth
            Prescription Care. Availability varies by state.
          </p>
        </div>
      </div>
    </footer>
  );
}

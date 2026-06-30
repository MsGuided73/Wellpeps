export function RightForYouSection() {
  return (
    <section className="py-16 px-6 md:px-10 bg-white border-t border-gray-100 cv-auto">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-[#E8A923] text-xs font-semibold uppercase tracking-widest mb-3">Eligibility</p>
          <h2 className="text-3xl font-bold text-[#0B7A8C] mb-5 leading-snug" style={{ fontFamily: '"Playfair Display", serif' }}>Is the Open Water Rx Telehealth Process Right for You?</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">Telehealth care through Open Water Rx is designed for adults seeking convenient, clinician-guided treatment for weight loss, energy and longevity, men&apos;s health, or longevity care — without the barriers of traditional in-person clinic visits. Our process is ideal for busy professionals, parents, rural residents, and anyone who values privacy and transparent pricing.</p>
          <p className="text-gray-600 text-base leading-relaxed">For weight management programs, general eligibility includes adults aged 18 or older with a body mass index (BMI) of 27 or higher with at least one weight-related comorbidity, or a BMI of 30 or higher. Contraindications include personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN2). For men&apos;s health programs, patients must be 21 or older. Energy and longevity programs have their own clinical criteria reviewed by your provider. Every case is individually assessed — these are general guidelines, not guarantees of approval.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#F8F8F6] rounded-2xl p-6 border border-gray-100">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#E8F5F7] mb-4"><i className="ri-map-pin-line text-[#0B7A8C] text-lg"></i></div>
            <h4 className="text-sm font-bold text-gray-900 mb-2">Nationwide Availability</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Open Water Rx serves patients across the United States. Availability varies by state, treatment pathway, provider availability, and state-specific requirements. Some states require a synchronous (live video) initial visit before prescribing.</p>
          </div>
          <div className="bg-[#F8F8F6] rounded-2xl p-6 border border-gray-100">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#E8F5F7] mb-4"><i className="ri-health-book-line text-[#0B7A8C] text-lg"></i></div>
            <h4 className="text-sm font-bold text-gray-900 mb-2">Medication Side Effects Guide</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Read our educational overview of common and serious medication side effects, safety warnings, contraindications, and when to contact your licensed provider.</p>
          </div>
          <div className="bg-[#F8F8F6] rounded-2xl p-6 border border-gray-100">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#E8F5F7] mb-4"><i className="ri-shield-check-line text-[#0B7A8C] text-lg"></i></div>
            <h4 className="text-sm font-bold text-gray-900 mb-2">Clinical Eligibility</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Every patient case is reviewed individually by a licensed medical provider. General criteria include age, BMI, medical history, current medications, and contraindications. No automated approvals.</p>
          </div>
          <div className="bg-[#F8F8F6] rounded-2xl p-6 border border-gray-100">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#E8F5F7] mb-4"><i className="ri-time-line text-[#0B7A8C] text-lg"></i></div>
            <h4 className="text-sm font-bold text-gray-900 mb-2">Minimal Time Commitment</h4>
            <p className="text-xs text-gray-500 leading-relaxed">The online intake takes approximately 5 minutes. No appointment scheduling, no commuting, no waiting rooms. Complete your evaluation from any device, 24 hours a day, 7 days a week.</p>
          </div>
        </div>
        <div className="mt-8 bg-[#E8F5F7] rounded-xl p-5 flex items-start gap-3">
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"><i className="ri-information-line text-[#0B7A8C] text-base"></i></div>
          <p className="text-sm text-[#0B7A8C] leading-relaxed"><strong>State-specific requirements:</strong> States including but not limited to Alabama, Arkansas, Delaware, Idaho, Indiana, Iowa, Louisiana, Mississippi, New Hampshire, New Mexico, North Carolina, Oklahoma, South Carolina, West Virginia, and Wisconsin may require a synchronous video visit for the initial prescription. This requirement is determined by state medical board regulations and applies to all telehealth platforms. Your provider will guide you through scheduling if required.</p>
        </div>
      </div>
    </section>
  );
}

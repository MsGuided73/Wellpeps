export function ProviderReviewSection() {
  return (
    <section className="py-16 px-6 md:px-10 bg-[#F7F9FC] border-t border-gray-100 cv-auto">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-[#1565C0] text-xs font-semibold uppercase tracking-widest mb-3">The Clinical Review Process</p>
          <h2 className="text-3xl font-bold text-[#1565C0] mb-5 leading-snug" style={{ fontFamily: '"Playfair Display", serif' }}>What Happens During Your Provider Review?</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">After you complete your online health evaluation, your case enters a structured clinical review workflow designed to ensure thorough, individualized assessment. This is not an automated approval process. An independent licensed medical provider — a physician or nurse practitioner credentialed in your state — personally reviews your complete health profile before making any clinical determination.</p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">The review process typically takes between 24 and 72 hours, though complex cases or cases requiring additional documentation may take longer. During this time, your provider evaluates your medical history, current medications, documented health history, prior treatment attempts if any, contraindicated conditions, and individual health goals. They may reach out through secure messaging if they have clarifying questions. In states requiring a synchronous initial visit, you will be prompted to schedule a brief video consultation with your provider.</p>
          <p className="text-gray-600 text-base leading-relaxed">If treatment is determined to be clinically appropriate, your provider issues a personalized treatment plan — which may include a prescription with specific dosing, titration schedule, and monitoring plan, or a non-prescription care recommendation depending on your program. If treatment is not appropriate, you receive a clear explanation and recommendation for next steps, which may include consulting your primary care physician or exploring alternative approaches. Either way, you are never charged for treatment that is not prescribed. The monthly plan price covers this entire review process, the treatment plan or prescription if issued, shipping if prescribed, and all ongoing follow-up care. Pricing is shown before checkout.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#EAF5FF] mb-4"><i className="ri-calendar-check-line text-[#1565C0] text-lg"></i></div>
            <p className="text-xs font-bold text-[#1565C0] uppercase tracking-wider mb-2">24–72 hours</p>
            <h4 className="text-sm font-bold text-gray-900 mb-2">Initial Provider Review</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Your licensed medical provider reviews your complete health evaluation, medical history, medications, and program-specific goals. Complex cases may require additional time or documentation.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#EAF5FF] mb-4"><i className="ri-calendar-check-line text-[#1565C0] text-lg"></i></div>
            <p className="text-xs font-bold text-[#1565C0] uppercase tracking-wider mb-2">Day 30</p>
            <h4 className="text-sm font-bold text-gray-900 mb-2">First Follow-up Review</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Your provider conducts an async review of your initial response, side effects, and tolerance. Dosing adjustments may be made based on your individual progress and clinical indicators.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#EAF5FF] mb-4"><i className="ri-calendar-check-line text-[#1565C0] text-lg"></i></div>
            <p className="text-xs font-bold text-[#1565C0] uppercase tracking-wider mb-2">Monthly → Quarterly</p>
            <h4 className="text-sm font-bold text-gray-900 mb-2">Ongoing Async Care</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Monthly async follow-up continues until steady-state dosing is reached, then transitions to quarterly reviews. Secure provider messaging is available throughout your entire program.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

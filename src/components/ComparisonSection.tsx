export function ComparisonSection() {
  return (
    <section className="py-20 px-6 md:px-10 bg-white border-t border-gray-100 cv-auto">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#1565C0] text-xs font-semibold uppercase tracking-widest mb-3">Side-by-Side</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1565C0] mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>Telehealth vs. Traditional Clinic</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">Both paths involve a licensed medical provider and real care. The difference is convenience, cost, and time. Available for all programs.</p>
        </div>
        <div className="md:hidden space-y-4">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-3 bg-[#F7F9FC] border-b border-gray-100">
              <p className="text-sm font-bold text-gray-800">Appointment required</p>
            </div>
            <div className="grid grid-cols-2 gap-0">
              <div className="px-4 py-4 border-r border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1565C0] flex-shrink-0"><i className="ri-smartphone-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-[#1565C0]">WellPeps</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-500 text-sm flex-shrink-0 mt-0.5"></i>
                  <span className="text-sm leading-snug text-gray-800 font-medium">No - complete intake anytime, 24/7</span>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0"><i className="ri-hospital-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-gray-500">Clinic</p>
                </div>
                <span className="text-sm text-gray-500 leading-snug">Yes - often days or weeks out</span>
              </div>
            </div>
            <div className="px-5 py-2 bg-[#F7F9FC] border-t border-gray-100 flex items-center gap-2">
              <i className="ri-check-line text-emerald-500 text-sm"></i>
              <span className="text-xs font-medium text-gray-500">WellPeps wins on this</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-3 bg-[#F7F9FC] border-b border-gray-100">
              <p className="text-sm font-bold text-gray-800">In-person visit</p>
            </div>
            <div className="grid grid-cols-2 gap-0">
              <div className="px-4 py-4 border-r border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1565C0] flex-shrink-0"><i className="ri-smartphone-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-[#1565C0]">WellPeps</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-500 text-sm flex-shrink-0 mt-0.5"></i>
                  <span className="text-sm leading-snug text-gray-800 font-medium">Not required in most states</span>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0"><i className="ri-hospital-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-gray-500">Clinic</p>
                </div>
                <span className="text-sm text-gray-500 leading-snug">Required every visit</span>
              </div>
            </div>
            <div className="px-5 py-2 bg-[#F7F9FC] border-t border-gray-100 flex items-center gap-2">
              <i className="ri-check-line text-emerald-500 text-sm"></i>
              <span className="text-xs font-medium text-gray-500">WellPeps wins on this</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-3 bg-[#F7F9FC] border-b border-gray-100">
              <p className="text-sm font-bold text-gray-800">Provider review</p>
            </div>
            <div className="grid grid-cols-2 gap-0">
              <div className="px-4 py-4 border-r border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1565C0] flex-shrink-0"><i className="ri-smartphone-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-[#1565C0]">WellPeps</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm leading-snug text-gray-600">Licensed medical provider reviews your case</span>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0"><i className="ri-hospital-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-gray-500">Clinic</p>
                </div>
                <span className="text-sm text-gray-500 leading-snug">Physician or NP in-office</span>
              </div>
            </div>
            <div className="px-5 py-2 bg-[#F7F9FC] border-t border-gray-100 flex items-center gap-2">
              <i className="ri-check-line text-emerald-500 text-sm"></i>
              <span className="text-xs font-medium text-gray-500">Both offer this</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-3 bg-[#F7F9FC] border-b border-gray-100">
              <p className="text-sm font-bold text-gray-800">Insurance required</p>
            </div>
            <div className="grid grid-cols-2 gap-0">
              <div className="px-4 py-4 border-r border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1565C0] flex-shrink-0"><i className="ri-smartphone-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-[#1565C0]">WellPeps</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-500 text-sm flex-shrink-0 mt-0.5"></i>
                  <span className="text-sm leading-snug text-gray-800 font-medium">No - self-pay, clear pricing</span>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0"><i className="ri-hospital-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-gray-500">Clinic</p>
                </div>
                <span className="text-sm text-gray-500 leading-snug">Often required; prior auth common</span>
              </div>
            </div>
            <div className="px-5 py-2 bg-[#F7F9FC] border-t border-gray-100 flex items-center gap-2">
              <i className="ri-check-line text-emerald-500 text-sm"></i>
              <span className="text-xs font-medium text-gray-500">WellPeps wins on this</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-3 bg-[#F7F9FC] border-b border-gray-100">
              <p className="text-sm font-bold text-gray-800">Pricing</p>
            </div>
            <div className="grid grid-cols-2 gap-0">
              <div className="px-4 py-4 border-r border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1565C0] flex-shrink-0"><i className="ri-smartphone-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-[#1565C0]">WellPeps</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-500 text-sm flex-shrink-0 mt-0.5"></i>
                  <span className="text-sm leading-snug text-gray-800 font-medium">Clear pricing shown before checkout; semaglutide $159/mo w/ SEMASUMMER (reg. $249)</span>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0"><i className="ri-hospital-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-gray-500">Clinic</p>
                </div>
                <span className="text-sm text-gray-500 leading-snug">Varies; may include separate consultation, pharmacy, and follow-up fees</span>
              </div>
            </div>
            <div className="px-5 py-2 bg-[#F7F9FC] border-t border-gray-100 flex items-center gap-2">
              <i className="ri-check-line text-emerald-500 text-sm"></i>
              <span className="text-xs font-medium text-gray-500">WellPeps wins on this</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-3 bg-[#F7F9FC] border-b border-gray-100">
              <p className="text-sm font-bold text-gray-800">Medication delivery</p>
            </div>
            <div className="grid grid-cols-2 gap-0">
              <div className="px-4 py-4 border-r border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1565C0] flex-shrink-0"><i className="ri-smartphone-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-[#1565C0]">WellPeps</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-500 text-sm flex-shrink-0 mt-0.5"></i>
                  <span className="text-sm leading-snug text-gray-800 font-medium">Shipped to your door if prescribed (included in plan)</span>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0"><i className="ri-hospital-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-gray-500">Clinic</p>
                </div>
                <span className="text-sm text-gray-500 leading-snug">Pharmacy pickup required</span>
              </div>
            </div>
            <div className="px-5 py-2 bg-[#F7F9FC] border-t border-gray-100 flex items-center gap-2">
              <i className="ri-check-line text-emerald-500 text-sm"></i>
              <span className="text-xs font-medium text-gray-500">WellPeps wins on this</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-3 bg-[#F7F9FC] border-b border-gray-100">
              <p className="text-sm font-bold text-gray-800">Ongoing follow-up</p>
            </div>
            <div className="grid grid-cols-2 gap-0">
              <div className="px-4 py-4 border-r border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1565C0] flex-shrink-0"><i className="ri-smartphone-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-[#1565C0]">WellPeps</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-500 text-sm flex-shrink-0 mt-0.5"></i>
                  <span className="text-sm leading-snug text-gray-800 font-medium">Async follow-up included in plan</span>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0"><i className="ri-hospital-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-gray-500">Clinic</p>
                </div>
                <span className="text-sm text-gray-500 leading-snug">Separate appointments; additional cost</span>
              </div>
            </div>
            <div className="px-5 py-2 bg-[#F7F9FC] border-t border-gray-100 flex items-center gap-2">
              <i className="ri-check-line text-emerald-500 text-sm"></i>
              <span className="text-xs font-medium text-gray-500">WellPeps wins on this</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-3 bg-[#F7F9FC] border-b border-gray-100">
              <p className="text-sm font-bold text-gray-800">Time to start</p>
            </div>
            <div className="grid grid-cols-2 gap-0">
              <div className="px-4 py-4 border-r border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1565C0] flex-shrink-0"><i className="ri-smartphone-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-[#1565C0]">WellPeps</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-500 text-sm flex-shrink-0 mt-0.5"></i>
                  <span className="text-sm leading-snug text-gray-800 font-medium">Intake takes ~5 minutes</span>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0"><i className="ri-hospital-line text-white text-xs"></i></div>
                  <p className="text-xs font-bold text-gray-500">Clinic</p>
                </div>
                <span className="text-sm text-gray-500 leading-snug">Scheduling, travel, wait time</span>
              </div>
            </div>
            <div className="px-5 py-2 bg-[#F7F9FC] border-t border-gray-100 flex items-center gap-2">
              <i className="ri-check-line text-emerald-500 text-sm"></i>
              <span className="text-xs font-medium text-gray-500">WellPeps wins on this</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[600px] text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left px-6 py-4 bg-[#F7F9FC] text-gray-500 font-semibold text-xs uppercase tracking-wider border-b border-gray-200 w-1/3">Feature</th>
                <th className="text-center px-6 py-4 bg-[#1565C0] text-white font-bold text-sm border-b border-[#1565C0] w-1/3">
                  <div className="flex items-center justify-center gap-2"><i className="ri-smartphone-line text-base"></i>WellPeps (Online)</div>
                </th>
                <th className="text-center px-6 py-4 bg-[#F7F9FC] text-gray-500 font-semibold text-xs uppercase tracking-wider border-b border-gray-200 w-1/3">Traditional Clinic</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-gray-100">Appointment required</td>
                <td className="px-6 py-4 text-center border-b border-gray-100">
                  <div className="flex items-start justify-center gap-2"><i className="ri-check-line text-emerald-500 text-base flex-shrink-0 mt-0.5"></i><span className="text-sm leading-snug text-gray-800 font-medium">No - complete intake anytime, 24/7</span></div>
                </td>
                <td className="px-6 py-4 text-center border-b border-gray-100"><span className="text-sm text-gray-500 leading-snug">Yes - often days or weeks out</span></td>
              </tr>
              <tr className="bg-[#F7F9FC]/50">
                <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-gray-100">In-person visit</td>
                <td className="px-6 py-4 text-center border-b border-gray-100">
                  <div className="flex items-start justify-center gap-2"><i className="ri-check-line text-emerald-500 text-base flex-shrink-0 mt-0.5"></i><span className="text-sm leading-snug text-gray-800 font-medium">Not required in most states</span></div>
                </td>
                <td className="px-6 py-4 text-center border-b border-gray-100"><span className="text-sm text-gray-500 leading-snug">Required every visit</span></td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-gray-100">Provider review</td>
                <td className="px-6 py-4 text-center border-b border-gray-100">
                  <div className="flex items-start justify-center gap-2"><span className="text-sm leading-snug text-gray-600">Licensed medical provider reviews your case</span></div>
                </td>
                <td className="px-6 py-4 text-center border-b border-gray-100"><span className="text-sm text-gray-500 leading-snug">Physician or NP in-office</span></td>
              </tr>
              <tr className="bg-[#F7F9FC]/50">
                <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-gray-100">Insurance required</td>
                <td className="px-6 py-4 text-center border-b border-gray-100">
                  <div className="flex items-start justify-center gap-2"><i className="ri-check-line text-emerald-500 text-base flex-shrink-0 mt-0.5"></i><span className="text-sm leading-snug text-gray-800 font-medium">No - self-pay, clear pricing</span></div>
                </td>
                <td className="px-6 py-4 text-center border-b border-gray-100"><span className="text-sm text-gray-500 leading-snug">Often required; prior auth common</span></td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-gray-100">Pricing</td>
                <td className="px-6 py-4 text-center border-b border-gray-100">
                  <div className="flex items-start justify-center gap-2"><i className="ri-check-line text-emerald-500 text-base flex-shrink-0 mt-0.5"></i><span className="text-sm leading-snug text-gray-800 font-medium">Clear pricing shown before checkout; semaglutide $159/mo w/ SEMASUMMER (reg. $249)</span></div>
                </td>
                <td className="px-6 py-4 text-center border-b border-gray-100"><span className="text-sm text-gray-500 leading-snug">Varies; may include separate consultation, pharmacy, and follow-up fees</span></td>
              </tr>
              <tr className="bg-[#F7F9FC]/50">
                <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-gray-100">Medication delivery</td>
                <td className="px-6 py-4 text-center border-b border-gray-100">
                  <div className="flex items-start justify-center gap-2"><i className="ri-check-line text-emerald-500 text-base flex-shrink-0 mt-0.5"></i><span className="text-sm leading-snug text-gray-800 font-medium">Shipped to your door if prescribed (included in plan)</span></div>
                </td>
                <td className="px-6 py-4 text-center border-b border-gray-100"><span className="text-sm text-gray-500 leading-snug">Pharmacy pickup required</span></td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-gray-100">Ongoing follow-up</td>
                <td className="px-6 py-4 text-center border-b border-gray-100">
                  <div className="flex items-start justify-center gap-2"><i className="ri-check-line text-emerald-500 text-base flex-shrink-0 mt-0.5"></i><span className="text-sm leading-snug text-gray-800 font-medium">Async follow-up included in plan</span></div>
                </td>
                <td className="px-6 py-4 text-center border-b border-gray-100"><span className="text-sm text-gray-500 leading-snug">Separate appointments; additional cost</span></td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-gray-100">Time to start</td>
                <td className="px-6 py-4 text-center border-b border-gray-100">
                  <div className="flex items-start justify-center gap-2"><i className="ri-check-line text-emerald-500 text-base flex-shrink-0 mt-0.5"></i><span className="text-sm leading-snug text-gray-800 font-medium">Intake takes ~5 minutes</span></div>
                </td>
                <td className="px-6 py-4 text-center border-b border-gray-100"><span className="text-sm text-gray-500 leading-snug">Scheduling, travel, wait time</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center leading-relaxed">Retail pharmacy pricing is approximate and based on publicly available information as of early 2026 without insurance. Compounded medications are not FDA-approved finished drug products. Individual eligibility, treatment, and results vary. Availability and program offerings vary by state.</p>
        <div className="mt-8 text-center">
          <a className="inline-flex items-center gap-2 bg-[#1565C0] text-white font-semibold px-10 py-4 rounded-full text-sm whitespace-nowrap hover:bg-[#082B59] transition-all duration-200 cursor-pointer hover:-translate-y-0.5" href="/eligibility">Find My Program<i className="ri-arrow-right-line text-sm"></i></a>
          <p className="text-xs text-gray-400 mt-3">Free to start · No commitment</p>
        </div>
      </div>
    </section>
  );
}

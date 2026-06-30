"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How does WellPeps work?",
    answer:
      "WellPeps works in 6 steps: (1) Choose your care path. (2) Complete a 5-minute online health evaluation. (3) A licensed medical provider reviews your case. (4) If treatment is clinically appropriate, a personalized treatment plan or prescription is issued. (5) Medication or treatment ships to your door if prescribed — shipping is included in your plan price. (6) Ongoing async follow-up is included. Pricing is shown before checkout — semaglutide programs are $159/mo with code SEMASUMMER (reg. $249), tirzepatide programs are $219/mo with code SUMMER2026 (reg. $339), and other wellness programs may start lower depending on treatment type. No insurance required. Availability varies by state.",
  },
  {
    question: "Do I need to visit a clinic to get a prescription?",
    answer:
      "In most cases, no. WellPeps is fully telehealth for all programs. In most states, the clinician review is fully asynchronous — no webcam or live call required. A small number of states require a brief phone or video call before a prescription can be issued. If that applies to you, we will let you know after your intake.",
  },
  {
    question: "How long does it take to get a prescription online?",
    answer:
      "The health evaluation takes about 5 minutes. Licensed medical provider review timelines vary. Once a prescription is issued, shipping timelines depend on the program, pharmacy, and your location. Some states require a synchronous initial visit which may add time.",
  },
  {
    question: "What happens if the licensed medical provider does not approve me?",
    answer:
      "If a licensed medical provider determines that treatment is not clinically appropriate for you, you will receive a clear explanation. We encourage you to speak with your primary care provider about your options.",
  },
  {
    question: "Who reviews my health evaluation?",
    answer:
      "A licensed medical provider, not an algorithm, reviews your full health evaluation. All prescribing decisions are made solely by your licensed medical provider based on your individual health profile. WellPeps does not direct or influence those decisions.",
  },
  {
    question: "What programs does WellPeps offer?",
    answer:
      "WellPeps offers clinician-guided programs across four core categories: Weight Loss (including semaglutide and tirzepatide GLP-1 programs), Peptide & Wellness Therapy (such as Sermorelin, NAD+, Glutathione, MIC/B12, Lipo-C, and methylene blue), Hair Restoration (oral and topical regimens), and Sexual Wellness (ED and intimacy support). Each program is reviewed by an independent licensed medical provider who determines clinical appropriateness on an individual basis. Not all programs are available in every state.",
  },
  {
    question: "What is the difference between semaglutide and tirzepatide?",
    answer:
      "Semaglutide is a GLP-1 receptor agonist (single pathway). Clinical trials with FDA-approved formulations demonstrated significant weight loss. Tirzepatide is a dual GIP/GLP-1 receptor agonist (two pathways). Clinical trials with FDA-approved formulations also demonstrated significant weight loss. Your licensed medical provider will recommend the best fit based on your health profile. Individual results vary and are not guaranteed.",
  },
  {
    question: "Are compounded medications FDA-approved?",
    answer:
      "No. Compounded medications are not FDA-approved finished drug products. They are prepared by independent, licensed, FDA-registered compounding pharmacies and are prescribed only when a licensed medical provider determines there is an individual clinical need. Some programs may utilize FDA-approved medications where clinically appropriate.",
  },
  {
    question: "Can I cancel my WellPeps subscription at any time?",
    answer:
      "Yes. There are no long-term commitments or cancellation fees. Cancel by emailing members@openwaterrx.com, calling (941) 315-5217 Mon–Fri 9 AM–5 PM ET, or through your patient portal. Once medication for that month has been ordered, that month's charge is not refundable.",
  },
  {
    question: "Does the same process apply to all programs?",
    answer:
      "Yes. Every WellPeps program follows the same six-step telehealth process: choose your care path, complete an online health evaluation, licensed provider review, personalized care plan, discreet delivery, and ongoing follow-up. The intake questions, treatment options, and follow-up cadence are tailored to each program, but the overall experience is consistent across weight loss, energy & longevity, men's health, and wellness optimization.",
  },
  {
    question: "Can I switch programs after signing up?",
    answer:
      "If you are already enrolled in one program and would like to explore another, contact your provider through secure messaging or email members@openwaterrx.com. Your provider will review whether a different program is clinically appropriate for you and guide you through the next steps.",
  },
  {
    question: "How much does WellPeps cost per month?",
    answer:
      "Pricing is shown before checkout. Semaglutide programs are $159/mo with code SEMASUMMER (reg. $249) and tirzepatide programs are $219/mo with code SUMMER2026 (reg. $339). Personalized dosing programs are $179/mo. NAD+ and peptide longevity programs are $149/mo. Men's health programs are $99. Wellness optimization programs may start lower depending on treatment type. Your actual cost depends on the specific program, formulation, and provider recommendation. All pricing is disclosed upfront before you pay.",
  },
  {
    question: "What states does WellPeps serve?",
    answer:
      "WellPeps serves patients across the United States. Availability varies by state, treatment pathway, provider availability, and state-specific requirements. Some states impose additional restrictions or disclosure requirements. Some states require a synchronous (live video) initial visit with your licensed medical provider before a prescription can be issued. Your provider will inform you of any state-specific requirements during the intake process. Shipping is available where permitted by law.",
  },
  {
    question: "Can I use my HSA or FSA to pay for WellPeps?",
    answer:
      "Yes. In most cases, WellPeps services and medications qualify for Health Savings Account (HSA) or Flexible Spending Account (FSA) reimbursement because they are prescribed by a licensed medical provider for a diagnosed medical condition. We recommend checking with your HSA/FSA administrator for specific coverage details. We can provide itemized receipts and superbills for reimbursement upon request.",
  },
  {
    question: "How do I know if telehealth is right for my goals?",
    answer:
      "Telehealth care through WellPeps is ideal for adults who prefer convenience and want clinician-guided care without insurance battles, waiting rooms, or monthly clinic visits. For weight-loss programs, general eligibility includes a BMI of 27 or higher with a comorbidity, or a BMI of 30 or higher, without contraindicated conditions such as personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN2). Other programs have their own clinical criteria. An independent licensed provider will review your individual case to confirm suitability for any program.",
  },
];

export function FaqSection() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="faq" className="scroll-mt-28 py-20 px-6 md:px-10 bg-white border-t border-gray-100 cv-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#1565C0] text-xs font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1565C0] mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Common Questions About the Process
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Everything most patients want to know before starting their evaluation.
          </p>
        </div>
        <div className="space-y-3" role="region" aria-label="Frequently asked questions">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = Boolean(openItems[index]);
            return (
              <div
                key={index}
                className="bg-[#F7F9FC] rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  id={`faq-hiw-trigger-${index}`}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-gray-100 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-hiw-panel-${index}`}
                  onClick={() => toggleItem(index)}
                >
                  <span className="text-sm font-semibold text-gray-800 pr-4 leading-snug">
                    {item.question}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <i
                      className={`text-[#1565C0] text-lg transition-transform duration-200 ri-add-line ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    ></i>
                  </div>
                </button>
                <div
                  id={`faq-hiw-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-hiw-trigger-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <a
            className="inline-flex items-center gap-2 bg-[#EAF5FF] text-[#1565C0] text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#EAF5FF] transition-colors cursor-pointer"
            href="/faq"
          >
            <i className="ri-question-answer-line text-base"></i>See all patient FAQs →
          </a>
        </div>
      </div>
    </section>
  );
}

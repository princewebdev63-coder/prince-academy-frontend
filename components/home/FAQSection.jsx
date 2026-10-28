
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Which courses are available at Prince Academy?",
    answer:
      "We provide preparation for Defence, NDA, Air Force, Navy, Army, SSC, Police and other competitive examinations. Contact our team for currently available batches.",
  },
  {
    question: "How can I take admission?",
    answer:
      "Submit the admission form on our website or contact our team for guidance about eligibility, available courses and the admission process.",
  },
  {
    question: "Does Prince Academy provide hostel facilities?",
    answer:
      "Please contact our team for current information about hostel availability and accommodation facilities.",
  },
  {
    question: "Where can I check results and student achievements?",
    answer:
      "Explore the Results and Achievers sections of our website for published results and student achievements.",
  },
  {
    question: "Can I take a virtual tour of the campus?",
    answer:
      "You can explore the campus through our virtual campus tour and contact the academy for further information.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-[#F8FAFF] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-4xl">
        {/* Compact heading */}
        <div className="mb-6 text-center sm:mb-8">
          <div className="mb-2 inline-flex items-center gap-2">
            <span className="h-px w-6 bg-[#FF8A3D]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#508AA8] sm:text-xs">
              Need to know
            </span>
            <span className="h-px w-6 bg-[#FF8A3D]" />
          </div>

          <h2
            id="faq-heading"
            className="text-2xl font-bold tracking-tight text-[#061B3A] sm:text-3xl lg:text-4xl"
          >
            Frequently Asked{" "}
            <span className="text-[#0A3D91]">Questions</span>
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#64748B]">
            Quick answers about courses, admissions and campus facilities.
          </p>
        </div>

        {/* Compact accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                key={faq.question}
                className={`relative overflow-hidden rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-[#508AA8]/50 bg-white shadow-[0_6px_22px_rgba(10,61,145,0.08)]"
                    : "border-[#D9E2F0] bg-white hover:border-[#508AA8]/50"
                }`}
              >
                {/* Active gold accent */}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-3 left-0 top-3 w-[3px] rounded-r-full bg-[#FFC107] transition-opacity duration-200 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center gap-3 px-3.5 py-3 text-left sm:gap-4 sm:px-5 sm:py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#508AA8]"
                >
                  <span
                    aria-hidden="true"
                    className={`w-6 shrink-0 text-xs font-bold tabular-nums ${
                      isOpen ? "text-[#0A3D91]" : "text-[#94A3B8]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`min-w-0 flex-1 text-[13px] font-semibold leading-5 sm:text-sm sm:leading-6 ${
                      isOpen ? "text-[#0A3D91]" : "text-[#102A56]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#FFC107] text-[#061B3A]"
                        : "border border-[#D9E2F0] bg-[#F8FAFF] text-[#508AA8]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={15} strokeWidth={2.2} />
                    ) : (
                      <Plus size={15} strokeWidth={2.2} />
                    )}
                  </span>
                </button>

                {/* Smooth answer transition */}
                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="ml-[3.25rem] border-t border-[#E8EEF6] pb-3.5 pr-4 pt-2.5 sm:ml-[4.25rem] sm:pb-4 sm:pr-5 sm:pt-3">
                      <p className="text-[13px] leading-[1.7] text-[#586B82] sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

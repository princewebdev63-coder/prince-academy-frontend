
"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight, MessageCircle } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-[#101D2B] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      {/* Subtle static decorative accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4F8EAD]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#F5C66B]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
         

          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Frequently Asked{" "}
            <span className="text-[#91B9D0]">Questions</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#B5C3D1] sm:text-base">
            Everything you need to know about our courses, admissions
            and campus facilities.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-[#4F8EAD] bg-[#1D3042]"
                    : "border-[#2A3A49] bg-[#162534] hover:border-[#496477]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center gap-3 p-4 text-left sm:gap-4 sm:p-5"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                      isOpen
                        ? "bg-[#F5C66B] text-[#172B40]"
                        : "bg-[#25394A] text-[#91B9D0]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-sm font-semibold leading-6 text-white sm:text-base">
                    {faq.question}
                  </span>

                  <span className="shrink-0 text-[#F5C66B]">
                    {isOpen ? (
                      <Minus size={20} aria-hidden="true" />
                    ) : (
                      <Plus size={20} aria-hidden="true" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-4 pb-5 pl-16 sm:pl-[4.75rem]"
                  >
                    <p className="text-sm leading-7 text-[#B8C6D3]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

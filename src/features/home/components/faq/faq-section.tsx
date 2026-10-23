"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FAQ_REVEAL_DELAY_SECONDS } from "@/features/home/constants/reveal";
import { faqIntro, faqs } from "@/features/home/data/faq-data";
import { SECTION_IDS } from "@/shared/config/routes";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id={SECTION_IDS.faq}
      className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-foreground scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-[11px] font-serif-luxury uppercase tracking-[0.2em] text-brand border border-badge-line px-3.5 py-1 rounded-full bg-badge shadow-[var(--shadow-badge)]">
          {faqIntro.badge}
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink mt-4">
          {faqIntro.title}
        </h2>
        <p className="text-sm sm:text-base text-muted font-light mt-3">
          {faqIntro.description}
        </p>
      </motion.div>

      <div className="space-y-3.5 sm:space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.45,
                delay: index * FAQ_REVEAL_DELAY_SECONDS,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                isOpen
                  ? "border-accent bg-surface shadow-[var(--shadow-card)]"
                  : "border-line hover:border-accent bg-surface hover:bg-surface-hover shadow-[var(--shadow-soft)]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 cursor-pointer"
              >
                <span className="text-sm sm:text-base font-medium text-ink pr-4 font-serif-luxury">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 border-brand-mid bg-brand-muted text-brand"
                      : "border-line-soft bg-chip text-warm"
                  }`}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted font-light leading-relaxed border-t border-line-faint pt-4 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

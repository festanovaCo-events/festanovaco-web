"use client";

import { motion } from "motion/react";
import { STEP_REVEAL_DELAY_SECONDS } from "@/features/home/constants/reveal";
import {
  howItWorksIntro,
  howItWorksSteps,
} from "@/features/home/data/how-it-works-data";
import { SECTION_IDS } from "@/shared/config/routes";

export function HowItWorksSection() {
  return (
    <section
      id={SECTION_IDS.howItWorks}
      className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto text-foreground scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-[11px] font-serif-luxury uppercase tracking-[0.2em] text-brand border border-badge-line px-3.5 py-1 rounded-full bg-badge shadow-[var(--shadow-badge)]">
          {howItWorksIntro.badge}
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink mt-4">
          {howItWorksIntro.title}
        </h2>
        <p className="text-sm sm:text-base text-muted font-light mt-3">
          {howItWorksIntro.description}
        </p>
      </motion.div>

      <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
        {howItWorksSteps.map((step, index) => (
          <motion.li
            key={step.number}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * STEP_REVEAL_DELAY_SECONDS,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex flex-col text-left md:text-center"
          >
            <div className="flex items-baseline justify-between md:justify-center gap-3 mb-4">
              <span className="font-serif-luxury text-3xl sm:text-4xl font-normal text-brand/80">
                {step.number}
              </span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-warm">
                {step.tag}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-serif-luxury font-medium text-ink">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-light mt-2.5">
              {step.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import { SECTION_IDS } from "@/shared/config/routes";
import { FEATURE_REVEAL_DELAY_SECONDS } from "../constants/catalog";
import {
  weddingFeatures,
  weddingFeaturesIntro,
} from "../data/wedding-features-data";

export function WeddingFeaturesIncluded() {
  return (
    <section
      id={SECTION_IDS.weddingFeatures}
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-t border-line scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-[11px] font-serif-luxury uppercase tracking-[0.2em] text-brand border border-badge-line px-3.5 py-1 rounded-full bg-badge shadow-[var(--shadow-badge)]">
          {weddingFeaturesIntro.badge}
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink mt-4">
          {weddingFeaturesIntro.title}
        </h2>
        <p className="text-sm sm:text-base text-muted font-light mt-3">
          {weddingFeaturesIntro.description}
        </p>
      </motion.div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-y-12">
        {weddingFeatures.map((feature, index) => (
          <motion.li
            key={feature.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * FEATURE_REVEAL_DELAY_SECONDS,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 flex items-center justify-center text-brand">
                {feature.icon}
              </div>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted">
                {feature.badge}
              </span>
            </div>

            <h3 className="font-serif-luxury text-lg sm:text-xl font-medium text-ink mb-2">
              {feature.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
              {feature.description}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

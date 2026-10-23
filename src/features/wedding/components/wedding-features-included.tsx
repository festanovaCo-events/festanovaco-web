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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {weddingFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * FEATURE_REVEAL_DELAY_SECONDS,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group p-6 sm:p-7 rounded-3xl border border-line hover:border-accent bg-surface hover:bg-surface-hover backdrop-blur-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="size-11 rounded-2xl flex items-center justify-center bg-surface-muted text-brand border border-line-strong group-hover:border-brand/40 group-hover:bg-glow transition-all duration-300">
                  {feature.icon}
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted bg-inset border border-line-soft px-2.5 py-0.5 rounded-full">
                  {feature.badge}
                </span>
              </div>

              <h3 className="font-serif-luxury text-lg sm:text-xl font-medium text-ink group-hover:text-brand-deep mb-2 transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { weddingTemplatePath } from "@/shared/config/routes";
import {
  CARD_CTA_CLASS_NAME,
  CARD_MEDIA_ASPECT_CLASS_NAME,
  CARD_MEDIA_FRAME_CLASS_NAME,
  CARD_REVEAL_COLUMN_COUNT,
  CARD_REVEAL_DELAY_SECONDS,
} from "../constants/catalog";
import { CATALOG_CARD_COPY } from "../data/catalog-card-copy";
import type { WeddingTemplateCardProps } from "../types/wedding-templates.types";

export function WeddingTemplateCard({
  template,
  index = 0,
}: WeddingTemplateCardProps) {
  const detailHref = weddingTemplatePath(template.id);
  const liveDemoHref =
    template.isAvailable && template.demoHref ? template.demoHref : undefined;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: (index % CARD_REVEAL_COLUMN_COUNT) * CARD_REVEAL_DELAY_SECONDS,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col w-full rounded-4xl sm:rounded-5xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-media)] border border-line bg-surface select-none"
    >
      <div className="hairline hairline-gold absolute inset-x-0 top-0 h-0.5 z-30 pointer-events-none" />

      <Link
        href={detailHref}
        className="block cursor-pointer"
        aria-label={`Ver detalles del modelo ${template.name}`}
      >
        <div className={CARD_MEDIA_ASPECT_CLASS_NAME}>
          <div
            className={`${CARD_MEDIA_FRAME_CLASS_NAME} transition-transform duration-700 group-hover:scale-[1.02]`}
          >
            {template.previewImage ? (
              <Image
                src={template.previewImage}
                alt={`Invitación de Boda ${template.couplesNames}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-surface-muted">
                <div className="absolute inset-3 border border-line-strong rounded-2xl pointer-events-none" />
                <p className="font-serif-luxury text-[10px] uppercase tracking-[0.25em] text-faint">
                  {CATALOG_CARD_COPY.fallbackEyebrow}
                </p>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-ink-soft mt-1 text-center">
                  {template.couplesNames}
                </h3>
                <div className="rule w-8 h-px my-2" />
                <p className="text-[11px] font-light text-subtle tracking-wide text-center">
                  {template.styleTag}
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>

      <div className="relative flex items-end justify-between gap-3 px-4 sm:px-5 py-4 sm:py-5 border-t border-line bg-surface">
        <Link href={detailHref} className="min-w-0 hover:opacity-90">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className={`inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider ${
                template.isAvailable ? "text-brand" : "text-subtle"
              }`}
            >
              {template.isAvailable ? (
                <span className="w-1.5 h-1.5 rounded-full bg-brand-dot animate-pulse" />
              ) : null}
              {template.badge}
            </span>
            <span className="font-mono text-[10px] font-medium tracking-wider text-faint">
              F{template.number}
            </span>
          </div>
          <h4 className="font-serif-luxury text-base sm:text-lg font-medium tracking-wide leading-tight text-ink line-clamp-1">
            {template.name}
          </h4>
          <p className="text-[11px] sm:text-xs text-muted font-light mt-0.5 line-clamp-1">
            {template.styleTag}
          </p>
        </Link>

        {liveDemoHref ? (
          <a
            href={liveDemoHref}
            target="_blank"
            rel="noopener noreferrer"
            className={CARD_CTA_CLASS_NAME}
          >
            <span>{CATALOG_CARD_COPY.ctaLabel}</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        ) : (
          <Link href={detailHref} className={CARD_CTA_CLASS_NAME}>
            <span>{CATALOG_CARD_COPY.ctaLabel}</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        )}
      </div>
    </motion.article>
  );
}

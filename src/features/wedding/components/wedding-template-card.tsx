"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { WeddingTemplate } from "../types/wedding-templates.types";

interface WeddingTemplateCardProps {
  template: WeddingTemplate;
  index?: number;
}

export function WeddingTemplateCard({
  template,
  index = 0,
}: WeddingTemplateCardProps) {
  const whatsappUrl = `https://wa.me/573000000000?text=${encodeURIComponent(
    template.whatsappMessage
  )}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.28, ease: "easeOut" } }}
      className={`group relative flex flex-col justify-between w-full h-100 sm:h-105 rounded-4xl sm:rounded-5xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)] border border-stone-200/80 dark:border-white/10 ${template.theme.borderHover} hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_22px_55px_rgba(0,0,0,0.6)] bg-white dark:bg-[#1A1816] select-none`}
    >
      {/* Top ambient highlight line */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-[#C5A880]/50 dark:via-amber-300/60 to-transparent pointer-events-none" />

      {/* ================= TOP AREA: PREVIEW / IMAGE / PATTERN ================= */}
      <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-stone-100 dark:bg-stone-900 shrink-0">
        {template.previewImage ? (
          /* Real screenshot of the live template */
          <div className="relative w-full h-full">
            <Image
              src={template.previewImage}
              alt={`Invitación de Boda ${template.couplesNames}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
          </div>
        ) : (
          /* Placeholder aesthetic design for coming soon models */
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-linear-to-br from-stone-50 via-stone-100/70 to-stone-200/60 dark:from-[#24211e] dark:via-[#1c1917] dark:to-[#141210]">
            {/* Elegant luxury framing */}
            <div className="absolute inset-3 border border-stone-300/60 dark:border-white/10 rounded-2xl pointer-events-none" />

            <p className="font-serif-luxury text-[10px] uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
              Nuestra Boda
            </p>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-stone-800 dark:text-stone-200 mt-1">
              {template.couplesNames}
            </h3>
            <div className="w-8 h-px bg-stone-300 dark:bg-white/20 my-2" />
            <p className="text-[11px] font-light text-stone-500 dark:text-stone-400 tracking-wide">
              {template.styleTag}
            </p>
          </div>
        )}

        {/* Top Status Pill */}
        <div className="absolute top-3.5 right-3.5 z-10">
          {template.isAvailable ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-emerald-900/90 text-white dark:bg-amber-300 dark:text-stone-950 shadow-md backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-stone-900 animate-pulse" />
              {template.badge}
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/40 text-stone-200 border border-white/15 backdrop-blur-md shadow-xs">
              {template.badge}
            </span>
          )}
        </div>
      </div>

      {/* ================= FLOATING APP ICON / CREST ================= */}
      <div className="absolute top-56 sm:top-60 left-6 -translate-y-1/2 z-20">
        <div className="relative size-14 sm:size-16 rounded-2xl p-1 bg-white/90 dark:bg-stone-900/90 shadow-[0_8px_20px_rgba(0,0,0,0.18)] border border-white/60 dark:border-white/20 backdrop-blur-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1">
          {/* Inner Badge Artwork */}
          <div className="w-full h-full rounded-xl bg-linear-to-br from-stone-900 via-[#1B4332] to-[#0A1A12] dark:from-[#2a241e] dark:via-[#1B4332] dark:to-[#0f0e0d] flex flex-col items-center justify-center text-white shadow-inner">
            <span className="font-serif-luxury text-base sm:text-lg font-bold leading-none text-[#fae2ab] drop-shadow-xs">
              F
            </span>
            <span className="text-[8px] font-mono tracking-widest uppercase text-stone-300 leading-none mt-0.5">
              {template.number}
            </span>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM AREA: CURVED GRADIENT & INFO ================= */}
      <div
        className={`relative w-full flex-1 -mt-8 bg-linear-to-br ${template.theme.accentGradient} text-white p-5 sm:p-6 flex flex-col justify-between rounded-t-5xl shadow-[0_-8px_24px_rgba(0,0,0,0.1)] transition-transform duration-300`}
        style={{
          boxShadow: `0 -10px 30px ${template.theme.glowColor}`,
        }}
      >
        {/* Top Content (next to floating icon) */}
        <div className="pl-18 sm:pl-20 pr-1 pt-1">
          <h4 className="font-serif-luxury text-base sm:text-lg font-medium tracking-wide leading-tight text-white drop-shadow-xs line-clamp-1">
            {template.name}
          </h4>
          <p className="text-[11px] sm:text-xs text-white/85 font-light leading-snug mt-1 line-clamp-2">
            {template.description}
          </p>
        </div>

        {/* Bottom Details & Action Button */}
        <div className="pt-3 border-t border-white/20 flex items-center justify-between gap-3">
          {/* Date / Metadata on left */}
          <div className="flex flex-col">
            <span className="text-[10px] text-white/70 uppercase tracking-wider font-light">
              Fecha Ref.
            </span>
            <span className="text-xs sm:text-sm font-mono font-medium tracking-wider text-white">
              {template.dateExample}
            </span>
          </div>

          {/* Action button on right */}
          {template.isAvailable && template.demoHref ? (
            <a
              href={template.demoHref}
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white border border-white/70 hover:bg-white hover:text-stone-900 dark:hover:text-stone-950 transition-all duration-300 shadow-sm active:scale-95"
            >
              <span>Ver Demo</span>
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-medium tracking-wide text-white/95 border border-white/50 hover:bg-white hover:text-stone-900 transition-all duration-300 shadow-sm active:scale-95"
            >
              <span>Encargar</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

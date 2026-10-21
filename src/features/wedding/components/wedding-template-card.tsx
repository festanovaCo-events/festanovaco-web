"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { WeddingTemplate } from "../types/wedding-templates.types";

const washHotStyle = {
  backgroundColor: "#f7f3eb",
  color: "#161311",
  borderColor: "#f7f3eb",
};

function WashButton({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  const [hot, setHot] = useState(false);
  const className =
    "btn-on-wash inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider border cursor-pointer transition-colors duration-200 active:scale-95";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={hot ? washHotStyle : undefined}
        onMouseEnter={() => setHot(true)}
        onMouseLeave={() => setHot(false)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      style={hot ? washHotStyle : undefined}
      onMouseEnter={() => setHot(true)}
      onMouseLeave={() => setHot(false)}
    >
      {children}
    </Link>
  );
}

interface WeddingTemplateCardProps {
  template: WeddingTemplate;
  index?: number;
}

export function WeddingTemplateCard({
  template,
  index = 0,
}: WeddingTemplateCardProps) {
  const detailHref = `/wedding/${template.id}`;

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
      className={`group relative flex flex-col justify-between w-full h-100 sm:h-105 rounded-4xl sm:rounded-5xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-media)] border border-line ${template.theme.borderHover} bg-canvas select-none`}
    >
      <div className="hairline hairline-gold absolute inset-x-0 top-0 h-0.5 pointer-events-none" />

      <Link
        href={detailHref}
        className="relative w-full h-56 sm:h-60 overflow-hidden bg-canvas shrink-0 block cursor-pointer"
        aria-label={`Ver detalles del modelo ${template.name}`}
      >
        {template.previewImage ? (
          <div className="relative w-full h-full">
            <Image
              src={template.previewImage}
              alt={`Invitación de Boda ${template.couplesNames}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-108"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-black/40 pointer-events-none" />
          </div>
        ) : (
          <div className="preview-fallback relative w-full h-full flex flex-col items-center justify-center p-6">
            <div className="absolute inset-3 border border-line-strong rounded-2xl pointer-events-none" />

            <p className="font-serif-luxury text-[10px] uppercase tracking-[0.25em] text-faint">
              Nuestra Boda
            </p>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-ink-soft mt-1">
              {template.couplesNames}
            </h3>
            <div className="rule w-8 h-px my-2" />
            <p className="text-[11px] font-light text-subtle tracking-wide">
              {template.styleTag}
            </p>
          </div>
        )}

        <div className="absolute top-3.5 right-3.5 z-10 pointer-events-none">
          {template.isAvailable ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-brand text-on-cta shadow-md backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-live animate-pulse" />
              {template.badge}
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/40 text-stone-200 border border-white/15 backdrop-blur-md shadow-xs">
              {template.badge}
            </span>
          )}
        </div>
      </Link>

      <div className="absolute top-56 sm:top-60 left-6 -translate-y-1/2 z-20">
        <Link
          href={detailHref}
          className="relative size-14 sm:size-16 rounded-2xl p-1 bg-pill shadow-[0_8px_20px_rgba(0,0,0,0.18)] border border-frame backdrop-blur-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1 cursor-pointer block"
        >
          <div className="monogram w-full h-full rounded-xl flex flex-col items-center justify-center shadow-inner">
            <span className="font-serif-luxury text-base sm:text-lg font-bold leading-none text-gold drop-shadow-xs">
              F
            </span>
            <span className="text-[8px] font-mono tracking-widest uppercase text-stone-300 leading-none mt-0.5">
              {template.number}
            </span>
          </div>
        </Link>
      </div>

      <div
        className={`model-wash model-wash-br relative w-full flex-1 -mt-8 ${template.theme.accentGradient} text-white p-5 sm:p-6 flex flex-col justify-between rounded-t-5xl shadow-[0_-6px_16px_rgba(0,0,0,0.06)] transition-transform duration-300`}
        style={{
          backgroundColor: template.theme.accent,
        }}
      >
        <div className="pl-18 sm:pl-20 pr-1 pt-1">
          <Link href={detailHref} className="hover:underline">
            <h4 className="font-serif-luxury text-base sm:text-lg font-medium tracking-wide leading-tight text-white drop-shadow-xs line-clamp-1">
              {template.name}
            </h4>
          </Link>
          <p className="text-[11px] sm:text-xs text-white/85 font-light leading-snug mt-1 line-clamp-2">
            {template.description}
          </p>
        </div>

        <div className="pt-3 border-t border-white/20 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/70 uppercase tracking-wider font-light">
              Fecha Ref.
            </span>
            <span className="text-xs sm:text-sm font-mono font-medium tracking-wider text-white">
              {template.dateExample}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <WashButton href={detailHref}>
              <span>Detalles</span>
              <span aria-hidden="true">&rarr;</span>
            </WashButton>

            {template.isAvailable && template.demoHref && (
              <WashButton href={template.demoHref} external>
                <span>Demo</span>
                <svg
                  className="w-3 h-3"
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
              </WashButton>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

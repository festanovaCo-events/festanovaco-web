"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SECTION_IDS } from "@/shared/config/routes";
import { CATALOG_PAGE_SIZE } from "../constants/catalog";
import { WeddingTemplateCard } from "./wedding-template-card";
import type { WeddingTemplatesGridProps } from "../types/wedding-page.types";

export function WeddingTemplatesGrid({ templates }: WeddingTemplatesGridProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(templates.length / CATALOG_PAGE_SIZE) || 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * CATALOG_PAGE_SIZE;
  const endIndex = Math.min(startIndex + CATALOG_PAGE_SIZE, templates.length);
  const currentTemplates = templates.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const sectionElement = document.getElementById(SECTION_IDS.weddingCatalog);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id={SECTION_IDS.weddingCatalog}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-t border-line scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 sm:mb-12 border-b border-line pb-6"
      >
        <span className="text-[11px] font-serif-luxury uppercase tracking-[0.2em] text-brand border border-badge-line px-3 py-0.5 rounded-full bg-badge shadow-[var(--shadow-badge)]">
          Catálogo Editorial &bull; Colección Exclusiva
        </span>
        <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-ink mt-3">
          Explora nuestros modelos de boda
        </h2>
        <p className="text-xs sm:text-sm text-muted font-light mt-1 max-w-xl">
          Descubre plantillas concebidas con papelería digital de alta gama, música ambiental, itinerario y confirmación en vivo.
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={safeCurrentPage}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {currentTemplates.map((template, index) => (
            <WeddingTemplateCard
              key={template.id}
              template={template}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-subtle font-light">
            Mostrando <span className="font-medium text-ink">{startIndex + 1}</span> a{" "}
            <span className="font-medium text-ink">{endIndex}</span> de{" "}
            <span className="font-medium text-ink">{templates.length}</span> modelos
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={safeCurrentPage === 1}
              onClick={() => handlePageChange(safeCurrentPage - 1)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors ${
                safeCurrentPage === 1
                  ? "opacity-40 cursor-not-allowed border-line-soft text-faint"
                  : "cursor-pointer border-line-strong hover:border-line-hover bg-chip text-ink-soft hover:bg-chip-hover"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Anterior</span>
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`w-9 h-9 rounded-xl text-xs font-medium flex items-center justify-center transition-all cursor-pointer ${
                    safeCurrentPage === page
                      ? "bg-brand text-on-cta font-semibold shadow-xs"
                      : "bg-chip text-muted hover:bg-chip-hover border border-line-soft"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={safeCurrentPage === totalPages}
              onClick={() => handlePageChange(safeCurrentPage + 1)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors ${
                safeCurrentPage === totalPages
                  ? "opacity-40 cursor-not-allowed border-line-soft text-faint"
                  : "cursor-pointer border-line-strong hover:border-line-hover bg-chip text-ink-soft hover:bg-chip-hover"
              }`}
            >
              <span>Siguiente</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}

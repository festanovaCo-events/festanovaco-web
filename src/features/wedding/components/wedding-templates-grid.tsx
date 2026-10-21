"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WeddingTemplateCard } from "./wedding-template-card";
import type { WeddingTemplate } from "../types/wedding-templates.types";

interface WeddingTemplatesGridProps {
  templates: WeddingTemplate[];
}

const ITEMS_PER_PAGE = 6;

export function WeddingTemplatesGrid({ templates }: WeddingTemplatesGridProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(templates.length / ITEMS_PER_PAGE) || 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, templates.length);
  const currentTemplates = templates.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const sectionElement = document.getElementById("catalogo");
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="catalogo"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-t border-stone-200/80 dark:border-white/10 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 sm:mb-12 border-b border-stone-200/80 dark:border-white/10 pb-6"
      >
        <span className="text-[11px] font-serif-luxury uppercase tracking-[0.2em] text-brand dark:text-amber-200 border border-line-strong dark:border-amber-300/40 px-3 py-0.5 rounded-full bg-surface dark:bg-amber-950/40 shadow-xs">
          Catálogo Editorial &bull; Colección Exclusiva
        </span>
        <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-stone-900 dark:text-white mt-3">
          Explora nuestros modelos de boda
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light mt-1 max-w-xl">
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
          {currentTemplates.map((template, idx) => (
            <WeddingTemplateCard
              key={template.id}
              template={template}
              index={idx}
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
          className="mt-12 sm:mt-16 pt-8 border-t border-stone-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-stone-500 dark:text-stone-400 font-light">
            Mostrando <span className="font-medium text-stone-900 dark:text-white">{startIndex + 1}</span> a{" "}
            <span className="font-medium text-stone-900 dark:text-white">{endIndex}</span> de{" "}
            <span className="font-medium text-stone-900 dark:text-white">{templates.length}</span> modelos
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={safeCurrentPage === 1}
              onClick={() => handlePageChange(safeCurrentPage - 1)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors ${
                safeCurrentPage === 1
                  ? "opacity-40 cursor-not-allowed border-stone-200 dark:border-white/10 text-stone-400 dark:text-stone-600"
                  : "cursor-pointer border-stone-300 hover:border-stone-400 dark:border-white/20 dark:hover:border-white/40 bg-surface dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-700"
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
                      ? "bg-brand text-white dark:bg-amber-300 dark:text-stone-950 font-semibold shadow-xs"
                      : "bg-surface dark:bg-stone-800/80 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 border border-stone-200 dark:border-white/10"
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
                  ? "opacity-40 cursor-not-allowed border-stone-200 dark:border-white/10 text-stone-400 dark:text-stone-600"
                  : "cursor-pointer border-stone-300 hover:border-stone-400 dark:border-white/20 dark:hover:border-white/40 bg-surface dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-700"
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

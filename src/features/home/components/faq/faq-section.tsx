"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "¿Cómo confirman asistencia mis invitados (RSVP)?",
    answer:
      "Tu invitación incluye un módulo de confirmación interactivo. Tus invitados ingresan su nombre, confirman si asistirán y pueden dejar observaciones (como restricciones alimentarias o acompañantes). Las respuestas te llegan organizadas en tiempo real.",
  },
  {
    question: "¿Pueden abrir la ubicación directamente en Google Maps y Waze?",
    answer:
      "Sí, integramos botones directos con GPS para Google Maps y Waze. Con un solo toque desde su celular, los invitados inician la ruta hacia la iglesia, hacienda o salón de eventos.",
  },
  {
    question: "¿Se puede incluir música de fondo y galería de fotos?",
    answer:
      "Totalmente. Puedes elegir tu canción favorita para que suene con un reproductor elegante y discreto al abrir la invitación, además de una galería con fotos de pareja o homenajeado.",
  },
  {
    question: "¿Cuánto tiempo tarda la entrega de la invitación digital?",
    answer:
      "Una vez recibida tu información y fotos, te enviamos el primer borrador interactivo en 24 a 48 horas hábiles para tu revisión y aprobación.",
  },
  {
    question: "¿Qué pasa si necesito hacer un cambio de horario o lugar?",
    answer:
      "Al ser un enlace digital web, actualizamos la información en vivo sin que tengas que reenviar otro archivo o enlace a tus invitados. Todo se actualiza automáticamente.",
  },
  {
    question: "¿Es compatible con cualquier celular (iPhone, Android) y computador?",
    answer:
      "Sí, nuestras invitaciones están diseñadas y optimizadas para verse con máxima nitidez y velocidad en cualquier smartphone, tablet o computadora sin necesidad de instalar ninguna app.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="preguntas-frecuentes"
      className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-stone-900 dark:text-stone-100 scroll-mt-20"
    >
      {/* Section Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-[11px] font-serif-luxury uppercase tracking-[0.2em] text-emerald-900 dark:text-amber-200 border border-[#D9CEBA] dark:border-amber-300/40 px-3.5 py-1 rounded-full bg-white dark:bg-amber-950/40 shadow-sm dark:shadow-none">
          Dudas Comunes
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 dark:text-white mt-4">
          Preguntas Frecuentes
        </h2>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light mt-3">
          Todo lo que necesitas saber sobre nuestras invitaciones digitales interactivas.
        </p>
      </motion.div>

      {/* Accordion List with Staggered Scroll Reveal */}
      <div className="space-y-3.5 sm:space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.45,
                delay: idx * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                isOpen
                  ? "border-[#C5A880] dark:border-amber-300/50 bg-white dark:bg-stone-900/90 shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                  : "border-[#E9DFD0] hover:border-[#C5A880] dark:border-white/20 dark:hover:border-amber-300/40 bg-white hover:bg-[#FCFBF9] dark:bg-stone-900/60 dark:hover:bg-stone-800/75 shadow-[0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/50 dark:focus-visible:ring-amber-300/50 cursor-pointer"
              >
                <span className="text-sm sm:text-base font-medium text-stone-900 dark:text-white pr-4 font-serif-luxury">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 border-emerald-800 dark:border-amber-300/60 bg-emerald-50 dark:bg-amber-950/50 text-emerald-900 dark:text-amber-200"
                      : "border-stone-200 dark:border-white/20 bg-stone-50 dark:bg-stone-800/80 text-stone-500 dark:text-amber-100"
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
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-stone-600 dark:text-stone-200 font-light leading-relaxed border-t border-stone-100 dark:border-white/10 pt-4 animate-in fade-in duration-200">
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

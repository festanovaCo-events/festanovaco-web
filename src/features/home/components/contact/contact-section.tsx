"use client";

import { motion } from "motion/react";

export function ContactSection() {
  const whatsappUrl =
    "https://wa.me/573000000000?text=Hola%20FestanovaCo,%20quiero%20crear%20mi%20invitación%20digital%20exclusiva";
  const emailAddress = "festanovaco.events@gmail.com";

  return (
    <section
      id="contacto"
      className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-stone-900 dark:text-stone-100 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-5xl sm:rounded-7xl border border-line dark:border-white/20 bg-surface dark:bg-linear-to-b dark:from-stone-900/90 dark:to-stone-950/95 p-8 sm:p-14 text-center backdrop-blur-2xl shadow-[0_16px_40px_var(--shadow-brand-soft)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-line/60 dark:border-amber-300/30 bg-brand-muted/90 dark:bg-amber-950/40 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-dot dark:bg-amber-400 animate-pulse" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-brand-deep dark:text-amber-200">
              Atención personalizada
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 dark:text-white">
            ¿Listo para diseñar tu invitación soñada?
          </h2>

          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light leading-relaxed mt-4 mb-8">
            Escríbenos directamente a WhatsApp o envíanos un correo. Te asesoramos con la plantilla perfecta, cotización inmediata y personalización total.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand hover:bg-brand-deep dark:bg-linear-to-r dark:from-amber-200 dark:via-amber-300 dark:to-amber-400 text-white dark:text-stone-950 font-medium text-sm shadow-[0_8px_24px_var(--shadow-brand-strong)] dark:shadow-[0_8px_24px_rgba(216,176,102,0.35)] hover:shadow-[0_12px_28px_var(--shadow-brand-hover)] dark:hover:shadow-[0_12px_32px_rgba(216,176,102,0.5)] transition-all duration-300"
            >
              <span>Escríbenos por WhatsApp</span>
              <span aria-hidden="true">&rarr;</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${emailAddress}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-stone-300 hover:border-stone-400 dark:border-white/20 dark:hover:border-white/40 bg-surface/70 hover:bg-surface dark:bg-white/5 dark:hover:bg-white/10 text-stone-800 dark:text-white text-sm font-medium transition-all duration-300 shadow-sm"
            >
              <svg
                className="w-4 h-4 text-brand-mid dark:text-amber-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Escríbenos por Correo</span>
            </motion.a>
          </div>

          {/* City / Service Footprint */}
          <p className="text-[11px] text-stone-500 dark:text-stone-400 font-light mt-8 tracking-wide">
            Servicio para toda Colombia &bull; Entregas digitales 100% online
          </p>
        </div>
      </motion.div>
    </section>
  );
}

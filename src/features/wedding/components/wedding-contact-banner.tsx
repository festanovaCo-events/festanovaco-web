"use client";

import { motion } from "motion/react";

export function WeddingContactBanner() {
  const whatsappUrl =
    "https://wa.me/573000000000?text=Hola%20FestanovaCo,%20quisiera%20asesor%C3%ADa%20para%20las%20invitaciones%20digitales%20de%20mi%20boda";
  const emailAddress = "festanovaco.events@gmail.com";

  return (
    <section
      id="personalizable"
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 pb-20 pt-10 text-foreground scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="panel relative overflow-hidden rounded-5xl sm:rounded-7xl border border-line p-8 sm:p-14 text-center backdrop-blur-2xl"
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-line bg-brand-muted backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-dot animate-pulse" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-brand">
              Atención Personalizada para Novios
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink">
            ¿Deseas una invitación 100% personalizada?
          </h2>

          <p className="text-sm sm:text-base text-muted font-light leading-relaxed mt-4 mb-8">
            Si tienes una paleta de color específica, monograma propio o quieres adaptar uno de los modelos que están en preparación, escríbenos y creamos la invitación perfecta para tu matrimonio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300"
            >
              <span>Hablar con un asesor por WhatsApp</span>
              <span aria-hidden="true">&rarr;</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${emailAddress}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-line-strong hover:border-line-hover bg-ghost hover:bg-ghost-hover text-ink text-sm font-medium transition-all duration-300 shadow-xs"
            >
              <span>Escríbenos por Correo</span>
            </motion.a>
          </div>

          <p className="text-[11px] text-subtle font-light mt-8 tracking-wide">
            FestanovaCo &bull; Papelería Digital & Experiencias Web de Boda
          </p>
        </div>
      </motion.div>
    </section>
  );
}

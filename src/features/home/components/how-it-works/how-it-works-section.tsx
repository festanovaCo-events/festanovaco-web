"use client";

import { motion } from "motion/react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Elige tu Evento",
      description:
        "Selecciona la categoría y estilo que sueñas para tu celebración (Boda, 15 Años, Cumpleaños, Gala o Baby Shower).",
      tag: "Paso Inicial",
    },
    {
      number: "02",
      title: "Personalizamos todo",
      description:
        "Nos compartes la fecha, fotos, música de fondo, itinerario, código de vestimenta y ubicación con GPS (Waze / Maps).",
      tag: "A tu medida",
    },
    {
      number: "03",
      title: "Comparte y celebra",
      description:
        "Recibes tu enlace web exclusivo listo para enviar por WhatsApp, con confirmación de asistencia (RSVP) en tiempo real.",
      tag: "100% Digital",
    },
  ];

  return (
    <section
      id="como-obtenerla"
      className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto text-foreground scroll-mt-20"
    >
      {/* Section Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-[11px] font-serif-luxury uppercase tracking-[0.2em] text-brand border border-badge-line px-3.5 py-1 rounded-full bg-badge shadow-[var(--shadow-badge)]">
          Proceso Simple
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink mt-4">
          ¿Cómo obtener tu invitación?
        </h2>
        <p className="text-sm sm:text-base text-muted font-light mt-3">
          En solo 3 pasos tendrás una experiencia web interactiva, moderna y elegante para compartir con tus invitados.
        </p>
      </motion.div>

      {/* 3 Step Cards with Staggered Scroll Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl border border-line hover:border-accent bg-surface hover:bg-surface-hover backdrop-blur-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
          >
            {/* Top Bar with Number & Tag */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-serif-luxury text-3xl sm:text-4xl font-normal text-brand/80 group-hover:text-brand-deep transition-colors">
                {step.number}
              </span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-warm bg-inset border border-line-strong px-2.5 py-0.5 rounded-full">
                {step.tag}
              </span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg sm:text-xl font-serif-luxury font-medium text-ink group-hover:text-brand transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-light mt-2.5">
                {step.description}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="mt-6 pt-4 border-t border-line-faint flex items-center justify-between text-[11px] text-brand-mid group-hover:text-brand-deep font-medium">
              <span>FestanovaCo</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

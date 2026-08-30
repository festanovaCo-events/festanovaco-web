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
      className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto text-stone-900 dark:text-stone-100 scroll-mt-20"
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
          Proceso Simple
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 dark:text-white mt-4">
          ¿Cómo obtener tu invitación?
        </h2>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light mt-3">
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
            className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl border border-[#E9DFD0] hover:border-[#C5A880] dark:border-white/20 dark:hover:border-amber-300/50 bg-white hover:bg-[#FCFBF9] dark:bg-stone-900/60 dark:hover:bg-stone-800/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_40px_rgba(27,67,50,0.08)] dark:hover:shadow-[0_20px_45px_rgba(216,176,102,0.25)] transition-all duration-300"
          >
            {/* Top Bar with Number & Tag */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-serif-luxury text-3xl sm:text-4xl font-normal text-emerald-900/80 group-hover:text-emerald-950 dark:text-amber-200 dark:group-hover:text-amber-100 transition-colors">
                {step.number}
              </span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-stone-600 dark:text-amber-100 bg-[#FAF8F5] dark:bg-stone-800/90 border border-stone-200 dark:border-white/20 px-2.5 py-0.5 rounded-full">
                {step.tag}
              </span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg sm:text-xl font-serif-luxury font-medium text-stone-900 group-hover:text-emerald-900 dark:text-white dark:group-hover:text-amber-100 transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light mt-2.5">
                {step.description}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-white/10 flex items-center justify-between text-[11px] text-emerald-800 group-hover:text-emerald-950 dark:text-amber-200/90 dark:group-hover:text-amber-100 font-medium">
              <span>FestanovaCo</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

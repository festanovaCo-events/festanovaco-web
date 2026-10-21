"use client";

import { motion } from "motion/react";

export function WeddingFeaturesIncluded() {
  const weddingFeatures = [
    {
      title: "Confirmación RSVP en Vivo",
      description:
        "Tus invitados confirman asistencia en segundos desde su celular, indicando acompañantes y restricciones alimentarias sin intermediarios.",
      badge: "Gestión Fácil",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Música de Fondo Personalizada",
      description:
        "Elige la canción de su historia de amor para que suene con un reproductor elegante y sutil apenas los invitados abren la invitación.",
      badge: "Ambiente Único",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
    },
    {
      title: "Ubicación GPS (Waze & Google Maps)",
      description:
        "Botones directos con navegación GPS integrada para que tus invitados lleguen puntuales a la ceremonia y recepción sin perderse.",
      badge: "Llegada Segura",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Itinerario del Gran Día",
      description:
        "Detalle secuencial de cada instante: ceremonia civil/religiosa, cóctel de bienvenida, cena, brindis y fiesta bailable.",
      badge: "Cronograma",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Código de Vestimenta (Dress Code)",
      description:
        "Muestra con claridad la etiqueta deseada (Formal, Rigurosa Etiqueta, Guayabera, Cocktail) y la paleta de colores reservada.",
      badge: "Guía de Estilo",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "Lluvia de Sobres & Mesa de Regalos",
      description:
        "Comparte tus datos bancarios para lluvia de sobres o enlaces directos a tiendas con una presentación elegante y discreta.",
      badge: "Mesa de Regalos",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="caracteristicas"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-t border-line scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-[11px] font-serif-luxury uppercase tracking-[0.2em] text-brand border border-badge-line px-3.5 py-1 rounded-full bg-badge shadow-[var(--shadow-badge)]">
          Experiencia Completa
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink mt-4">
          ¿Qué incluye tu invitación digital?
        </h2>
        <p className="text-sm sm:text-base text-muted font-light mt-3">
          Todo lo necesario para que tus invitados vivan la emoción de su matrimonio desde el primer momento en que abren su invitación.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {weddingFeatures.map((feat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group p-6 sm:p-7 rounded-3xl border border-line hover:border-accent bg-surface hover:bg-surface-hover backdrop-blur-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="size-11 rounded-2xl flex items-center justify-center bg-surface-muted text-brand border border-line-strong group-hover:border-brand/40 group-hover:bg-glow transition-all duration-300">
                  {feat.icon}
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted bg-inset border border-line-soft px-2.5 py-0.5 rounded-full">
                  {feat.badge}
                </span>
              </div>

              <h3 className="font-serif-luxury text-lg sm:text-xl font-medium text-ink group-hover:text-brand-deep mb-2 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                {feat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

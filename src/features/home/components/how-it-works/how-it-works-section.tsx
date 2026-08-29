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
      className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto text-stone-100"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-amber-200 border border-amber-300/40 px-3.5 py-1 rounded-full bg-amber-950/40">
          Proceso Simple
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mt-4">
          ¿Cómo obtener tu invitación?
        </h2>
        <p className="text-sm sm:text-base text-stone-300 font-light mt-3">
          En solo 3 pasos tendrás una experiencia web interactiva, moderna y elegante para compartir con tus invitados.
        </p>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-white/15 hover:border-amber-300/50 bg-stone-850/70 bg-gradient-to-b from-stone-800/60 to-stone-900/75 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_40px_rgba(216,176,102,0.2)] transition-all duration-300 hover:-translate-y-1"
          >
            {/* Top Bar with Number & Tag */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-serif-luxury text-3xl sm:text-4xl font-light text-amber-200 group-hover:text-amber-100 transition-colors">
                {step.number}
              </span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-stone-300 bg-white/[0.08] border border-white/15 px-2.5 py-0.5 rounded-full">
                {step.tag}
              </span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg sm:text-xl font-serif-luxury font-medium text-white group-hover:text-amber-100 transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mt-2.5">
                {step.description}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-amber-200/90 group-hover:text-amber-100 font-medium">
              <span>FestanovaCo</span>
              <span>&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import type { WeddingFeature, WeddingFeaturesIntro } from "../types/wedding-features.types";

export const weddingFeaturesIntro: WeddingFeaturesIntro = {
  badge: "Experiencia Completa",
  title: "¿Qué incluye tu invitación digital?",
  description:
    "Todo lo necesario para que tus invitados vivan la emoción de su matrimonio desde el primer momento en que abren su invitación.",
};

export const weddingFeatures: WeddingFeature[] = [
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

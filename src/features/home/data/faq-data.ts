import type { FaqIntro, FaqItem } from "@/features/home/types/faq.types";

export const faqIntro: FaqIntro = {
  badge: "Dudas Comunes",
  title: "Preguntas Frecuentes",
  description:
    "Todo lo que necesitas saber sobre nuestras invitaciones digitales interactivas.",
};

export const faqs: FaqItem[] = [
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

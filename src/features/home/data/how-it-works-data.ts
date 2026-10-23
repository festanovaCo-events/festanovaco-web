import type {
  HowItWorksIntro,
  HowItWorksStep,
} from "@/features/home/types/how-it-works.types";

export const howItWorksIntro: HowItWorksIntro = {
  badge: "Proceso Simple",
  title: "¿Cómo obtener tu invitación?",
  description:
    "En solo 3 pasos tendrás una experiencia web interactiva, moderna y elegante para compartir con tus invitados.",
};

export const howItWorksSteps: HowItWorksStep[] = [
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

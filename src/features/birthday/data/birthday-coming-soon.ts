import { whatsappUrl } from "@/shared/config/contact";
import { ROUTES } from "@/shared/config/routes";
import type { ComingSoonSectionProps } from "@/shared/types/coming-soon.types";

const BIRTHDAY_WHATSAPP_MESSAGE =
  "Hola FestanovaCo, quisiera información para una invitación de Cumpleaños";

export const birthdayComingSoon: ComingSoonSectionProps = {
  tone: "honey",
  badge: "Colección Cumpleaños • Próximamente",
  accent: "para tus Celebraciones",
  description:
    "Celebra un año más con una invitación interactiva con GPS directo, confirmación de invitados y música para encender la fiesta.",
  whatsappHref: whatsappUrl(BIRTHDAY_WHATSAPP_MESSAGE),
  whatsappLabel: "Consultar por encargo",
  secondaryHref: ROUTES.wedding,
  secondaryLabel: "Ver colección de Bodas",
};

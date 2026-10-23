import { whatsappUrl } from "@/shared/config/contact";
import { ROUTES } from "@/shared/config/routes";
import type { ComingSoonSectionProps } from "@/shared/types/coming-soon.types";

const FIFTEEN_WHATSAPP_MESSAGE =
  "Hola FestanovaCo, quisiera información para una invitación de 15 Años";

export const fifteenComingSoon: ComingSoonSectionProps = {
  tone: "blush",
  badge: "Colección 15 Años • Próximamente",
  accent: "para tus Quince Años",
  description:
    "Estamos preparando una colección mágica e interactiva con música, confirmación RSVP, galería y pase digital para una noche inolvidable.",
  whatsappHref: whatsappUrl(FIFTEEN_WHATSAPP_MESSAGE),
  whatsappLabel: "Pedir información por encargo",
  secondaryHref: ROUTES.wedding,
  secondaryLabel: "Ver colección de Bodas",
};

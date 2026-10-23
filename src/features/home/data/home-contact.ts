import { CONTACT_EMAIL, whatsappUrl } from "@/shared/config/contact";
import type { ContactPanelProps } from "@/shared/types/contact-panel.types";

const HOME_WHATSAPP_MESSAGE =
  "Hola FestanovaCo, quiero crear mi invitación digital exclusiva";

export const homeContactPanel: ContactPanelProps = {
  badge: "Atención personalizada",
  title: "¿Listo para diseñar tu invitación soñada?",
  description:
    "Escríbenos directamente a WhatsApp o envíanos un correo. Te asesoramos con la plantilla perfecta, cotización inmediata y personalización total.",
  whatsappHref: whatsappUrl(HOME_WHATSAPP_MESSAGE),
  whatsappLabel: "Escríbenos por WhatsApp",
  secondaryHref: `mailto:${CONTACT_EMAIL}`,
  secondaryLabel: "Escríbenos por Correo",
  footnote: "Servicio para toda Colombia • Entregas digitales 100% online",
};

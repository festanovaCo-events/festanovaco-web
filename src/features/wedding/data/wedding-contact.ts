import { CONTACT_EMAIL, whatsappUrl } from "@/shared/config/contact";
import { ROUTES } from "@/shared/config/routes";
import type { ContactPanelProps } from "@/shared/types/contact-panel.types";

const WEDDING_WHATSAPP_MESSAGE =
  "Hola FestanovaCo, quisiera asesoría para las invitaciones digitales de mi boda";

export const weddingContactPanel: ContactPanelProps = {
  badge: "Atención Personalizada para Novios",
  title: "¿Deseas una invitación 100% personalizada?",
  description:
    "Si tienes una paleta de color específica, monograma propio o quieres adaptar uno de los modelos que están en preparación, escríbenos y creamos la invitación perfecta para tu matrimonio.",
  whatsappHref: whatsappUrl(WEDDING_WHATSAPP_MESSAGE),
  whatsappLabel: "Hablar con un asesor por WhatsApp",
  secondaryHref: `mailto:${CONTACT_EMAIL}`,
  secondaryLabel: "Escríbenos por Correo",
  footnote: "FestanovaCo • Papelería Digital & Experiencias Web de Boda",
};

export function modelContactPanel(
  modelName: string,
  whatsappHref: string,
): ContactPanelProps {
  return {
    badge: "Atención Directa • Respuesta Rápida",
    title: `¿Te gustó el modelo ${modelName}?`,
    description:
      "Escríbenos directamente a WhatsApp o envíanos un correo para consultar fecha de entrega, cotización y opciones de personalización para tu boda.",
    whatsappHref,
    whatsappLabel: "Pedir Asesoría para este Modelo",
    secondaryHref: ROUTES.weddingCatalog,
    secondaryLabel: "Ver Otros Modelos",
    footnote: "FestanovaCo • Papelería Digital & Experiencias Web de Boda",
  };
}

import { ROUTES } from "@/shared/config/routes";
import type { NavItem } from "@/shared/types/nav.types";

export const homeNavItems: NavItem[] = [
  { href: ROUTES.howItWorks, label: "Cómo obtenerla" },
  { href: ROUTES.faq, label: "Preguntas frecuentes" },
  { href: ROUTES.contact, label: "Contacto" },
];

export const weddingNavItems: NavItem[] = [
  { href: ROUTES.weddingFeatures, label: "Características" },
  { href: ROUTES.weddingCatalog, label: "Catálogo" },
  { href: ROUTES.weddingCustom, label: "Personalizable" },
];

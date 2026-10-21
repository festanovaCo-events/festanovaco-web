import { HugeiconsIcon } from "@hugeicons/react";
import WeddingIcon from "@hugeicons/core-free-icons/WeddingIcon";
import CrownIcon from "@hugeicons/core-free-icons/CrownIcon";
import BalloonsIcon from "@hugeicons/core-free-icons/BalloonsIcon";
import Suit01Icon from "@hugeicons/core-free-icons/Suit01Icon";
import GraduationCapIcon from "@hugeicons/core-free-icons/GraduationCapIcon";
import BabyBottleIcon from "@hugeicons/core-free-icons/BabyBottleIcon";
import SmartPhone01Icon from "@hugeicons/core-free-icons/SmartPhone01Icon";
import PaintBoardIcon from "@hugeicons/core-free-icons/PaintBoardIcon";
import MailValidation01Icon from "@hugeicons/core-free-icons/MailValidation01Icon";
import ShieldCheckIcon from "@hugeicons/core-free-icons/ShieldCheckIcon";

import { ROUTES } from "@/shared/config/routes";
import type { HeroCategory, HeroFeature } from "@/features/home/types/hero.types";

export const allCategories: HeroCategory[] = [
  {
    id: "bodas",
    title: "Bodas",
    subtitle: "Romance & elegancia",
    href: ROUTES.wedding,
    isAvailable: true,
    theme: {
      accentColor: "#e5c583",
      glowBg: "rgba(229, 197, 131, 0.15)",
      borderHover: "hover:border-accent",
      tagline: "El gran día",
    },
    iconNode: (
      <HugeiconsIcon
        icon={WeddingIcon}
        size={44}
        strokeWidth={1.75}
        className="w-10 h-10 sm:w-11 sm:h-11 text-brand transition-transform duration-300 group-hover:scale-105"
      />
    ),
  },
  {
    id: "15-anos",
    title: "15 Años",
    subtitle: "Magia & brillo",
    badge: "Próximamente",
    isAvailable: false,
    href: ROUTES.fifteen,
    theme: {
      accentColor: "#f4a8bd",
      glowBg: "rgba(244, 168, 189, 0.15)",
      borderHover: "hover:border-blush-line",
      tagline: "Mis Quince",
    },
    iconNode: (
      <div className="flex flex-col items-center justify-center">
        <HugeiconsIcon
          icon={CrownIcon}
          size={32}
          strokeWidth={1.75}
          className="w-8 h-8 sm:w-9 sm:h-9 text-blush transition-transform duration-300 group-hover:scale-105"
        />
        <span className="font-serif-luxury text-lg sm:text-xl font-semibold text-blush-deep leading-none mt-1">
          15
        </span>
      </div>
    ),
  },
  {
    id: "cumpleanos",
    title: "Cumpleaños",
    subtitle: "Momentos únicos",
    badge: "Próximamente",
    href: ROUTES.birthday,
    isAvailable: false,
    theme: {
      accentColor: "#f39c6b",
      glowBg: "rgba(243, 156, 107, 0.15)",
      borderHover: "hover:border-honey-line",
      tagline: "Celebración",
    },
    iconNode: (
      <HugeiconsIcon
        icon={BalloonsIcon}
        size={44}
        strokeWidth={1.75}
        className="w-10 h-10 sm:w-11 sm:h-11 text-honey transition-transform duration-300 group-hover:scale-105"
      />
    ),
  },
  {
    id: "empresarial",
    title: "Empresarial",
    subtitle: "Galas & eventos",
    href: "#",
    badge: "Próximamente",
    isAvailable: false,
    theme: {
      accentColor: "#a5b4fc",
      glowBg: "rgba(165, 180, 252, 0.12)",
      borderHover: "hover:border-iris-line",
      tagline: "Corporativo",
    },
    iconNode: (
      <HugeiconsIcon
        icon={Suit01Icon}
        size={44}
        strokeWidth={1.75}
        className="w-10 h-10 sm:w-11 sm:h-11 text-iris transition-transform duration-300 group-hover:scale-105"
      />
    ),
  },
  {
    id: "graduacion",
    title: "Graduación",
    subtitle: "Logros & etapas",
    href: "#",
    badge: "Próximamente",
    isAvailable: false,
    theme: {
      accentColor: "#6ee7b7",
      glowBg: "rgba(110, 231, 183, 0.12)",
      borderHover: "hover:border-mint-line",
      tagline: "Grados",
    },
    iconNode: (
      <HugeiconsIcon
        icon={GraduationCapIcon}
        size={44}
        strokeWidth={1.75}
        className="w-10 h-10 sm:w-11 sm:h-11 text-mint transition-transform duration-300 group-hover:scale-105"
      />
    ),
  },
  {
    id: "baby-shower",
    title: "Baby Shower",
    subtitle: "Bienvenida especial",
    href: "#",
    badge: "Próximamente",
    isAvailable: false,
    theme: {
      accentColor: "#c4b5fd",
      glowBg: "rgba(196, 181, 253, 0.12)",
      borderHover: "hover:border-lilac-line",
      tagline: "Bebés",
    },
    iconNode: (
      <HugeiconsIcon
        icon={BabyBottleIcon}
        size={44}
        strokeWidth={1.75}
        className="w-10 h-10 sm:w-11 sm:h-11 text-lilac transition-transform duration-300 group-hover:scale-105"
      />
    ),
  },
];

export const footerFeatures: HeroFeature[] = [
  {
    icon: SmartPhone01Icon,
    title: "100% Digital",
    subtitle: "Acceso instantáneo y enlace web",
  },
  {
    icon: PaintBoardIcon,
    title: "Diseño Editorial",
    subtitle: "Personalización y estilo exclusivo",
  },
  {
    icon: MailValidation01Icon,
    title: "Confirmación RSVP",
    subtitle: "Gestión de invitados en vivo",
  },
  {
    icon: ShieldCheckIcon,
    title: "Música & Ubicación",
    subtitle: "Mapas, agenda y detalles clave",
  },
];

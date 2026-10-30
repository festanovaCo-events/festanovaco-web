import { HugeiconsIcon } from "@hugeicons/react";
import WeddingIcon from "@hugeicons/core-free-icons/WeddingIcon";
import CrownIcon from "@hugeicons/core-free-icons/CrownIcon";
import BalloonsIcon from "@hugeicons/core-free-icons/BalloonsIcon";
import Suit01Icon from "@hugeicons/core-free-icons/Suit01Icon";
import GraduationCapIcon from "@hugeicons/core-free-icons/GraduationCapIcon";
import BabyBottleIcon from "@hugeicons/core-free-icons/BabyBottleIcon";

import { ROUTES } from "@/shared/config/routes";
import type { HeroCategory } from "@/features/home/types/hero.types";

const brandTheme = {
  accentColor: "#c5a880",
  glowBg: "rgba(197, 168, 128, 0.18)",
  borderHover: "hover:border-accent",
} as const;

const brandIconClassName =
  "w-10 h-10 sm:w-11 sm:h-11 text-brand transition-transform duration-300 group-hover:scale-105";

export const allCategories: HeroCategory[] = [
  {
    id: "bodas",
    title: "Bodas",
    subtitle: "Romance & elegancia",
    href: ROUTES.wedding,
    isAvailable: true,
    theme: {
      ...brandTheme,
      tagline: "El gran día",
    },
    iconNode: (
      <HugeiconsIcon
        icon={WeddingIcon}
        size={44}
        strokeWidth={1.75}
        className={brandIconClassName}
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
      ...brandTheme,
      tagline: "Mis Quince",
    },
    iconNode: (
      <div className="flex flex-col items-center justify-center">
        <HugeiconsIcon
          icon={CrownIcon}
          size={32}
          strokeWidth={1.75}
          className="w-8 h-8 sm:w-9 sm:h-9 text-brand transition-transform duration-300 group-hover:scale-105"
        />
        <span className="font-serif-luxury text-lg sm:text-xl font-semibold text-brand-deep leading-none mt-1">
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
      ...brandTheme,
      tagline: "Celebración",
    },
    iconNode: (
      <HugeiconsIcon
        icon={BalloonsIcon}
        size={44}
        strokeWidth={1.75}
        className={brandIconClassName}
      />
    ),
  },
  {
    id: "empresarial",
    title: "Empresarial",
    subtitle: "Galas & eventos",
    href: ROUTES.home,
    badge: "Próximamente",
    isAvailable: false,
    theme: {
      ...brandTheme,
      tagline: "Corporativo",
    },
    iconNode: (
      <HugeiconsIcon
        icon={Suit01Icon}
        size={44}
        strokeWidth={1.75}
        className={brandIconClassName}
      />
    ),
  },
  {
    id: "graduacion",
    title: "Graduación",
    subtitle: "Logros & etapas",
    href: ROUTES.home,
    badge: "Próximamente",
    isAvailable: false,
    theme: {
      ...brandTheme,
      tagline: "Grados",
    },
    iconNode: (
      <HugeiconsIcon
        icon={GraduationCapIcon}
        size={44}
        strokeWidth={1.75}
        className={brandIconClassName}
      />
    ),
  },
  {
    id: "baby-shower",
    title: "Baby Shower",
    subtitle: "Bienvenida especial",
    href: ROUTES.home,
    badge: "Próximamente",
    isAvailable: false,
    theme: {
      ...brandTheme,
      tagline: "Bebés",
    },
    iconNode: (
      <HugeiconsIcon
        icon={BabyBottleIcon}
        size={44}
        strokeWidth={1.75}
        className={brandIconClassName}
      />
    ),
  },
];

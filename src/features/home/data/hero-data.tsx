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
    subtitle: "Romance & distinción",
    href: ROUTES.wedding,
    isAvailable: true,
    theme: {
      accentColor: "#8B5CF6",
      glowBg: "rgba(139, 92, 246, 0.12)",
      badgeBg: "bg-violet-50 border-violet-200",
      badgeText: "text-violet-700",
      gradientText: "from-violet-600 via-fuchsia-600 to-indigo-600",
      borderHover: "hover:border-violet-300 hover:shadow-violet-500/10",
      tagline: "El Gran Día",
    },
    iconNode: (
      <HugeiconsIcon
        icon={WeddingIcon}
        size={42}
        strokeWidth={1.5}
        className="w-10 h-10 sm:w-11 sm:h-11 text-violet-600 transition-transform duration-300 group-hover:scale-105"
      />
    ),
  },
  {
    id: "15-anos",
    title: "15 Años",
    subtitle: "Magia & sofisticación",
    href: ROUTES.fifteen,
    isAvailable: true,
    theme: {
      accentColor: "#EC4899",
      glowBg: "rgba(236, 72, 153, 0.12)",
      badgeBg: "bg-fuchsia-50 border-fuchsia-200",
      badgeText: "text-fuchsia-700",
      gradientText: "from-fuchsia-600 via-pink-600 to-rose-600",
      borderHover: "hover:border-fuchsia-300 hover:shadow-fuchsia-500/10",
      tagline: "Mis Quince",
    },
    iconNode: (
      <div className="flex flex-col items-center justify-center">
        <HugeiconsIcon
          icon={CrownIcon}
          size={32}
          strokeWidth={1.5}
          className="w-8 h-8 sm:w-9 sm:h-9 text-fuchsia-600 transition-transform duration-300 group-hover:scale-105"
        />
        <span className="font-serif-luxury text-lg sm:text-xl font-semibold text-fuchsia-700 leading-none mt-1">
          15
        </span>
      </div>
    ),
  },
  {
    id: "cumpleanos",
    title: "Cumpleaños",
    subtitle: "Celebraciones memorables",
    href: ROUTES.birthday,
    isAvailable: true,
    theme: {
      accentColor: "#06B6D4",
      glowBg: "rgba(6, 182, 212, 0.12)",
      badgeBg: "bg-cyan-50 border-cyan-200",
      badgeText: "text-cyan-700",
      gradientText: "from-cyan-600 via-teal-600 to-blue-600",
      borderHover: "hover:border-cyan-300 hover:shadow-cyan-500/10",
      tagline: "Celebración",
    },
    iconNode: (
      <HugeiconsIcon
        icon={BalloonsIcon}
        size={42}
        strokeWidth={1.5}
        className="w-10 h-10 sm:w-11 sm:h-11 text-cyan-600 transition-transform duration-300 group-hover:scale-105"
      />
    ),
  },
  {
    id: "empresarial",
    title: "Empresarial",
    subtitle: "Galas & aniversarios",
    href: "#",
    badge: "Próximamente",
    isAvailable: false,
    theme: {
      accentColor: "#3B82F6",
      glowBg: "rgba(59, 130, 246, 0.10)",
      badgeBg: "bg-blue-50 border-blue-200",
      badgeText: "text-blue-700",
      gradientText: "from-blue-600 via-indigo-600 to-slate-700",
      borderHover: "hover:border-blue-300 hover:shadow-blue-500/10",
      tagline: "Corporativo",
    },
    iconNode: (
      <HugeiconsIcon
        icon={Suit01Icon}
        size={42}
        strokeWidth={1.5}
        className="w-10 h-10 sm:w-11 sm:h-11 text-blue-500/80 transition-transform duration-300 group-hover:scale-105"
      />
    ),
  },
  {
    id: "graduacion",
    title: "Graduación",
    subtitle: "Nuevas metas & logros",
    href: "#",
    badge: "Próximamente",
    isAvailable: false,
    theme: {
      accentColor: "#10B981",
      glowBg: "rgba(16, 185, 129, 0.10)",
      badgeBg: "bg-emerald-50 border-emerald-200",
      badgeText: "text-emerald-700",
      gradientText: "from-emerald-600 via-teal-600 to-cyan-600",
      borderHover: "hover:border-emerald-300 hover:shadow-emerald-500/10",
      tagline: "Grados",
    },
    iconNode: (
      <HugeiconsIcon
        icon={GraduationCapIcon}
        size={42}
        strokeWidth={1.5}
        className="w-10 h-10 sm:w-11 sm:h-11 text-emerald-600/80 transition-transform duration-300 group-hover:scale-105"
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
      accentColor: "#F59E0B",
      glowBg: "rgba(245, 158, 11, 0.10)",
      badgeBg: "bg-amber-50 border-amber-200",
      badgeText: "text-amber-700",
      gradientText: "from-amber-600 via-orange-500 to-rose-500",
      borderHover: "hover:border-amber-300 hover:shadow-amber-500/10",
      tagline: "Bebés",
    },
    iconNode: (
      <HugeiconsIcon
        icon={BabyBottleIcon}
        size={42}
        strokeWidth={1.5}
        className="w-10 h-10 sm:w-11 sm:h-11 text-amber-600/80 transition-transform duration-300 group-hover:scale-105"
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

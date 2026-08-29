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

export const mainCategories: HeroCategory[] = [
  {
    id: "bodas",
    title: "BODAS",
    href: ROUTES.wedding,
    theme: {
      border: "border-[#38efea]",
      shadow:
        "shadow-[0_0_20px_rgba(56,239,234,0.4),inset_0_0_15px_rgba(56,239,234,0.15)] sm:shadow-[0_0_30px_rgba(56,239,234,0.45),inset_0_0_25px_rgba(56,239,234,0.18)]",
      hoverShadow:
        "group-hover:shadow-[0_0_45px_rgba(56,239,234,0.85),inset_0_0_35px_rgba(56,239,234,0.35)]",
      glowBg: "bg-[#38efea]/20",
      textColor: "text-[#38efea]",
      particleColor: "#38efea",
    },
    iconNode: (
      <div className="relative flex items-center justify-center">
        <HugeiconsIcon
          icon={WeddingIcon}
          size={84}
          strokeWidth={2}
          className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 text-[#38efea] drop-shadow-[0_0_16px_rgba(56,239,234,0.95)]"
        />
      </div>
    ),
  },
  {
    id: "15-anos",
    title: "15 AÑOS",
    href: ROUTES.fifteen,
    theme: {
      border: "border-[#ffc837]",
      shadow:
        "shadow-[0_0_20px_rgba(255,200,55,0.4),inset_0_0_15px_rgba(255,200,55,0.15)] sm:shadow-[0_0_30px_rgba(255,200,55,0.45),inset_0_0_25px_rgba(255,200,55,0.18)]",
      hoverShadow:
        "group-hover:shadow-[0_0_45px_rgba(255,200,55,0.85),inset_0_0_35px_rgba(255,200,55,0.35)]",
      glowBg: "bg-[#ffc837]/20",
      textColor: "text-[#ffc837]",
      particleColor: "#ffc837",
    },
    iconNode: (
      <div className="flex flex-col items-center justify-center">
        <HugeiconsIcon
          icon={CrownIcon}
          size={58}
          strokeWidth={2}
          className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 text-[#ffc837] drop-shadow-[0_0_16px_rgba(255,200,55,0.95)]"
        />
        <span className="font-serif-luxury text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ffc837] drop-shadow-[0_0_16px_rgba(255,200,55,0.95)] leading-none mt-0.5 sm:mt-1">
          15
        </span>
      </div>
    ),
  },
  {
    id: "cumpleanos",
    title: "CUMPLEAÑOS",
    href: ROUTES.birthday,
    theme: {
      border: "border-[#ff5e62]",
      shadow:
        "shadow-[0_0_20px_rgba(255,94,98,0.4),inset_0_0_15px_rgba(255,94,98,0.15)] sm:shadow-[0_0_30px_rgba(255,94,98,0.45),inset_0_0_25px_rgba(255,94,98,0.18)]",
      hoverShadow:
        "group-hover:shadow-[0_0_45px_rgba(255,94,98,0.85),inset_0_0_35px_rgba(255,94,98,0.35)]",
      glowBg: "bg-[#ff5e62]/20",
      textColor: "text-[#ff5e62]",
      particleColor: "#ff5e62",
    },
    iconNode: (
      <div className="relative flex items-center justify-center">
        <HugeiconsIcon
          icon={BalloonsIcon}
          size={84}
          strokeWidth={2}
          className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 text-[#ff5e62] drop-shadow-[0_0_16px_rgba(255,94,98,0.95)]"
        />
      </div>
    ),
  },
  {
    id: "empresarial",
    title: "EMPRESARIAL",
    href: "#",
    theme: {
      border: "border-[#f857a6]",
      shadow:
        "shadow-[0_0_20px_rgba(248,87,166,0.4),inset_0_0_15px_rgba(248,87,166,0.15)] sm:shadow-[0_0_30px_rgba(248,87,166,0.45),inset_0_0_25px_rgba(248,87,166,0.18)]",
      hoverShadow:
        "group-hover:shadow-[0_0_45px_rgba(248,87,166,0.85),inset_0_0_35px_rgba(248,87,166,0.35)]",
      glowBg: "bg-[#f857a6]/20",
      textColor: "text-[#f857a6]",
      particleColor: "#f857a6",
    },
    iconNode: (
      <div className="relative flex items-center justify-center">
        <HugeiconsIcon
          icon={Suit01Icon}
          size={84}
          strokeWidth={2}
          className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 text-[#f857a6] drop-shadow-[0_0_16px_rgba(248,87,166,0.95)]"
        />
      </div>
    ),
  },
];

export const comingSoonCategories: HeroCategory[] = [
  {
    id: "graduacion",
    title: "GRADUACIÓN",
    badge: "Próximamente",
    href: "#",
    theme: {
      border: "border-[#10b981]",
      shadow:
        "shadow-[0_0_20px_rgba(16,185,129,0.4),inset_0_0_15px_rgba(16,185,129,0.15)] sm:shadow-[0_0_30px_rgba(16,185,129,0.45),inset_0_0_25px_rgba(16,185,129,0.18)]",
      hoverShadow:
        "group-hover:shadow-[0_0_45px_rgba(16,185,129,0.85),inset_0_0_35px_rgba(16,185,129,0.35)]",
      glowBg: "bg-[#10b981]/20",
      textColor: "text-[#10b981]",
      particleColor: "#10b981",
    },
    iconNode: (
      <div className="relative flex items-center justify-center">
        <HugeiconsIcon
          icon={GraduationCapIcon}
          size={84}
          strokeWidth={2}
          className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 text-[#10b981] drop-shadow-[0_0_16px_rgba(16,185,129,0.95)]"
        />
      </div>
    ),
  },
  {
    id: "baby-shower",
    title: "BABY\nSHOWER",
    badge: "Próximamente",
    href: "#",
    theme: {
      border: "border-[#a855f7]",
      shadow:
        "shadow-[0_0_20px_rgba(168,85,247,0.4),inset_0_0_15px_rgba(168,85,247,0.15)] sm:shadow-[0_0_30px_rgba(168,85,247,0.45),inset_0_0_25px_rgba(168,85,247,0.18)]",
      hoverShadow:
        "group-hover:shadow-[0_0_45px_rgba(168,85,247,0.85),inset_0_0_35px_rgba(168,85,247,0.35)]",
      glowBg: "bg-[#a855f7]/20",
      textColor: "text-[#a855f7]",
      particleColor: "#a855f7",
    },
    iconNode: (
      <div className="relative flex items-center justify-center">
        <HugeiconsIcon
          icon={BabyBottleIcon}
          size={84}
          strokeWidth={2}
          className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 text-[#a855f7] drop-shadow-[0_0_16px_rgba(168,85,247,0.95)]"
        />
      </div>
    ),
  },
];

export const footerFeatures: HeroFeature[] = [
  {
    icon: SmartPhone01Icon,
    title: "100% DIGITAL",
    subtitle: "FÁCIL DE COMPARTIR",
  },
  {
    icon: PaintBoardIcon,
    title: "DISEÑOS MODERNOS",
    subtitle: "Y PERSONALIZABLES",
  },
  {
    icon: MailValidation01Icon,
    title: "CONFIRMACIÓN",
    subtitle: "DE ASISTENCIA",
  },
  {
    icon: ShieldCheckIcon,
    title: "SEGURO, RÁPIDO",
    subtitle: "Y CON ESTILO",
  },
];

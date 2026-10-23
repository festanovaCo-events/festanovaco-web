import type {
  ComingSoonTone,
  ComingSoonToneClasses,
} from "@/shared/types/coming-soon.types";

export const comingSoonToneClassName: Record<
  ComingSoonTone,
  ComingSoonToneClasses
> = {
  honey: {
    pill: "border-honey-line",
    dot: "bg-amber-500",
    accent: "text-honey",
    cta: "bg-amber-800 hover:bg-amber-900",
  },
  blush: {
    pill: "border-blush-line",
    dot: "bg-rose-500",
    accent: "text-blush",
    cta: "bg-rose-800 hover:bg-rose-900",
  },
};

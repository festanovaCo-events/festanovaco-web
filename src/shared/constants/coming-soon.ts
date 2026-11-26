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
    dot: "bg-honey",
    accent: "text-honey",
  },
  blush: {
    pill: "border-blush-line",
    dot: "bg-blush",
    accent: "text-blush",
  },
};

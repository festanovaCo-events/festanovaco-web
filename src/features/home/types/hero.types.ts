import type { ComponentProps, ReactNode } from "react";
import type { HugeiconsIcon } from "@hugeicons/react";

export interface HeroCategoryTheme {
  accentColor: string;
  glowBg: string;
  iconColor: string;
  borderHover: string;
  tagline: string;
}

export interface HeroCategory {
  id: string;
  title: string;
  href: string;
  subtitle: string;
  badge?: string;
  isAvailable: boolean;
  theme: HeroCategoryTheme;
  iconNode: ReactNode;
}

export interface HeroFeature {
  icon: ComponentProps<typeof HugeiconsIcon>["icon"];
  title: string;
  subtitle: string;
}

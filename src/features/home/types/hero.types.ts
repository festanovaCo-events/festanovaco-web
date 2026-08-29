import type { ComponentProps, ReactNode } from "react";
import type { HugeiconsIcon } from "@hugeicons/react";

export interface HeroCategoryTheme {
  border: string;
  shadow: string;
  hoverShadow: string;
  glowBg: string;
  textColor: string;
  particleColor: string;
}

export interface HeroCategory {
  id: string;
  title: string;
  href: string;
  badge?: string;
  theme: HeroCategoryTheme;
  iconNode: ReactNode;
}

export interface HeroFeature {
  icon: ComponentProps<typeof HugeiconsIcon>["icon"];
  title: string;
  subtitle: string;
}

import type { ReactNode } from "react";

export interface HeroCategoryTheme {
  accentColor: string;
  glowBg: string;
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

export type HeroCardProps = {
  cat: HeroCategory;
};

export type WeddingTemplateCategory =
  | "all"
  | "classic"
  | "modern"
  | "botanical"
  | "destination";

export interface WeddingTemplate {
  id: string;
  number: string;
  name: string;
  couplesNames: string;
  dateExample: string;
  locationExample: string;
  styleTag: string;
  category: "classic" | "modern" | "botanical" | "destination";
  description: string;
  isAvailable: boolean;
  badge: string;
  previewImage?: string;
  theme: {
    accentGradient: string;
    glowColor: string;
    pillBg: string;
    borderHover: string;
  };
  features: string[];
  demoHref?: string;
  whatsappMessage: string;
}

export type WeddingTemplateCategory =
  | "classic"
  | "modern"
  | "botanical"
  | "destination";

export interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
}

export interface MusicSuggestion {
  title: string;
  artist: string;
  genre: string;
  vibe: string;
}

export interface PhotoCapacity {
  galleryMaxPhotos: number;
  coverPhotos: number;
  timelinePhotos: number;
  description: string;
}

export interface IncludedModule {
  title: string;
  description: string;
  tag: string;
}

export interface WeddingTemplate {
  id: string;
  number: string;
  name: string;
  couplesNames: string;
  dateExample: string;
  locationExample: string;
  styleTag: string;
  category: WeddingTemplateCategory;
  description: string;
  isAvailable: boolean;
  badge: string;
  previewImage?: string;
  theme: {
    accent: string;
    accentGradient: string;
    glowColor: string;
    pillBg: string;
    borderHover: string;
  };
  features: string[];
  demoHref?: string;
  whatsappMessage: string;
  story: string;
  colors: ColorSwatch[];
  music: MusicSuggestion;
  photoCapacity: PhotoCapacity;
  includedModules: IncludedModule[];
  customizationNotes: string[];
}

export type WeddingTemplateCardProps = {
  template: WeddingTemplateCardData;
  index?: number;
};

export type WeddingTemplateCardData = Pick<
  WeddingTemplate,
  | "id"
  | "number"
  | "name"
  | "couplesNames"
  | "styleTag"
  | "description"
  | "isAvailable"
  | "badge"
  | "previewImage"
  | "demoHref"
  | "dateExample"
  | "theme"
>;

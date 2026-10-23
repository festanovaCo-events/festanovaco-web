import type { WeddingTemplate } from "./wedding-templates.types";

export type WeddingPageProps = {
  demoToken?: string;
};

export type WeddingTemplatesGridProps = {
  templates: WeddingTemplate[];
};

export type WeddingTemplateDetailProps = {
  template: WeddingTemplate;
  allTemplates: WeddingTemplate[];
};

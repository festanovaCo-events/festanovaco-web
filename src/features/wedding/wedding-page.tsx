import { getWeddingDemoHrefs } from "@/shared/config/env";
import { getWeddingTemplates } from "./data/wedding-templates-data";
import { WeddingHero } from "./components/wedding-hero";
import { WeddingFeaturesIncluded } from "./components/wedding-features-included";
import { WeddingTemplatesGrid } from "./components/wedding-templates-grid";
import { WeddingContactBanner } from "./components/wedding-contact-banner";
import type { WeddingPageProps } from "./types/wedding-page.types";

export function WeddingPage({ demoToken }: WeddingPageProps) {
  const templates = getWeddingTemplates(getWeddingDemoHrefs(demoToken));

  return (
    <div className="w-full flex flex-col min-h-screen">
      <WeddingHero />
      <WeddingFeaturesIncluded />
      <WeddingTemplatesGrid templates={templates} />
      <WeddingContactBanner />
    </div>
  );
}

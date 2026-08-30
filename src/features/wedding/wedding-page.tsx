import { invitationsWeddingUrl } from "@/shared/config/routes";
import { getWeddingTemplates } from "./data/wedding-templates-data";
import { WeddingHero } from "./components/wedding-hero";
import { WeddingFeaturesIncluded } from "./components/wedding-features-included";
import { WeddingTemplatesGrid } from "./components/wedding-templates-grid";
import { WeddingContactBanner } from "./components/wedding-contact-banner";

type WeddingPageProps = {
  demoToken?: string;
};

export function WeddingPage({ demoToken }: WeddingPageProps) {
  const invitationHref = invitationsWeddingUrl(demoToken);
  const templates = getWeddingTemplates(invitationHref);

  return (
    <div className="w-full flex flex-col min-h-screen">
      <WeddingHero />
      <WeddingFeaturesIncluded />
      <WeddingTemplatesGrid templates={templates} />
      <WeddingContactBanner />
    </div>
  );
}

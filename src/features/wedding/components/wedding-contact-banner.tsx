import { weddingContactPanel } from "@/features/wedding/data/wedding-contact";
import { SECTION_IDS } from "@/shared/config/routes";
import { ContactPanel } from "@/shared/ui/contact-panel";

export function WeddingContactBanner() {
  return (
    <section
      id={SECTION_IDS.weddingCustom}
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 pb-20 pt-10 text-foreground scroll-mt-20"
    >
      <ContactPanel {...weddingContactPanel} />
    </section>
  );
}

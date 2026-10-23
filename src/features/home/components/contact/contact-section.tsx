import { homeContactPanel } from "@/features/home/data/home-contact";
import { SECTION_IDS } from "@/shared/config/routes";
import { ContactPanel } from "@/shared/ui/contact-panel";

export function ContactSection() {
  return (
    <section
      id={SECTION_IDS.contact}
      className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-foreground scroll-mt-20"
    >
      <ContactPanel {...homeContactPanel} />
    </section>
  );
}

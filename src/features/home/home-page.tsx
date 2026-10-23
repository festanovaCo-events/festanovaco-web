import { Hero } from "@/features/home/components/hero/hero";
import { HowItWorksSection } from "@/features/home/components/how-it-works/how-it-works-section";
import { FaqSection } from "@/features/home/components/faq/faq-section";
import { ContactSection } from "@/features/home/components/contact/contact-section";
import { SiteFooter } from "@/shared/ui/site-footer";

export function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorksSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}

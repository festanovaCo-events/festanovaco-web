import { SiteNavbar } from "@/shared/ui/site-navbar";
import { Hero } from "@/features/home/components/hero/hero";
import { HowItWorksSection } from "@/features/home/components/how-it-works/how-it-works-section";
import { FaqSection } from "@/features/home/components/faq/faq-section";
import { ContactSection } from "@/features/home/components/contact/contact-section";
import { SiteFooter } from "@/shared/ui/site-footer";

export function HomePage() {
  return (
    <div className="min-h-screen text-foreground flex flex-col font-sans transition-colors duration-300">
      <SiteNavbar />
      <main className="flex-1">
        <Hero />
        <HowItWorksSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

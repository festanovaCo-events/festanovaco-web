import { SiteNavbar } from "@/shared/ui/site-navbar";
import { Hero } from "@/features/home/components/hero/hero";
import { HowItWorksSection } from "@/features/home/components/how-it-works/how-it-works-section";
import { FaqSection } from "@/features/home/components/faq/faq-section";
import { ContactSection } from "@/features/home/components/contact/contact-section";
import { SiteFooter } from "@/shared/ui/site-footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background dark:bg-[#1c1917] text-stone-900 dark:text-stone-100 flex flex-col selection:bg-brand/20 dark:selection:bg-amber-400/30 selection:text-brand-deep dark:selection:text-white font-sans transition-colors duration-300">
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

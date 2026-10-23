import type { ContactHeading } from "@/shared/types/contact-panel.types";

export const contactTitleClassName: Record<ContactHeading, string> = {
  h2: "font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink",
  h3: "font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-ink",
};

export const contactDescriptionClassName: Record<ContactHeading, string> = {
  h2: "text-sm sm:text-base text-muted font-light leading-relaxed mt-4 mb-8",
  h3: "text-sm sm:text-base text-muted font-light leading-relaxed mt-3 mb-8",
};

export const CONTACT_WHATSAPP_CLASS_NAME =
  "btn-primary btn-asesoria w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300";

export const CONTACT_SECONDARY_CLASS_NAME =
  "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-line-strong hover:border-line-hover bg-ghost hover:bg-ghost-hover text-ink text-sm font-medium transition-all duration-300 shadow-xs";

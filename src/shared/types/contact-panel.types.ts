export type ContactHeading = "h2" | "h3";

export type ContactPanelProps = {
  badge: string;
  title: string;
  description: string;
  whatsappHref: string;
  whatsappLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  footnote: string;
  heading?: ContactHeading;
  className?: string;
};

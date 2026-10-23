const WHATSAPP_PHONE = "573000000000";

export const CONTACT_EMAIL = "festanovaco.events@gmail.com";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

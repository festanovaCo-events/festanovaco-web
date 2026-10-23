const MAIL_PREFIX = "mailto:";
const APP_ROUTE_PREFIX = "/";

export function isMailLink(href: string): boolean {
  return href.startsWith(MAIL_PREFIX);
}

export function isAppRoute(href: string): boolean {
  return href.startsWith(APP_ROUTE_PREFIX);
}

function normalizeOrigin(raw: string): string {
  const trimmed = raw.trim().replace(/\/$/, "");
  if (!trimmed) {
    return "";
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

/** Orígenes del SPA de bodas (uno o varios, separados por coma en WEDDING_APP_URL). */
export function getWeddingAppUrls(): string[] {
  const raw = process.env.WEDDING_APP_URL ?? "http://localhost:4200";
  return raw
    .split(",")
    .map(normalizeOrigin)
    .filter((origin) => origin.length > 0);
}

/** Primer origen: destino del rewrite `/invitations-wedding`. */
export function getWeddingAppUrl(): string {
  return getWeddingAppUrls()[0] ?? "http://localhost:4200";
}

/**
 * Hrefs de demo por modelo: el 1.er enlace → invitación 01, el 2.º → invitación 02, etc.
 * Si hay WEDDING_DEMO_TOKEN, se añade como query en cada URL.
 */
export function getWeddingDemoHrefs(token?: string): string[] {
  const resolvedToken = token ?? getWeddingDemoToken();

  return getWeddingAppUrls().map((origin) => {
    if (!resolvedToken) {
      return origin;
    }

    const params = new URLSearchParams({ token: resolvedToken });
    return `${origin}?${params.toString()}`;
  });
}

export function getWeddingDemoToken(): string | undefined {
  const token = process.env.WEDDING_DEMO_TOKEN?.trim();
  return token ? token : undefined;
}

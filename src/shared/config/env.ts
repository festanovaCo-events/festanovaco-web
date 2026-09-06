import { invitationsWeddingUrl, weddingInvitationPath } from "./routes";
import { createInvitationRewrites, type InvitationRewrite } from "./rewrites";

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

/** Primer origen (modelo 01). */
export function getWeddingAppUrl(): string {
  return getWeddingAppUrls()[0] ?? "http://localhost:4200";
}

/**
 * Pares ruta canónica ↔ origen de deploy.
 * Orden en WEDDING_APP_URL: índice 0 → model-01, 1 → model-02, …
 */
export function getWeddingInvitationTargets(): Array<{
  modelNumber: number;
  path: string;
  origin: string;
}> {
  return getWeddingAppUrls().map((origin, index) => {
    const modelNumber = index + 1;
    return {
      modelNumber,
      path: weddingInvitationPath(modelNumber),
      origin,
    };
  });
}

/** Rewrites de Vercel/Next para todos los modelos listados en WEDDING_APP_URL. */
export function createWeddingInvitationRewrites(): InvitationRewrite[] {
  return getWeddingInvitationTargets().flatMap(({ path, origin }) =>
    createInvitationRewrites({
      sourcePrefix: path,
      destinationOrigin: origin,
    })
  );
}

/**
 * Hrefs de demo por modelo: siempre rutas del shell
 * (`/invitations-wedding-model-01`, `-02`, …).
 */
export function getWeddingDemoHrefs(token?: string): string[] {
  const resolvedToken = token ?? getWeddingDemoToken();

  return getWeddingInvitationTargets().map(({ modelNumber }) =>
    invitationsWeddingUrl(resolvedToken, modelNumber)
  );
}

export function getWeddingDemoToken(): string | undefined {
  const token = process.env.WEDDING_DEMO_TOKEN?.trim();
  return token ? token : undefined;
}

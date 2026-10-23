import {
  FIRST_WEDDING_MODEL_NUMBER,
  invitationsWeddingUrl,
  ROUTES,
  weddingInvitationPath,
} from "./routes";
import { createInvitationRewrites, type InvitationRewrite } from "./rewrites";

const DEFAULT_WEDDING_APP_ORIGIN = "http://localhost:4200";

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
  const raw = process.env.WEDDING_APP_URL ?? DEFAULT_WEDDING_APP_ORIGIN;
  return raw
    .split(",")
    .map(normalizeOrigin)
    .filter((origin) => origin.length > 0);
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
    const modelNumber = index + FIRST_WEDDING_MODEL_NUMBER;
    return {
      modelNumber,
      path: weddingInvitationPath(modelNumber),
      origin,
    };
  });
}

/** Rewrite opcional: si el origen está vacío, la ruta se queda en Next. */
function createInvitationRewritesFromEnv(
  rawOrigin: string | undefined,
  sourcePrefix: string,
): InvitationRewrite[] {
  const origin = normalizeOrigin(rawOrigin ?? "");
  if (!origin) {
    return [];
  }

  return createInvitationRewrites({
    sourcePrefix,
    destinationOrigin: origin,
  });
}

const optionalInvitationOrigins: Array<{
  rawOrigin: string | undefined;
  sourcePrefix: string;
}> = [
  {
    rawOrigin: process.env.BIRTHDAY_APP_URL,
    sourcePrefix: ROUTES.invitationsBirthday,
  },
  {
    rawOrigin: process.env.FIFTEEN_APP_URL,
    sourcePrefix: ROUTES.invitationsFifteen,
  },
];

/** Rewrites de Vercel/Next para bodas y para las categorías con origen configurado. */
export function createConfiguredInvitationRewrites(): InvitationRewrite[] {
  return [
    ...createWeddingInvitationRewrites(),
    ...optionalInvitationOrigins.flatMap(({ rawOrigin, sourcePrefix }) =>
      createInvitationRewritesFromEnv(rawOrigin, sourcePrefix),
    ),
  ];
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

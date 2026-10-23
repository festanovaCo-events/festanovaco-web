export const FIRST_WEDDING_MODEL_NUMBER = 1;
const WEDDING_MODEL_NUMBER_WIDTH = 2;

const PATHS = {
  home: "/",
  wedding: "/wedding",
  birthday: "/birthday",
  fifteen: "/15-anos",
  /** Primer origen de WEDDING_APP_URL. */
  invitationsWedding: "/invitations-wedding-model-01",
  invitationsBirthday: "/invitations-birthday",
  invitationsFifteen: "/invitations-15-anos",
  /** Prefijo anterior a los modelos numerados. Sigue redirigiendo al modelo 01. */
  legacyInvitationsWedding: "/invitations-wedding",
} as const;

export const SECTION_IDS = {
  howItWorks: "como-obtenerla",
  faq: "preguntas-frecuentes",
  contact: "contacto",
  weddingFeatures: "caracteristicas",
  weddingCatalog: "catalogo",
  weddingCustom: "personalizable",
} as const;

function sectionRoute(path: string, sectionId: string): string {
  return `${path}#${sectionId}`;
}

export const ROUTES = {
  ...PATHS,
  howItWorks: sectionRoute(PATHS.home, SECTION_IDS.howItWorks),
  faq: sectionRoute(PATHS.home, SECTION_IDS.faq),
  contact: sectionRoute(PATHS.home, SECTION_IDS.contact),
  weddingFeatures: sectionRoute(PATHS.wedding, SECTION_IDS.weddingFeatures),
  weddingCatalog: sectionRoute(PATHS.wedding, SECTION_IDS.weddingCatalog),
  weddingCustom: sectionRoute(PATHS.wedding, SECTION_IDS.weddingCustom),
} as const;

export type Category = "wedding" | "birthday" | "fifteen";

/** Prefijo público de un modelo de boda: `/invitations-wedding-model-01`, `-02`, … */
export function weddingInvitationPath(modelNumber: number): string {
  if (!Number.isInteger(modelNumber) || modelNumber < FIRST_WEDDING_MODEL_NUMBER) {
    throw new Error(`Número de modelo de boda inválido: ${modelNumber}`);
  }

  const paddedModelNumber = String(modelNumber).padStart(
    WEDDING_MODEL_NUMBER_WIDTH,
    "0",
  );

  return `/invitations-wedding-model-${paddedModelNumber}`;
}

export function weddingTemplatePath(templateId: string): string {
  return `${ROUTES.wedding}/${templateId}`;
}

export function categoryPath(category: Category): string {
  switch (category) {
    case "wedding":
      return ROUTES.wedding;
    case "birthday":
      return ROUTES.birthday;
    case "fifteen":
      return ROUTES.fifteen;
    default: {
      const _exhaustive: never = category;
      return _exhaustive;
    }
  }
}

/**
 * URL pública de una invitación de boda en el shell.
 * @param token — opcional
 * @param modelNumber — 1 → model-01, 2 → model-02 (por defecto 1)
 */
export function invitationsWeddingUrl(
  token?: string,
  modelNumber: number = FIRST_WEDDING_MODEL_NUMBER,
): string {
  const path = weddingInvitationPath(modelNumber);

  if (!token) {
    return path;
  }

  const params = new URLSearchParams({ token });
  return `${path}?${params.toString()}`;
}

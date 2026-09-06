export const ROUTES = {
  home: "/",
  wedding: "/wedding",
  birthday: "/birthday",
  fifteen: "/15-anos",
  howItWorks: "/#como-obtenerla",
  faq: "/#preguntas-frecuentes",
  contact: "/#contacto",
  weddingFeatures: "/wedding#caracteristicas",
  weddingCatalog: "/wedding#catalogo",
  weddingCustom: "/wedding#personalizable",
  /** Ruta canónica del modelo 01 (primer origen en WEDDING_APP_URL). */
  invitationsWedding: "/invitations-wedding-model-01",
  invitationsBirthday: "/invitations-birthday",
  invitationsFifteen: "/invitations-15-anos",
} as const;

export type Category = "wedding" | "birthday" | "fifteen";

/** Prefijo público de un modelo de boda: `/invitations-wedding-model-01`, `-02`, … */
export function weddingInvitationPath(modelNumber: number): string {
  if (!Number.isInteger(modelNumber) || modelNumber < 1) {
    throw new Error(`Número de modelo de boda inválido: ${modelNumber}`);
  }

  return `/invitations-wedding-model-${String(modelNumber).padStart(2, "0")}`;
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
  modelNumber: number = 1
): string {
  const path = weddingInvitationPath(modelNumber);

  if (!token) {
    return path;
  }

  const params = new URLSearchParams({ token });
  return `${path}?${params.toString()}`;
}

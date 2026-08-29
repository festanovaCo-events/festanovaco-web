export const ROUTES = {
  home: "/",
  wedding: "/wedding",
  birthday: "/birthday",
  fifteen: "/15-anos",
  howItWorks: "/#como-obtenerla",
  faq: "/#preguntas-frecuentes",
  contact: "/#contacto",
  invitationsWedding: "/invitations-wedding",
  invitationsBirthday: "/invitations-birthday",
  invitationsFifteen: "/invitations-15-anos",
} as const;

export type Category = "wedding" | "birthday" | "fifteen";

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

export function invitationsWeddingUrl(token?: string): string {
  if (!token) {
    return ROUTES.invitationsWedding;
  }

  const params = new URLSearchParams({ token });
  return `${ROUTES.invitationsWedding}?${params.toString()}`;
}

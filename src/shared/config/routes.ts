export const ROUTES = {
  home: "/",
  wedding: "/wedding",
  birthday: "/birthday",
  invitationsWedding: "/invitations-wedding",
  invitationsBirthday: "/invitations-birthday",
} as const;

export type Category = "wedding" | "birthday";

export function categoryPath(category: Category): string {
  switch (category) {
    case "wedding":
      return ROUTES.wedding;
    case "birthday":
      return ROUTES.birthday;
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

import type { Metadata } from "next";

import { BirthdayPage } from "@/features/birthday/birthday-page";

export const metadata: Metadata = {
  title: "Cumpleaños",
  description: "Invitaciones digitales de cumpleaños. Próximamente.",
};

export default function BirthdayRoute() {
  return <BirthdayPage />;
}

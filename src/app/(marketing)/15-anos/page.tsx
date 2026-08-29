import type { Metadata } from "next";

import { FifteenPage } from "@/features/fifteen";

export const metadata: Metadata = {
  title: "15 Años",
  description: "Invitaciones digitales de 15 años. Próximamente.",
};

export default function FifteenRoute() {
  return <FifteenPage />;
}

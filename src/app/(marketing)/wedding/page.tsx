import type { Metadata } from "next";

import { WeddingPage } from "@/features/wedding/wedding-page";
import { getWeddingDemoToken } from "@/shared/config/env";

export const metadata: Metadata = {
  title: "Bodas",
  description: "Invitaciones digitales para matrimonio.",
};

export default function WeddingRoute() {
  return <WeddingPage demoToken={getWeddingDemoToken()} />;
}

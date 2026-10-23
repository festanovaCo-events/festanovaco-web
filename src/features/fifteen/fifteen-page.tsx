import { fifteenComingSoon } from "@/features/fifteen/data/fifteen-coming-soon";
import { ComingSoonSection } from "@/shared/ui/coming-soon-section";

export function FifteenPage() {
  return <ComingSoonSection {...fifteenComingSoon} />;
}

import { birthdayComingSoon } from "@/features/birthday/data/birthday-coming-soon";
import { ComingSoonSection } from "@/shared/ui/coming-soon-section";

export function BirthdayPage() {
  return <ComingSoonSection {...birthdayComingSoon} />;
}

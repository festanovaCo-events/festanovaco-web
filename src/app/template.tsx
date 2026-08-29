import type { ReactNode } from "react";
import { CurtainTransition } from "@/shared/ui/curtain-transition";

export default function RootTemplate({ children }: { children: ReactNode }) {
  return <CurtainTransition>{children}</CurtainTransition>;
}

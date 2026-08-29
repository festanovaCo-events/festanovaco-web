import { Landing } from "./landing";

type WeddingPageProps = {
  demoToken?: string;
};

export function WeddingPage({ demoToken }: WeddingPageProps) {
  return <Landing demoToken={demoToken} />;
}

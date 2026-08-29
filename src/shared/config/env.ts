export function getWeddingDemoToken(): string | undefined {
  const token = process.env.WEDDING_DEMO_TOKEN?.trim();
  return token ? token : undefined;
}

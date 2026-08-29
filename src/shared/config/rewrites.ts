export type InvitationRewrite = {
  source: string;
  destination: string;
};

export function createInvitationRewrites(options: {
  sourcePrefix: string;
  destinationOrigin: string;
}): InvitationRewrite[] {
  const origin = options.destinationOrigin.replace(/\/$/, "");
  const prefix = options.sourcePrefix.replace(/\/$/, "");

  return [
    { source: prefix, destination: `${origin}/` },
    { source: `${prefix}/:path*`, destination: `${origin}/:path*` },
  ];
}

import type { NextConfig } from "next";

import { createWeddingInvitationRewrites } from "./src/shared/config/env";
import { createInvitationRewrites } from "./src/shared/config/rewrites";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/invitations-wedding",
        destination: "/invitations-wedding-model-01",
        permanent: true,
      },
      {
        source: "/invitations-wedding/:path*",
        destination: "/invitations-wedding-model-01/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    const birthdayAppUrl = process.env.BIRTHDAY_APP_URL?.trim();
    const fifteenAppUrl = process.env.FIFTEEN_APP_URL?.trim();

    return [
      ...createWeddingInvitationRewrites(),
      ...(birthdayAppUrl
        ? createInvitationRewrites({
            sourcePrefix: "/invitations-birthday",
            destinationOrigin: birthdayAppUrl,
          })
        : []),
      ...(fifteenAppUrl
        ? createInvitationRewrites({
            sourcePrefix: "/invitations-15-anos",
            destinationOrigin: fifteenAppUrl,
          })
        : []),
    ];
  },
};

export default nextConfig;

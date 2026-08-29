import type { NextConfig } from "next";

import { createInvitationRewrites } from "./src/shared/config/rewrites";

const nextConfig: NextConfig = {
  async rewrites() {
    const weddingAppUrl =
      process.env.WEDDING_APP_URL ?? "http://localhost:4200";
    const birthdayAppUrl = process.env.BIRTHDAY_APP_URL?.trim();
    const fifteenAppUrl = process.env.FIFTEEN_APP_URL?.trim();

    return [
      ...createInvitationRewrites({
        sourcePrefix: "/invitations-wedding",
        destinationOrigin: weddingAppUrl,
      }),
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

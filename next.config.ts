import type { NextConfig } from "next";

import { createConfiguredInvitationRewrites } from "./src/shared/config/env";
import { ROUTES } from "./src/shared/config/routes";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: ROUTES.legacyInvitationsWedding,
        destination: ROUTES.invitationsWedding,
        permanent: true,
      },
      {
        source: `${ROUTES.legacyInvitationsWedding}/:path*`,
        destination: `${ROUTES.invitationsWedding}/:path*`,
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return createConfiguredInvitationRewrites();
  },
};

export default nextConfig;

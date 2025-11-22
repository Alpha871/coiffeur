import { createAuthClient } from "better-auth/react";
import { adminClient, organizationClient } from "better-auth/client/plugins";
import { ac, admin, user } from "@/oop/infrastructure/permission";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [
    adminClient({
      ac,
      roles: {
        admin,
        user,
        // myCustomRole,
      },
    }),
    organizationClient(),
  ],
});

export const {
  signIn,
  signUp,
  useSession,
  signOut,
  organization,
  admin: adminPlugin,
} = authClient;

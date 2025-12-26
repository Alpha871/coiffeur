import { createAuthClient } from "better-auth/react";
import { adminClient, organizationClient } from "better-auth/client/plugins";
import { ac, admin, user } from "@/actions/permission-actions";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
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

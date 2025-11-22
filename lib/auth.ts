import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { admin as adminPlugin, organization } from "better-auth/plugins";
import { admin, ac, user } from "@/oop/infrastructure/permission";

import prisma from "./prisma";
import { sendEmail } from "./emails/send-email";
import { sendOrganizationInviteEmail } from "./emails/organization-invite-email.ts";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  // emailVerification: {
  //   sendVerificationEmail: async ({ user, url, token }, request) => {
  //     await sendEmail({
  //       to: user.email,
  //       subject: "Verify your email address",
  //       text: `Click the link to verify your email: ${url}`,
  //       html: `<p>Click the link to verify your email: <a href="${url}">${url}</a></p>`,
  //     });
  //   },
  // },

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  plugins: [
    adminPlugin({
      ac,
      roles: {
        admin,
        user,
        // myCustomRole,
      },
    }),
    organization({
      async sendInvitationEmail({ email, invitation, inviter, organization }) {
        await sendOrganizationInviteEmail({
          invitation: invitation,
          inviter: inviter.user,
          organization: organization,
          email: email,
        });
      },
      organizationHooks: {
        // beforeCreateTeam: async ({ team, user, organization }) => {
        //   const existingOrganization = await findOrganizationById(
        //     organization.id
        //   );
        //   if (existingOrganization) {
        //     throw new APIError("BAD_REQUEST", {
        //       message: "Team name already exists in this organization",
        //     });
        //   }
        // },
      },
    }),
  ],
  databaseHooks: {
    session: {
      create: {
        before: async (userSession) => {
          const membership = await prisma.member.findFirst({
            where: { userId: userSession.userId },
            orderBy: { createdAt: "desc" },
            select: { organizationId: true },
          });

          return {
            data: {
              ...userSession,
              activeOrganizationId: membership?.organizationId,
            },
          };
        },
      },
    },
  },
});

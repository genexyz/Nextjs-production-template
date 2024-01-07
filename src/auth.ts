import {PrismaAdapter} from "@auth/prisma-adapter";
import NextAuth from "next-auth";

import prisma from "@/lib/prisma";

import authConfig from "./auth.config";

export const {
  handlers: {GET, POST},
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {strategy: "jwt"},
  callbacks: {
    jwt: async ({token, user, trigger}) => {
      if (user) {
        token.user = user;
      }

      // refresh the user's data if they update their name / personal data
      if (trigger === "update") {
        const refreshedUser = await prisma.user.findUnique({
          where: {id: token.sub},
        });
        if (refreshedUser) {
          token.user = refreshedUser;
        } else {
          return {};
        }
      }

      return token;
    },
    session: async ({session, token}) => {
      session.user = {
        id: token.sub,
        // @ts-ignore
        ...(token || session).user,
      };
      return session;
    },
  },
  ...authConfig,
});

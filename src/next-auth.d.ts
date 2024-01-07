import {type DefaultSession} from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  emailVerified: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
    expires: ISODateString;
  }
}

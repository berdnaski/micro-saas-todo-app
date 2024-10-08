import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Prisma } from "../database";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react"; // Importando getSession

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth',
    verifyRequest: '/auth',
    newUser: '/app',
  },
  adapter: PrismaAdapter(Prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
};

const nextAuthInstance = NextAuth(authOptions);

export const GET = (req: NextApiRequest, res: NextApiResponse) => nextAuthInstance(req, res);
export const POST = (req: NextApiRequest, res: NextApiResponse) => nextAuthInstance(req, res);

export const auth = async () => {
  const session = await getSession();
  return session;
};

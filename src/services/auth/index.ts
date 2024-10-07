import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Prisma } from "../database";

const getEnvVariable = (varName: string): string => {
  const value = process.env[varName];
  if (!value) {
    throw new Error(`Missing environment variable: ${varName}`);
  }
  return value;
};

const authOptions = {
  adapter: PrismaAdapter(Prisma),
  providers: [
    EmailProvider({
      server: {
        host: getEnvVariable('EMAIL_SERVER').split('@')[1].split(':')[0], 
        port: getEnvVariable('EMAIL_SERVER').split(':')[2],
        auth: {
          user: getEnvVariable('EMAIL_SERVER').split(':')[1].split('//')[1], 
          pass: getEnvVariable('EMAIL_SERVER').split(':')[2].split('@')[0] 
        }
      },
      from: getEnvVariable('EMAIL_FROM'), 
    }),
  ],
};

export default NextAuth(authOptions);

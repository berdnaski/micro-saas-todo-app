import NextAuth from "@/services/auth";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res);
}

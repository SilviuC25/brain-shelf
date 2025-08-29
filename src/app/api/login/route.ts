import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export async function POST(req: Request) {
  const formData = await req.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const remember = formData.get("remember") === "on";

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const isValid = user.passwordHash ? await bcrypt.compare(password, user.passwordHash) : false;
  if (!isValid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const token = jwt.sign(
    { userId: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: remember ? "30d" : "1h" }
  );

  const res = NextResponse.json({ user: { id: user.id, username: user.username } });

  res.cookies.set({
    name: "session",
    value: token,
    httpOnly: true,
    path: "/",
    maxAge: remember ? 60 * 60 * 24 * 30 : 60 * 60,
  });

  return res;
}

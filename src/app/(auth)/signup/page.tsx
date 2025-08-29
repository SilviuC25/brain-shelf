"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createUser } from "@/actions/createUser";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    setError(null);

    startTransition(async () => {
      try {
        await createUser(formData);
        window.location.href = "/login";
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else if (typeof err === "string") {
          setError(err);
        } else {
          setError("Something went wrong");
        }
      }
    });
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-[#C8B69D] px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-[#F6F1E7] border border-[#BCB0A4] shadow-lg rounded-2xl p-8"
      >
        <div className="flex flex-col items-center mb-6">
          <img
            src="/logo/logo-bgremoved.png"
            alt="Brain Shelf Logo"
            className="w-14 h-14 mb-3"
          />
          <h1 className="text-2xl font-bold text-[#13100E]">
            Create your account
          </h1>
          <p className="text-sm text-[#6C635C] mt-1">
            Join Brain Shelf and turn your reading into lasting knowledge
          </p>
        </div>

        <form action={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="username" className="text-[#272320]">
              Username
            </Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="yourusername"
              required
              className="mt-1 border-[#BCB0A4] focus:ring-[#AA8054] focus:border-[#AA8054] bg-white"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-[#272320]">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@email.com"
              required
              className="mt-1 border-[#BCB0A4] focus:ring-[#AA8054] focus:border-[#AA8054] bg-white"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-[#272320]">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="mt-1 border-[#BCB0A4] focus:ring-[#AA8054] focus:border-[#AA8054] bg-white"
            />
          </div>

          <div>
            <Label htmlFor="confirm-password" className="text-[#272320]">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              placeholder="••••••••"
              required
              className="mt-1 border-[#BCB0A4] focus:ring-[#AA8054] focus:border-[#AA8054] bg-white"
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 rounded border-[#BCB0A4] text-[#5A2F36] focus:ring-[#AA8054]"
              required
            />
            <Label htmlFor="terms" className="text-sm text-[#6C635C]">
              I accept the{" "}
              <Link href="/terms" className="text-[#5A2F36] hover:underline">
                Terms and Conditions
              </Link>
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#5A2F36] hover:bg-[#AA8054] text-white rounded-xl py-2.5 hover: cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Creating account..." : "Create Account"}
          </Button>

          {error && <p className="text-center text-sm text-red-600">{error}</p>}

          <p className="text-center text-sm text-[#6C635C]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#5A2F36] hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </motion.div>
    </section>
  );
}

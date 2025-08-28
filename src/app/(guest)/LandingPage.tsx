'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#demo", label: "Demo" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#C8B69D] text-[#13100E]">
      <header className="flex justify-between items-center px-8 py-4 border-b border-[#BCB0A4]">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo/logo-bgremoved.png"
            width={80}
            height={80}
            alt="Book Shelf's Logo"
          />
        </Link>
        <nav className="flex gap-6 text-sm font-medium items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#AA8054] transition cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="cursor-pointer">
            <Button className="bg-[#5A2F36] hover:bg-[#AA8054] text-white cursor-pointer">
              Log in
            </Button>
          </Link>
        </nav>
      </header>

      <section className="flex flex-col items-center text-center py-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-[#13100E]"
        >
          Your Books. Your Notes. Your Second Brain.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-[#272320]"
        >
          Capture ideas, highlights, and quotes from every book you read.
        </motion.p>
        <div className="mt-8 flex gap-4">
          <Link href="/signup" className="cursor-pointer">
            <Button className="bg-[#AA8054] hover:bg-[#5A2F36] text-white text-lg px-6 py-3 rounded-xl cursor-pointer">
              Try it Free
            </Button>
          </Link>
          <Link href="#demo" className="cursor-pointer">
            <Button
              variant="outline"
              className="border-[#6C635C] text-[#13100E] px-6 py-3 rounded-xl cursor-pointer"
            >
              See Demo
            </Button>
          </Link>
        </div>
      </section>

      <section id="features" className="bg-[#D8C4A9] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: "📚", title: "Digital Library", text: "Keep all your books in one place." },
            { icon: "✍️", title: "Smart Notes", text: "Capture ideas directly tied to each book." },
            { icon: "💡", title: "Quotes & Highlights", text: "Save and revisit favorite passages." },
            { icon: "🧠", title: "Second Brain", text: "Build your personal knowledge system." },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Card className="bg-[#F6F1E7] shadow-md rounded-2xl border border-[#BCB0A4]">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="font-bold text-xl text-[#5A2F36]">{f.title}</h3>
                  <p className="text-sm text-[#272320] mt-2">{f.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="demo" className="py-24 px-6 bg-[#13100E] text-[#F6F1E7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold"
          >
            See Brain Shelf in Action
          </motion.h2>
          <p className="mt-6 text-[#C6BCB2]">
            Explore how easy it is to organize your books and ideas.
          </p>
          <div className="mt-10 bg-[#272320] rounded-2xl shadow-lg p-6">
            <div className="h-64 bg-[#6C635C] rounded-xl flex items-center justify-center text-white">
              Demo Screenshot / App Preview
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#B89874] text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-[#13100E]"
        >
          Turn your reading into lasting knowledge.
        </motion.h2>
        <Link href="/signup" className="cursor-pointer">
          <Button className="mt-8 bg-[#5A2F36] hover:bg-[#272320] text-white text-lg px-8 py-4 rounded-2xl cursor-pointer">
            Create Free Account
          </Button>
        </Link>
        <p className="mt-4 text-sm text-[#272320]">
          No credit card required. Start capturing ideas today.
        </p>
      </section>

      <footer id="contact" className="bg-[#272320] text-[#C6BCB2] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© {new Date().getFullYear()} Brain Shelf. All rights reserved.</p>
          <nav className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-white transition cursor-pointer">About</Link>
            <Link href="#" className="hover:text-white transition cursor-pointer">Privacy</Link>
            <Link href="#" className="hover:text-white transition cursor-pointer">Terms</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6">

      <Link href="/" className="text-xl font-bold">
        Aico
      </Link>

      <div className="flex gap-8 text-sm">

        <Link href="#work">Work</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact</Link>

      </div>

    </nav>
  );
}
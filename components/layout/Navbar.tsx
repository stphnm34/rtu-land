"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full border-b bg-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold tracking-wide">
        RTU Land
      </Link>

      <div className="hidden md:flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/properties">Properties</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* placeholder for mobile menu */}
      <div className="md:hidden">
        ☰
      </div>
    </nav>
  );
}
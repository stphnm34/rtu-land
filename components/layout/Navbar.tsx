"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-50 transition-all
        ${solid ? "bg-white/95 backdrop-blur border-b" : "bg-transparent"}
      `}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          RTU Land
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/properties" className="hover:text-primary">
            Projects
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="#contact" className="hover:text-primary">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-sm"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col text-sm p-3 space-y-2">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/properties" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

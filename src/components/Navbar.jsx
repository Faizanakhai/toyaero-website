"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Used for hamburger icon

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Tracks mobile menu state

  return (
    <header className="w-full bg-white shadow-sm px-4 md:px-8 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          ToyAero
        </Link>

        {/* Navigation Links – shown only on desktop */}
        <nav className="hidden md:flex gap-6 text-gray-800 text-sm font-medium">
          <a href="/features" className="hover:text-blue-600 transition">
            Features
          </a>
          <a href="/purchase" className="hover:text-blue-600 transition">
            Purchase
          </a>
        </nav>

        {/* Hamburger Toggle for Mobile */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-2 flex flex-col gap-4 px-4 pb-4 text-gray-800 text-sm font-medium">
          <a
            href="/features"
            className="hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="/purchase"
            className="hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Purchase
          </a>
        </nav>
      )}
    </header>
  );
}

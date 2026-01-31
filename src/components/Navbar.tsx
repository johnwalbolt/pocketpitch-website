"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Pocket Pitch logo"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Pocket Pitch
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#stats"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Numbers
          </a>
          <a
            href="#reviews"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Reviews
          </a>
          <a
            href="https://apps.apple.com/us/app/pocket-pitch-the-singer-app/id1005725401"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Download Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#features"
              className="text-sm font-medium text-muted"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#stats"
              className="text-sm font-medium text-muted"
              onClick={() => setMenuOpen(false)}
            >
              Numbers
            </a>
            <a
              href="#reviews"
              className="text-sm font-medium text-muted"
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#download"
              className="inline-block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Download Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

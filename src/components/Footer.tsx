import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Pocket Pitch logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-lg font-bold tracking-tight text-foreground">
              Pocket Pitch
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#reviews"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Reviews
            </a>
            <a
              href="#download"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Download
            </a>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Pocket Pitch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

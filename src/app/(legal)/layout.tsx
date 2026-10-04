import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

// Meta App Review crawls these URLs — they must stay public and
// indexable. Root layout sets robots:noindex by default; override here.
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <Link href="/login" className="text-sm font-semibold tracking-tight">
            Greenery Trekking
          </Link>
          <nav className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/data-deletion" className="hover:text-foreground">
              Data deletion
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-10">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Greenery Trekking. Contact:{" "}
          <a
            href="mailto:greenerytrekking@gmail.com"
            className="text-foreground underline-offset-2 hover:underline"
          >
            greenerytrekking@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}

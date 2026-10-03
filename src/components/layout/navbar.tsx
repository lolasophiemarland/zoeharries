"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="text-sm font-medium uppercase tracking-[0.18em] text-graphite">
          {SITE.name}
        </Link>
        <nav className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-label text-muted md:flex">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-graphite"
                  : "hover:text-graphite"
              }
            >
              {link.label}
            </Link>
          ))}
          <a href={SITE.substack} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Subscribe
          </a>
        </nav>
        <button
          type="button"
          className="label-caps md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-4 border-t border-line px-5 py-4 text-[11px] font-medium uppercase tracking-label md:hidden"
        >
          {NAV.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-graphite">
              {link.label}
            </Link>
          ))}
          <a href={SITE.substack} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit">
            Subscribe
          </a>
        </nav>
      ) : null}
    </header>
  );
}

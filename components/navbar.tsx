"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

function openPDF() {
  window.open("CV.pdf", "_blank");
}

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-4 z-50 flex w-full justify-center">
      <nav
        className="backdrop-blur-lg border border-border/60 rounded-full bg-background/40 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-primary)_30%,transparent)] w-full max-w-[900px] px-2"
        role="navigation"
        aria-label="Primary"
      >
        <div className="flex items-center justify-center">
          {/* Brand (mobile only) */}
          <span className="px-3 py-2 text-sm font-mono text-primary/80 md:hidden">
            Visella
          </span>

          {/* Desktop nav (centered) */}
          <ul className="hidden md:flex items-center gap-1 px-2 py-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href} className="relative">
                  <Link
                    href={l.href}
                    className={cn(
                      "relative block rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="ml-1">
              <Button
                asChild
                size="sm"
                variant="outline"
                onClick={openPDF}
                className="cursor-pointer rounded-full border-primary/40 text-primary hover:bg-primary/15 bg-transparent hover-raise"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open CV in new tab"
                >
                  View CV
                </a>
              </Button>
            </li>
          </ul>

          {/* Mobile: burger menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover-raise"
                aria-label="Open menu"
              >
                {/* Simple burger icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="border-border/60 bg-background/95 backdrop-blur"
            >
              <nav className="mt-2" aria-label="Mobile">
                <ul className="grid gap-2">
                  {links.map((l) => {
                    const active = pathname === l.href;
                    return (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className={cn(
                            "block rounded-xl px-4 py-3 text-base font-medium hover:bg-primary/10 hover:text-primary transition-colors",
                            active && "bg-primary/10 text-primary"
                          )}
                        >
                          {l.label}
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <a
                      href="/cv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl px-4 py-3 text-base font-medium border border-border/60 hover:bg-primary/10 hover:text-primary"
                    >
                      View CV
                    </a>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

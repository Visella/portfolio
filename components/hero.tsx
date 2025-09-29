"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

function openPDF() {
  window.open("CV.pdf", "_blank");
}

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-4xl flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <h1 className="glow text-balance text-5xl font-semibold tracking-tight text-primary md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{profile.title}</p>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
            {profile.location}
          </span>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
            BINUS University
          </span>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-foreground">
          {profile.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="shadow-sm">
            <a href="/projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="cursor-pointer border-primary/40 text-primary bg-transparent cursor"
            onClick={openPDF}
          >
            <a target="_blank" rel="noopener noreferrer">
              Open CV
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

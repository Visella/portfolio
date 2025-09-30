"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { MagicCard } from "./ui/magic-card";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

function openPDF() {
  window.open("Visella-CV.pdf", "_blank");
}

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-6rem)] max-w-4xl flex-col items-center justify-center px-20 text-center">
      <MagicCard
        gradientColor={"#262626"}
        className="rounded-lg border-border border-b p-10 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <AnimatedShinyText className="relative text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl">
            <span className="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </AnimatedShinyText>

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

          <div className="mt-6 flex flex-col items-center gap-4">
            {/* tombol utama */}
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild className="shadow-sm">
                <a href="/projects">View Projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="cursor-pointer border-primary/40 text-primary bg-transparent"
                onClick={openPDF}
              >
                <a target="_blank" rel="noopener noreferrer">
                  Open CV
                </a>
              </Button>
            </div>

            {/* icon buttons */}
            <div className="flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/15 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/15 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/15 transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/15 transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </MagicCard>
    </section>
  );
}

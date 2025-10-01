"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Project = {
  title: string;
  tech: string[];
  image: string;
  description: string;
  link?: string;
};
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export function ProjectCard({ p }: { p: Project }) {
  const slug = slugify(p.title);
  return (
    <Card className="group overflow-hidden rounded-3xl border-border/60 bg-card/60 backdrop-blur transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={p.image || "/placeholder.svg"}
          alt={`${p.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={false}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"
          aria-hidden
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{p.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p className="prose-strong">{p.description}</p>
        <div className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/60 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Link
            href={`/projects/${slug}`}
            scroll
            className="btn-primary hover-raise inline-flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 5v14m0-14c-4.5 0-7 2.5-7 7s2.5 7 7 7m0-14c4.5 0 7 2.5 7 7s-2.5 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            Show Detail
          </Link>
          {p.link ? (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost hover-raise inline-flex items-center gap-2"
            >
              {/* GitHub mark */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.8-.25.8-.57v-2.03c-3.26.71-3.95-1.57-3.95-1.57-.53-1.33-1.29-1.69-1.29-1.69-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.72-1.56-2.6-.3-5.33-1.3-5.33-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.5.11-3.13 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.63.23 2.83.11 3.13.75.82 1.2 1.87 1.2 3.15 0 4.51-2.74 5.49-5.35 5.79.41.35.77 1.05.77 2.12v3.14c0 .32.21.68.81.57A11.5 11.5 0 0 0 12 .5Z"
                  fill="currentColor"
                />
              </svg>
              Repo
            </a>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

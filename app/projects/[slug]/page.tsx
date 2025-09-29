"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { FullscreenImage } from "@/components/fullscreen-image"
import { profile } from "@/data/profile"

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const [open, setOpen] = useState(false)
  const [imgSrc, setImgSrc] = useState<string | null>(null)

  const source = (profile.projects || []).find((p: any) => slugify(p.title) === params.slug)
  if (!source) return notFound()

  const name = source.title
  const subtitle = source.description
  const tech: string[] = source.tech || []
  const badges: string[] = source.badges || []
  const hero: string = source.hero || source.image
  const overview: string = source.overview || source.description
  const keyFeatures: string[] = source.keyFeatures || source.features || []
  const contribution: string = source.contribution || ""
  const repoUrl: string | undefined = source.link || undefined
  const videoUrl: string | undefined = source.videoUrl || undefined
  const screenshots: Array<{ src: string; caption?: string }> = (source.screenshots || [])
    .slice(0, 6)
    .map((s: any) => (typeof s === "string" ? { src: s } : s))

  return (
    <main className="container mx-auto px-4 py-10">
      <header className="text-center">
        <div className="mb-4 flex justify-center">
          <Link href="/projects" className="inline-flex items-center gap-2 btn-ghost hover-raise" scroll>
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            </svg>
            Back to Projects
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold">{name}</h1>
        {subtitle ? <p className="mt-2 text-muted-foreground">{subtitle}</p> : null}

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {badges.map((b) => (
            <span key={b} className="chip">
              {b}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          {repoUrl ? (
            <a
              className="btn-primary hover-raise inline-flex items-center gap-2"
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.8-.25.8-.57v-2.03c-3.26.71-3.95-1.57-3.95-1.57-.53-1.33-1.29-1.69-1.29-1.69-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.72-1.56-2.6-.3-5.33-1.3-5.33-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.5.11-3.13 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.63.23 2.83.11 3.13.75.82 1.2 1.87 1.2 3.15 0 4.51-2.74 5.49-5.35 5.79.41.35.77 1.05.77 2.12v3.14c0 .32.21.68.81.57A11.5 11.5 0 0 0 12 .5Z"
                  fill="currentColor"
                />
              </svg>
              View on GitHub
            </a>
          ) : null}
          {videoUrl ? (
            <a
              className="btn-ghost hover-raise inline-flex items-center gap-2"
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
              </svg>
              View Video
            </a>
          ) : null}
        </div>
      </header>

      {hero ? (
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl">
          <img src={hero || "/placeholder.svg"} alt={`${name} hero`} className="w-full object-cover" />
        </div>
      ) : null}

      {overview ? (
        <section className="mx-auto mt-12 max-w-3xl">
          <h2 className="prose-section-title">Overview</h2>
          <p className="prose-strong mt-3">{overview}</p>
        </section>
      ) : null}

      {keyFeatures.length ? (
        <section className="mx-auto mt-12 max-w-3xl">
          <h2 className="prose-section-title">Key Features</h2>
          <ul className="mt-4 grid gap-3">
            {keyFeatures.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/10">
                  •
                </span>
                <span className="prose-strong">{f}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {contribution ? (
        <section className="mx-auto mt-12 max-w-3xl">
          <h2 className="prose-section-title">My Role & Contribution</h2>
          <p className="prose-strong mt-3">{contribution}</p>
        </section>
      ) : null}

      {screenshots.length ? (
        <section className="mx-auto mt-12 max-w-6xl">
          <h2 className="prose-section-title">Screenshots</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((s, i) => (
              <figure key={i} className="overflow-hidden rounded-xl border border-border/60 bg-card">
                <img
                  src={s.src || "/placeholder.svg"}
                  alt={s.caption || `Screenshot ${i + 1}`}
                  className="aspect-[16/10] w-full object-cover cursor-zoom-in"
                  onClick={() => {
                    setImgSrc(s.src || "/placeholder.svg")
                    setOpen(true)
                  }}
                />
                {s.caption ? (
                  <figcaption className="p-2 text-center text-xs text-muted-foreground">{s.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <FullscreenImage
        src={imgSrc || ""}
        alt="Screenshot fullscreen"
        open={open}
        onOpenChange={(v) => {
          if (!v) setImgSrc(null)
          setOpen(v)
        }}
      />
    </main>
  )
}

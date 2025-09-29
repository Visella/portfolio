"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type Item = {
  org?: string
  role?: string
  date?: string
  title?: string
  location?: string
  bullets?: string[]
  images?: string[] // optional images
}

export function CenterTimeline({ items }: { items: Item[] }) {
  const open = (src: string) => {
    // reuse About page viewer
    window.dispatchEvent(new CustomEvent("open-achievement", { detail: src }))
  }

  return (
    <div className="relative">
      {/* central line */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-px -translate-x-1/2 bg-border/70"
        aria-hidden
      />
      <ol className="space-y-8">
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="relative flex flex-col items-center text-center"
          >
            {/* dot */}
            <span className="absolute left-1/2 top-1 size-3 -translate-x-1/2 rounded-full bg-primary/70 ring-2 ring-primary/20" />
            <div className="mt-5 w-full max-w-2xl rounded-xl border border-border/60 bg-card/60 p-4 backdrop-blur-md">
              <div className="flex flex-wrap items-baseline justify-center gap-2">
                <h3 className="font-semibold text-primary">{it.title || it.org}</h3>
                {it.date && <span className="text-xs text-muted-foreground">{it.date}</span>}
              </div>
              {it.role && <p className="text-sm text-muted-foreground">{it.role}</p>}
              {it.location && <p className="text-xs text-muted-foreground/80">{it.location}</p>}
              {it.bullets && (
                <ul className="mt-2 list-disc space-y-1 text-left text-sm text-muted-foreground/90 md:px-8 px-5">
                  {it.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              )}
              {it.images && it.images.length > 0 && (
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {it.images.slice(0, 6).map((src, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => open(src)}
                      className="group relative aspect-video overflow-hidden rounded-md border border-border/60"
                      aria-label="Open experience image"
                    >
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`${it.title || it.org || "Experience"} image ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover transition-transform group-hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"

type Item = {
  org: string
  role: string
  date: string
  location?: string
  bullets?: string[]
}

export function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative ms-3 space-y-8 border-s border-border/60 ps-6">
      {items.map((it, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: i * 0.03 }}
          className="group"
        >
          <span className="absolute -start-[9px] top-1.5 size-3 rounded-full bg-primary/70 ring-2 ring-primary/20" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-semibold text-primary">{it.org}</h3>
            <span className="text-xs text-muted-foreground">{it.date}</span>
          </div>
          <p className="text-sm text-muted-foreground">{it.role}</p>
          {it.bullets && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground/90">
              {it.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          )}
        </motion.li>
      ))}
    </ol>
  )
}

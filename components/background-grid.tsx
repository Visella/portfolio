"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function BackgroundGrid({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <div aria-hidden className={cn("pointer-events-none fixed inset-0 -z-10", className)}>
      {/* soft color blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_20%,_oklch(0.25_0.05_250_/_0.8),transparent_60%)]" />
      {/* animated grid lines */}
      <div
        className="absolute inset-0 opacity-30 grid-animate"
        style={{
          mask: "radial-gradient(ellipse at 25% 20%, black 40%, transparent 70%)",
        }}
      />
      {/* subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_70%_0%,_transparent,_oklch(0.15_0_0))]" />
      {/* entrance fade */}
      <div className={cn("absolute inset-0 transition-opacity duration-700", mounted ? "opacity-100" : "opacity-0")} />
    </div>
  )
}

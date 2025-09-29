import { Navbar } from "@/components/navbar"
import { BackgroundGrid } from "@/components/background-grid"
import { Hero } from "@/components/hero"

export default function HomePage() {
  return (
    <main className="min-h-[100dvh]">
      <BackgroundGrid />
      <Navbar />
      <Hero />
    </main>
  )
}

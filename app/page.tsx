import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <main className="min-h-[100dvh]">
        <Navbar />
        <Hero />
    </main>
  );
}

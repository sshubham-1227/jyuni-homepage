import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyJyuni } from "@/components/why-jyuni"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      <div className="pt-8 md:pt-0" />
      <HeroSection />
      <WhyJyuni />
      <Footer />
    </main>
  )
}

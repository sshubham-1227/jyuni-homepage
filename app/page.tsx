import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyJyuni } from "@/components/why-jyuni"
import { Footer } from "@/components/footer"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Home",
  description: "Practice management for ABA—fast, clear, and built for outcomes. Empowering therapists to focus on what matters most with comprehensive scheduling, data collection, billing, and reporting.",
  keywords: "ABA practice management, ABA software, practice management platform, ABA therapy, HIPAA compliant, ABA scheduling, data collection, billing software",
  path: "/",
  openGraph: {
    title: "Jyuni - ABA Practice Management Platform",
    description: "Practice management for ABA—fast, clear, and built for outcomes. Empowering therapists to focus on what matters most.",
  },
})

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

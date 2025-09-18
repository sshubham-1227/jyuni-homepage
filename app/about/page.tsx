import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { MissionValues } from "@/components/mission-values"
import { TeamGrid } from "@/components/team-grid"
import { CareersSection } from "@/components/careers-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20" />
      <AboutHero />
      <MissionValues />
      <TeamGrid />
      <CareersSection />
      <Footer />
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { SecurityHero } from "@/components/security-hero"
import { SecurityFeatures } from "@/components/security-features"
import { ComplianceSection } from "@/components/compliance-section"
import { Footer } from "@/components/footer"

export default function SecurityPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20" />
      <SecurityHero />
      <SecurityFeatures />
      <ComplianceSection />
      <Footer />
    </main>
  )
}

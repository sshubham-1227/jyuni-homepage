import { Navigation } from "@/components/navigation"
import { SecurityHero } from "@/components/security-hero"
import { SecurityFeatures } from "@/components/security-features"
import { ComplianceSection } from "@/components/compliance-section"
import { Footer } from "@/components/footer"

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      <div className="pt-8 md:pt-0" />
      <SecurityHero />
      <SecurityFeatures />
      <ComplianceSection />
      <Footer />
    </main>
  )
}

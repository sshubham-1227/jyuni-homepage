import { Navigation } from "@/components/navigation"
import { SecurityHero } from "@/components/security-hero"
import { SecurityFeatures } from "@/components/security-features"
import { ComplianceSection } from "@/components/compliance-section"
import { Footer } from "@/components/footer"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Security & Compliance",
  description: "Learn about Jyuni's enterprise-grade security, HIPAA compliance, and data protection measures for ABA practice management.",
  keywords: "ABA practice management security, HIPAA compliance, ABA software security, data protection, practice management compliance",
  path: "/security",
  openGraph: {
    title: "Jyuni Security - HIPAA Compliant ABA Practice Management",
    description: "Enterprise-grade security and HIPAA compliance for ABA practice management",
  },
})

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

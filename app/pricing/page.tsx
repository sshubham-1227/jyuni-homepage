import { Navigation } from "@/components/navigation"
import { PricingHero } from "@/components/pricing-hero"
import { PricingTiers } from "@/components/pricing-tiers"
import { PricingFAQ } from "@/components/pricing-faq"
import { Footer } from "@/components/footer"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Pricing",
  description: "Simple, transparent pricing for ABA practice management. Choose from Starter, Growth, or Scale plans. All plans include HIPAA compliance and 24/7 support.",
  keywords: "ABA practice management pricing, ABA software cost, practice management plans",
  path: "/pricing",
  openGraph: {
    title: "Jyuni Pricing - ABA Practice Management",
    description: "Transparent pricing for ABA practice management software",
  },
})

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      <div className="pt-8 md:pt-0" />
      <PricingHero />
      <PricingTiers />
      <PricingFAQ />
      <Footer />
    </main>
  )
}

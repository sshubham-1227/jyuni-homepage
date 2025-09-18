import { Navigation } from "@/components/navigation"
import { PricingHero } from "@/components/pricing-hero"
import { PricingTiers } from "@/components/pricing-tiers"
import { PricingFAQ } from "@/components/pricing-faq"
import { Footer } from "@/components/footer"

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

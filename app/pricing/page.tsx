import { Navigation } from "@/components/navigation"
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
    <main className="min-h-screen">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 dark:bg-slate-900 mt-0">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-subtle-bg" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Text overlay for better readability */}
        <div className="absolute inset-0 bg-white/20 dark:bg-slate-900/50" />

        <div className="relative">
          <Navigation />
          <div className="pt-8 md:pt-10" />
          <PricingTiers />
          <PricingFAQ />
        </div>
      </section>
      <Footer />
    </main>
  )
}

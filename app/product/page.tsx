import { Navigation } from "@/components/navigation"
import { ProductHero } from "@/components/product-hero"
import { ProductFeatures } from "@/components/product-features"
import { Footer } from "@/components/footer"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Product Features",
  description: "Comprehensive ABA practice management features: scheduling, data collection, billing, reporting, and family engagement in one HIPAA-compliant platform.",
  keywords: "ABA practice management features, ABA software, practice management tools, ABA scheduling, data collection",
  path: "/product",
  openGraph: {
    title: "Jyuni Product Features - ABA Practice Management",
    description: "Complete ABA practice management solution with all the features you need",
  },
})

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      <div className="pt-8 md:pt-0" />
      <ProductHero />
      <ProductFeatures />
      <Footer />
    </main>
  )
}

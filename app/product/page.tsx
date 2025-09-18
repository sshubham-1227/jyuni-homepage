import { Navigation } from "@/components/navigation"
import { ProductHero } from "@/components/product-hero"
import { ProductFeatures } from "@/components/product-features"
import { Footer } from "@/components/footer"

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

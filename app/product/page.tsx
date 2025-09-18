import { Navigation } from "@/components/navigation"
import { ProductHero } from "@/components/product-hero"
import { ProductFeatures } from "@/components/product-features"
import { Footer } from "@/components/footer"

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20" />
      <ProductHero />
      <ProductFeatures />
      <Footer />
    </main>
  )
}

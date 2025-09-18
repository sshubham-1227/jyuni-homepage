import { Navigation } from "@/components/navigation"
import { ResourcesHero } from "@/components/resources-hero"
import { BlogGrid } from "@/components/blog-grid"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20" />
      <ResourcesHero />
      <BlogGrid />
      <Newsletter />
      <Footer />
    </main>
  )
}

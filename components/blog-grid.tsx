import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BlogGrid() {
  const posts = [
    {
      title: "ABA Data Collection Best Practices: A Complete Guide",
      excerpt:
        "Learn how to implement effective data collection strategies that improve accuracy and reduce administrative burden.",
      category: "Best Practices",
      date: "March 15, 2024",
      readTime: "8 min read",
      slug: "aba-data-collection-best-practices",
    },
    {
      title: "Insurance Billing 101: Navigating ABA Claims Successfully",
      excerpt:
        "Master the complexities of ABA insurance billing with our comprehensive guide to claims, authorizations, and denials.",
      category: "Billing",
      date: "March 10, 2024",
      readTime: "12 min read",
      slug: "insurance-billing-101",
    },
    {
      title: "Designing Effective Parent Portals for ABA Practices",
      excerpt:
        "Discover how to create parent engagement strategies that improve treatment outcomes and family satisfaction.",
      category: "Family Engagement",
      date: "March 5, 2024",
      readTime: "6 min read",
      slug: "designing-parent-portals",
    },
    {
      title: "HIPAA Compliance for ABA Practices: What You Need to Know",
      excerpt:
        "Essential HIPAA requirements and practical steps to ensure your ABA practice maintains full compliance.",
      category: "Compliance",
      date: "February 28, 2024",
      readTime: "10 min read",
      slug: "hipaa-compliance-aba",
    },
    {
      title: "Streamlining Session Notes: Templates and Automation",
      excerpt: "Reduce documentation time while maintaining quality with smart templates and automated workflows.",
      category: "Productivity",
      date: "February 22, 2024",
      readTime: "7 min read",
      slug: "streamlining-session-notes",
    },
    {
      title: "Building High-Performing ABA Teams: Staff Management Tips",
      excerpt: "Strategies for recruiting, training, and retaining quality BCBAs and RBTs in your practice.",
      category: "Management",
      date: "February 18, 2024",
      readTime: "9 min read",
      slug: "building-aba-teams",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-balance mb-4">Latest insights and guides</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Stay up-to-date with the latest ABA industry trends, regulatory changes, and practice management strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <Link href={`/resources/${post.slug}`} className="block">
                <div className="p-6">
                  {/* Category and Date */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-semibold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                  {/* Read Time and Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Link
            href="/resources/all"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View all resources
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

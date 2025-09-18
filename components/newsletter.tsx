import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass-card p-8 lg:p-12 text-center">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>

          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-balance mb-4">
            Stay informed with our newsletter
          </h2>

          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Get the latest ABA industry insights, practice management tips, and product updates delivered to your inbox
            monthly.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email address" className="flex-1" required />
            <Button type="submit" className="gradient-bg hover:opacity-90 transition-opacity">
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            No spam, unsubscribe at any time. Read our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              privacy policy
            </a>
            .
          </p>
        </Card>
      </div>
    </section>
  )
}

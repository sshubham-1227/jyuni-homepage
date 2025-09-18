import { BookOpen } from "lucide-react"

export function ResourcesHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6">
          <BookOpen className="h-12 w-12 text-primary" />
        </div>
        <h1 className="font-serif font-bold text-4xl lg:text-5xl text-balance mb-6">
          <span className="gradient-text">Resources</span> & Learning
        </h1>
        <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
          Expert insights, best practices, and practical guides to help you deliver better ABA outcomes and grow your
          practice.
        </p>
      </div>
    </section>
  )
}

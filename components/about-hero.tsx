import { Heart } from "lucide-react"

export function AboutHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6">
          <Heart className="h-12 w-12 text-primary" />
        </div>
        <h1 className="font-serif font-bold text-4xl lg:text-5xl text-balance mb-6">
          Empowering <span className="gradient-text">ABA practices</span> to change lives
        </h1>
        <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
          We believe that every individual deserves access to quality ABA services. Our mission is to remove the
          administrative barriers that prevent therapists from focusing on what matters most—helping clients reach their
          full potential.
        </p>
      </div>
    </section>
  )
}

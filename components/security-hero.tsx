import { Shield } from "lucide-react"

export function SecurityHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6">
          <Shield className="h-12 w-12 text-primary" />
        </div>
        <h1 className="font-serif font-bold text-4xl lg:text-5xl text-balance mb-6">
          <span className="gradient-text">Security</span> & Compliance
        </h1>
        <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
          Your clients' data is protected by enterprise-grade security measures and comprehensive HIPAA compliance built
          into every aspect of our platform.
        </p>
      </div>
    </section>
  )
}

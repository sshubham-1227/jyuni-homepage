import { Zap, Eye, Shield } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"

export function WhyJyuni() {
  const pillars = [
    {
      icon: Zap,
      title: "Speed",
      description: "Document faster with smart templates and automated workflows designed for ABA practices.",
    },
    {
      icon: Eye,
      title: "Visibility",
      description: "Real-time dashboards and progress tracking give you clear insights into client outcomes.",
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "HIPAA-ready workflows, audit logs, and role-based access keep your practice secure.",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-balance mb-4">
              Why choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Jyuni</span>?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 text-pretty max-w-2xl mx-auto">
              Built specifically for ABA practices, with the tools you need to deliver better outcomes.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <FadeInSection key={index} delay={index * 200}>
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="h-8 w-8 text-slate-600 dark:text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{pillar.description}</p>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

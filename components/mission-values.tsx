import { Card } from "@/components/ui/card"
import { Target, Users, BarChart3, Shield } from "lucide-react"

export function MissionValues() {
  const values = [
    {
      icon: Target,
      title: "Human-Centered Care",
      description:
        "Every feature we build starts with the question: How does this help therapists deliver better outcomes for their clients?",
    },
    {
      icon: BarChart3,
      title: "Measurable Outcomes",
      description:
        "We believe in the power of data to drive decisions and demonstrate the life-changing impact of ABA therapy.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description:
        "The best outcomes happen when families, therapists, and supervisors work together with shared visibility and goals.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "We earn trust through transparency, reliability, and unwavering commitment to protecting sensitive client data.",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-balance mb-4">Our mission and values</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Built by a team that understands the unique challenges of ABA practice management and the importance of
            quality care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className="glass-card p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Mission Statement */}
        <Card className="glass-card p-8 lg:p-12 text-center">
          <h3 className="font-serif font-bold text-2xl lg:text-3xl text-balance mb-6">
            "Technology should amplify human potential, not complicate it."
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            This philosophy drives everything we do at Jyuni. We're not just building software—we're creating tools that
            help ABA professionals spend more time with clients and less time on paperwork, ultimately leading to better
            outcomes for the individuals and families they serve.
          </p>
        </Card>
      </div>
    </section>
  )
}

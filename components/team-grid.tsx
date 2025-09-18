import { Card } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

export function TeamGrid() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former BCBA with 10+ years in ABA practice management. Passionate about improving access to quality care.",
      image: "/professional-woman-ceo.png",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Healthcare technology veteran with expertise in HIPAA-compliant systems and data security.",
      image: "/professional-man-cto.png",
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Clinical Officer",
      bio: "Board-certified behavior analyst and former clinic director. Ensures our platform meets real-world needs.",
      image: "/professional-woman-doctor.png",
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Product leader focused on user experience and workflow optimization for healthcare professionals.",
      image: "/professional-product-manager.png",
    },
    {
      name: "Lisa Thompson",
      role: "VP of Customer Success",
      bio: "Dedicated to helping ABA practices maximize their success with Jyuni's platform and support.",
      image: "/professional-woman-customer-success.jpg",
    },
    {
      name: "James Park",
      role: "Lead Engineer",
      bio: "Full-stack engineer passionate about building reliable, scalable healthcare technology solutions.",
      image: "/professional-engineer.png",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-balance mb-4">Meet our team</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            A diverse group of ABA professionals, engineers, and healthcare technology experts united by a shared
            mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex justify-center gap-2">
                <button className="p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </button>
                <button className="p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

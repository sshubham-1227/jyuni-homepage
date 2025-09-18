import { Card } from "@/components/ui/card"
import { Shield, Lock, Eye, Users, Server, FileCheck, AlertTriangle, Globe } from "lucide-react"

export function SecurityFeatures() {
  const features = [
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Full HIPAA compliance with signed Business Associate Agreements (BAAs) available upon request.",
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "AES-256 encryption at rest and TLS 1.3 in transit. Your data is protected at every step.",
    },
    {
      icon: Users,
      title: "Role-Based Access Control",
      description: "Granular permissions ensure staff only access data relevant to their role and responsibilities.",
    },
    {
      icon: Eye,
      title: "Comprehensive Audit Logs",
      description: "Complete audit trail of all data access and modifications for compliance and security monitoring.",
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Hosted on SOC 2 Type II certified infrastructure with 99.99% uptime SLA.",
    },
    {
      icon: FileCheck,
      title: "Data Backup & Recovery",
      description: "Automated daily backups with point-in-time recovery and disaster recovery procedures.",
    },
    {
      icon: AlertTriangle,
      title: "Multi-Factor Authentication",
      description: "MFA and SSO support to ensure only authorized users can access your practice data.",
    },
    {
      icon: Globe,
      title: "Data Residency",
      description: "Your data stays in the United States with clear data residency and sovereignty policies.",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-balance mb-4">
            Enterprise-grade security for healthcare
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            We understand the critical importance of protecting PHI. Our security measures exceed industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="glass-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Calendar, CreditCard, FileText, Users, Zap, CheckCircle, Clock, Target } from "lucide-react"

export function ProductFeatures() {
  const features = [
    {
      id: "data-collection",
      title: "Data Collection",
      icon: BarChart3,
      headline: "Capture accurate data in real-time",
      bullets: [
        "Digital data sheets with customizable targets and prompts",
        "Inter-observer agreement (IOA) tracking and validation",
        "Offline data collection with automatic sync",
      ],
      mockup: "data-collection",
    },
    {
      id: "workflows",
      title: "Workflows",
      icon: Zap,
      headline: "Automate routine tasks and approvals",
      bullets: [
        "Smart scheduling with authorization tracking",
        "Automated session note templates for BCBAs and RBTs",
        "Streamlined treatment plan reviews and updates",
      ],
      mockup: "workflows",
    },
    {
      id: "billing",
      title: "Billing",
      icon: CreditCard,
      headline: "Simplify insurance billing and claims",
      bullets: [
        "ERA/EOB processing with automatic reconciliation",
        "Real-time authorization tracking and alerts",
        "Integrated claims management and denial handling",
      ],
      mockup: "billing",
    },
    {
      id: "reporting",
      title: "Reporting",
      icon: FileText,
      headline: "Generate insights that drive outcomes",
      bullets: [
        "Automated progress reports and data visualizations",
        "Customizable dashboards for different stakeholders",
        "Compliance reporting for state and insurance requirements",
      ],
      mockup: "reporting",
    },
    {
      id: "family-portal",
      title: "Family Portal",
      icon: Users,
      headline: "Engage families in the treatment process",
      bullets: [
        "Secure parent portal with progress updates",
        "Digital consent forms and e-signatures",
        "Home program assignments and tracking",
      ],
      mockup: "family-portal",
    },
    {
      id: "integrations",
      title: "Integrations",
      icon: Target,
      headline: "Connect with your existing tools",
      bullets: [
        "Google Calendar and Outlook synchronization",
        "Payroll system integrations for accurate billing",
        "X12/EDI connections for seamless claims processing",
      ],
      mockup: "integrations",
    },
  ]

  const [activeFeature, setActiveFeature] = useState("data-collection")

  const renderMockup = (type: string) => {
    switch (type) {
      case "data-collection":
        return (
          <div className="space-y-4">
            <Card className="glass-card p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Manding - Session 1</h4>
                <div className="text-sm text-muted-foreground">12:30 PM</div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="text-center p-2 bg-green-100 rounded">
                  <CheckCircle className="h-4 w-4 text-green-600 mx-auto mb-1" />
                  <div>Correct</div>
                </div>
                <div className="text-center p-2 bg-yellow-100 rounded">
                  <Clock className="h-4 w-4 text-yellow-600 mx-auto mb-1" />
                  <div>Prompted</div>
                </div>
                <div className="text-center p-2 bg-red-100 rounded">
                  <div className="h-4 w-4 bg-red-600 rounded-full mx-auto mb-1" />
                  <div>Incorrect</div>
                </div>
              </div>
            </Card>
          </div>
        )
      case "workflows":
        return (
          <div className="space-y-4">
            <Card className="glass-card p-4">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">Today's Schedule</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <span>Alex M. - ABA Session</span>
                  <span className="text-green-600">✓ Authorized</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <span>Sarah K. - Assessment</span>
                  <span className="text-yellow-600">⏳ Pending</span>
                </div>
              </div>
            </Card>
          </div>
        )
      default:
        return (
          <Card className="glass-card p-8 text-center">
            <div className="text-muted-foreground">Interactive mockup for {type}</div>
          </Card>
        )
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sticky Navigation */}
        <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border/50 mb-12 -mx-4 px-4">
          <div className="flex overflow-x-auto py-4">
            <div className="flex space-x-6 min-w-max">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Button
                    key={feature.id}
                    variant={activeFeature === feature.id ? "default" : "ghost"}
                    className="flex items-center gap-2 whitespace-nowrap"
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <Icon className="h-4 w-4" />
                    {feature.title}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Feature Sections */}
        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={feature.id}
                id={feature.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
              >
                {/* Content */}
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-serif font-bold text-3xl">{feature.headline}</h2>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="gradient-bg hover:opacity-90 transition-opacity">
                    Learn More About {feature.title}
                  </Button>
                </div>

                {/* Mockup */}
                <div className={isEven ? "" : "lg:col-start-1"}>{renderMockup(feature.mockup)}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

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
            <Card className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900 dark:text-white">Manding - Session 1</h4>
                <div className="text-sm text-slate-600 dark:text-slate-400">12:30 PM</div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="text-center p-2 bg-green-100 dark:bg-green-900/30 rounded">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mx-auto mb-1" />
                  <div className="text-slate-700 dark:text-slate-300">Correct</div>
                </div>
                <div className="text-center p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                  <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400 mx-auto mb-1" />
                  <div className="text-slate-700 dark:text-slate-300">Prompted</div>
                </div>
                <div className="text-center p-2 bg-red-100 dark:bg-red-900/30 rounded">
                  <div className="h-4 w-4 bg-red-600 dark:bg-red-400 rounded-full mx-auto mb-1" />
                  <div className="text-slate-700 dark:text-slate-300">Incorrect</div>
                </div>
              </div>
            </Card>
          </div>
        )
      case "workflows":
        return (
          <div className="space-y-4">
            <Card className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-5 w-5 text-blue-500" />
                <h4 className="font-semibold text-slate-900 dark:text-white">Today's Schedule</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                  <span className="text-slate-700 dark:text-slate-300">Alex M. - ABA Session</span>
                  <span className="text-green-600 dark:text-green-400">✓ Authorized</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                  <span className="text-slate-700 dark:text-slate-300">Sarah K. - Assessment</span>
                  <span className="text-yellow-600 dark:text-yellow-400">⏳ Pending</span>
                </div>
              </div>
            </Card>
          </div>
        )
      default:
        return (
          <Card className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200 text-center">
            <div className="text-slate-600 dark:text-slate-400">Interactive mockup for {type}</div>
          </Card>
        )
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sticky Navigation */}
        <div className="sticky top-20 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 mb-12 -mx-4 px-4">
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
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 shadow-lg">
                      <Icon className="h-6 w-6 text-slate-600 dark:text-white" />
                    </div>
                    <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">{feature.headline}</h2>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{bullet}</span>
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

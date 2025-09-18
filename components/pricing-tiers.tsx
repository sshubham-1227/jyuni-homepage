"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { CheckCircle, Star } from "lucide-react"

export function PricingTiers() {
  const [isAnnual, setIsAnnual] = useState(false)

  const tiers = [
    {
      name: "Starter",
      description: "Suitable for solo practitioners or small practices",
      monthlyPrice: 19,
      annualPrice: 12.15,
      features: [
        "Scheduling for sessions",
        "Data collection and tracking",
        "Standard data collection",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      description: "Ideal for growing practices with advanced needs",
      monthlyPrice: 29,
      annualPrice: 24.65,
      features: [
        "Everything in Starter",
        "Billing and invoicing",
        "Advanced reporting and insights",
        "Built for growing ABA practices",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Scale",
      description: "Enterprise solution for large practices",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Everything in Growth",
        "Custom pricing for large teams",
        "Dedicated account manager and onboarding support",
        "Tailored integrations and compliance features",
        "Priority support",
      ],
      cta: "Talk to Sales",
      popular: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm ${!isAnnual ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}>Monthly</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span className={`text-sm ${isAnnual ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}>Annual</span>
          {isAnnual && <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">Save 15%</span>}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                tier.popular ? "border-blue-500 shadow-lg scale-105" : "bg-white dark:bg-slate-800 hover:shadow-lg"
              } transition-all duration-300 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-serif font-bold text-2xl mb-2 text-slate-900 dark:text-white">{tier.name}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">{tier.description}</p>

                <div className="mb-6">
                  {tier.name === "Scale" ? (
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">Contact Sales</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-slate-900 dark:text-white">${isAnnual ? tier.annualPrice : tier.monthlyPrice}</span>
                      <span className="text-slate-600 dark:text-slate-400">/provider/month</span>
                    </>
                  )}
                </div>

                <Button
                  className={`w-full ${
                    tier.popular
                      ? "gradient-bg hover:opacity-90 text-white"
                      : "border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                  } transition-all`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </div>

              <ul className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 dark:text-slate-300 mb-4">Need a custom solution for your enterprise practice?</p>
          <Button variant="outline" size="lg" className="border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
            Contact Enterprise Sales
          </Button>
        </div>
      </div>
    </section>
  )
}

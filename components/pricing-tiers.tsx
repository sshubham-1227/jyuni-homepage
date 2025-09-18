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
      description: "Perfect for small practices getting started",
      monthlyPrice: 89,
      annualPrice: 79,
      features: [
        "Up to 3 providers",
        "Basic scheduling & notes",
        "Standard data collection",
        "Email support",
        "HIPAA compliance",
        "Mobile app access",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      description: "Ideal for growing practices with advanced needs",
      monthlyPrice: 149,
      annualPrice: 129,
      features: [
        "Up to 10 providers",
        "Advanced workflows & automation",
        "Custom data collection forms",
        "Billing & claims management",
        "Parent portal & e-signatures",
        "Priority support",
        "Advanced reporting",
        "API integrations",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Scale",
      description: "Enterprise solution for large practices",
      monthlyPrice: 249,
      annualPrice: 219,
      features: [
        "Unlimited providers",
        "Multi-location support",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced analytics",
        "Custom training",
        "SLA guarantee",
        "White-label options",
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
          <span className={`text-sm ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span className={`text-sm ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Annual</span>
          {isAnnual && <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">Save 15%</span>}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                tier.popular ? "border-primary shadow-lg scale-105" : "glass-card hover:shadow-lg"
              } transition-all duration-300`}
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
                <h3 className="font-serif font-bold text-2xl mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">${isAnnual ? tier.annualPrice : tier.monthlyPrice}</span>
                  <span className="text-muted-foreground">/provider/month</span>
                </div>

                <Button
                  className={`w-full ${
                    tier.popular
                      ? "gradient-bg hover:opacity-90"
                      : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  } transition-all`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </div>

              <ul className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Need a custom solution for your enterprise practice?</p>
          <Button variant="outline" size="lg">
            Contact Enterprise Sales
          </Button>
        </div>
      </div>
    </section>
  )
}

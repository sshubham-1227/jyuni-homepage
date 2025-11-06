import { Navigation } from "@/components/navigation"
import { MentalHealthHero } from "@/components/mental-health-hero"
import { BotIllustration } from "@/components/bot-illustration"
import { Footer } from "@/components/footer"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Mental Health Support - Jyuni",
  description: "Connect your employees with licensed therapists instantly through Slack and Microsoft Teams. HIPAA-compliant mental health support at work.",
  keywords: "mental health support, employee wellness, Slack integration, Teams integration, workplace therapy, HIPAA compliant therapy",
  path: "/mental-health",
  openGraph: {
    title: "Mental Health Support - Jyuni",
    description: "Instant access to licensed therapists through your existing communication platforms",
  },
})

export default function MentalHealthPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      <div className="pt-8 md:pt-0" />
      <MentalHealthHero />
      <BotIllustration />
      <Footer />
    </main>
  )
}


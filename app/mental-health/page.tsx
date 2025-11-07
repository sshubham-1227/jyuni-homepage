import { Navigation } from "@/components/navigation"
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
    <main className="min-h-screen">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 dark:bg-slate-900">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-subtle-bg" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Text overlay for better readability */}
        <div className="absolute inset-0 bg-white/20 dark:bg-slate-900/50" />

        <div className="relative">
          <Navigation />
          <div className="pt-8 md:pt-0" />
          <BotIllustration />
        </div>
      </section>
      <Footer />
    </main>
  )
}



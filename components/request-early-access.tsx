import { Button } from "@/components/ui/button"
import Link from "next/link"

export function RequestEarlyAccess() {
  return (
    <div className="mt-24 text-center">
      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 dark:border-slate-700 max-w-3xl mx-auto">
        <h3 className="font-serif font-bold text-3xl lg:text-4xl text-slate-900 dark:text-white mb-4">
          Ready to Bring Mental Health Support to Your Team?
        </h3>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Join the early access program and be among the first to offer instant therapist connections through Slack and Microsoft Teams.
        </p>
        <Button
          size="lg"
          className="gradient-bg hover:opacity-90 hover:scale-105 transition-all duration-300 text-white"
          asChild
        >
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfkj28cmInEqAJuYcaS_f4wH5KJmnF-1AW3AfBuk2vp4aBbzQ/viewform?usp=dialog" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Early Access
          </Link>
        </Button>
      </div>
    </div>
  )
}


"use client"

import { FadeInSection } from "@/components/fade-in-section"

export function LogoCloud() {
  const logos = [
    "Bright Futures ABA",
    "Spectrum Therapy Center",
    "Applied Behavioral Solutions",
    "Cornerstone ABA",
    "Pathways Behavioral Health",
    "Milestone ABA Services",
  ]

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-slate-600 dark:text-slate-300">Trusted by leading ABA practices nationwide</p>
          </div>
        </FadeInSection>

        <div className="relative">
          <div className="flex animate-marquee space-x-8">
            {[...logos, ...logos].map((logo, index) => (
              <FadeInSection key={index} delay={index * 100} className="flex-shrink-0">
                <div className="flex items-center justify-center p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 group hover:scale-110">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg mb-2 mx-auto group-hover:scale-110 transition-all duration-300 animate-pulse shadow-lg" />
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors whitespace-nowrap">
                      {logo}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, BarChart3, Users, Clock } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { FadeInSection } from "@/components/fade-in-section"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 dark:bg-slate-900 -mt-8 md:mt-0">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <FadeInSection>
            <div className="text-center lg:text-left bg-white dark:bg-slate-800 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-slate-700/50">
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance mb-6 text-slate-900 dark:text-white">
                Practice management for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ABA</span>—fast, clear, and built for outcomes.
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 text-pretty mb-8 leading-relaxed">
                Scheduling, notes, data collection, billing, and family engagement in one <span className="font-semibold text-blue-600 dark:text-blue-400">HIPAA-compliant</span> platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="gradient-bg hover:opacity-90 hover:scale-105 transition-all duration-300 text-white"
                  asChild
                >
                  <Link href="/book-a-demo">Book a Demo</Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/security">See how it works</Link>
                </Button>
              </div>
            </div>
          </FadeInSection>

          {/* Right visual - Dashboard mockup */}
          <FadeInSection delay={200}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 transform rotate-3 hover:rotate-1 transition-transform duration-700">
                {/* Sessions Card */}
                <div className="animate-float" style={{ animationDelay: "0s" }}>
                  <Card className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-105 group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-300 transition-all duration-200 ease-in-out">Today's Sessions</p>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white transition-all duration-200 ease-in-out">
                          <AnimatedCounter end={12} />
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">3 remaining</div>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg shadow-lg">
                        <Users className="h-5 w-5 text-slate-600 dark:text-white" />
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Calendar Card */}
                <div className="animate-float mt-8" style={{ animationDelay: "0.5s" }}>
                  <Card className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-105 group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-300 transition-all duration-200 ease-in-out">Schedule</p>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Next session</div>
                        <div className="font-medium text-slate-900 dark:text-white">2:30 PM - Alex M.</div>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg shadow-lg">
                        <Calendar className="h-5 w-5 text-slate-600 dark:text-white" />
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Progress Card */}
                <div className="animate-float" style={{ animationDelay: "1s" }}>
                  <Card className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-105 group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-300 transition-all duration-200 ease-in-out">Progress</p>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white transition-all duration-200 ease-in-out">
                          <AnimatedCounter end={87} suffix="%" />
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Goal mastery</div>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg shadow-lg">
                        <BarChart3 className="h-5 w-5 text-slate-600 dark:text-white" />
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Time Saved Card */}
                <div className="animate-float mt-8" style={{ animationDelay: "1.5s" }}>
                  <Card className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-105 group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-300 transition-all duration-200 ease-in-out">Time Saved</p>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white transition-all duration-200 ease-in-out">
                          <AnimatedCounter end={2.5} suffix="h" />
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">This week</div>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg shadow-lg">
                        <Clock className="h-5 w-5 text-slate-600 dark:text-white" />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

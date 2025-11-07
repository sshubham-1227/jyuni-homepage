"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BotIllustration() {
  const [slackTypedText, setSlackTypedText] = useState("")
  const [teamsTypedText, setTeamsTypedText] = useState("")
  const [slackShowCursor, setSlackShowCursor] = useState(true)
  const [teamsShowCursor, setTeamsShowCursor] = useState(true)
  const [slackMessageSent, setSlackMessageSent] = useState(false)
  const [teamsMessageSent, setTeamsMessageSent] = useState(false)
  const [slackBotReply, setSlackBotReply] = useState(false)
  const [teamsBotReply, setTeamsBotReply] = useState(false)

  const slackCommand = "/jyuni"
  const teamsCommand = "@jyuni connect me with a therapist"

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const hasStartedRef = useRef(false)

  const intervalsRef = useRef<{
    slackInterval?: NodeJS.Timeout
    teamsInterval?: NodeJS.Timeout
    teamsTimeout?: NodeJS.Timeout
    slackRestartTimeout?: NodeJS.Timeout
    teamsRestartTimeout?: NodeJS.Timeout
  }>({})

  const isAnimatingRef = useRef(false)

  const clearAllIntervals = () => {
    if (intervalsRef.current.slackInterval) {
      clearInterval(intervalsRef.current.slackInterval)
      intervalsRef.current.slackInterval = undefined
    }
    if (intervalsRef.current.teamsInterval) {
      clearInterval(intervalsRef.current.teamsInterval)
      intervalsRef.current.teamsInterval = undefined
    }
    if (intervalsRef.current.teamsTimeout) {
      clearTimeout(intervalsRef.current.teamsTimeout)
      intervalsRef.current.teamsTimeout = undefined
    }
    if (intervalsRef.current.slackRestartTimeout) {
      clearTimeout(intervalsRef.current.slackRestartTimeout)
      intervalsRef.current.slackRestartTimeout = undefined
    }
    if (intervalsRef.current.teamsRestartTimeout) {
      clearTimeout(intervalsRef.current.teamsRestartTimeout)
      intervalsRef.current.teamsRestartTimeout = undefined
    }
  }

  const startAnimations = () => {
    // Prevent multiple simultaneous animations
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true

    // Clear any existing intervals/timeouts first
    clearAllIntervals()

    // Reset all states
    setSlackTypedText("")
    setTeamsTypedText("")
    setSlackShowCursor(true)
    setTeamsShowCursor(true)
    setSlackMessageSent(false)
    setTeamsMessageSent(false)
    setSlackBotReply(false)
    setTeamsBotReply(false)

    // Slack typing animation
    let slackIndex = 0
    intervalsRef.current.slackInterval = setInterval(() => {
      if (slackIndex < slackCommand.length) {
        setSlackTypedText(slackCommand.slice(0, slackIndex + 1))
        slackIndex++
      } else {
        if (intervalsRef.current.slackInterval) {
          clearInterval(intervalsRef.current.slackInterval)
        }
        // Wait a bit, then send message (simulate hitting enter)
        setTimeout(() => {
          setSlackMessageSent(true)
          setSlackTypedText("")
          setSlackShowCursor(false)
          // Show bot reply after a delay
          setTimeout(() => {
            setSlackBotReply(true)
            // Restart animation after showing bot reply for a bit (keep repeating after first start)
            intervalsRef.current.slackRestartTimeout = setTimeout(() => {
              if (hasStartedRef.current) {
                isAnimatingRef.current = false
                startAnimations()
              } else {
                isAnimatingRef.current = false
              }
            }, 6000)
          }, 800)
        }, 1000)
      }
    }, 100)

    // Teams typing animation (starts after a delay)
    intervalsRef.current.teamsTimeout = setTimeout(() => {
      let teamsIndex = 0
      intervalsRef.current.teamsInterval = setInterval(() => {
        if (teamsIndex < teamsCommand.length) {
          setTeamsTypedText(teamsCommand.slice(0, teamsIndex + 1))
          teamsIndex++
        } else {
          if (intervalsRef.current.teamsInterval) {
            clearInterval(intervalsRef.current.teamsInterval)
          }
          // Wait a bit, then send message (simulate hitting enter)
          setTimeout(() => {
            setTeamsMessageSent(true)
            setTeamsTypedText("")
            setTeamsShowCursor(false)
            // Show bot reply after a delay
            setTimeout(() => {
              setTeamsBotReply(true)
              // Restart animation after showing bot reply for a bit (keep repeating after first start)
              intervalsRef.current.teamsRestartTimeout = setTimeout(() => {
                if (hasStartedRef.current) {
                  isAnimatingRef.current = false
                  startAnimations()
                } else {
                  isAnimatingRef.current = false
                }
              }, 6000) // Wait 6 seconds before restarting
            }, 800)
          }, 1000)
        }
      }, 80)
    }, 500)
  }

  useEffect(() => {
    // Only start animation on first time in view
    if (inView && !hasStartedRef.current) {
      hasStartedRef.current = true
      if (!isAnimatingRef.current) {
        startAnimations()
      }
    }

    // If out of view after first start, just pause (don't reset)
    if (!inView && hasStartedRef.current) {
      // Clear intervals but keep states so it can resume
      clearAllIntervals()
      isAnimatingRef.current = false
    }

    // If back in view after first start, resume animation
    if (inView && hasStartedRef.current && !isAnimatingRef.current) {
      startAnimations()
    }

    return () => {
      // Only clear if we haven't started yet, otherwise let it continue
      if (!hasStartedRef.current) {
        clearAllIntervals()
        isAnimatingRef.current = false
      }
    }
  }, [inView])

  return (
    <section ref={ref} className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-slate-900 dark:text-white mb-4">
                Works Seamlessly in Your Existing Tools
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto md:mx-0">
                No new apps to learn. Jyuni integrates directly into Slack and Microsoft Teams with simple commands.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Button
                size="lg"
                className="gradient-bg hover:opacity-90 hover:scale-105 transition-all duration-300 text-white shrink-0 w-full md:w-auto"
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
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4 lg:gap-6">
          {/* Slack Mockup */}
          <div className="relative w-full md:w-auto md:flex-1">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700">
              {/* Slack Header */}
              <div className="bg-[#4A154B] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-[#5A1F5C]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27.255 80.719c0 7.33-5.978 13.317-13.309 13.317C6.616 94.036.63 88.049.63 80.719s5.987-13.317 13.317-13.317h13.309zm6.709 0c0-7.33 5.987-13.317 13.317-13.317s13.317 5.986 13.317 13.317v33.335c0 7.33-5.986 13.317-13.317 13.317-7.33 0-13.317-5.987-13.317-13.317zm0 0" fill="#de1c59"></path>
                      <path d="M47.281 27.255c-7.33 0-13.317-5.978-13.317-13.309C33.964 6.616 39.951.63 47.281.63s13.317 5.987 13.317 13.317v13.309zm0 6.709c7.33 0 13.317 5.987 13.317 13.317s-5.986 13.317-13.317 13.317H13.946C6.616 60.598.63 54.612.63 47.281c0-7.33 5.987-13.317 13.317-13.317zm0 0" fill="#35c5f0"></path>
                      <path d="M100.745 47.281c0-7.33 5.978-13.317 13.309-13.317 7.33 0 13.317 5.987 13.317 13.317s-5.987 13.317-13.317 13.317h-13.309zm-6.709 0c0 7.33-5.987 13.317-13.317 13.317s-13.317-5.986-13.317-13.317V13.946C67.402 6.616 73.388.63 80.719.63c7.33 0 13.317 5.987 13.317 13.317zm0 0" fill="#2eb57d"></path>
                      <path d="M80.719 100.745c7.33 0 13.317 5.978 13.317 13.309 0 7.33-5.987 13.317-13.317 13.317s-13.317-5.987-13.317-13.317v-13.309zm0-6.709c-7.33 0-13.317-5.987-13.317-13.317s5.986-13.317 13.317-13.317h33.335c7.33 0 13.317 5.986 13.317 13.317 0 7.33-5.987 13.317-13.317 13.317zm0 0" fill="#ebb02e"></path>
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">Slack</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20"></div>
                  <div className="w-6 h-6 rounded-full bg-white/20"></div>
                </div>
              </div>

              <div className="flex h-[400px] sm:h-[450px] md:h-[500px]">
                {/* Slack Sidebar */}
                <div className="hidden sm:block w-32 md:w-48 bg-[#350D36] border-r border-[#5A1F5C]">
                  <div className="p-2 border-b border-[#5A1F5C]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded bg-[#611F69] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">J</span>
                      </div>
                      <span className="text-white font-semibold text-xs truncate">Jyuni Workspace</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="text-[#D1D2D3] text-xs font-semibold uppercase mb-2 px-2">Channels</div>
                    <div className="space-y-1">
                      <div className="px-2 py-1.5 rounded hover:bg-[#350D36] cursor-pointer">
                        <span className="text-[#D1D2D3] text-sm flex items-center gap-1">
                          <span className="text-[#D1D2D3]">#</span>
                          <span className="font-semibold text-white">general</span>
                        </span>
                      </div>
                      <div className="px-2 py-1.5 rounded hover:bg-[#350D36] cursor-pointer">
                        <span className="text-[#D1D2D3] text-sm flex items-center gap-1">
                          <span className="text-[#D1D2D3]">#</span>
                          <span>random</span>
                        </span>
                      </div>
                      <div className="px-2 py-1.5 rounded hover:bg-[#350D36] cursor-pointer">
                        <span className="text-[#D1D2D3] text-sm flex items-center gap-1">
                          <span className="text-[#D1D2D3]">#</span>
                          <span>wellness</span>
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-[#D1D2D3] text-xs font-semibold uppercase mb-2 px-2">Direct Messages</div>
                      <div className="space-y-1">
                        <div className="px-2 py-1.5 rounded hover:bg-[#350D36] cursor-pointer">
                          <span className="text-[#D1D2D3] text-sm flex items-center gap-2">
                            <span className="w-5 h-5 rounded bg-slate-100 dark:bg-slate-700 flex items-end justify-center overflow-hidden">
                              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="9" r="4.5" fill="#8B5CF6"/>
                                <path d="M2 24C2 19 5.5 16 12 16C18.5 16 22 19 22 24" fill="#8B5CF6"/>
                              </svg>
                            </span>
                            <span>Sarah Chen</span>
                          </span>
                        </div>
                        <div className="px-2 py-1.5 rounded hover:bg-[#350D36] cursor-pointer">
                          <span className="text-[#D1D2D3] text-sm flex items-center gap-2">
                            <span className="w-5 h-5 rounded bg-slate-100 dark:bg-slate-700 flex items-end justify-center overflow-hidden">
                              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="9" r="4.5" fill="#3B82F6"/>
                                <path d="M2 24C2 19 5.5 16 12 16C18.5 16 22 19 22 24" fill="#3B82F6"/>
                              </svg>
                            </span>
                            <span>Mike Johnson</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slack Main Content */}
                <div className="flex-1 flex flex-col bg-white dark:bg-slate-800">
                  {/* Messages Area */}
                  <div className="flex-1 p-3 sm:p-4 space-y-4 overflow-y-auto">
                    {/* User message */}
                    {slackMessageSent && (
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded bg-slate-100 dark:bg-slate-700 flex-shrink-0 flex items-end justify-center overflow-hidden">
                          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="9" r="4.5" fill="#10B981"/>
                            <path d="M2 24C2 19 5.5 16 12 16C18.5 16 22 19 22 24" fill="#10B981"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="font-semibold text-slate-900 dark:text-white text-sm">You</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">2:36 PM</span>
                          </div>
                          <div className="text-slate-700 dark:text-slate-300 text-sm">
                            {slackCommand}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bot response */}
                    {slackBotReply && (
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded bg-slate-100 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <img src="/favicon.ico" alt="Jyuni" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="font-semibold text-slate-900 dark:text-white text-sm">Jyuni</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">2:36 PM</span>
                          </div>
                          <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg p-3 shadow-sm">
                            <div className="text-slate-900 dark:text-white text-sm mb-2 font-semibold">
                              👋 Hi! I'm Jyuni, your mental health support assistant.
                            </div>
                            <div className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                              I can help you connect with a licensed therapist. Would you like to:
                            </div>
                            <div className="space-y-2">
                              <button className="w-full text-left px-3 py-2 bg-[#4A154B] hover:bg-[#611F69] text-white rounded text-sm transition-colors">
                                Connect with a therapist
                              </button>
                              <button className="w-full text-left px-3 py-2 bg-slate-100 dark:bg-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 text-slate-900 dark:text-white rounded text-sm transition-colors">
                                Learn more about our services
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input Area */}
                  <div className="border-t border-slate-200 dark:border-slate-700 p-3 sm:p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2">
                        <div className="flex items-center">
                          <span className="text-slate-900 dark:text-white text-sm">
                            {slackTypedText}
                            {slackShowCursor && (
                              <span className="inline-block w-0.5 h-4 bg-slate-900 dark:bg-white ml-0.5 animate-pulse" />
                            )}
                          </span>
                          {!slackTypedText && (
                            <span className="text-slate-500 dark:text-slate-400 text-sm">Message #general</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Or divider */}
          <div className="flex items-center justify-center my-2 md:my-0 w-4 flex-shrink-0">
            <span className="text-md font-medium text-slate-600 dark:text-slate-300">or</span>
          </div>

          {/* Teams Mockup */}
          <div className="relative w-full md:w-auto md:flex-1">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700">
              {/* Teams Header */}
              <div className="bg-[#464EB8] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-[#3B42A3]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fill="#5059C9" d="M10.765 6.875h3.616c.342 0 .619.276.619.617v3.288a2.272 2.272 0 01-2.274 2.27h-.01a2.272 2.272 0 01-2.274-2.27V7.199c0-.179.145-.323.323-.323zM13.21 6.225c.808 0 1.464-.655 1.464-1.462 0-.808-.656-1.463-1.465-1.463s-1.465.655-1.465 1.463c0 .807.656 1.462 1.465 1.462z"></path>
                        <path fill="#7B83EB" d="M8.651 6.225a2.114 2.114 0 002.117-2.112A2.114 2.114 0 008.65 2a2.114 2.114 0 00-2.116 2.112c0 1.167.947 2.113 2.116 2.113zM11.473 6.875h-5.97a.611.611 0 00-.596.625v3.75A3.669 3.669 0 008.488 15a3.669 3.669 0 003.582-3.75V7.5a.611.611 0 00-.597-.625z"></path>
                        <path fill="#000000" d="M8.814 6.875v5.255a.598.598 0 01-.596.595H5.193a3.951 3.951 0 01-.287-1.476V7.5a.61.61 0 01.597-.624h3.31z" opacity=".1"></path>
                        <path fill="#000000" d="M8.488 6.875v5.58a.6.6 0 01-.596.595H5.347a3.22 3.22 0 01-.267-.65 3.951 3.951 0 01-.172-1.15V7.498a.61.61 0 01.596-.624h2.985z" opacity=".2"></path>
                        <path fill="#000000" d="M8.488 6.875v4.93a.6.6 0 01-.596.595H5.08a3.951 3.951 0 01-.172-1.15V7.498a.61.61 0 01.596-.624h2.985z" opacity=".2"></path>
                        <path fill="#000000" d="M8.163 6.875v4.93a.6.6 0 01-.596.595H5.079a3.951 3.951 0 01-.172-1.15V7.498a.61.61 0 01.596-.624h2.66z" opacity=".2"></path>
                        <path fill="#000000" d="M8.814 5.195v1.024c-.055.003-.107.006-.163.006-.055 0-.107-.003-.163-.006A2.115 2.115 0 016.593 4.6h1.625a.598.598 0 01.596.594z" opacity=".1"></path>
                        <path fill="#000000" d="M8.488 5.52v.699a2.115 2.115 0 01-1.79-1.293h1.195a.598.598 0 01.595.594z" opacity=".2"></path>
                        <path fill="#000000" d="M8.488 5.52v.699a2.115 2.115 0 01-1.79-1.293h1.195a.598.598 0 01.595.594z" opacity=".2"></path>
                        <path fill="#000000" d="M8.163 5.52v.647a2.115 2.115 0 01-1.465-1.242h.87a.598.598 0 01.595.595z" opacity=".2"></path>
                        <path fill="url(#microsoft-teams-color-16__paint0_linear_2372_494)" d="M1.597 4.925h5.969c.33 0 .597.267.597.596v5.958a.596.596 0 01-.597.596h-5.97A.596.596 0 011 11.479V5.521c0-.33.267-.596.597-.596z"></path>
                        <path fill="#ffffff" d="M6.152 7.193H4.959v3.243h-.76V7.193H3.01v-.63h3.141v.63z"></path>
                        <defs>
                          <linearGradient id="microsoft-teams-color-16__paint0_linear_2372_494" x1="2.244" x2="6.906" y1="4.46" y2="12.548" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5A62C3"></stop>
                            <stop offset=".5" stopColor="#4D55BD"></stop>
                            <stop offset="1" stopColor="#3940AB"></stop>
                          </linearGradient>
                        </defs>
                      </g>
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">Microsoft Teams</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20"></div>
                  <div className="w-6 h-6 rounded-full bg-white/20"></div>
                </div>
              </div>

              <div className="flex h-[400px] sm:h-[450px] md:h-[500px]">
                {/* Teams Sidebar */}
                <div className="hidden sm:block w-32 md:w-48 bg-[#F3F2F1] dark:bg-[#252423] border-r border-slate-200 dark:border-slate-700">
                  <div className="p-2 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded bg-[#464EB8] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">J</span>
                      </div>
                      <span className="text-slate-900 dark:text-white font-semibold text-xs truncate">Jyuni Team</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase mb-2 px-2">Channels</div>
                    <div className="space-y-1">
                      <div className="px-2 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                        <span className="text-slate-900 dark:text-white text-sm font-semibold">General</span>
                      </div>
                      <div className="px-2 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                        <span className="text-slate-600 dark:text-slate-400 text-sm">Random</span>
                      </div>
                      <div className="px-2 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                        <span className="text-slate-600 dark:text-slate-400 text-sm">Wellness</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase mb-2 px-2">Chat</div>
                      <div className="space-y-1">
                        <div className="px-2 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                          <span className="text-slate-900 dark:text-white text-sm flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-green-500 border-2 border-white dark:border-slate-800"></span>
                            <span>Sarah Chen</span>
                          </span>
                        </div>
                        <div className="px-2 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                          <span className="text-slate-900 dark:text-white text-sm flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white dark:border-slate-800"></span>
                            <span>Mike Johnson</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Teams Main Content */}
                <div className="flex-1 flex flex-col bg-white dark:bg-slate-800">
                  {/* Messages Area */}
                  <div className="flex-1 p-3 sm:p-4 space-y-4 overflow-y-auto">
                    {/* User message */}
                    {teamsMessageSent && (
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">You</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="font-semibold text-slate-900 dark:text-white text-sm">You</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">2:36 PM</span>
                          </div>
                          <div className="text-slate-700 dark:text-slate-300 text-sm">
                            <span className="text-[#464EB8] dark:text-[#7B83EB] font-semibold">@jyuni</span> connect me with a therapist
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bot response */}
                    {teamsBotReply && (
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <img src="/favicon.ico" alt="Jyuni" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="font-semibold text-slate-900 dark:text-white text-sm">Jyuni</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">2:36 PM</span>
                          </div>
                          <div className="bg-[#F3F2F1] dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg p-3">
                            <div className="text-slate-900 dark:text-white text-sm mb-2 font-semibold">
                              Great! I've connected you with your preferred therapist, Sarah.
                            </div>
                            <div className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                              Your session is scheduled. Join your Zoom meeting:
                            </div>
                            <div className="space-y-2">
                              <a href="https://zoom.us/j/1234567890" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 bg-[#464EB8] hover:bg-[#5A62C8] text-white rounded text-sm transition-colors text-center">
                                Join Zoom Meeting
                              </a>
                              <div className="text-xs text-slate-600 dark:text-slate-400">
                                Meeting ID: 123 456 7890
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input Area */}
                  <div className="border-t border-slate-200 dark:border-slate-700 p-3 sm:p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-[#F3F2F1] dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2">
                        <div className="flex items-center">
                          {teamsTypedText ? (
                            <span className="text-slate-900 dark:text-white text-sm">
                              {teamsTypedText.startsWith("@jyuni") ? (
                                <>
                                  <span className="text-[#464EB8] dark:text-[#7B83EB] font-semibold">@jyuni</span>
                                  <span>{teamsTypedText.slice(6)}</span>
                                </>
                              ) : (
                                teamsTypedText
                              )}
                              {teamsShowCursor && (
                                <span className="inline-block w-0.5 h-4 bg-slate-900 dark:bg-white ml-0.5 animate-pulse" />
                              )}
                            </span>
                          ) : (
                            <span className="text-slate-500 dark:text-slate-400 text-sm">Type a new message</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

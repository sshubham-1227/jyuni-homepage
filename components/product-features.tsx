"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Calendar, CreditCard, FileText, Users, CheckCircle, Clock, Target, TrendingUp, DollarSign, Pause, MapPin, Video, Phone, Mail, User, GripVertical, Trash2 } from "lucide-react"

export function ProductFeatures() {
  const features = [
    {
      id: "data-collection",
      title: "Data Collection",
      icon: BarChart3,
      headline: "Capture accurate session data in real-time",
      bullets: [
        "Digital goal cards with multiple recording methods (percent correct, frequency, duration, latency, intervals)",
        "Trial-by-trial data collection with prompt level tracking",
        "Session notes and SOAP documentation templates",
        "Real-time data capture during therapy sessions",
      ],
      mockup: "data-collection",
    },
    {
      id: "scheduling",
      title: "Scheduling",
      icon: Calendar,
      headline: "Smart scheduling with authorization tracking",
      bullets: [
        "Calendar-based scheduling with conflict detection",
        "Session type management (in-person, telehealth, phone)",
        "Real-time authorization status tracking and expiration alerts",
        "Therapist-client assignment validation",
      ],
      mockup: "scheduling",
    },
    {
      id: "treatment-plans",
      title: "Treatment Plans",
      icon: Target,
      headline: "Comprehensive treatment plan management",
      bullets: [
        "Create and manage treatment plans with measurable goals",
        "Define mastery criteria and implementation guidelines",
        "Track goal progress and update plans based on data",
        "BCBA supervision and treatment plan oversight",
      ],
      mockup: "treatment-plans",
    },
    {
      id: "billing",
      title: "Billing",
      icon: CreditCard,
      headline: "Streamline insurance billing and revenue tracking",
      bullets: [
        "Billing summary with revenue, hours, and session tracking",
        "Authorization management and expiration monitoring",
        "Billing capacity planning and utilization tracking",
        "Billing code management and unit tracking",
      ],
      mockup: "billing",
    },
    {
      id: "analytics",
      title: "Analytics & Reporting",
      icon: FileText,
      headline: "Visualize progress with comprehensive analytics",
      bullets: [
        "Standard Celeration Charts for frequency and percent correct goals",
        "Line charts for duration, latency, and interval-based goals",
        "Progress visualization for all recording methods",
        "Real-time progress tracking with intervention markers",
        "Comprehensive analytics for data-driven decision making",
      ],
      mockup: "analytics",
    },
    {
      id: "client-management",
      title: "Client Management",
      icon: Users,
      headline: "Complete client lifecycle management",
      bullets: [
        "Comprehensive client profiles with guardian information",
        "Client-therapist assignments (RBT and BCBA)",
        "Assessment creation and management",
        "Client history and family information tracking",
      ],
      mockup: "client-management",
    },
  ]

  const [activeFeature, setActiveFeature] = useState("data-collection")

  const scrollToFeature = (featureId: string) => {
    setActiveFeature(featureId)
    const element = document.getElementById(featureId)
    if (element) {
      const offset = 100 // Offset for navigation bar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const renderMockup = (type: string) => {
    switch (type) {
      case "data-collection":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Goal Card matching jyuni GoalCard exactly */}
            <div className="relative aspect-square">
              <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                {/* Front of Card - Percent Correct */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-600/20 dark:to-purple-600/20 border border-blue-500/30 dark:border-purple-500/30 rounded-2xl p-3 sm:p-4 shadow-lg flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  {/* Goal Info */}
                  <div className="mb-3">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white line-clamp-3 leading-tight">
                      Manding for Preferred Items
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 mt-1 leading-tight">
                      Percent Correct
                    </p>
                  </div>

                  {/* Recording Interface - Percent Correct */}
                  <div className="flex flex-col items-center gap-2 w-full flex-shrink-0">
                    <div className="flex flex-col items-center text-center flex-shrink-0 mb-2">
                      <div className="text-base font-bold text-slate-900 dark:text-white">
                        1 - 2
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        67%
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          P: 1
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          NR: 0
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2 w-full">
                        <button className="flex-1 p-2 bg-white/90 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-slate-700 dark:text-white rounded-lg border border-white/20 transition-all flex items-center justify-center shadow-sm text-xs font-medium">
                          Correct
                        </button>
                        <button className="flex-1 p-2 bg-white/90 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-slate-700 dark:text-white rounded-lg border border-white/20 transition-all flex items-center justify-center shadow-sm text-xs font-medium">
                          Incorrect
                        </button>
                      </div>
                      <div className="flex items-center gap-2 w-full">
                        <button className="flex-1 p-2 bg-white/90 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-slate-700 dark:text-white rounded-lg border border-white/20 transition-all flex items-center justify-center shadow-sm text-xs font-medium">
                          Prompted
                        </button>
                        <button className="flex-1 p-2 bg-white/90 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-slate-700 dark:text-white rounded-lg border border-white/20 transition-all flex items-center justify-center shadow-sm text-xs font-medium">
                          No Response
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Goal Card - Duration */}
            <div className="relative aspect-square">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-600/20 dark:to-purple-600/20 border border-blue-500/30 dark:border-purple-500/30 rounded-2xl p-3 sm:p-4 shadow-lg flex flex-col justify-between">
                  {/* Goal Info */}
                  <div className="mb-3">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white line-clamp-3 leading-tight">
                      Eye Contact Duration
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 mt-1 leading-tight">
                      Duration
                    </p>
                  </div>

                  {/* Recording Interface - Duration */}
                  <div className="flex flex-col items-center gap-2 w-full flex-shrink-0">
                    <div className="flex items-center justify-between w-full gap-2 px-2">
                      <div className="flex flex-col">
                        <div className="text-xl font-bold text-slate-900 dark:text-white">
                          2:34
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Total: 5:12
                        </div>
                      </div>
                      <button className="p-2 bg-white/90 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-slate-700 dark:text-white rounded-lg border border-white/20 transition-all flex items-center justify-center shadow-sm">
                        <Pause className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "scheduling":
        return (
          <div>
            {/* Calendar Grid matching jyuni scheduling page exactly */}
            <Card className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-1">
                <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg shadow-lg">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-white" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">November 2025</h4>
              </div>
              
              {/* Calendar Header */}
              <div className="grid grid-cols-7 gap-1">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-xs font-semibold text-slate-600 dark:text-slate-400 text-center ">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days - matching jyuni CalendarDay exactly */}
              {/* November 2025 starts on Saturday (Nov 1) */}
              <div className="grid grid-cols-7 gap-1">
                {/* Empty days (previous month - October 26-31) */}
                {[26, 27, 28, 29, 30, 31].map((day) => (
                  <div 
                    key={`empty-${day}`} 
                    className="min-h-[60px] sm:min-h-[80px] p-1 sm:p-2 border border-slate-200 dark:border-slate-600 overflow-hidden transition-all duration-200 ease-in-out bg-slate-50 dark:bg-slate-900"
                  >
                    <div className="text-xs sm:text-sm font-medium text-slate-500">
                      {day}
                    </div>
                  </div>
                ))}
                
                {/* Day 1 - Saturday (Nov 1) with session */}
                <div className="min-h-[60px] sm:min-h-[80px] p-1 sm:p-2 border border-slate-200 dark:border-slate-600 overflow-hidden transition-all duration-200 ease-in-out bg-white dark:bg-slate-800 ring-2 ring-blue-500">
                  <div className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 mb-1">
                    1
                  </div>
                  <div className="flex flex-col gap-0.5 sm:gap-1 overflow-hidden">
                    <div className="text-[10px] sm:text-xs p-0.5 sm:p-1 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-all duration-200 ease-in-out border border-blue-200 dark:border-blue-700/50">
                      <div className="font-medium truncate leading-tight">
                        Alex M.
                      </div>
                      <div className="flex items-center space-x-0.5 sm:space-x-1 mt-0.5">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-[9px] sm:text-xs">2:00 PM</span>
                      </div>
                      <div className="text-[8px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        Sarah K.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 2 - Sunday (Nov 2) */}
                <div className="min-h-[60px] sm:min-h-[80px] p-1 sm:p-2 border border-slate-200 dark:border-slate-600 overflow-hidden transition-all duration-200 ease-in-out bg-white dark:bg-slate-800">
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
                    2
                  </div>
                </div>

                {/* Day 3 - Monday (Nov 3) */}
                <div className="min-h-[60px] sm:min-h-[80px] p-1 sm:p-2 border border-slate-200 dark:border-slate-600 overflow-hidden transition-all duration-200 ease-in-out bg-white dark:bg-slate-800">
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
                    3
                  </div>
                </div>

                {/* Day 4 - Tuesday (Nov 4) with multiple sessions */}
                <div className="min-h-[60px] sm:min-h-[80px] p-1 sm:p-2 border border-slate-200 dark:border-slate-600 overflow-hidden transition-all duration-200 ease-in-out bg-white dark:bg-slate-800">
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white mb-1">
                    4
                  </div>
                  <div className="flex flex-col gap-0.5 sm:gap-1 overflow-hidden">
                    <div className="text-[10px] sm:text-xs p-0.5 sm:p-1 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-all duration-200 ease-in-out border border-blue-200 dark:border-blue-700/50">
                      <div className="font-medium truncate leading-tight">
                        Jordan L.
                      </div>
                      <div className="flex items-center space-x-0.5 sm:space-x-1 mt-0.5">
                        <Video className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-[9px] sm:text-xs">10:00 AM</span>
                      </div>
                      <div className="text-[8px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        Michael R.
                      </div>
                    </div>
                    <button
                      type="button"
                      className="block w-full min-w-0 text-[9px] sm:text-xs text-slate-600 dark:text-slate-400 text-center bg-slate-100 dark:bg-slate-700/50 rounded px-1 py-0.5 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200 ease-in-out overflow-hidden"
                    >
                      <span className="truncate text-ellipsis block min-w-0">
                        +2 more
                      </span>
                    </button>
                  </div>
                </div>

                {/* Day 5 - Wednesday (Nov 5) */}
                <div className="min-h-[60px] sm:min-h-[80px] p-1 sm:p-2 border border-slate-200 dark:border-slate-600 overflow-hidden transition-all duration-200 ease-in-out bg-white dark:bg-slate-800">
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
                    5
                  </div>
                </div>

                {/* Day 6 - Thursday (Nov 6) */}
                <div className="min-h-[60px] sm:min-h-[80px] p-1 sm:p-2 border border-slate-200 dark:border-slate-600 overflow-hidden transition-all duration-200 ease-in-out bg-white dark:bg-slate-800">
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
                    6
                  </div>
                </div>

                {/* Day 7 - Friday (Nov 7) */}
                <div className="min-h-[60px] sm:min-h-[80px] p-1 sm:p-2 border border-slate-200 dark:border-slate-600 overflow-hidden transition-all duration-200 ease-in-out bg-white dark:bg-slate-800">
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
                    7
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )

      case "treatment-plans":
        return (
          <div className="space-y-4">
            {/* Status Filter Headers matching jyuni GoalsBoard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: "Planned", count: 0, value: "planned" },
                { label: "In Progress", count: 3, value: "in-progress", isSelected: true },
                { label: "Maintenance", count: 0, value: "maintenance" },
                { label: "Mastered", count: 1, value: "mastered" },
              ].map((status) => (
                <div
                  key={status.value}
                  className={`p-2 sm:p-3 rounded-lg border transition-all duration-200 ease-in-out cursor-pointer ${
                    status.isSelected
                      ? "bg-blue-50 dark:bg-blue-900/20 border-blue-500 dark:border-blue-500 shadow-md"
                      : "bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs sm:text-sm font-medium ${
                      status.isSelected
                        ? "text-blue-900 dark:text-blue-100"
                        : "text-slate-700 dark:text-slate-300"
                    }`}>
                      {status.label}
                    </span>
                    <span className={`text-xs sm:text-sm font-bold px-1.5 py-0.5 rounded ${
                      status.isSelected
                        ? "bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100"
                        : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                    }`}>
                      {status.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Goals List matching jyuni GoalItem exactly */}
            <div className="space-y-2 sm:space-y-2">
              {[
                { name: "Manding for Preferred Items", abbreviation: "MFPI", isActive: true },
                { name: "Following 2-Step Instructions", abbreviation: "F2SI", isActive: true },
                { name: "Eye Contact Duration", abbreviation: "ECD", isActive: false },
              ].map((goal, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center justify-between p-2 sm:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 ease-out cursor-pointer overflow-hidden ${
                    idx === 0
                      ? "bg-blue-50 dark:bg-blue-900/20 border-blue-500 dark:border-blue-500 shadow-md ring-2 ring-blue-400/20"
                      : "bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-500 hover:scale-[1.01]"
                  }`}
                >
                  <div className="flex items-center space-x-1.5 sm:space-x-4 flex-1 min-w-0">
                    {/* Drag Handle */}
                    <div className="p-1 sm:p-1.5 cursor-grab active:cursor-grabbing hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors flex-shrink-0">
                      <GripVertical className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400 dark:text-slate-500" />
                    </div>
                    {/* Target Icon */}
                    <div className="p-1 sm:p-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg shadow-sm flex-shrink-0">
                      <Target className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-slate-600 dark:text-white" />
                    </div>
                    {/* Goal Name and Abbreviation */}
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <p className={`text-xs sm:text-base font-medium transition-colors truncate ${
                        idx === 0
                          ? "text-blue-900 dark:text-blue-100"
                          : "text-slate-900 dark:text-white"
                      }`}>
                        {goal.name}
                      </p>
                      {goal.abbreviation && (
                        <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                          ({goal.abbreviation})
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Active Toggle Switch */}
                  <div className="flex items-center space-x-1 sm:space-x-3 flex-shrink-0 ml-1 sm:ml-2">
                    <button
                      type="button"
                      className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none min-h-0 min-w-0 ${
                        goal.isActive
                          ? "bg-emerald-500 dark:bg-emerald-600"
                          : "bg-slate-300 dark:bg-slate-600"
                      }`}
                      title={goal.isActive ? "Click to deactivate" : "Click to activate"}
                      role="switch"
                      aria-checked={goal.isActive}
                    >
                      <span
                        className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out ${
                          goal.isActive ? "translate-x-[18px] sm:translate-x-[22px]" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                    {/* Delete Button */}
                    <button
                      className="flex items-center justify-center p-1 sm:p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                      title="Delete Goal"
                    >
                      <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-600 dark:text-red-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "billing":
        return (
          <div className="space-y-4">
            {/* Stat Cards matching jyuni StatCard exactly */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-3 sm:p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                      Total Revenue
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      $24,580
                    </p>
                  </div>
                  <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg shadow-lg">
                    <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-white" />
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-3 sm:p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                      Total Hours
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      142.5
                    </p>
                  </div>
                  <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg shadow-lg">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-white" />
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-3 sm:p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200 sm:col-span-2 md:col-span-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                      Total Sessions
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      87
                    </p>
                  </div>
                  <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg shadow-lg">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Billing Table matching jyuni billing summary table exactly */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="overflow-x-auto sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                    <thead className="bg-slate-50 dark:bg-slate-700/50">
                      <tr>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Date</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Client</th>
                        <th className="hidden sm:table-cell px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Provider</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Hours</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Units</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800">
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">12/15/24</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">Alex M.</td>
                        <td className="hidden sm:table-cell px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">Sarah K.</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">2.00</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">4</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">$320.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">12/15/24</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">Jordan L.</td>
                        <td className="hidden sm:table-cell px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">Michael R.</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">1.50</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">3</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">$240.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">12/14/24</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">Alex M.</td>
                        <td className="hidden sm:table-cell px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">Sarah K.</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">2.50</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900 dark:text-white">5</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">$400.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )

      case "analytics":
        return (
          <div className="space-y-4">
            {/* Standard Celeration Chart matching jyuni GoalProgressChart */}
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600 p-3 sm:p-4 lg:p-6">
              {/* Chart Title */}
              <div className="mb-2 sm:mb-3">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white flex items-center space-x-1.5 sm:space-x-2">
                  <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg shadow-sm flex-shrink-0">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 dark:text-white" />
                  </div>
                  <span>Progress Visualization</span>
                </h3>
              </div>
              {/* Chart Area - reduced height with padding for axis labels */}
              <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600 p-2 sm:p-4">
                <div className="flex items-end gap-1 sm:gap-2">
                  {/* Y-axis labels (left, outside chart) */}
                  <div className="flex flex-col justify-between h-[200px] sm:h-[250px] lg:h-[300px] text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 pr-1 sm:pr-2 min-w-[35px] sm:min-w-[50px]">
                    <span>1000</span>
                    <span>100</span>
                    <span>10</span>
                    <span>1</span>
                    <span>0.1</span>
                    <span>0.01</span>
                    <span>0.001</span>
                    <span>0.0001</span>
                  </div>
                  
                  {/* Chart with grid */}
                  <div className="flex-1 relative h-[200px] sm:h-[250px] lg:h-[300px]">
                    {/* Grid lines */}
                    <div className="absolute inset-0">
                      {/* Horizontal grid lines */}
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div
                          key={`h-${i}`}
                          className="absolute w-full border-t border-slate-200 dark:border-slate-600"
                          style={{ top: `${(i * 12.5)}%` }}
                        />
                      ))}
                      {/* Vertical grid lines */}
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div
                          key={`v-${i}`}
                          className="absolute h-full border-l border-slate-200 dark:border-slate-600"
                          style={{ left: `${(i * 14.28)}%` }}
                        />
                      ))}
                    </div>
                    {/* Data points and celeration line - realistic values for SCC */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid meet">
                      {/* Correct responses - circles */}
                      {/* Values: 0.2, 0.4, 0.8, 1.2, 1.8, 2.5 responses per minute */}
                      {[
                        { x: 60, y: 270, value: 0.2 },   // Week 1: 0.2/min (near 0.1 line)
                        { x: 160, y: 245, value: 0.4 },   // Week 2: 0.4/min (between 0.1 and 1)
                        { x: 260, y: 215, value: 0.8 },   // Week 3: 0.8/min (near 1 line)
                        { x: 360, y: 190, value: 1.2 },   // Week 4: 1.2/min (above 1 line)
                        { x: 460, y: 165, value: 1.8 },   // Week 5: 1.8/min (between 1 and 10)
                        { x: 560, y: 145, value: 2.5 },   // Week 6: 2.5/min (between 1 and 10)
                      ].map((point, i) => (
                        <circle
                          key={`correct-${i}`}
                          cx={point.x}
                          cy={point.y}
                          r="6"
                          fill="#000000"
                          stroke="#ffffff"
                          strokeWidth="2"
                        />
                      ))}
                      {/* Celeration line for correct responses - solid black line */}
                      <line
                        x1="60"
                        y1="270"
                        x2="560"
                        y2="140"
                        stroke="#000000"
                        strokeWidth="2"
                      />
                      
                      {/* Incorrect responses - X marks */}
                      {/* Values: 0.05, 0.08, 0.12, 0.15, 0.18, 0.2 incorrect responses per minute */}
                      {[
                        { x: 60, y: 285, value: 0.05 },   // Week 1: 0.05/min
                        { x: 160, y: 280, value: 0.08 },   // Week 2: 0.08/min
                        { x: 260, y: 275, value: 0.12 },   // Week 3: 0.12/min
                        { x: 360, y: 270, value: 0.15 },   // Week 4: 0.15/min
                        { x: 460, y: 265, value: 0.18 },   // Week 5: 0.18/min
                        { x: 560, y: 260, value: 0.2 },    // Week 6: 0.2/min
                      ].map((point, i) => {
                        const size = 8;
                        const strokeWidth = 2;
                        return (
                          <g key={`incorrect-${i}`}>
                            <line
                              x1={point.x - size / 2}
                              y1={point.y - size / 2}
                              x2={point.x + size / 2}
                              y2={point.y + size / 2}
                              stroke="#000000"
                              strokeWidth={strokeWidth + 1}
                              strokeLinecap="round"
                            />
                            <line
                              x1={point.x - size / 2}
                              y1={point.y + size / 2}
                              x2={point.x + size / 2}
                              y2={point.y - size / 2}
                              stroke="#000000"
                              strokeWidth={strokeWidth + 1}
                              strokeLinecap="round"
                            />
                          </g>
                        );
                      })}
                      {/* Celeration line for incorrect responses - solid black line */}
                      <line
                        x1="60"
                        y1="285"
                        x2="560"
                        y2="258"
                        stroke="#000000"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                
                {/* X-axis labels (bottom, outside chart) */}
                <div className="flex justify-between text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-2 px-2 sm:px-4 ml-[35px] sm:ml-[50px]">
                  <span>10/01</span>
                  <span>10/08</span>
                  <span>10/15</span>
                  <span>10/22</span>
                  <span>10/29</span>
                  <span>11/05</span>
                </div>
              </div>
            </div>
          </div>
        )

      case "client-management":
        return (
          <div className="space-y-4">
            {/* Client Details Card matching jyuni ClientDetailsCard */}
            <Card className="bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600 p-4 sm:p-6">
              <div className="space-y-6">
                {/* Client Information Section */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg shadow-lg">
                      <User className="h-5 w-5 text-slate-600 dark:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Client Information
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mb-1">Full Name</span>
                      <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-medium">
                        Alex Martinez
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mb-1">Date of Birth</span>
                      <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-medium">
                        05/15/2018
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mb-1">Gender</span>
                      <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-medium">
                        Male
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mb-1">Client Number</span>
                      <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-medium">
                        CL-2024-001
                      </span>
                    </div>
                  </div>
                </section>

                {/* Guardian Information Section */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-lg shadow-lg">
                      <Users className="h-5 w-5 text-slate-600 dark:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Guardian Information
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mb-1">Guardian Name</span>
                      <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-medium">
                        Maria Martinez
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mb-1">Guardian Email</span>
                      <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-medium flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        maria.m@email.com
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mb-1">Guardian Phone</span>
                      <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-medium flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        (555) 123-4567
                      </span>
                    </div>
                  </div>
                </section>
              </div>
            </Card>
          </div>
        )

      default:
        return (
          <Card className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200 text-center">
            <div className="text-slate-600 dark:text-slate-400">Mockup for {type}</div>
          </Card>
        )
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 mb-8 sm:mb-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 sm:py-4 scrollbar-hide">
            <div className="flex space-x-3 sm:space-x-6 min-w-max">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Button
                    key={feature.id}
                    variant={activeFeature === feature.id ? "default" : "ghost"}
                    className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-xs sm:text-sm"
                    onClick={() => scrollToFeature(feature.id)}
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {feature.title}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Feature Sections */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={feature.id}
                id={feature.id}
                className={`grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
              >
                {/* Content */}
                <div className={`order-1 lg:order-none ${isEven ? "" : "lg:col-start-2"}`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 shadow-lg">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600 dark:text-white" />
                    </div>
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white">{feature.headline}</h2>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mockup */}
                <div className={`order-2 lg:order-none ${isEven ? "" : "lg:col-start-1"}`}>{renderMockup(feature.mockup)}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export function ProductPageClient({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Handle scroll from sessionStorage (set by footer links)
    const scrollToSection = sessionStorage.getItem('scrollToSection')
    if (scrollToSection) {
      sessionStorage.removeItem('scrollToSection')
      setTimeout(() => {
        const element = document.getElementById(scrollToSection)
        if (element) {
          const offset = 120 // Offset for fixed navigation bar
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 300) // Wait for page to fully render
    }

    // Handle hash from URL (direct navigation with hash)
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const offset = 120
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 300)
    }
  }, [searchParams])

  return <>{children}</>
}


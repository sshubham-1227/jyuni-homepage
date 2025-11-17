"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(true)

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMobileMenuOpen(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [lastScrollY])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        isScrolled
          ? "bg-card/80 backdrop-blur-xl border border-border/50 shadow-lg mx-auto rounded-full"
          : "bg-transparent"
      }`}
      style={{
        width: isMobile ? "90%" : "70%",
        left: "50%",
        transform: "translateX(-50%)",
        top: "24px",
      }}
    >
      <div className={`${isScrolled ? "max-w-full px-4" : "max-w-7xl px-6"} mx-auto`}>
        <div className="flex justify-between items-center h-12">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Jyuni
          </Link>

          {/* Centered navigation links */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/product"
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Product
            </Link>
            <Link
              href="/mental-health"
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Mental Health
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="h-8 w-8 rounded-full hover:bg-foreground/10 transition-colors"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-sm font-medium px-4 py-1.5 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 border-blue-200 dark:border-blue-800"
              asChild
            >
              <Link href="https://app.jyuni.com/login">Login</Link>
            </Button>
            <Button
              className="gradient-bg text-white font-medium px-4 py-1.5 text-sm rounded-full hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
              asChild
            >
              <Link href="https://app.jyuni.com/signup">Get Started</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="h-8 w-8 rounded-full hover:bg-foreground/10 transition-colors"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-2xl shadow-xl">
            <div className="px-6 py-6 space-y-1">
              <Link
                href="/product"
                className="block px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product
              </Link>
              <Link
                href="/mental-health"
                className="block px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mental Health
              </Link>
              <Link
                href="/mental-health"
                className="block px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mental Health
              </Link>
              <Link
                href="/pricing"
                className="block px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="pt-4 border-t border-border space-y-3">
                <Button
                  variant="outline"
                  className="w-full text-base py-3 rounded-xl text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 border-blue-200 dark:border-blue-800"
                  asChild
                >
                  <Link href="https://app.jyuni.com/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button
                  className="w-full gradient-bg text-white font-medium text-base py-3 rounded-xl hover:opacity-90 transition-all duration-200 shadow-md"
                  asChild
                >
                  <Link href="https://app.jyuni.com/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

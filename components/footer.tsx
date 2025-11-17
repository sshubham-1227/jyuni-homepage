"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Twitter, Linkedin, Github, Mail, Shield, Award, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function Footer() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setSubmitStatus("error")
      setSubmitMessage("Please enter your email address")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setSubmitMessage("")

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage(data.message || "Successfully subscribed!")
        setEmail("")
      } else {
        setSubmitStatus("error")
        setSubmitMessage(data.error || "Failed to subscribe. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleProductLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if it's an anchor link to the product page
    if (href.startsWith("/product#")) {
      e.preventDefault()
      const hash = href.split("#")[1]
      
      // Navigate to product page first if not already there
      if (window.location.pathname !== "/product") {
        router.push(href)
        // Use a more reliable method to scroll after navigation
        // Store the hash in sessionStorage for the product page to pick up
        sessionStorage.setItem('scrollToSection', hash)
      } else {
        // Already on product page, scroll immediately
        scrollToSection(hash)
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 120 // Offset for fixed navigation bar (navbar height + padding)
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 50)
  }

  const productLinks = [
    { name: "Data Collection", href: "/product#data-collection" },
    { name: "Scheduling", href: "/product#scheduling" },
    { name: "Treatment Plans", href: "/product#treatment-plans" },
    { name: "Billing", href: "/product#billing" },
    { name: "Analytics & Reporting", href: "/product#analytics" },
    { name: "Client Management", href: "/product#client-management" },
  ]

  const companyLinks: { name: string; href: string }[] = []


  const legalLinks = [
    { name: "Privacy Policy", href: "https://app.jyuni.com/privacy" },
    { name: "Terms of Service", href: "https://app.jyuni.com/terms" },
    { name: "Cookie Policy", href: "https://app.jyuni.com/privacy" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 inline-block">
                Jyuni
              </Link>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed max-w-md">
                Practice management for ABA—fast, clear, and built for outcomes. Empowering therapists to focus on what
                matters most.
              </p>

              {/* Email Capture */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">Stay updated</h4>
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <div className="flex gap-2 w-full sm:max-w-sm">
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="flex-1 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-200 disabled:opacity-50" 
                    />
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="gradient-bg hover:opacity-90 transition-opacity disabled:opacity-50 flex-shrink-0"
                    >
                      {isSubmitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Mail className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {submitStatus !== "idle" && (
                    <div className={`flex items-center gap-2 text-xs sm:text-sm ${
                      submitStatus === "success" 
                        ? "text-green-600 dark:text-green-400" 
                        : "text-red-600 dark:text-red-400"
                    }`}>
                      {submitStatus === "success" ? (
                        <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                      )}
                      <span>{submitMessage}</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="p-2" asChild>
                  <Link href="https://www.linkedin.com/company/jyuni/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="p-2" asChild>
                  <Link href="https://www.instagram.com/jyuniplatform" target="_blank" rel="noopener noreferrer">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="p-2" asChild>
                  <Link href="https://tiktok.com/@jyuni.com" target="_blank" rel="noopener noreferrer">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Product</h4>
              <ul className="space-y-2 sm:space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleProductLinkClick(e, link.href)}
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column - Hidden if empty */}
            {companyLinks.length > 0 && (
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Compliance Column */}
            <div>
              <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Compliance</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Shield className="h-4 w-4 flex-shrink-0" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Award className="h-4 w-4 flex-shrink-0" />
                  <span>SOC 2 Type II</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">
              © {new Date().getFullYear()} Jyuni. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

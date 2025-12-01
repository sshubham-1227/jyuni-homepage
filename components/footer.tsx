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
                  <Link href="https://www.instagram.com/jyuniofficial" target="_blank" rel="noopener noreferrer">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="p-2" asChild>
                  <Link href="https://www.threads.com/@jyuniofficial" target="_blank" rel="noopener noreferrer">
                    <svg className="h-4 w-4" viewBox="0 0 192 192" fill="currentColor">
                      <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/>
                    </svg>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="p-2" asChild>
                  <Link href="https://tiktok.com/@jyuniofficial" target="_blank" rel="noopener noreferrer">
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

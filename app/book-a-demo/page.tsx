import { redirect } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Demo - Jyuni",
  description: "Schedule a personalized demo of Jyuni's ABA practice management platform.",
  robots: "noindex, nofollow", // Prevent indexing of redirect pages
}

export default function BookADemoPage() {
  // Server-side redirect to Calendly booking page
  redirect("https://calendly.com/shubham-jyuni/jyuni-demo")
}

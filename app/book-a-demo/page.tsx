import { redirect } from "next/navigation"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Book a Demo",
  description: "Schedule a personalized demo of Jyuni's ABA practice management platform.",
  robots: "noindex, nofollow", // Prevent indexing of redirect pages
  path: "/book-a-demo",
})

export default function BookADemoPage() {
  // Server-side redirect to Calendly booking page
  redirect("https://calendly.com/shubham-jyuni/jyuni-demo")
}

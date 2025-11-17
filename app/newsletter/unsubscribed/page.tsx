import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertCircle, Mail } from "lucide-react"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Newsletter Unsubscribed",
  description: "You have been unsubscribed from the Jyuni newsletter.",
  robots: "noindex, nofollow", // Prevent indexing of utility pages
  path: "/newsletter/unsubscribed",
})

export default function UnsubscribedPage({
  searchParams,
}: {
  searchParams: { email?: string; status?: string }
}) {
  const { email, status } = searchParams

  const getStatusContent = () => {
    switch (status) {
      case "success":
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />,
          title: "Successfully Unsubscribed",
          message: email
            ? `You have been successfully unsubscribed from our newsletter. We're sorry to see you go!`
            : "You have been successfully unsubscribed from our newsletter.",
          email: email,
        }
      case "notfound":
        return {
          icon: <AlertCircle className="h-12 w-12 text-yellow-600 dark:text-yellow-400" />,
          title: "Email Not Found",
          message: email
            ? `The email ${email} is not in our subscription list, or you may have already unsubscribed.`
            : "This email is not in our subscription list.",
          email: email,
        }
      case "error":
        return {
          icon: <XCircle className="h-12 w-12 text-red-600 dark:text-red-400" />,
          title: "Error",
          message: "There was an error processing your unsubscribe request. Please try again or contact support.",
          email: null,
        }
      default:
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />,
          title: "Unsubscribed",
          message: "You have been unsubscribed from our newsletter.",
          email: email || null,
        }
    }
  }

  const content = getStatusContent()

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 text-center">
          <div className="flex justify-center mb-6">{content.icon}</div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {content.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            {content.message}
          </p>
          {content.email && (
            <div className="mb-6 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="h-4 w-4" />
                <span>{content.email}</span>
              </div>
            </div>
          )}
          <div className="space-y-3">
            <Button
              className="w-full gradient-bg hover:opacity-90 transition-opacity text-white"
              asChild
            >
              <Link href="/">Return to Home</Link>
            </Button>
            {status === "success" && (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                You can resubscribe anytime by entering your email in our newsletter form.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}


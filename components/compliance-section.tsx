import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, ExternalLink, CheckCircle } from "lucide-react"

export function ComplianceSection() {
  const certifications = ["HIPAA Compliant", "SOC 2 Type II", "HITECH Act", "State Privacy Laws"]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-balance mb-6 text-slate-900 dark:text-white">
              Compliance documentation & certifications
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Access our comprehensive compliance documentation, security policies, and certification reports to support
              your practice's regulatory requirements.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-900 dark:text-white">{cert}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white transition-opacity">
                <Download className="h-4 w-4 mr-2" />
                Download Security Overview
              </Button>
              <Button variant="outline" className="border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                View System Status
              </Button>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Business Associate Agreement</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Ready-to-sign BAA available for all customers to ensure HIPAA compliance for your practice.
              </p>
              <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
                Request BAA
              </Button>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Security Questionnaire</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Comprehensive security questionnaire responses for your IT and compliance teams.
              </p>
              <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
                Download PDF
              </Button>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Penetration Testing</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Annual third-party penetration testing reports and vulnerability assessments.
              </p>
              <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
                View Reports
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

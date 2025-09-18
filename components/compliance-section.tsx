import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, ExternalLink, CheckCircle } from "lucide-react"

export function ComplianceSection() {
  const certifications = ["HIPAA Compliant", "SOC 2 Type II", "HITECH Act", "State Privacy Laws"]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-balance mb-6">
              Compliance documentation & certifications
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Access our comprehensive compliance documentation, security policies, and certification reports to support
              your practice's regulatory requirements.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gradient-bg hover:opacity-90 transition-opacity">
                <Download className="h-4 w-4 mr-2" />
                Download Security Overview
              </Button>
              <Button variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                View System Status
              </Button>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="font-semibold text-lg mb-3">Business Associate Agreement</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Ready-to-sign BAA available for all customers to ensure HIPAA compliance for your practice.
              </p>
              <Button variant="outline" size="sm">
                Request BAA
              </Button>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="font-semibold text-lg mb-3">Security Questionnaire</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Comprehensive security questionnaire responses for your IT and compliance teams.
              </p>
              <Button variant="outline" size="sm">
                Download PDF
              </Button>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="font-semibold text-lg mb-3">Penetration Testing</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Annual third-party penetration testing reports and vulnerability assessments.
              </p>
              <Button variant="outline" size="sm">
                View Reports
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

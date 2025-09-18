import { Card } from "@/components/ui/card"
import { Calendar, Mail, Phone, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Calendly Embed Placeholder */}
      <Card className="glass-card p-8">
        <h3 className="font-serif font-semibold text-xl mb-4">Schedule directly</h3>
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">Calendly scheduling widget would be embedded here</p>
          <div className="text-sm text-muted-foreground">
            Choose a time that works for you and we'll send you a calendar invite with demo details.
          </div>
        </div>
      </Card>

      {/* Contact Methods */}
      <div className="space-y-4">
        <Card className="glass-card p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Email Us</h4>
              <p className="text-muted-foreground text-sm">hello@jyuni.com</p>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <p className="text-muted-foreground text-sm">(555) 123-4567</p>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Support Hours</h4>
              <p className="text-muted-foreground text-sm">Mon-Fri, 8AM-6PM EST</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Remote Notice */}
      <Card className="glass-card p-6 text-center">
        <h4 className="font-semibold mb-2">Fully Remote Team</h4>
        <p className="text-muted-foreground text-sm">
          We're a distributed team serving ABA practices nationwide. All meetings and support are conducted virtually.
        </p>
      </Card>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"

export function CareersSection() {
  const openings = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Clinical Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      department: "Product",
      location: "Remote",
      type: "Full-time",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-balance mb-6">Join our mission</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're looking for passionate individuals who want to make a meaningful impact in the lives of individuals
              with autism and their families. Join a team that values innovation, collaboration, and purpose-driven
              work.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <span>Competitive salary and equity packages</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span>Fully remote with flexible working hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <span>Comprehensive health benefits and PTO</span>
              </div>
            </div>

            <Button className="gradient-bg hover:opacity-90 transition-opacity">
              View All Openings
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Right Content - Job Listings */}
          <div className="space-y-4">
            {openings.map((job, index) => (
              <Card key={index} className="glass-card p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                </div>
              </Card>
            ))}

            <Card className="glass-card p-6 text-center">
              <p className="text-muted-foreground mb-4">Don't see a role that fits?</p>
              <Button variant="outline">Send Us Your Resume</Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

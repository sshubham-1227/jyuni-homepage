import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PricingFAQ() {
  const faqs = [
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.",
    },
    {
      question: "What's included in HIPAA compliance?",
      answer:
        "All plans include encrypted data storage, secure transmission, audit logs, role-based access controls, and signed Business Associate Agreements (BAAs).",
    },
    {
      question: "Can I change plans anytime?",
      answer:
        "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
    },
    {
      question: "Do you offer training and onboarding?",
      answer:
        "Yes! All plans include comprehensive onboarding. Growth and Scale plans include personalized training sessions with our team.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards and ACH bank transfers for annual plans. Enterprise customers can also pay by invoice.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. We believe in transparent pricing with no hidden costs.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl mb-4">Frequently asked questions</h2>
          <p className="text-muted-foreground">Have a question not covered here? Contact our support team.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6 border-0 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

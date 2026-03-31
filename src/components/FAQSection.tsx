import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do you offer emergency plumbing services?", a: "Yes! We're available 24 hours a day, 7 days a week, including holidays. Call us at (407) 863-0689 for immediate assistance." },
  { q: "How much does a service call cost?", a: "We offer free estimates for most jobs. Our technicians will diagnose the problem and provide upfront pricing before any work begins — no hidden fees." },
  { q: "Are you licensed and insured?", a: "Absolutely. We are fully licensed and insured in the state of Florida. Your home and property are protected." },
  { q: "How quickly can you get to my location?", a: "For emergencies, we typically arrive within 30–60 minutes in the Winter Garden area. For scheduled work, we offer same-day and next-day appointments." },
  { q: "Do you offer warranties on your work?", a: "Yes. All of our work comes with a satisfaction guarantee. We also provide manufacturer warranties on parts and equipment we install." },
  { q: "What areas do you serve?", a: "We proudly serve Winter Garden, Windermere, Ocoee, Oakland, Clermont, and surrounding Central Florida communities." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <div className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">FAQ</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card shadow-sm">
            <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-secondary py-5 text-base">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircleQuestion } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What types of products does Thrayana export?",
      answer: "We specialize in premium authentic Indian products, primarily focusing on high-quality spices (like Turmeric, Banana, Jaggery, and Chilli powders), exquisite textiles, and authentic traditional handicrafts sourced directly from skilled local artisans."
    },
    {
      question: "How do you guarantee the quality of your exports?",
      answer: "Every single product undergoes our rigorous 100% quality testing process before export. We are committed to an uncompromising standard of excellence and full traceability from farm or artisan right to your doorstep."
    },
    {
      question: "Which countries do you currently export to?",
      answer: "Thrayana proudly exports to over 25 countries worldwide, covering major markets such as the USA, UK, UAE, Germany, France, and Australia. Our robust global logistics network ensures safe and timely deliveries anywhere."
    },
    {
      question: "What is the minimum order quantity (MOQ) for international shipments?",
      answer: "Our minimum order quantity is 1000 KG, though it can vary depending on the product category and the chosen shipment type (FCL or LCL). Please reach out to our sales team with your specific requirements, and we will formulate a tailored, competitive quote."
    },
    {
      question: "Do you actively support sustainable and ethical sourcing practices?",
      answer: "Absolutely. Sustainability is one of our three core pillars. We partner directly with over 500 local artisans and farmers, ensuring fair trade practices, responsible eco-friendly packaging, and support for community development."
    },
    {
      question: "What are your standard payment terms for global buyers?",
      answer: "We offer highly flexible and secure payment terms including Letter of Credit (LC), Advance Payment, and Direct Bank Transfers. Specific credit terms can be arranged based on volume and long-term partnership agreements."
    },
    {
      question: "How long does it typically take to process and deliver an order?",
      answer: "Order processing times depend on product availability and any custom packaging needs. Shipping duration varies by destination and your selected freight method, but we always aim to book the most efficient and cost-effective routes for you."
    },
    {
      question: "Can I request customized packaging and white-labeling for my brand?",
      answer: "Yes, we provide comprehensive customized packaging and white-labeling solutions specifically designed to meet the unique retail and wholesale requirements of your target market."
    }
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-background via-slate-50/50 to-primary/5">
      {/* Decorative background blooms */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-purple-500/15 blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <MessageCircleQuestion className="h-4 w-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Everything You Need To Know
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Clear, concise answers to common questions about our products, shipping, and partnership opportunities. 
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card hover:bg-accent/50 border border-border/50 rounded-2xl px-6 py-2 transition-all duration-300 data-[state=open]:bg-accent/30 data-[state=open]:shadow-md animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-4 [&[data-state=open]>div>svg]:text-primary [&[data-state=open]>div>svg]:rotate-180 group">
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2 pb-4 sm:pl-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

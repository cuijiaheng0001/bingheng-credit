import React, { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";

// FAQ data constant - moved outside component to avoid recreation on each render
const FAQ_DATA = [
  {
    value: "faq-1",
    question: "Will my company be directly involved in Chinese legal proceedings?",
    content: (
      <div className="px-6 pt-6 pb-6 text-gray-700 leading-relaxed space-y-4">
        <p><strong>No.</strong></p>
        <p>
          Your claim is assigned to our Hong Kong affiliate for processing, and all in-China activities are conducted by our local subsidiary and licensed professionals under Chinese law. Your company name is not used in any direct enforcement action.
        </p>
      </div>
    )
  },
  {
    value: "faq-2", 
    question: "Is it legal to hire your team to collect from Chinese debtors?",
    content: (
      <div className="px-6 pt-6 pb-6 text-gray-700 leading-relaxed space-y-4">
        <p><strong>Yes.</strong></p>
        <p>
          We operate entirely within China's legal framework through our licensed PRC law firm partners. Since collection activities occur in China with Chinese residents, U.S. collection laws (like FDCPA) don't apply.
        </p>
        <p><strong>Our legal structure:</strong></p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Your company assigns the debt to our Hong Kong affiliate</li>
          <li>We activate claims through licensed Chinese attorneys</li>
          <li>All actions follow PRC legal procedures</li>
        </ul>
        <p>
          This model is already used by international education institutions and financial companies worldwide. It's the established, compliant way to recover debts from Chinese nationals.
        </p>
      </div>
    )
  },
  {
    value: "faq-3",
    question: "How long does the collection process typically take?", 
    content: (
      <p className="px-6 pt-6 pb-6 text-gray-700 leading-relaxed">
        Most cases see first contact within <strong>5 days</strong> and resolution within <strong>30–60 days</strong>, depending on the debt amount and the debtor's responsiveness. We keep you updated throughout the process.
      </p>
    )
  }
];

export const FAQSection: React.FC = () => {
  const [faqSearch, setFaqSearch] = useState("");
  
  // Debounced search with 300ms delay
  const debouncedFaqSearch = useDebounce(faqSearch, 300);
  
  const filteredFAQs = useMemo(() => {
    if (!debouncedFaqSearch.trim()) return FAQ_DATA;
    return FAQ_DATA.filter(faq => 
      faq.question.toLowerCase().includes(debouncedFaqSearch.toLowerCase())
    );
  }, [debouncedFaqSearch]);

  return (
    <section id="faq-section" className="py-12 md:py-20 bg-white">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Frequently Asked Questions
        </h2>
        
        {/* FAQ Search */}
        <div className="mb-8">
          <Input
            placeholder="Search FAQ…"
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            className="max-w-md mx-auto rounded-lg border-primary/20 focus:border-primary focus:ring-primary"
          />
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {filteredFAQs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value} className="border border-gray-200 rounded-lg">
              <AccordionTrigger 
                className="text-left text-primary font-semibold py-4 px-6 cursor-pointer hover:bg-primary/5 transition-colors rounded-lg [&[data-state=open]]:rounded-b-none"
                aria-expanded={false}
              >
                <span className="flex items-center gap-3">
                  <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 [&[data-state=open]]:rotate-45" />
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                {faq.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {filteredFAQs.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No FAQs found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};
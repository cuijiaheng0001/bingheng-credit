import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, DollarSign, Clock, CheckCircle2 } from "lucide-react";

interface ClientStory {
  id: number;
  title: string;
  industry: string;
  amount: string;
  timeframe: string;
  background: string;
  whatWeDid: string[];
  outcome: string[];
}

const clientStories: ClientStory[] = [
  {
    id: 1,
    title: "International Student Apartment Lease Recovery",
    industry: "Real Estate",
    amount: "$5,000",
    timeframe: "14 days",
    background: "A U.S. university apartment leased to a Chinese international student required a $2,800 deposit. Midway through the lease, the student left the country without notice and failed to remove belongings or pay the remaining rent. The outstanding amount reached $5,000, far exceeding the deposit.",
    whatWeDid: [
      "Located the tenant using verified Chinese ID",
      "Coordinated with local partners to reach the student and family in China by phone and email",
      "Explained contractual obligations and the risks of unresolved debt, providing bilingual support"
    ],
    outcome: [
      "Recovered the full $5,000 outstanding debt within 14 days",
      "Landlord was able to quickly re-lease the apartment with no further loss"
    ]
  },
  {
    id: 2,
    title: "eBay Seller Non-fulfillment Case",
    industry: "E-commerce",
    amount: "$400+",
    timeframe: "10 days",
    background: "A U.S.-based buyer purchased products worth over $400 from a Chinese seller on eBay. After payment, the seller failed to ship the items and ignored all attempts at communication.",
    whatWeDid: [
      "Matched the seller's eBay account to their verified Chinese identity",
      "Initiated direct negotiation through local channels",
      "Presented both legal and reputational consequences clearly"
    ],
    outcome: [
      "Secured a full refund of $400+ for the buyer within 10 days",
      "Prevented escalation to legal dispute, safeguarding both parties' records"
    ]
  },
  {
    id: 3,
    title: "China-based Phone Bill Recovery",
    industry: "Telecommunications",
    amount: "$297",
    timeframe: "5 days",
    background: "A Chinese national had an overdue mobile phone bill totaling $297 with a U.S. telecom provider, repeatedly ignoring reminders.",
    whatWeDid: [
      "Used verified ID to establish contact with the debtor in China",
      "Explained potential consequences under both U.S. and Chinese regulations",
      "Provided convenient, secure payment channels"
    ],
    outcome: [
      "Recovered the entire $297 debt within 5 business days",
      "Telecom partner improved their recovery rate without legal action"
    ]
  }
];

export const ClientStoriesSection: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="client-stories" className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real cases. Real results. See how we've helped U.S. creditors recover debts from Chinese nationals.
          </p>
        </div>

        {/* Desktop scroll controls */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {clientStories.map((story) => (
              <Card 
                key={story.id} 
                className="flex-none w-full md:w-[500px] snap-center bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl font-bold text-primary leading-tight">
                      {story.title}
                    </CardTitle>
                    <Badge variant="secondary" className="shrink-0">
                      {story.industry}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-green-600">{story.amount}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span className="font-semibold text-orange-600">{story.timeframe}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Background</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{story.background}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">What We Did</h4>
                    <ul className="space-y-1">
                      {story.whatWeDid.map((action, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Outcome
                    </h4>
                    <ul className="space-y-1">
                      {story.outcome.map((result, index) => (
                        <li key={index} className="text-sm text-gray-700 font-medium flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex gap-2">
            {clientStories.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gavel, FileText, Phone, DollarSign } from "lucide-react";

export const WhyUsSection: React.FC = () => {
  return (
    <section id="whyus-section" className="py-12 md:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Why Choose Bingheng Credit?
        </h2>
        
        {/* Professional legal-style introduction */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            {/* Blue accent line - absolutely positioned with limited height */}
            <div className="absolute left-0 top-2 w-px bg-primary h-32"></div>
            
            {/* Text content with left margin */}
            <div className="ml-6 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed text-left">
                We've spent 10 years navigating China's collection landscape, mastering not just the legal system but the cultural nuances of Chinese business communication.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed text-left italic">
                Your Chinese debtors aren't malicious—they simply believe: "U.S. companies can't reach me here."
              </p>
              
              <p className="text-lg text-[#2A3470] leading-loose tracking-wide text-left">
                We make them understand: This debt has landed in China.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-y-4 md:gap-8">
          <Card className="feature-card">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Gavel className="text-primary" size={24} />
                China Collection Network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Bridging your U.S. claims to China's enforcement system
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <FileText className="text-primary" size={24} />
                Legal Action in 5 Days
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Claims activated within five days through in-China legal workflow
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Phone className="text-primary" size={24} />
                Verified Skip Tracing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Reaching the 70% that U.S. companies can't find
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <DollarSign className="text-orange-600" size={24} />
                Success-Fee Pricing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                No cure, no pay — zero upfront cost
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
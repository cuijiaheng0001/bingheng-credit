import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Scale, Cpu, FileCheck } from "lucide-react";

export const ComplianceSection: React.FC = () => {
  return (
    <section id="compliance-section" className="py-12 md:py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Legal & Compliance Infrastructure
        </h2>
        
        <div className="grid md:grid-cols-3 gap-y-4 md:gap-8 mb-12">
          <Card className="feature-card border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Scale className="text-primary" size={24} />
                Legal Authority
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700">
                Licensed PRC law firms & enforceable notices
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="feature-card border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Cpu className="text-primary" size={24} />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700">
                TLS 1.3 + AES-256 • Hong Kong hosting
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="feature-card border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <FileCheck className="text-primary" size={24} />
                Professional Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700">
                PRC Bar • ISO 27001 (in progress)
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          <AccordionItem value="legal-authority">
            <AccordionTrigger 
              className="text-lg font-semibold"
              aria-expanded={false}
            >
              Legal Authority & Process
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-6 pb-6">
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>• Licensed PRC law firms with full jurisdictional power</li>
                <li>• Attorneys can query official registries & issue enforceable notices</li>
                <li>• All actions routed through our Hong Kong affiliate—no U.S. court filing needed</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="data-security">
            <AccordionTrigger 
              className="text-lg font-semibold"
              aria-expanded={false}
            >
              Data Security & Hosting
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-6 pb-6">
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>• TLS 1.3 + AES-256 encryption with SHA-256 hashing</li>
                <li>• Attorney-client privilege preserved end-to-end</li>
                <li>• Hong Kong data center meets PIPL & GDPR cross-border rules</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="certifications">
            <AccordionTrigger 
              className="text-lg font-semibold"
              aria-expanded={false}
            >
              Professional Standards & Certifications
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-6 pb-6">
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>• All counsel hold active PRC bar licenses</li>
                <li>• ISO 27001 audit underway; third-party security reviews every 12 months</li>
                <li>• ACA International member (expected Q4 2025)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
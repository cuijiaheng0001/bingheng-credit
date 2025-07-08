
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Shield, Clock, DollarSign, Scale, Cpu, FileCheck, Gavel, FileText, IdCard, CreditCard, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const resp = await fetch("https://formspree.io/f/xzzgoype", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (resp.ok) {
        setFormSubmitted(true);
        toast({
          title: "Thank you!",
          description: "Your message has been sent. We'll reply shortly.",
          duration: 5000,
          className: "bg-green-50 border-green-200 text-green-800"
        });
        form.reset();
        
        // Scroll to success message
        setTimeout(() => {
          const successMessage = document.getElementById('success-message');
          if (successMessage) {
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      } else {
        const data = await resp.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message || `Status ${resp.status}`);
      }
    } catch (err) {
      setFormSubmitted(false);
      toast({
        title: "Submission failed",
        description: "Sorry, something went wrong. Please try again later.",
        variant: "destructive",
        duration: 5000
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner with brand gradient */}
      <section className="relative h-[85vh] sm:min-h-screen flex items-center justify-center bg-brand-gradient text-white">
        <div className="container max-w-4xl mx-auto px-6 text-center pt-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We Connect U.S. Claims to China's Legal Collection System
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            5-day legal action • 70% contact rate • 25% recovery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-[#2A3470] hover:bg-blue-50"
            >
              Start Recovery
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
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
            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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

            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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

            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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

            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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

      {/* Decorative Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 bg-white text-gray-500 animate-fade-in">•••</span>
        </div>
      </div>

      {/* What We Can Collect Section */}
      <section id="eligibility-section" className="py-12 md:py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            What We Handle
          </h2>
          
          <div className="grid md:grid-cols-2 gap-y-4 md:gap-8">
            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileCheck className="text-primary" />
                  What You'll Need
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex items-center">
                <ul className="space-y-2 text-gray-700">
                  <li>• Debtor's full name + Chinese National ID</li>
                  <li>• Proof of debt: invoice, contract, statement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <DollarSign className="text-primary" />
                  China-Linked Debt Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• B2B: Invoices, service fees, contract disputes</li>
                  <li>• B2C: Rent, medical bills, consumer payments</li>
                  <li>• E-commerce: Seller balances, chargebacks</li>
                  <li>• Services: Legal, consulting, accounting fees owed by Chinese nationals</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-primary/10 hover:shadow-lg transition-shadow mt-8 bg-white">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IdCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary text-left">Why Chinese ID Matters</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Chinese national ID allows licensed law firms to issue enforceable legal notices and conduct official debtor tracing in China — channels unavailable to foreign entities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative py-8 bg-gray-50">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 bg-gray-50 text-gray-500 animate-fade-in">•••</span>
        </div>
      </div>

      {/* Performance at a Glance Section */}
      <section id="performance-section" className="container max-w-6xl mx-auto px-6 py-12 md:py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          How We Perform
        </h2>
        
        <div className="grid md:grid-cols-3 gap-y-4 md:gap-8 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary mb-2">
                70%
              </CardTitle>
              <CardDescription className="text-lg font-medium text-gray-700">
                Contact Rate
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary mb-2">
                25%
              </CardTitle>
              <CardDescription className="text-lg font-medium text-gray-700">
                Average Recovery
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-orange-600 mb-2">
                5 Days
              </CardTitle>
              <CardDescription className="text-lg font-medium text-gray-700">
                Legal Action Initiated
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-md text-center text-gray-600 text-sm mt-6">
          <p className="font-semibold text-gray-700">Industry-Leading Results</p>
          <p>12.6% average recovery • Premium portfolios exceed 20%</p>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 bg-white text-gray-500 animate-fade-in">•••</span>
        </div>
      </div>

      {/* Easy to Start Section */}
      <section className="py-12 md:py-20 bg-green-50 border-y-2 border-green-100">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Low Barrier Entry
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Getting Started Is Easy
          </h2>
          
          <p className="text-lg text-gray-600 mb-12">
            Not sure where to begin? Start small — we're built for flexibility.
          </p>

          <div className="grid md:grid-cols-2 gap-y-4 md:gap-8 max-w-3xl mx-auto">
            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <ul className="space-y-3 text-left text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Start with just 5 test cases
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Single claims from $200 accepted
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <ul className="space-y-3 text-left text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Volume discounts at 50+ accounts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Custom solutions for any portfolio size
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Compliance & Security Section */}
      <section id="compliance-section" className="py-12 md:py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Legal & Compliance Infrastructure
          </h2>
          
          <div className="grid md:grid-cols-3 gap-y-4 md:gap-8 mb-12">
            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 border-primary/20">
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

            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 border-primary/20">
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

            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 border-primary/20">
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
              <AccordionTrigger className="text-lg font-semibold">
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
              <AccordionTrigger className="text-lg font-semibold">
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
              <AccordionTrigger className="text-lg font-semibold">
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

      {/* Decorative Divider */}
      <div className="relative py-8 bg-gray-50">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 bg-gray-50 text-gray-500 animate-fade-in">•••</span>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq-section" className="py-12 md:py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="text-left text-primary font-semibold py-4 px-6 cursor-pointer hover:bg-primary/5 transition-colors rounded-lg [&[data-state=open]]:rounded-b-none">
                <span className="flex items-center gap-3">
                  <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 [&[data-state=open]]:rotate-45" />
                  Will my company be directly involved in Chinese legal proceedings?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="px-6 pt-6 pb-6 text-gray-700 leading-relaxed">
                  No. Your claim is assigned to our Hong Kong affiliate for processing, and all in-China activities are conducted by our local subsidiary and licensed professionals under Chinese law. Your company name is not used in any direct enforcement action.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="text-left text-primary font-semibold py-4 px-6 cursor-pointer hover:bg-primary/5 transition-colors rounded-lg [&[data-state=open]]:rounded-b-none">
                <span className="flex items-center gap-3">
                  <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 [&[data-state=open]]:rotate-45" />
                  Is it legal to hire your team to collect from Chinese debtors?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="px-6 pt-6 pb-6 text-gray-700 leading-relaxed">
                  Yes. We operate entirely within China following Chinese legal procedures through licensed professionals. Since the collection activities occur in China with Chinese residents, U.S. collection laws don't apply. Your company simply assigns the debt to our Hong Kong entity—we handle everything else under local law.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-3" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="text-left text-primary font-semibold py-4 px-6 cursor-pointer hover:bg-primary/5 transition-colors rounded-lg [&[data-state=open]]:rounded-b-none">
                <span className="flex items-center gap-3">
                  <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 [&[data-state=open]]:rotate-45" />
                  How long does the collection process typically take?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="px-6 pt-6 pb-6 text-gray-700 leading-relaxed">
                  Most cases see first contact within 5 days and resolution within 30–60 days, depending on the debt amount and the debtor's responsiveness. We keep you updated throughout the process.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Us Section with brand gradient */}
      <section id="contact-section" className="py-12 md:py-20 bg-brand-gradient">
        <div className="container max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Contact Us
          </h2>
          
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">
                Get in Touch
              </CardTitle>
              <CardDescription className="text-center text-primary/70">
                Ready to recover your claims? Let's discuss your case.
              </CardDescription>
            </CardHeader>
            
            {/* Success Message */}
            {formSubmitted && (
              <div 
                id="success-message"
                className="mx-6 mb-6 p-4 bg-green-100 border border-green-200 rounded-lg text-center animate-fade-in"
              >
                <div className="flex items-center justify-center gap-2 text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Message sent successfully!</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Thank you for reaching out. We'll reply to you shortly.
                </p>
              </div>
            )}
            
            <CardContent>
              <form 
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="rounded-lg border-primary/20 focus:border-primary focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-lg border-primary/20 focus:border-primary focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="rounded-lg border-primary/20 focus:border-primary focus:ring-primary"
                    defaultValue="Hi Bingheng team, I have a claim against a Chinese debtor. Please reach out to me."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#2A3470] hover:bg-[#1A2450] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;

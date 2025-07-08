
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Shield, Clock, DollarSign, Scale, Cpu, FileCheck, Gavel, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

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
        toast({
          title: "Thank you!",
          description: "Your message has been sent. We'll reply shortly.",
          duration: 5000,
          className: "bg-green-50 border-green-200 text-green-800"
        });
        form.reset();
      } else {
        const data = await resp.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message || `Status ${resp.status}`);
      }
    } catch (err) {
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
      <Navigation />
      
      {/* Hero Banner with brand gradient */}
      <section className="relative min-h-screen flex items-center justify-center bg-brand-gradient text-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
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
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility-section" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Eligibility — What We Can Collect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  Claim File Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Must contain:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Debtor's full name + Chinese National ID number</li>
                      <li>• Outstanding amount and proof (invoice, contract, bill)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <DollarSign className="text-green-600" />
                  We Handle All Types of China-Linked Debts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• B2B: Unpaid invoices, service fees, commercial disputes</li>
                  <li>• B2C: Rent defaults, medical bills, consumer debts</li>
                  <li>• E-commerce: Seller balances, platform fees, chargebacks</li>
                  <li>• Professional Services: Any unpaid fees from Chinese nationals</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-purple-200 mb-12">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Shield className="text-purple-600" />
                No High Barriers to Entry
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Test with as few as 5 cases</li>
                <li>• Single claims welcome (starting at $200)</li>
                <li>• Volume discounts for 50+ accounts</li>
                <li>• Let's discuss what works for your portfolio</li>
              </ul>
            </CardContent>
          </Card>

          <div className="bg-primary/10 p-8 rounded-lg border-l-4 border-primary">
            <h3 className="text-2xl font-bold mb-4 text-primary">Why ID Matters</h3>
            <p className="text-lg text-primary/80">
              Chinese ID enables law firms to issue formal legal notices and conduct attorney-verified searches through official channels.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="whyus-section" className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose Bingheng Credit?
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              We've spent 10 years navigating China's collection landscape, 
              mastering not just the legal system but the cultural nuances of Chinese business communication.
            </p>
            <p className="text-lg text-gray-700">
              Your Chinese debtors aren't malicious—they simply believe: "U.S. companies can't reach me here."<br/>
              We make them understand: This debt has "landed in China."
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Gavel className="text-primary" size={24} />
                  Licensed Law Firm Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional legal notices in Mandarin that debtors take seriously—not ignored emails from 7,000 miles away
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <FileText className="text-green-600" size={24} />
                  5-Day Legal Action
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Swift but thorough—proper case review ensures higher success rates than rushed attempts
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Phone className="text-purple-600" size={24} />
                  Attorney-Verified Skip Tracing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Localized search through legitimate channels—reaching the 70% that U.S. companies can't find
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <DollarSign className="text-orange-600" size={24} />
                  Success-Fee Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No cure, no pay—we succeed only when you recover
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance at a Glance Section */}
      <section id="performance-section" className="container max-w-6xl mx-auto px-6 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Performance at a Glance
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary mb-2">
                70%
              </CardTitle>
              <CardDescription className="text-lg font-medium text-gray-700">
                Contact Rate
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-green-600 mb-2">
                25%
              </CardTitle>
              <CardDescription className="text-lg font-medium text-gray-700">
                Average Recovery
              </CardDescription>
              <p className="text-sm text-gray-500 mt-2">
                *Actual average recovery rate: 12.6%<br/>
                Premium portfolios can achieve 20%+
              </p>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
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
      </section>

      {/* Compliance & Security Section */}
      <section id="compliance-section" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Compliance & Security
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Scale className="text-primary" size={24} />
                  Legal Authority
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Licensed PRC law firms + Full jurisdictional compliance
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Cpu className="text-green-600" size={24} />
                  Secure Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Attorney-client privilege protected<br/>
                  SHA-256 hashed + TLS 1.3 / AES-256
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <FileCheck className="text-purple-600" size={24} />
                  Professional Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Bar-certified attorneys + ISO 27001 (underway)
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto mb-16">
            <AccordionItem value="legal-authority">
              <AccordionTrigger className="text-lg font-semibold">
                Legal Authority & Process
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Licensed Law Firms:</strong> All partner firms maintain active PRC licenses with full legal authority</p>
                  <p><strong>Attorney Query Rights:</strong> Licensed attorneys can conduct official searches through legal channels</p>
                  <p><strong>Formal Legal Documents:</strong> All notices issued as official legal correspondence with jurisdictional backing</p>
                  <p>Our network ensures all collection activities are conducted through proper legal channels with full professional authority.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tech-architecture">
              <AccordionTrigger className="text-lg font-semibold">
                Technical Architecture
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Data Flow:</strong> Law firm secure lookup → Hong Kong data center storage → encrypted transmission</p>
                  <p><strong>Attorney-Client Privilege:</strong> All communications protected under legal professional privilege</p>
                  <p><strong>Encryption Standards:</strong> SHA-256 hashing algorithm protects sensitive information</p>
                  <p><strong>Transit Security:</strong> TLS 1.3 protocol + AES-256 end-to-end encryption</p>
                  <p><strong>Geographic Isolation:</strong> Hong Kong hosting ensures cross-border data compliance</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="certifications">
              <AccordionTrigger className="text-lg font-semibold">
                Professional Standards
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Bar Certification:</strong> All partner attorneys maintain active PRC bar licenses</p>
                  <p><strong>ISO 27001:</strong> Information Security Management System certification (underway)</p>
                  <p><strong>ACA International:</strong> American Collectors Association membership (Q4 2025 expected)</p>
                  <p><strong>Regular Audits:</strong> Third-party security audits and compliance assessments</p>
                  <p><strong>Data Protection:</strong> Dual compliance with PIPL and GDPR standards</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center gap-6 opacity-70">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Gavel className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Licensed Attorneys</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-gray-600 font-medium">PIPL Compliant</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">TLS 1.3</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">AES-256</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                <FileCheck className="w-8 h-8 text-orange-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">ISO 27001</span>
              <span className="text-xs text-gray-500">(in progress)</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                <FileCheck className="w-8 h-8 text-red-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">ACA International</span>
              <span className="text-xs text-gray-500">(applying)</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Frequently Asked Questions
          </h2>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Q: Will my company be directly involved in Chinese legal proceedings?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A: No. Your claim is assigned to our Hong Kong affiliate for processing, and all in-China activities are conducted by our local subsidiary and licensed professionals under Chinese law. Your company name is not used in any direct enforcement action.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Us Section with brand gradient */}
      <section id="contact-section" className="py-20 bg-brand-gradient">
        <div className="container max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Contact Us
          </h2>
          
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-[#2A3470]">
                Get in Touch
              </CardTitle>
              <CardDescription className="text-center text-[#2A3470]/70">
                Ready to recover your claims? Let's discuss your case.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form 
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#2A3470] font-medium">
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
                  <Label htmlFor="email" className="text-[#2A3470] font-medium">
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
                  <Label htmlFor="message" className="text-[#2A3470] font-medium">
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

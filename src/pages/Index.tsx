
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Shield, Clock, DollarSign, Scale, Cpu, FileCheck, Gavel, FileText, IdCard, CreditCard } from "lucide-react";
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

      {/* Why Us Section */}
      <section id="whyus-section" className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Why Choose Bingheng Credit?
          </h2>
          
          {/* Professional legal-style introduction */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              {/* Blue accent line - absolutely positioned */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary"></div>
              
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
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Gavel className="text-primary" size={24} />
                  China Collection Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Legal notices in Mandarin that get real responses
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
                  Thorough case review for higher success rates
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
                  Reaching the 70% that U.S. companies can't find
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
                  No cure, no pay—zero upfront cost
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Can Collect Section */}
      <section id="eligibility-section" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            What We Can Collect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
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
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <IdCard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary text-center">Why Chinese ID Matters</h3>
                <p className="text-gray-700 leading-relaxed">
                  Chinese national ID allows licensed law firms to issue enforceable legal notices and conduct official debtor tracing in China — channels unavailable to foreign entities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Easy to Start Section */}
      <section className="py-20 bg-green-50 border-y-2 border-green-100">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Low Barrier Entry
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Easy to Start — No High Barriers
          </h2>
          
          <p className="text-lg text-gray-600 mb-12">
            Not sure where to begin? Start small — we're built for flexibility.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <ul className="space-y-3 text-left text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Try us with just 5 claims
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Single claims welcome (from $200)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <ul className="space-y-3 text-left text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Discounts for 50+ accounts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    We'll customize based on your portfolio
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Performance at a Glance Section */}
      <section id="performance-section" className="container max-w-6xl mx-auto px-6 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
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
        
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>*Actual average recovery rate: 12.6%</p>
          <p>Premium portfolios can achieve 20%+</p>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section id="compliance-section" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
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
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Gavel className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Licensed Attorneys</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-gray-600 font-medium">PIPL Compliant</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-gray-600 font-medium">TLS 1.3</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-gray-600 font-medium">AES-256</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-gray-600 font-medium">ISO 27001</span>
              <span className="text-xs text-gray-500">(in progress)</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <FileCheck className="w-6 h-6 text-primary" />
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
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Frequently Asked Questions
          </h2>
          
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Q: Will my company be directly involved in Chinese legal proceedings?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A: No. Your claim is assigned to our Hong Kong affiliate for processing, and all in-China activities are conducted by our local subsidiary and licensed professionals under Chinese law. Your company name is not used in any direct enforcement action.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Q: Is it legal to hire your team to collect from Chinese debtors?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A: Yes. We operate entirely within China following Chinese legal procedures through licensed professionals. Since the collection activities occur in China with Chinese residents, U.S. collection laws don't apply. Your company simply assigns the debt to our Hong Kong entity—we handle everything else under local law.
                  </p>
                </div>
              </div>
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
              <CardTitle className="text-2xl text-center text-primary">
                Get in Touch
              </CardTitle>
              <CardDescription className="text-center text-primary/70">
                Ready to recover your claims? Let's discuss your case.
              </CardDescription>
            </CardHeader>
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
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
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

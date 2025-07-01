
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Shield, Clock, DollarSign, Scale, Cpu, FileCheck } from "lucide-react";
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
      
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 text-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            We bridge U.S. claims with China-ID-backed collection.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            48-hour first contact • 70% reach • 25% recovery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-blue-900 hover:bg-blue-50"
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
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle className="text-blue-600" />
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
                  Supported Claim Types
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• E-commerce receivables (Amazon / eBay sellers)</li>
                  <li>• Student housing rent defaults</li>
                  <li>• B2B fees such as logistics, warehousing, agency charges</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-purple-200 mb-12">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Shield className="text-purple-600" />
                Minimum Thresholds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Single claim ≥ USD 200 <span className="font-semibold">OR</span> batch ≥ 50 accounts
              </p>
            </CardContent>
          </Card>

          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Why ID Matters</h3>
            <p className="text-lg text-blue-800">
              Chinese ID unlocks legal phone & credit data — if we can reach the debtor, we can recover the cash.
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
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Phone className="text-blue-600" size={24} />
                  Real-time Phone Matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ID linked to telecom APIs for fresh numbers
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Clock className="text-green-600" size={24} />
                  48-hour First Call Guarantee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatic dispatch to Beijing call center
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Shield className="text-purple-600" size={24} />
                  SHA-256 Encrypted Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Hosted in Hong Kong, compliant with PIPL & GDPR
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
                  No cure, no pay
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
              <CardTitle className="text-3xl font-bold text-blue-600 mb-2">
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
                48h
              </CardTitle>
              <CardDescription className="text-lg font-medium text-gray-700">
                First Contact
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
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Scale className="text-blue-600" size={24} />
                  Legal Basis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  PIPL Article 13, Items (2) & (3)<br/>
                  Contractual necessity + legal obligation
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Cpu className="text-green-600" size={24} />
                  Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Mainland lookup → HK storage<br/>
                  SHA-256 hashed + TLS 1.3 / AES-256
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <FileCheck className="text-purple-600" size={24} />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  ISO 27001 (underway)<br/>
                  ACA Membership (Q4 2025 expected)
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto mb-16">
            <AccordionItem value="legal-basis">
              <AccordionTrigger className="text-lg font-semibold">
                Legal Basis Details
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p><strong>PIPL Article 13, Item (2):</strong> Processing necessary for the performance of a contract to which the individual is party</p>
                  <p><strong>PIPL Article 13, Item (3):</strong> Processing necessary for compliance with a legal obligation</p>
                  <p>We process debtor personal information based on contractual performance and legal obligations, ensuring the legitimacy of collection activities.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tech-architecture">
              <AccordionTrigger className="text-lg font-semibold">
                Technical Architecture
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Data Flow:</strong> Mainland real-time lookup → Hong Kong data center storage → encrypted transmission</p>
                  <p><strong>Encryption Standards:</strong> SHA-256 hashing algorithm protects sensitive information</p>
                  <p><strong>Transit Security:</strong> TLS 1.3 protocol + AES-256 end-to-end encryption</p>
                  <p><strong>Geographic Isolation:</strong> Hong Kong hosting ensures cross-border data compliance</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="certifications">
              <AccordionTrigger className="text-lg font-semibold">
                Certifications & Audits
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
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
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                <Scale className="w-8 h-8 text-blue-600" />
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

      {/* Contact Us Section */}
      <section id="contact-section" className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
        <div className="container max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Contact Us
          </h2>
          
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-blue-900">
                Get in Touch
              </CardTitle>
              <CardDescription className="text-center text-blue-700">
                Ready to recover your claims? Let's discuss your case.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form 
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-blue-900 font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="rounded-lg border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-900 font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-lg border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-blue-900 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="rounded-lg border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    defaultValue="Hi Bingheng team, I have a claim against a Chinese debtor. Please reach out to me."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
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

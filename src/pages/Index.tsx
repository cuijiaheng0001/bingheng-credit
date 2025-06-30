import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Shield, Clock, DollarSign, Scale, Cpu, FileCheck } from "lucide-react";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
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
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-blue-900 hover:bg-blue-50">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-gray-50">
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
      <section className="py-20 bg-white">
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

      {/* Compliance & Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            合规 & 安全 (Compliance & Security)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Scale className="text-blue-600" size={24} />
                  Law 法律依据
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  PIPL 第 13 条第 2/3 款<br/>
                  合同必要 + 法定义务
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Cpu className="text-green-600" size={24} />
                  Tech 技术架构
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  大陆查询 → HK 存储<br/>
                  SHA-256 哈希 + TLS 1.3 / AES-256
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <FileCheck className="text-purple-600" size={24} />
                  Audit 认证状态
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  ISO 27001 (进行中)<br/>
                  ACA Membership (Q4 2025 预期)
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            <AccordionItem value="legal-basis">
              <AccordionTrigger className="text-lg font-semibold">
                法律依据详情 (Legal Basis Details)
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p><strong>PIPL 第 13 条第 2 款：</strong>为订立、履行个人作为一方当事人的合同所必需</p>
                  <p><strong>PIPL 第 13 条第 3 款：</strong>为履行法定职责或者法定义务所必需</p>
                  <p>我们基于合同履行和法定义务处理债务人个人信息，确保催收活动的合法性。</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tech-architecture">
              <AccordionTrigger className="text-lg font-semibold">
                技术架构说明 (Technical Architecture)
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p><strong>数据流程：</strong>大陆实时查询 → 香港数据中心存储 → 加密传输</p>
                  <p><strong>加密标准：</strong>SHA-256 哈希算法保护敏感信息</p>
                  <p><strong>传输安全：</strong>TLS 1.3 协议 + AES-256 端到端加密</p>
                  <p><strong>地理隔离：</strong>香港托管确保数据跨境合规</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="certifications">
              <AccordionTrigger className="text-lg font-semibold">
                认证与审计 (Certifications & Audits)
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-700">
                  <p><strong>ISO 27001：</strong>信息安全管理体系认证 (进行中)</p>
                  <p><strong>ACA Membership：</strong>美国催收协会会员资格 (Q4 2025 预期)</p>
                  <p><strong>定期审计：</strong>第三方安全审计与合规性评估</p>
                  <p><strong>数据保护：</strong>PIPL 与 GDPR 双重合规标准</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
                action="https://formspree.io/f/sales@binghengcredit.com" 
                method="POST"
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

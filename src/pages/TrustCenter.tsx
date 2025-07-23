import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Shield, FileText, Users, Award, Mail, Phone, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";

const TrustCenter: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Trust Center | Bingheng Credit</title>
        <meta name="description" content="Compliance, legal assurance, testimonials, and credentials for Bingheng Credit's U.S.-China debt recovery services." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-primary text-white py-20">
          <div className="container max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Trust Center</h1>
            <p className="text-xl text-blue-200">Compliance, Credentials & Client Success</p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Work With Bingheng Credit?</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-lg leading-relaxed">
                <strong>Bingheng Credit is the first China-based recovery firm dedicated exclusively to cross-border debt collections for U.S. creditors.</strong> Our mission is to help U.S. asset managers, collection agencies, and law firms recover otherwise "lost" claims from debtors who have returned to China.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">100% Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">We only handle debts involving Chinese nationals who have left the U.S.</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Attorney-Vetted</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Our processes are reviewed by legal experts in both China and the U.S.</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">No Upfront Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">We succeed only when you do—results-based compensation.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Client Testimonials</h2>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-primary">
                <CardContent className="pt-6">
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "We had written off several China-linked claims as unrecoverable. Bingheng Credit helped us re-engage those debtors and recover funds without litigation or wasted effort. Highly recommended!"
                  </blockquote>
                  <p className="text-sm font-semibold text-gray-600">— U.S. Asset Manager, Texas</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-primary">
                <CardContent className="pt-6">
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "Quick response, clear legal documentation, and real results on cross-border accounts."
                  </blockquote>
                  <p className="text-sm font-semibold text-gray-600">— Collections Director, California</p>
                </CardContent>
              </Card>

              <p className="text-center text-sm text-gray-600 italic mt-8">
                (Contact us to verify testimonials and request direct references)
              </p>
            </div>
          </div>
        </section>

        {/* Compliance & Legal */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Compliance & Legal Assurance</h2>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Attorney Compliance Brief
                </CardTitle>
                <CardDescription>Our cross-border process is reviewed and approved by licensed attorneys.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2" disabled>
                    <Download className="w-4 h-4" />
                    Compliance Whitepaper (Coming Soon)
                  </Button>
                  <Button className="flex items-center gap-2" disabled>
                    <Download className="w-4 h-4" />
                    Legal Opinion Letter (Coming Soon)
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Key Compliance Points:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-green-500 text-white rounded-full p-1 mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">All debtor outreach is conducted in China by Mandarin-speaking professionals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-500 text-white rounded-full p-1 mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">We never collect on U.S. citizens or residents.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-500 text-white rounded-full p-1 mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">We operate fully within Chinese law, and never engage in unlawful practices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-500 text-white rounded-full p-1 mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Data is stored securely (SHA-256 encrypted, TLS 1.3, logs retained for 3 years).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is your service compliant with U.S. and Chinese regulations?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Yes. We only collect debts in China from Chinese nationals, with all processes reviewed by attorneys. We never violate FDCPA or Chinese laws.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can you recover accounts where other agencies have failed?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Yes! Our local expertise and skip-tracing access often succeed where others cannot.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What does it cost?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">There are zero upfront fees. We charge only on successful recoveries, with transparent rates.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do you protect sensitive information?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">All data is encrypted, handled by in-house staff only, and never shared outside of legal or client obligations.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can you provide references?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Yes. Upon request, we will connect you with satisfied U.S. clients (subject to NDA).</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Download Our Capacity Statement & Service Brochure</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2" disabled>
                <Download className="w-5 h-5" />
                Capacity Statement (Coming Soon)
              </Button>
              <Button size="lg" className="flex items-center gap-2" disabled>
                <Download className="w-5 h-5" />
                Service Overview (Coming Soon)
              </Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-primary text-white">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact & Verification</h2>
            <p className="text-lg mb-8 text-blue-200">Still have questions or need to verify our credentials?</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardContent className="pt-6 flex flex-col items-center">
                  <Mail className="w-8 h-8 mb-3" />
                  <a href="mailto:Jiahengc@binghengcredit.com" className="hover:text-blue-200 transition-colors">
                    Jiahengc@binghengcredit.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardContent className="pt-6 flex flex-col items-center">
                  <Phone className="w-8 h-8 mb-3" />
                  <span>China: +86 166-5308-6767</span>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardContent className="pt-6 flex flex-col items-center">
                  <MessageSquare className="w-8 h-8 mb-3" />
                  <span>WeChat: Available on Request</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TrustCenter;
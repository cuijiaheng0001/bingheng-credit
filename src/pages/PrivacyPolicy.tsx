import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Mail, Lock, Globe, FileText, Users } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Bingheng Credit</title>
        <meta name="description" content="Privacy Policy for Bingheng Credit - Learn how we collect, use, and protect your personal information in our debt collection services." />
        <meta property="og:title" content="Privacy Policy | Bingheng Credit" />
        <meta property="og:description" content="Our commitment to protecting your privacy and personal information." />
        <link rel="canonical" href="https://binghengcredit.com/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Bingheng Credit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our debt collection services.
              </p>
              <p>
                We operate on a B2B basis, primarily serving U.S. creditors seeking to recover debts from Chinese nationals. Our services require handling sensitive financial and personal information, which we treat with the utmost care and security.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-primary">From Our Clients (Creditors):</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Company information and contact details</li>
                <li>Authorized representative names and email addresses</li>
                <li>Debt documentation (invoices, contracts, statements)</li>
                <li>Payment and banking information for recovered funds</li>
              </ul>

              <h3 className="font-semibold text-primary mt-6">About Debtors:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full names and Chinese National ID numbers</li>
                <li>Last known contact information</li>
                <li>Debt amounts and transaction history</li>
                <li>Any relevant documentation provided by creditors</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>We use the collected information for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Verifying debtor identities through licensed PRC channels</li>
                <li>Conducting skip tracing and location services</li>
                <li>Initiating legal proceedings in accordance with Chinese law</li>
                <li>Facilitating communication between creditors and debtors</li>
                <li>Processing recovered payments and remittances</li>
                <li>Maintaining records for legal and compliance purposes</li>
                <li>Improving our services and success rates</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Data Sharing and Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>We may share information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Licensed PRC Law Firms:</strong> To execute legal procedures in China</li>
                <li><strong>Skip Tracing Partners:</strong> Licensed investigators in China for debtor location</li>
                <li><strong>Banking Partners:</strong> For processing international payments</li>
                <li><strong>Legal Authorities:</strong> When required by law or court order</li>
              </ul>
              <p className="mt-4">
                We <strong>never</strong> sell personal information to third parties or use it for marketing purposes unrelated to debt recovery.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>We implement industry-standard security measures including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Employee confidentiality agreements</li>
                <li>Restricted access on a need-to-know basis</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Data Retention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, typically:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Active case files: Duration of collection efforts plus 2 years</li>
                <li>Financial records: 7 years for tax and legal compliance</li>
                <li>Communication records: 3 years from last interaction</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Object to certain uses of your information</li>
                <li>Receive your information in a portable format</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information below.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                International Data Transfers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                As we operate internationally between the U.S. and China, your information may be transferred across borders. We ensure all transfers comply with applicable data protection laws and implement appropriate safeguards.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-semibold text-primary">Bingheng Credit Privacy Team</p>
                <p>Email: privacy@binghengcredit.com</p>
                <p>Response time: Within 48 business hours</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Updates to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
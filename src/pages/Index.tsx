
import React, { useCallback, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { Divider } from "@/components/Divider";

// Lazy load components for better performance
const WhyUsSection = lazy(() => import("@/components/sections/WhyUsSection").then(m => ({ default: m.WhyUsSection })));
const WhatWeHandleSection = lazy(() => import("@/components/sections/WhatWeHandleSection").then(m => ({ default: m.WhatWeHandleSection })));
const PerformanceSection = lazy(() => import("@/components/sections/PerformanceSection").then(m => ({ default: m.PerformanceSection })));
const EasyStartSection = lazy(() => import("@/components/sections/EasyStartSection").then(m => ({ default: m.EasyStartSection })));
const ComplianceSection = lazy(() => import("@/components/sections/ComplianceSection").then(m => ({ default: m.ComplianceSection })));
const FAQSection = lazy(() => import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })));
const ContactSection = lazy(() => import("@/components/sections/ContactSection").then(m => ({ default: m.ContactSection })));

// Loading component for Suspense fallback
const SectionLoader = () => (
  <div className="flex justify-center items-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2A3470" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        <title>China Debt Collection | Bingheng Credit</title>
        <meta name="description" content="We help U.S. creditors recover debt from Chinese nationals through licensed PRC legal procedures and skip tracing." />
        
        {/* Application Names for PWA */}
        <meta name="application-name" content="Bingheng Credit" />
        <meta name="apple-mobile-web-app-title" content="Bingheng Credit" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://binghengcredit.com/" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="China Debt Collection | Bingheng Credit" />
        <meta property="og:description" content="Licensed PRC enforcement • 70% contact rate • 25% recovery • No cure, no pay debt collection" />
        <meta property="og:image" content="https://binghengcredit.com/og-image.png" />
        <meta property="og:type" content="website" />
        
        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="China Debt Collection | Bingheng Credit" />
        <meta name="twitter:description" content="Licensed PRC enforcement • 70% contact rate • 25% recovery • No cure, no pay debt collection" />
        <meta name="twitter:image" content="https://binghengcredit.com/og-image.png" />
        
        {/* JSON-LD Organization */}
        <script type="application/ld+json">{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bingheng Credit",
  "url": "https://binghengcredit.com",
  "logo": "https://binghengcredit.com/og-image.png",
  "description": "Licensed debt collection service for U.S. creditors recovering debts from Chinese nationals through PRC legal procedures",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": ["US", "CN"],
    "availableLanguage": ["English", "Chinese"]
  },
  "service": {
    "@type": "Service",
    "name": "Cross-border Debt Collection",
    "description": "Legal debt collection from Chinese nationals using licensed PRC attorneys"
  }
}`}</script>
        
        {/* JSON-LD FAQPage */}
        <script type="application/ld+json">{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Will my company be directly involved in Chinese legal proceedings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Your claim is assigned to our Hong Kong affiliate for processing, and all in-China activities are conducted by our local subsidiary and licensed professionals under Chinese law."
      }
    },
    {
      "@type": "Question",
      "name": "Is it legal to hire your team to collect from Chinese debtors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We operate entirely within China's legal framework through our licensed PRC law firm partners. Since collection activities occur in China with Chinese residents, U.S. collection laws (like FDCPA) don't apply."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the collection process typically take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most cases see first contact within 5 days and resolution within 30–60 days, depending on the debt amount and the debtor's responsiveness."
      }
    }
  ]
}`}</script>
        
        {/* Favicon 标准尺寸 */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />

        {/* iOS 设备专用 */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2A3470" />

        {/* 兼容旧版快捷图标 */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Helmet>
      
      <main>
        {/* Hero Section */}
        <HeroSection onContactClick={scrollToContact} />

        {/* Why Us Section */}
        <Suspense fallback={<SectionLoader />}>
          <WhyUsSection />
        </Suspense>

        <Divider />

        {/* What We Handle Section */}
        <Suspense fallback={<SectionLoader />}>
          <WhatWeHandleSection />
        </Suspense>

        <Divider className="bg-gray-50" />

        {/* Performance Section */}
        <Suspense fallback={<SectionLoader />}>
          <PerformanceSection />
        </Suspense>

        <Divider />

        {/* Easy Start Section */}
        <Suspense fallback={<SectionLoader />}>
          <EasyStartSection />
        </Suspense>

        {/* Compliance Section */}
        <Suspense fallback={<SectionLoader />}>
          <ComplianceSection />
        </Suspense>

        <Divider className="bg-gray-50" />

        {/* FAQ Section */}
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;

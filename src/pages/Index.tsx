import React, { useCallback, Suspense, lazy, Component, ReactNode, ErrorInfo } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { Divider } from "@/components/Divider";

// 简化的 lazy loading 导入
const WhyUsSection = lazy(() =>
  import("@/components/sections/WhyUsSection").then(m => ({ default: m.WhyUsSection })));
const WhatWeHandleSection = lazy(() =>
  import("@/components/sections/WhatWeHandleSection").then(m => ({ default: m.WhatWeHandleSection })));
const PerformanceSection = lazy(() =>
  import("@/components/sections/PerformanceSection").then(m => ({ default: m.PerformanceSection })));
const EasyStartSection = lazy(() =>
  import("@/components/sections/EasyStartSection").then(m => ({ default: m.EasyStartSection })));
const ComplianceSection = lazy(() =>
  import("@/components/sections/ComplianceSection").then(m => ({ default: m.ComplianceSection })));
const FAQSection = lazy(() =>
  import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })));
const ContactSection = lazy(() =>
  import("@/components/sections/ContactSection").then(m => ({ default: m.ContactSection })));

import { SectionSkeleton, ContactSkeleton } from "@/components/SectionSkeleton";

// 改进的加载组件，添加无障碍性
const SectionLoader = () => (
  <SectionSkeleton />
);

// 错误边界组件
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Section loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[200px] flex items-center justify-center p-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-600 mb-2">加载出错</h3>
            <p className="text-gray-600">部分内容加载失败，请刷新页面重试</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const Index = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navigation height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/assets/a1f3c6e0-6384-44b0-9452-4265b6e94671.png" />
        
        {/* Mobile optimization */}
        <meta name="theme-color" content="#2A3470" />
        
        {/* Enhanced SEO tags */}
        <meta property="og:url" content="https://binghengcredit.com/" />
        <meta property="og:site_name" content="Bingheng Credit" />
        <meta property="og:image" content="https://binghengcredit.com/assets/a1f3c6e0-6384-44b0-9452-4265b6e94671.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="zh_CN" />
        
        <meta name="twitter:title" content="China Debt Collection | Bingheng Credit" />
        <meta name="twitter:description" content="Professional debt recovery from Chinese nationals. No upfront fees." />
        <meta name="twitter:image" content="https://binghengcredit.com/assets/a1f3c6e0-6384-44b0-9452-4265b6e94671.png" />
        <meta name="twitter:creator" content="@BinghengCredit" />
        
        {/* Additional structured data for enhanced AI discovery */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is your success rate for debt collection in China?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We achieve a 70% contact rate and 25% full recovery rate for debts from Chinese nationals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you charge upfront fees?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, we operate on a no-cure-no-pay basis. You only pay when we successfully recover your debt."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <HeroSection onScrollToContact={() => scrollToSection('contact-section')} />
      
      <ErrorBoundary>
        <Suspense fallback={<SectionLoader />}>
          <WhyUsSection />
        </Suspense>
      </ErrorBoundary>
      
      <Divider bgClass="bg-gray-50" />
      
      <ErrorBoundary>
        <Suspense fallback={<SectionLoader />}>
          <div id="eligibility-section">
            <WhatWeHandleSection />
          </div>
        </Suspense>
      </ErrorBoundary>
      
      <Divider bgClass="bg-white" />
      
      <ErrorBoundary>
        <Suspense fallback={<SectionLoader />}>
          <div id="performance-section">
            <PerformanceSection />
          </div>
        </Suspense>
      </ErrorBoundary>
      
      <Divider bgClass="bg-gray-50" />
      
      <ErrorBoundary>
        <Suspense fallback={<SectionLoader />}>
          <EasyStartSection />
        </Suspense>
      </ErrorBoundary>
      
      <Divider bgClass="bg-white" />
      
      <ErrorBoundary>
        <Suspense fallback={<SectionLoader />}>
          <div id="compliance-section">
            <ComplianceSection />
          </div>
        </Suspense>
      </ErrorBoundary>
      
      <Divider bgClass="bg-gray-50" />
      
      <ErrorBoundary>
        <Suspense fallback={<SectionLoader />}>
          <div id="faq-section">
            <FAQSection />
          </div>
        </Suspense>
      </ErrorBoundary>
      
      <Divider bgClass="bg-white" />
      
      <ErrorBoundary>
        <Suspense fallback={<ContactSkeleton />}>
          <div id="contact-section">
            <ContactSection />
          </div>
        </Suspense>
      </ErrorBoundary>

      {/* Performance monitoring for Core Web Vitals */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if ('PerformanceObserver' in window) {
              try {
                const po = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    // Log to analytics if available
                    if (window.gtag) {
                      window.gtag('event', entry.name, {
                        event_category: 'Web Vitals',
                        value: Math.round(entry.startTime + entry.duration),
                        non_interaction: true,
                      });
                    }
                  }
                });
                po.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'cumulative-layout-shift'] });
              } catch (e) {
                // Silently fail for older browsers
              }
            }
          `,
        }}
      />
    </>
  );
};

export default Index;
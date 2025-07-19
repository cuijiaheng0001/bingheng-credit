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

// 改进的加载组件，添加无障碍性
const SectionLoader = () => (
  <div 
    className="flex justify-center items-center py-12" 
    role="status" 
    aria-label="Loading content"
    aria-live="polite"
  >
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    <span className="sr-only">Loading...</span>
  </div>
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
        <div className="text-center py-8">
          <p className="text-muted-foreground">Failed to load this section. Please refresh the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// 包装 Suspense 和 ErrorBoundary - 添加react-snap兼容性
interface LazySectionProps {
  children: ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({ children }) => {
  // 检测是否在预渲染环境中
  const isPrerendering = typeof navigator !== 'undefined' && navigator.userAgent === 'ReactSnap';
  
  if (isPrerendering) {
    // 预渲染时直接返回children，跳过Suspense
    return <>{children}</>;
  }
  
  return (
    <ErrorBoundary>
      <Suspense fallback={<SectionLoader />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

const Index = () => {
  const scrollToContact = useCallback(() => {
    // 添加预渲染环境检查
    if (typeof window !== 'undefined' && navigator.userAgent !== 'ReactSnap') {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2A3470" />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* 预加载关键资源 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" as="image" href="/og-share-image.png" />
        <link rel="preload" as="script" href="/src/main.tsx" />
        <link rel="modulepreload" href="/src/main.tsx" />

        <title>China Debt Collection | Bingheng Credit</title>
        <meta name="description" content="Professional China debt collection and cross-border debt recovery services. Skip tracing China specialists helping U.S. creditors recover debts through licensed PRC legal procedures." />

        {/* Application Names for PWA */}
        <meta name="application-name" content="Bingheng Credit" />
        <meta name="apple-mobile-web-app-title" content="Bingheng Credit" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://binghengcredit.com/" />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Open Graph tags - 改进版 */}
        <meta property="og:title" content="China Debt Collection | Bingheng Credit" />
        <meta property="og:description" content="Licensed PRC enforcement • 70% contact rate • 25% recovery • No cure, no pay debt collection" />
        <meta property="og:image" content="https://binghengcredit.com/og-share-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://binghengcredit.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bingheng Credit" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="China Debt Collection | Bingheng Credit" />
        <meta name="twitter:description" content="Licensed PRC enforcement • 70% contact rate • 25% recovery • No cure, no pay debt collection" />
        <meta name="twitter:image" content="https://binghengcredit.com/og-share-image.png" />

        {/* JSON-LD Organization */}
        <script type="application/ld+json">{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bingheng Credit",
  "url": "https://binghengcredit.com",
  "logo": "https://binghengcredit.com/logo.png",
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

        {/* JSON-LD WebPage */}
        <script type="application/ld+json">{`{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "China Debt Collection for U.S. Creditors",
  "description": "Licensed debt collection service for U.S. creditors recovering debts from Chinese nationals through PRC legal procedures",
  "url": "https://binghengcredit.com/",
  "mainEntity": {
    "@type": "ProfessionalService",
    "name": "Cross-border Debt Collection",
    "description": "Legal debt collection from Chinese nationals using licensed PRC attorneys",
    "provider": {
      "@type": "Organization",
      "name": "Bingheng Credit"
    }
  }
}`}</script>

        {/* JSON-LD BreadcrumbList */}
        <script type="application/ld+json">{`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://binghengcredit.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://binghengcredit.com/#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Performance",
      "item": "https://binghengcredit.com/#performance"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "FAQ",
      "item": "https://binghengcredit.com/#faq"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Contact",
      "item": "https://binghengcredit.com/#contact"
    }
  ]
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
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />

        {/* iOS 设备专用 */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2A3470" />

        {/* 兼容旧版快捷图标 */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Helmet>

      <main>
        {/* Hero Section - 包含主H1标签 */}
        <HeroSection onContactClick={scrollToContact} />

        {/* Why Us Section */}
        <LazySection>
          <WhyUsSection />
        </LazySection>

        <Divider />

        {/* What We Handle Section */}
        <LazySection>
          <WhatWeHandleSection />
        </LazySection>

        <Divider className="bg-gray-50" />

        {/* Performance Section */}
        <LazySection>
          <PerformanceSection />
        </LazySection>

        <Divider />

        {/* Easy Start Section */}
        <LazySection>
          <EasyStartSection />
        </LazySection>

        {/* Compliance Section */}
        <LazySection>
          <ComplianceSection />
        </LazySection>

        <Divider className="bg-gray-50" />

        {/* FAQ Section */}
        <LazySection>
          <FAQSection />
        </LazySection>

        {/* Contact Section */}
        <LazySection>
          <ContactSection />
        </LazySection>
      </main>
    </div>
  );
};

export default Index;
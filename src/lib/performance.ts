import { onCLS, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals';

// Performance monitoring configuration
const PERFORMANCE_ENDPOINT = process.env.VITE_PERFORMANCE_ENDPOINT || '';
const DEBUG_MODE = process.env.NODE_ENV === 'development';

// Performance data interface
interface PerformanceData {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
  url: string;
  userAgent: string;
  timestamp: number;
}

// Log performance metrics to console in development
function logMetric(metric: Metric) {
  if (DEBUG_MODE) {
    const rating = metric.rating || 'N/A';
    const emoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';
    
    console.group(`${emoji} Web Vitals: ${metric.name}`);
    console.log('Value:', metric.value.toFixed(2));
    console.log('Rating:', rating);
    console.log('Delta:', metric.delta.toFixed(2));
    console.log('ID:', metric.id);
    console.groupEnd();
  }
}

// Send metrics to analytics endpoint
async function sendToAnalytics(metric: Metric) {
  const data: PerformanceData = {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    navigationType: metric.navigationType || 'navigate',
    url: window.location.href,
    userAgent: navigator.userAgent,
    timestamp: Date.now(),
  };

  // Log to console in development
  logMetric(metric);

  // Send to analytics endpoint if configured
  if (PERFORMANCE_ENDPOINT) {
    try {
      await fetch(PERFORMANCE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Failed to send performance data:', error);
    }
  }

  // You can also send to Google Analytics or other services here
  // Example for Google Analytics 4:
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: metric.rating,
    });
  }
}

// Initialize Web Vitals monitoring
export function initWebVitals() {
  // Core Web Vitals
  onCLS(sendToAnalytics);     // Cumulative Layout Shift
  onLCP(sendToAnalytics);     // Largest Contentful Paint
  onINP(sendToAnalytics);     // Interaction to Next Paint (replaced FID)
  
  // Other Web Vitals
  onFCP(sendToAnalytics);     // First Contentful Paint
  onTTFB(sendToAnalytics);    // Time to First Byte
}

// Get all performance entries
export function getPerformanceData() {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (!navigation) return null;

  return {
    // Navigation timing
    dns: navigation.domainLookupEnd - navigation.domainLookupStart,
    tcp: navigation.connectEnd - navigation.connectStart,
    ttfb: navigation.responseStart - navigation.requestStart,
    download: navigation.responseEnd - navigation.responseStart,
    domInteractive: navigation.domInteractive - navigation.domContentLoadedEventStart,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    
    // Page load time
    pageLoadTime: navigation.loadEventEnd - navigation.fetchStart,
    
    // Resource timing summary
    resources: performance.getEntriesByType('resource').length,
  };
}

// Custom performance mark
export function markPerformance(markName: string) {
  if ('performance' in window && 'mark' in window.performance) {
    performance.mark(markName);
    
    if (DEBUG_MODE) {
      console.log(`⏱️ Performance mark: ${markName}`);
    }
  }
}

// Custom performance measure
export function measurePerformance(measureName: string, startMark: string, endMark?: string) {
  if ('performance' in window && 'measure' in window.performance) {
    try {
      const measure = endMark 
        ? performance.measure(measureName, startMark, endMark)
        : performance.measure(measureName, startMark);
      
      if (DEBUG_MODE && measure) {
        console.log(`⏱️ Performance measure: ${measureName} = ${measure.duration.toFixed(2)}ms`);
      }
      
      return measure;
    } catch (error) {
      console.error('Performance measure failed:', error);
    }
  }
  
  return null;
}
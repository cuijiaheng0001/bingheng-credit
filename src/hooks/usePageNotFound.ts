import { useEffect } from 'react';

export const usePageNotFound = () => {
  useEffect(() => {
    // Set proper 404 status for crawlers
    if (typeof document !== 'undefined') {
      document.title = '404 - Page Not Found | Bingheng Credit';
      
      // Add meta tag to indicate this is a 404 page
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.setAttribute('content', 'noindex, nofollow');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex, nofollow';
        document.head.appendChild(meta);
      }
      
      // Add prerender status code for crawlers
      const prerenderStatusCode = document.createElement('meta');
      prerenderStatusCode.name = 'prerender-status-code';
      prerenderStatusCode.content = '404';
      document.head.appendChild(prerenderStatusCode);
    }
  }, []);
};
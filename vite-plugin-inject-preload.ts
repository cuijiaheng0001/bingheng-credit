import { Plugin } from 'vite';

export function injectPreload(): Plugin {
  return {
    name: 'inject-preload',
    transformIndexHtml(html, { bundle }) {
      if (!bundle) return html;
      
      const cssFiles = [];
      const jsFiles = [];
      
      // Collect CSS and JS files
      for (const [, asset] of Object.entries(bundle)) {
        if (asset.type === 'asset' && asset.fileName.endsWith('.css')) {
          cssFiles.push(asset.fileName);
        } else if (asset.type === 'chunk' && asset.isEntry) {
          jsFiles.push(asset.fileName);
        }
      }
      
      // Generate preload tags
      const preloadTags = [
        ...cssFiles.map(file => ({
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: `/${file}`,
            as: 'style',
          },
        })),
        ...jsFiles.map(file => ({
          tag: 'link',
          attrs: {
            rel: 'modulepreload',
            href: `/${file}`,
          },
        })),
      ];
      
      return {
        html,
        tags: [
          {
            tag: 'link',
            attrs: {
              rel: 'preconnect',
              href: 'https://fonts.googleapis.com',
              crossorigin: '',
            },
            injectTo: 'head-prepend',
          },
          ...preloadTags.map(tag => ({ ...tag, injectTo: 'head' })),
        ],
      };
    },
  };
}
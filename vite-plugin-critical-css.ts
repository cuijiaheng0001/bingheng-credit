import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export function criticalCSS(): Plugin {
  return {
    name: 'critical-css',
    transformIndexHtml: {
      order: 'post',
      handler(html, { bundle }) {
        if (!bundle) return html;
        
        // Find the main CSS file
        let mainCssFile = '';
        for (const [fileName, asset] of Object.entries(bundle)) {
          if (asset.type === 'asset' && fileName.includes('index') && fileName.endsWith('.css')) {
            mainCssFile = fileName;
            break;
          }
        }
        
        if (!mainCssFile) return html;
        
        // Critical CSS for above-the-fold content
        const criticalStyles = `
          <style>
            /* Critical CSS for initial render */
            *,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
            ::after,::before{--tw-content:''}
            html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}
            body{margin:0;line-height:inherit}
            h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}
            a{color:inherit;text-decoration:inherit}
            button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}
            button,select{text-transform:none}
            button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}
            :-moz-focusring{outline:auto}
            :-moz-ui-invalid{box-shadow:none}
            progress{vertical-align:baseline}
            ::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}
            [type='search']{-webkit-appearance:textfield;outline-offset:-2px}
            ::-webkit-search-decoration{-webkit-appearance:none}
            ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
            summary{display:list-item}
            blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}
            fieldset{margin:0;padding:0}
            legend{padding:0}
            ol,ul,menu{list-style:none;margin:0;padding:0}
            dialog{padding:0}
            textarea{resize:vertical}
            input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}
            button,[role="button"]{cursor:pointer}
            :disabled{cursor:default}
            img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}
            img,video{max-width:100%;height:auto}
            [hidden]{display:none}
            
            /* Critical layout styles */
            .min-h-screen{min-height:100vh}
            .flex{display:flex}
            .flex-col{flex-direction:column}
            .flex-grow{flex-grow:1}
            .items-center{align-items:center}
            .justify-center{justify-content:center}
            .text-center{text-align:center}
            .bg-gray-100{background-color:#f3f4f6}
            
            /* Loading state */
            .skeleton{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}
            @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
          </style>
        `;
        
        // Replace CSS link with critical CSS + async load
        html = html.replace(
          /<link\s+rel="stylesheet"\s+href="\/assets\/index-[^"]+\.css"[^>]*>/,
          criticalStyles + 
          `<link rel="preload" href="/${mainCssFile}" as="style" onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet" href="/${mainCssFile}"></noscript>`
        );
        
        return html;
      }
    }
  };
}
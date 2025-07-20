import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Bundle analyzer plugin (only in analyze mode)
    process.env.ANALYZE && visualizer({
      open: true,
      filename: "dist/stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: 'public',
  build: {
    // Output directory
    outDir: "dist",
    
    // Generate source maps for production debugging
    sourcemap: mode === "production" ? "hidden" : true,
    
    // Rollup options for optimization
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // React and React DOM in separate chunk
          react: ["react", "react-dom", "react-router-dom"],
          
          // UI components in separate chunk
          ui: ["@radix-ui/react-accordion", "@radix-ui/react-alert-dialog", 
               "@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu",
               "@radix-ui/react-tooltip", "@radix-ui/react-select"],
          
          // Form and validation libraries
          forms: ["react-hook-form", "@hookform/resolvers", "zod"],
          
          // Utilities
          utils: ["clsx", "tailwind-merge", "class-variance-authority"],
        },
        
        // Consistent chunk naming
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : '';
          if (facadeModuleId && facadeModuleId.includes('node_modules')) {
            return 'assets/vendor-[hash].js';
          }
          return 'assets/[name]-[hash].js';
        },
        
        // Asset naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|ttf|otf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    
    
    // Performance optimization
    cssCodeSplit: true,          // Split CSS into separate files
    assetsInlineLimit: 4096,     // Inline assets smaller than 4kb
    
    // Build performance
    reportCompressedSize: false, // Disable gzip size reporting for faster builds
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000, // Warn if chunk size exceeds 1000kb
  },
  
  // CSS optimization
  css: {
    devSourcemap: mode === "development",
    modules: {
      localsConvention: "camelCase",
    },
  },
  
  // Optimization options
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@tanstack/react-query",
    ],
    exclude: ["@vite/client", "@vite/env"],
  },
  
  // Preview server configuration
  preview: {
    port: 8080,
    host: true,
  },
  
  // Environment variables prefix
  envPrefix: "VITE_",
}))
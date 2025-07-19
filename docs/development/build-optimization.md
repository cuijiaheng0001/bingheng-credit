# 构建优化指南

本文档介绍 Bingheng Credit 网站的构建优化配置和使用方法。

## 概述

我们对 Vite 构建配置进行了全面优化，以提升网站的加载性能、减少包体积，并改善用户体验。

## 优化策略

### 1. 代码分割 (Code Splitting)

#### 手动分块配置

```javascript
manualChunks: {
  // React 核心库
  react: ["react", "react-dom", "react-router-dom"],
  
  // UI 组件库
  ui: ["@radix-ui/react-accordion", "@radix-ui/react-dialog", ...],
  
  // 表单处理
  forms: ["react-hook-form", "@hookform/resolvers", "zod"],
  
  // 工具库
  utils: ["clsx", "tailwind-merge", "class-variance-authority"],
}
```

**优势：**
- 更好的缓存策略
- 并行加载
- 按需加载

### 2. 资源优化

#### 文件命名策略

- **JavaScript**: `assets/[name]-[hash].js`
- **Vendor 代码**: `assets/vendor-[hash].js`
- **图片**: `assets/images/[name]-[hash][extname]`
- **字体**: `assets/fonts/[name]-[hash][extname]`

#### 内联小资源

```javascript
assetsInlineLimit: 4096 // 小于 4KB 的资源会被内联
```

### 3. 压缩优化

#### Terser 配置

生产环境下：
- 移除所有 console.log
- 移除 debugger 语句
- 删除注释
- 压缩代码

### 4. CSS 优化

- **代码分割**: CSS 文件独立打包
- **Source Maps**: 仅在开发环境生成
- **模块化**: 支持 CSS Modules

## 使用指南

### 构建命令

```bash
# 标准构建
npm run build

# 开发模式构建（保留 source maps）
npm run build:dev

# SEO 优化构建（包含预渲染）
npm run build:seo

# 构建分析（生成可视化报告）
npm run build:analyze
```

### 构建分析

运行 `npm run build:analyze` 后会：
1. 执行完整构建
2. 生成 `dist/stats.html`
3. 自动在浏览器中打开分析报告

分析报告包含：
- 包体积分布
- 依赖关系图
- Gzip 压缩后大小
- Brotli 压缩后大小

## 性能指标

### 目标指标

- **首屏加载**: < 3秒（3G 网络）
- **交互时间**: < 5秒
- **包体积**: 主包 < 200KB（gzip）

### 监控方法

1. **Lighthouse 测试**
   ```bash
   npx lighthouse https://binghengcredit.com --view
   ```

2. **Bundle 分析**
   ```bash
   npm run build:analyze
   ```

3. **网络分析**
   - Chrome DevTools Network 面板
   - 检查资源加载顺序
   - 识别阻塞资源

## 优化建议

### 1. 路由懒加载

对于大型页面组件，使用动态导入：

```tsx
const HeavyPage = lazy(() => import('./pages/HeavyPage'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Route path="/heavy" element={<HeavyPage />} />
    </Suspense>
  );
}
```

### 2. 图片优化

- 使用 WebP 格式
- 实现响应式图片
- 懒加载非关键图片

```tsx
<img 
  loading="lazy"
  src="image.webp"
  srcSet="image-300.webp 300w, image-600.webp 600w"
  sizes="(max-width: 600px) 300px, 600px"
/>
```

### 3. 预加载关键资源

在 `index.html` 中添加：

```html
<link rel="preload" href="/fonts/main.woff2" as="font" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
```

### 4. 减少第三方依赖

- 定期审查依赖
- 使用轻量级替代品
- 按需导入

```tsx
// 不好 - 导入整个库
import _ from 'lodash';

// 好 - 只导入需要的函数
import debounce from 'lodash/debounce';
```

## 环境变量

### 构建相关变量

- `NODE_ENV`: 'development' | 'production'
- `ANALYZE`: 设置为 'true' 启用包分析
- `VITE_*`: 自定义环境变量

### 使用示例

```tsx
if (import.meta.env.PROD) {
  // 生产环境特定代码
}

const apiUrl = import.meta.env.VITE_API_URL;
```

## 持续优化

### 定期检查清单

- [ ] 运行 bundle 分析，检查包体积
- [ ] 更新依赖到最新稳定版本
- [ ] 运行 Lighthouse 测试
- [ ] 检查未使用的代码和依赖
- [ ] 优化图片资源
- [ ] 验证缓存策略

### 性能预算

设置性能预算以防止性能退化：

```javascript
// vite.config.ts
build: {
  chunkSizeWarningLimit: 1000, // 1MB 警告阈值
}
```

## 故障排查

### 常见问题

1. **构建失败**
   - 清除 node_modules 和 package-lock.json
   - 重新安装依赖
   - 检查 TypeScript 错误

2. **包体积过大**
   - 运行构建分析
   - 检查是否有大型依赖被错误打包
   - 考虑代码分割

3. **构建速度慢**
   - 关闭 source maps（生产环境）
   - 使用 `npm run build:dev` 进行测试
   - 升级到最新版 Vite

## 相关资源

- [Vite 官方文档](https://vitejs.dev/)
- [Rollup 优化指南](https://rollupjs.org/guide/en/#tree-shaking)
- [Web.dev 性能优化](https://web.dev/fast/)
- [Bundle Phobia](https://bundlephobia.com/) - 检查 npm 包大小

---

最后更新：2025-07-19
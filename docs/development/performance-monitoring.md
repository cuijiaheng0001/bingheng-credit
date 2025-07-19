# 性能监控指南

本文档介绍 Bingheng Credit 网站的性能监控实现和使用方法。

## 概述

我们使用 Google 的 [Web Vitals](https://web.dev/vitals/) 库来监控网站的核心性能指标，帮助确保良好的用户体验。

## 监控的指标

### 核心 Web Vitals

1. **LCP (Largest Contentful Paint)** - 最大内容绘制
   - 衡量加载性能
   - 良好：< 2.5秒
   - 需改进：2.5-4秒
   - 差：> 4秒

2. **INP (Interaction to Next Paint)** - 交互到下一次绘制
   - 衡量交互性（替代了 FID）
   - 良好：< 200毫秒
   - 需改进：200-500毫秒
   - 差：> 500毫秒

3. **CLS (Cumulative Layout Shift)** - 累积布局偏移
   - 衡量视觉稳定性
   - 良好：< 0.1
   - 需改进：0.1-0.25
   - 差：> 0.25

### 其他 Web Vitals

4. **FCP (First Contentful Paint)** - 首次内容绘制
   - 首次渲染任何内容的时间

5. **TTFB (Time to First Byte)** - 首字节时间
   - 服务器响应时间

## 实现细节

### 性能监控模块

位置：`src/lib/performance.ts`

主要功能：
- 自动收集 Web Vitals 指标
- 开发环境下在控制台显示指标
- 支持发送数据到分析端点
- 提供自定义性能标记和测量功能

### 使用方法

#### 1. 基础使用

性能监控已在 `src/main.tsx` 中自动初始化：

```typescript
import { initWebVitals } from './lib/performance'

// 初始化 Web Vitals 监控
initWebVitals();
```

#### 2. 自定义性能标记

```typescript
import { markPerformance, measurePerformance } from '@/lib/performance'

// 标记开始时间
markPerformance('myFeature-start');

// 执行某些操作...

// 标记结束时间并测量
markPerformance('myFeature-end');
measurePerformance('myFeature-duration', 'myFeature-start', 'myFeature-end');
```

#### 3. 获取详细性能数据

```typescript
import { getPerformanceData } from '@/lib/performance'

const perfData = getPerformanceData();
console.log('页面加载时间:', perfData?.pageLoadTime);
```

## 开发环境

在开发环境下，所有性能指标会自动在浏览器控制台中显示：

- ✅ 表示"良好"
- ⚠️ 表示"需要改进"
- ❌ 表示"差"

示例输出：
```
✅ Web Vitals: LCP
  Value: 1523.40
  Rating: good
  Delta: 1523.40
  ID: v3-1234567890123-1234567890
```

## 生产环境配置

### 1. 配置分析端点

在 `.env` 文件中设置：
```env
VITE_PERFORMANCE_ENDPOINT=https://your-analytics-endpoint.com/metrics
```

### 2. 集成 Google Analytics 4

如果使用 GA4，性能数据会自动发送到 Google Analytics。

### 3. 自定义分析服务

修改 `sendToAnalytics` 函数以集成其他分析服务：

```typescript
// 例如：集成 Sentry
if (window.Sentry) {
  window.Sentry.addBreadcrumb({
    category: 'web-vitals',
    message: metric.name,
    level: 'info',
    data: {
      value: metric.value,
      rating: metric.rating,
    },
  });
}
```

## 性能优化建议

基于 Web Vitals 指标的常见优化方法：

### 改善 LCP
- 优化服务器响应时间
- 使用 CDN
- 优化关键资源加载
- 预加载重要资源

### 改善 INP
- 减少 JavaScript 执行时间
- 使用 Web Workers
- 优化事件处理程序
- 实施代码分割

### 改善 CLS
- 为图片和视频指定尺寸
- 避免动态注入内容
- 使用 CSS transform 而非改变布局属性
- 确保字体加载不会导致布局偏移

## 监控和报警

建议设置以下监控：

1. **实时监控面板**
   - 使用 Google Analytics 或自定义仪表板
   - 监控 P75 指标值

2. **报警阈值**
   - LCP > 3秒
   - INP > 300毫秒
   - CLS > 0.15

3. **定期报告**
   - 每周性能趋势
   - 按设备类型分析
   - 按地理位置分析

## 故障排查

### 常见问题

1. **指标未上报**
   - 检查网络请求是否被阻止
   - 确认端点配置正确
   - 查看控制台错误信息

2. **指标值异常**
   - 使用 Chrome DevTools Performance 面板分析
   - 检查是否有第三方脚本影响
   - 验证测试环境的网络条件

3. **开发环境无输出**
   - 确认 NODE_ENV 为 'development'
   - 检查浏览器控制台过滤设置

## 相关资源

- [Web Vitals 官方文档](https://web.dev/vitals/)
- [Chrome 用户体验报告](https://developers.google.com/web/tools/chrome-user-experience-report)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

最后更新：2025-07-19
# 错误处理指南

本文档介绍 Bingheng Credit 网站的错误处理机制和最佳实践。

## 概述

我们使用 React Error Boundary 来捕获和处理组件树中的 JavaScript 错误，提供优雅的错误回退界面，确保应用的稳定性。

## ErrorBoundary 组件

### 位置
`src/components/ErrorBoundary.tsx`

### 功能特性

1. **错误捕获**
   - 捕获子组件树中的 JavaScript 错误
   - 防止错误导致整个应用崩溃
   - 记录错误信息用于调试

2. **用户友好的错误界面**
   - 清晰的错误提示
   - 多种恢复选项（重试、重新加载、返回首页）
   - 联系支持的引导

3. **开发环境支持**
   - 显示详细的错误信息
   - 展示组件堆栈追踪
   - 便于快速定位问题

4. **生产环境集成**
   - 自动上报错误到监控服务（如 Sentry）
   - 记录到 Google Analytics
   - 隐藏敏感的技术细节

## 使用方法

### 1. 全局错误边界

ErrorBoundary 已在 `App.tsx` 中配置为全局错误边界：

```tsx
const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      {/* 应用内容 */}
    </QueryClientProvider>
  </ErrorBoundary>
);
```

### 2. 局部错误边界

为特定功能添加局部错误边界：

```tsx
import { ErrorBoundary } from '@/components/ErrorBoundary';

function RiskyFeature() {
  return (
    <ErrorBoundary fallback={<CustomErrorUI />}>
      <ComplexComponent />
    </ErrorBoundary>
  );
}
```

### 3. 使用 HOC 包装组件

```tsx
import { withErrorBoundary } from '@/components/ErrorBoundary';

const SafeComponent = withErrorBoundary(RiskyComponent, <CustomFallback />);
```

## 错误类型处理

### ErrorBoundary 能捕获的错误

- 渲染期间的错误
- 生命周期方法中的错误
- 构造函数中的错误

### ErrorBoundary 不能捕获的错误

- 事件处理程序中的错误
- 异步代码中的错误（如 setTimeout、Promise）
- 服务端渲染的错误
- ErrorBoundary 自身抛出的错误

### 处理事件处理程序错误

```tsx
function MyComponent() {
  const handleClick = () => {
    try {
      // 危险操作
      riskyOperation();
    } catch (error) {
      console.error('操作失败:', error);
      // 显示用户友好的错误提示
      toast.error('操作失败，请重试');
    }
  };

  return <button onClick={handleClick}>点击</button>;
}
```

### 处理异步错误

```tsx
async function fetchData() {
  try {
    const response = await api.getData();
    return response;
  } catch (error) {
    console.error('数据获取失败:', error);
    // 可以选择重新抛出错误让 ErrorBoundary 捕获
    throw new Error('无法加载数据');
  }
}
```

## 错误监控集成

### Sentry 集成（示例）

```tsx
// 在 main.tsx 中初始化
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
```

### Google Analytics 集成

错误会自动发送到 GA4（如果已配置）：

```javascript
gtag('event', 'exception', {
  description: error.message,
  fatal: true,
});
```

## 最佳实践

### 1. 分层错误处理

```
App (全局 ErrorBoundary)
  └── Feature (功能级 ErrorBoundary)
      └── Component (组件级 try-catch)
```

### 2. 错误恢复策略

- **局部重试**：允许用户重试失败的操作
- **降级方案**：提供简化版功能
- **缓存数据**：显示缓存的数据而非完全失败

### 3. 错误预防

```tsx
// 使用默认值防止空值错误
const value = data?.property ?? defaultValue;

// 类型检查
if (typeof callback === 'function') {
  callback();
}

// 边界检查
if (index >= 0 && index < array.length) {
  return array[index];
}
```

### 4. 用户体验

- 提供清晰的错误信息
- 避免技术术语
- 提供可行的解决方案
- 保持品牌一致性

## 测试错误处理

### 1. 手动测试

在开发环境中，可以创建一个测试组件：

```tsx
function ErrorTest() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('测试错误边界');
  }

  return (
    <button onClick={() => setShouldError(true)}>
      触发错误
    </button>
  );
}
```

### 2. 单元测试

```tsx
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '@/components/ErrorBoundary';

test('ErrorBoundary 显示错误界面', () => {
  const ThrowError = () => {
    throw new Error('测试错误');
  };

  render(
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  );

  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
});
```

## 常见错误场景

### 1. API 请求失败

```tsx
const { data, error, isLoading } = useQuery({
  queryKey: ['userData'],
  queryFn: fetchUserData,
  retry: 3,
  retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
});

if (error) {
  return <ErrorMessage message="无法加载数据" />;
}
```

### 2. 图片加载失败

```tsx
<img 
  src={imageUrl} 
  alt={alt}
  onError={(e) => {
    e.currentTarget.src = '/placeholder.svg';
  }}
/>
```

### 3. 路由错误

使用 NotFound 页面处理无效路由，已在路由配置中实现。

## 故障排查

### 开发环境

1. 检查浏览器控制台的错误信息
2. 查看 ErrorBoundary 显示的组件堆栈
3. 使用 React Developer Tools 调试

### 生产环境

1. 检查错误监控服务（Sentry、GA4）
2. 查看服务器日志
3. 复现用户报告的步骤

## 相关资源

- [React Error Boundaries 文档](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Sentry React 集成](https://docs.sentry.io/platforms/javascript/guides/react/)
- [错误处理最佳实践](https://web.dev/errors-and-error-handling/)

---

最后更新：2025-07-19
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function usePageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 确保代码仅在客户端执行
    if (typeof window === 'undefined') return;
    
    // 等待gtag加载完成
    if (typeof (window as any).gtag !== 'function') {
      console.warn('Google Analytics not loaded yet');
      return;
    }

    // 构建完整URL路径
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    // 发送页面浏览事件到Google Analytics
    try {
      (window as any).gtag('event', 'page_view', {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      });
    } catch (error) {
      console.error('Failed to send page view to Google Analytics:', error);
    }
  }, [pathname, searchParams]);
} 
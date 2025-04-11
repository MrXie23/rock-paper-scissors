'use client';

import { ReactNode } from 'react';
import usePageTracking from '@/hooks/usePageTracking';

interface PageTrackerProps {
  children: ReactNode;
}

export default function PageTracker({ children }: PageTrackerProps) {
  // 使用自定义钩子跟踪页面变化
  usePageTracking();
  
  return <>{children}</>;
} 
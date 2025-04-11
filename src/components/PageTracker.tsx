'use client';

import { ReactNode, Suspense } from 'react';
import usePageTracking from '@/hooks/usePageTracking';

interface PageTrackerProps {
  children: ReactNode;
}

// 内部组件，使用usePageTracking
function PageTrackerInner() {
  usePageTracking();
  return null;
}

export default function PageTracker({ children }: PageTrackerProps) {
  return (
    <>
      <Suspense fallback={null}>
        <PageTrackerInner />
      </Suspense>
      {children}
    </>
  );
} 
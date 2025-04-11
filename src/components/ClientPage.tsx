'use client';

import dynamic from 'next/dynamic';

// 动态导入Game组件并禁用SSR
const GameWithNoSSR = dynamic(() => import('@/components/Game'), {
  ssr: false,
});

export default function ClientPage() {
  return <GameWithNoSSR />;
} 
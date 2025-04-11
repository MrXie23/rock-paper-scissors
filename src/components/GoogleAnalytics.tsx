'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string; // GA Measurement ID (G-XXXXXXXXXX)
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const [mounted, setMounted] = useState(false);

  // 确保组件仅在客户端渲染
  useEffect(() => {
    setMounted(true);
  }, []);

  // 服务器端渲染时不加载任何内容
  if (!mounted) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
} 
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import type { Metadata } from 'next';
import './globals.css';
import pretendardRegular from './_constants/font';
import { MSWComponent } from '@/public/mocks/MSWComponent';
import Script from 'next/script';
import QueryProvider from './_providers/QueryProvider';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false&libraries=services`}
          strategy="beforeInteractive"
        />
      </head>
      <QueryProvider>
        <body className={`${pretendardRegular.className} bg-gray`}>
          <div className="mx-auto min-h-screen max-w-[375px]">
            <MSWComponent>{children}</MSWComponent>
          </div>
        </body>
      </QueryProvider>
    </html>
  );
}

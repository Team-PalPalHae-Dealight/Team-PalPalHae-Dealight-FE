import type { Metadata } from 'next';
import './globals.css';
import pretendardRegular from './_constants/font';
import QueryProvider from './_providers/QueryProvider';
import { AuthProvider } from './_providers/AuthProvider';
import { UserInfoProvider } from './_providers/UserInfoProvider';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

export const metadata: Metadata = {
  title: '즐거운 가격, 함께하는 맛의 기쁨 Dealight',
  description:
    '소상공인들의 당일 폐기 예정 식품의 할인 정보 공유 및 구매/판매 서비스',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <QueryProvider>
        <AuthProvider>
          <UserInfoProvider>
            <body
              className={`${pretendardRegular.className} mx-auto min-h-screen w-full max-w-[480px] text-black`}
            >
              <main className="min-h-screen w-full bg-gray">{children}</main>
            </body>
          </UserInfoProvider>
        </AuthProvider>
      </QueryProvider>
    </html>
  );
}

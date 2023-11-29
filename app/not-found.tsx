import Link from 'next/link';
import CustomerHeader from './_components/Header/CustomerHeader';
import CustomerFooter from './_components/Footer/CustomerFooter';

export default function NotFound() {
  return (
    <>
      <CustomerHeader />

      <div className="mt-44 flex flex-col gap-8 text-center">
        <h2 className="text-xl font-semibold">잘못된 페이지 접근</h2>
        <Link href="/" scroll={false} replace={true}>
          딜라이트로 이동하기
        </Link>
      </div>
      <CustomerFooter />
    </>
  );
}

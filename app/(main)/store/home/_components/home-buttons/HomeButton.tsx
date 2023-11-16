import Link from 'next/link';
import Image from 'next/image';
import orderList from '@/app/_assets/images/order-list.png';
import productRegistration from '@/app/_assets/images/product-registration.png';

const HomeButton = () => {
  return (
    <div className="mt-2.5 flex w-full gap-2">
      <Link
        className="relative w-full rounded-lg bg-white p-1.5 shadow"
        /**
         * @todo
         * 라우팅 작업 수정 필요
         */
        href={'/'}
      >
        <b className="text-xl font-semibold">주문내역</b>
        <p className="mb-4 mt-2.5 text-xs">
          한눈에 <br /> 주문 확인하기
        </p>
        <Image
          src={orderList}
          priority
          alt="order-list"
          className="absolute bottom-0 right-0"
        />
      </Link>

      <Link
        className="relative w-full rounded-lg bg-white px-1.5 py-3.5 shadow"
        /**
         * @todo
         * 라우팅 작업 수정 필요
         */
        href={'/'}
      >
        <b className="text-xl font-semibold">상품 등록</b>
        <p className="mb-4 mt-2.5 text-xs">
          원하는 <br /> 상품 등록하기
        </p>
        <Image
          src={productRegistration}
          priority
          alt="product-registration"
          className="absolute bottom-0 right-0"
        />
      </Link>
    </div>
  );
};

export default HomeButton;

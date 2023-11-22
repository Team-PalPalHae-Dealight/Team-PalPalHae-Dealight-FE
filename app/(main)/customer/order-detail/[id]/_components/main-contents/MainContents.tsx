'use client';

import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import ProductList from '../product-list/ProductList';
import OrderResult from '@/app/_components/order-result/OrderResult';
import Footer from '@/app/_components/Footer/Footer';

const MainContents = () => {
  /** @TODO API 연결 후 res로 받은 데이터로 초기화시키기 */
  const data = {
    storeName: '행복도너츠가게',
    totalCount: '4',
    totalPrice: '11000',
    arriveTime: '17 : 32',
    useName: '에프와 오프',
    comments: '빨리 갈께요!',
  };
  return (
    <>
      <CustomerHeader />

      <div className="flex flex-col items-center">
        <div className="w-full p-5">
          <ProductList />
          <OrderResult data={data} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainContents;

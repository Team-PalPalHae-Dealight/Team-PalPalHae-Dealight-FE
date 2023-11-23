'use client';

import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import ProductList from '../product-list/ProductList';
import OrderResult from '@/app/_components/order-result/OrderResult';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
import { useCallback, useEffect, useState } from 'react';
import { getOrder } from '@/app/_services/order/getOrder';
import ReviewButton from '../review-button/ReviewButton';

type OrderResultPropsType = {
  storeName: string;
  totalCount: string;
  totalPrice: string;
  arriveTime: string;
  useName: string;
  comments: string;
};

const MainContents = () => {
  const [data, setData] = useState();
  const [order, setOrder] = useState<OrderResultPropsType>();
  console.log(data, order);

  const orderId = window.location.href.split('/')[5];

  const sampleData = {
    storeName: '행복도너츠가게',
    totalCount: '4',
    totalPrice: '11000',
    arriveTime: '17 : 32',
    useName: '에프와 오프',
    comments: '빨리 갈께요!',
    status: '주문 접수',
  };

  const getData = useCallback(async () => {
    const res = await getOrder(Number(orderId));
    console.log(res);

    /** @todo sampleData 자리에 order로 초기화, status 자리에 data.status 초기화 */
    setData(res);
    setOrder({
      storeName: res.storeName,
      totalCount: res.orderProductsRes.orderProducts.length,
      totalPrice: res.totalPrice,
      arriveTime: res.arrivalTime,
      useName: res.memberNickName,
      comments: res.demand,
    });
  }, [orderId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <main className="flex flex-col items-center">
      <CustomerHeader />
      <div className="w-full p-5">
        <ProductList />
        <OrderResult data={sampleData} />
        <ReviewButton status={sampleData.status} orderId={Number(orderId)} />
      </div>
      <CustomerFooter />
    </main>
  );
};

export default MainContents;

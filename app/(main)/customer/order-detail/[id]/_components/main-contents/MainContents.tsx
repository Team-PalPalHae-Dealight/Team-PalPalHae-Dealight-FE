'use client';

import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import ProductList from '../product-list/ProductList';
import OrderResult from '@/app/_components/order-result/OrderResult';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
import { useCallback, useEffect, useState } from 'react';
import { getOrder } from '@/app/_services/order/getOrder';
import ReviewButton from '../review-button/ReviewButton';
import { useParams } from 'next/navigation';
import Spinner from '@/app/_components/spinner/Spinner';

type OrderResultPropsType = {
  storeName: string;
  totalCount: string;
  totalPrice: string;
  arriveTime: string;
  useName: string;
  comments: string;
  status: string;
};

const MainContents = () => {
  const [data, setData] = useState();
  const [order, setOrder] = useState<OrderResultPropsType>();
  const orderId = useParams();
  console.log(data);

  const getData = useCallback(async () => {
    const res = await getOrder(Number(orderId.id));

    setData(res);
    setOrder({
      storeName: res.storeName,
      totalCount: res.orderProductsRes.orderProducts.length,
      totalPrice: res.totalPrice,
      arriveTime: res.arrivalTime,
      useName: res.memberNickName,
      comments: res.demand,
      status: res.status,
    });
  }, [orderId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <CustomerHeader />

      <div className="flex flex-col items-center">
        <div className="w-full p-5">
          <ProductList />
          {order ? (
            <>
              <OrderResult data={order} />
              <ReviewButton status={order.status} orderId={Number(orderId)} />
            </>
          ) : (
            <div className="flex h-48 items-center justify-center">
              <Spinner />
            </div>
          )}
        </div>
      </div>

      <CustomerFooter />
    </>
  );
};

export default MainContents;

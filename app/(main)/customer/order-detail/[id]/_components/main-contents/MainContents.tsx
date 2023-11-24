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

  /**
   * @todo
   * 주문 관련 api가 끝나고 res값을 productList로 보내줘야 함
   */
  const sampleRes = {
    orderId: 1,
    storeId: 1,
    memberId: 1,
    memberNickName: 'member nickName',
    storeName: 'GS25',
    demand: '도착할 때까지 상품 냉장고에 보관 부탁드려요',
    arrivalTime: '12:30:00',
    orderProductsRes: {
      orderProducts: [
        {
          itemId: 1,
          name: '달콤한 도넛',
          quantity: 5,
          discountPrice: 1000,
          originalPrice: 1500,
          image: '',
        },
        {
          itemId: 2,
          name: '그냥 그런 도넛',
          quantity: 4,
          discountPrice: 10,
          originalPrice: 100,
          image: '',
        },
        {
          itemId: 3,
          name: '크리스피 도넛',
          quantity: 3,
          discountPrice: 100,
          originalPrice: 1500,
          image: '',
        },
        {
          itemId: 4,
          name: '개노맛 도넛',
          quantity: 2,
          discountPrice: 10,
          originalPrice: 150,
          image: '',
        },
        {
          itemId: 5,
          name: '개비싼 도넛',
          quantity: 1,
          discountPrice: 10000,
          originalPrice: 150000,
          image: '',
        },
      ],
    },
    totalPrice: 10000,
    createdAt: '2023-11-23T15:41:17.870880549',
    status: '주문 확인',
    reviewContains: false,
  };

  return (
    <>
      <CustomerHeader />

      <div className="flex flex-col items-center">
        <div className="w-full p-5">
          <ProductList items={sampleRes} />
          <OrderResult data={sampleData} />
          <ReviewButton status={sampleData.status} orderId={Number(orderId)} />
        </div>
      </div>

      <CustomerFooter />
    </>
  );
};

export default MainContents;

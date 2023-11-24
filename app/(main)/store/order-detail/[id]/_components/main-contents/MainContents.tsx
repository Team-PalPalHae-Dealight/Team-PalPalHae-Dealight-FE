'use client';

import OrderResult from '@/app/_components/order-result/OrderResult';
import ProductList from '../product-list/ProductList';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { useCallback, useEffect, useState } from 'react';
import PopUp from '@/app/_components/pop-up/PopUp';
import { getOrder } from '@/app/_services/order/getOrder';

type OrderResultPropsType = {
  storeName: string;
  totalCount: string;
  totalPrice: string;
  arriveTime: string;
  userName: string;
  comments: string;
};

const MainContents = () => {
  /**
   * @todo
   * api res값의 status값을 토대로 state값 변경 로직 추가해야 함
   */
  const [status, setStatus] = useState('주문 접수');
  const [onPopUpCancel, setOnPopUpCancel] = useState(false);
  const [onPopUpReceive, setOnPopUpReceive] = useState(false);
  const [onPopUpReject, setOnPopUpReject] = useState(false);
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
    setStatus(res.status);
    setOrder({
      storeName: res.storeName,
      totalCount: res.orderProductsRes.orderProducts.length,
      totalPrice: res.totalPrice,
      arriveTime: res.arrivalTime,
      userName: res.memberNickName,
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
    <div className="p-5">
      <ProductList items={sampleRes} />
      <OrderResult data={sampleData} />
      <div className="mt-2 flex gap-3">
        {status === '주문 접수' && (
          <PrimaryButton onClick={() => setOnPopUpCancel(true)}>
            주문 취소하기
          </PrimaryButton>
        )}
        {status === '주문 확인' && (
          <>
            <PrimaryButton onClick={() => setOnPopUpReceive(true)}>
              접수하기
            </PrimaryButton>
            <PrimaryButton onClick={() => setOnPopUpReject(true)}>
              거절하기
            </PrimaryButton>
          </>
        )}
        {status === '주문 완료' && (
          <div className="mt-3 flex w-full items-center justify-center text-blue">
            <div>주문 완료</div>
          </div>
        )}
        {status === '주문 취소' && (
          <div className="mt-3 flex w-full items-center justify-center text-red">
            <div>주문 취소</div>
          </div>
        )}
      </div>
      {onPopUpCancel && (
        <PopUp
          mainText="주문을 취소하시겠습니까?"
          leftBtnText="네"
          rightBtnText="아니오"
          leftBtnClick={() => console.log('네')}
          rightBtnClick={() => setOnPopUpCancel(false)}
        />
      )}
      {onPopUpReceive && (
        <PopUp
          mainText="주문을 접수하시겠습니까?"
          leftBtnText="네"
          rightBtnText="아니오"
          leftBtnClick={() => console.log('네')}
          rightBtnClick={() => setOnPopUpReceive(false)}
        />
      )}
      {onPopUpReject && (
        <PopUp
          mainText="주문을 거절하시겠습니까?"
          leftBtnText="네"
          rightBtnText="아니오"
          leftBtnClick={() => console.log('네')}
          rightBtnClick={() => setOnPopUpReject(false)}
        />
      )}
    </div>
  );
};

export default MainContents;

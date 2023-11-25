'use client';

import OrderResult from '@/app/_components/order-result/OrderResult';
import ProductList from '../product-list/ProductList';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { useCallback, useEffect, useState } from 'react';
import PopUp from '@/app/_components/pop-up/PopUp';
import { getOrder } from '@/app/_services/order/getOrder';
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
  const [status] = useState('주문 취소'); // 이 status는 res.status로 접근 가능합니다. 따로 state 관리해주실 필요없을 듯합니다.
  const [order, setOrder] = useState<OrderResultPropsType>();
  const [onPopUpCancel, setOnPopUpCancel] = useState(false);
  const [onPopUpReceive, setOnPopUpReceive] = useState(false);
  const [onPopUpReject, setOnPopUpReject] = useState(false);

  const orderId = useParams();

  const getData = useCallback(async () => {
    const res = await getOrder(Number(orderId.id)); // 필요한 data를 res에서 받아주기

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
    <div className="px-5">
      <ProductList />
      {order ? (
        <>
          <OrderResult data={order} />
        </>
      ) : (
        <div className="flex h-48 items-center justify-center">
          <Spinner />
        </div>
      )}
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

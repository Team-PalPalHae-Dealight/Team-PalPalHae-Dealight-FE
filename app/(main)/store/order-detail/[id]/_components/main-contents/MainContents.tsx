'use client';

import OrderResult from '@/app/_components/order-result/OrderResult';
import ProductList from '../product-list/ProductList';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { useCallback, useEffect, useState } from 'react';
import PopUp from '@/app/_components/pop-up/PopUp';
import { getOrder } from '@/app/_services/order/getOrder';
import { PatchOrderPropsType, patchOrder } from '../../_services/patchOrder';
import { useParams, useRouter } from 'next/navigation';
import Spinner from '@/app/_components/spinner/Spinner';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import pageRoute from '@/app/_constants/path';

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
  const [onPopUpCancel, setOnPopUpCancel] = useState(false);
  const [onPopUpConfirmed, setOnPopUpConfirmed] = useState(false);
  const [onPopUpReject, setOnPopUpReject] = useState(false);
  const [onPopUpCompleted, setOnPopUpCompleted] = useState(false);
  const [data, setData] = useState();
  const [order, setOrder] = useState<OrderResultPropsType>();

  const router = useRouter();
  const { providerId } = useUserInfo();

  const orderId = useParams();

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

  const updateOrder = async ({ orderId, status }: PatchOrderPropsType) => {
    await patchOrder({ orderId, status });

    router.push(
      providerId
        ? pageRoute.store.orderList(String(providerId))
        : pageRoute.store.login()
    );
  };

  return (
    <div className="px-5">
      <ProductList items={data} />
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
        {order?.status === '주문 확인' && (
          <>
            <PrimaryButton onClick={() => setOnPopUpCancel(true)}>
              주문 취소하기
            </PrimaryButton>
            <PrimaryButton onClick={() => setOnPopUpCompleted(true)}>
              주문 완료하기
            </PrimaryButton>
          </>
        )}
        {order?.status === '주문 접수' && (
          <>
            <PrimaryButton onClick={() => setOnPopUpConfirmed(true)}>
              주문 접수하기
            </PrimaryButton>
            <PrimaryButton onClick={() => setOnPopUpReject(true)}>
              주문 거절하기
            </PrimaryButton>
          </>
        )}
        {order?.status === '주문 완료' && (
          <div className="mt-3 flex w-full items-center justify-center text-blue">
            <div>주문 완료</div>
          </div>
        )}
        {order?.status === '주문 취소' && (
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
          leftBtnClick={() =>
            updateOrder({ orderId: String(orderId.id), status: 'CANCELED' })
          }
          rightBtnClick={() => setOnPopUpCancel(false)}
        />
      )}
      {onPopUpConfirmed && (
        <PopUp
          mainText="주문을 접수하시겠습니까?"
          leftBtnText="네"
          rightBtnText="아니오"
          leftBtnClick={() =>
            updateOrder({ orderId: String(orderId.id), status: 'CONFIRMED' })
          }
          rightBtnClick={() => setOnPopUpConfirmed(false)}
        />
      )}
      {onPopUpReject && (
        <PopUp
          mainText="주문을 거절하시겠습니까?"
          leftBtnText="네"
          rightBtnText="아니오"
          leftBtnClick={() =>
            updateOrder({ orderId: String(orderId.id), status: 'CANCELED' })
          }
          rightBtnClick={() => setOnPopUpReject(false)}
        />
      )}
      {onPopUpCompleted && (
        <PopUp
          mainText="주문을 완료 하시겠습니까?"
          leftBtnText="네"
          rightBtnText="아니오"
          leftBtnClick={() =>
            updateOrder({ orderId: String(orderId.id), status: 'COMPLETED' })
          }
          rightBtnClick={() => setOnPopUpCompleted(false)}
        />
      )}
    </div>
  );
};

export default MainContents;

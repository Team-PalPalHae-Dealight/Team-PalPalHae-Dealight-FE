'use client';

import OrderResult from '@/app/_components/order-result/OrderResult';
import ProductList from '../product-list/ProductList';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { useState } from 'react';
import PopUp from '@/app/_components/pop-up/PopUp';

const MainContents = () => {
  /**
   * @todo
   * api res값의 status값을 토대로 state값 변경 로직 추가해야 함
   */
  const [status] = useState('주문 취소');
  const [onPopUpCancel, setOnPopUpCancel] = useState(false);
  const [onPopUpReceive, setOnPopUpReceive] = useState(false);
  const [onPopUpReject, setOnPopUpReject] = useState(false);

  const data = {
    storeName: '행복도너츠가게',
    totalCount: '5',
    totalPrice: '11000',
    arriveTime: '17 : 32',
    useName: '에프와 오프',
    comments: '빨리 갈께요!!',
  };
  return (
    <main className="px-5">
      <ProductList />
      <OrderResult data={data} />
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
    </main>
  );
};

export default MainContents;

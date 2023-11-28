'use client';

import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { useState } from 'react';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import DeligitEmoji from 'app/(main)/customer/review-write/assets/delight-emoji.svg';
import { axiosInstance } from '@/app/_services/apiClient';
import { useParams } from 'next/navigation';
export default function Page() {
  const orderId = useParams();
  const [good, setIsGood] = useState(false);
  const [kind, setIsKind] = useState(false);
  const [same, setIsSame] = useState(false);
  const [special, setIsSpecial] = useState(false);
  const [cheap, setIsCheap] = useState(false);

  return (
    <>
      <CustomerHeader />
      <div className="flex flex-col items-center px-5 ">
        <div className="m-4 w-full text-lg font-semibold leading-normal">
          응원의 메세지
        </div>
        <div className="flex-between flex w-full flex-col items-center ">
          <div
            onClick={() => {
              setIsGood(prevGood => !prevGood);
            }}
            className={`my-2 flex h-11 w-full flex-row gap-1 rounded-md bg-white ${
              good ? ' border border-blue' : ''
            }`}
            style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
          >
            <DeligitEmoji className="ml-1 mt-1 h-7 w-7" />
            <div className="py-3 text-xs font-semibold not-italic leading-normal">
              상품 상태가 좋아요
            </div>
          </div>
          <div
            onClick={() => setIsKind(prevKind => !prevKind)}
            className={`my-2 flex h-11 w-full flex-row gap-1 rounded-md bg-white ${
              kind ? ' border border-blue' : ''
            }`}
            style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
          >
            <DeligitEmoji className="ml-1 mt-1 h-7 w-7" />

            <div className="py-3 text-xs font-semibold not-italic leading-normal">
              사장님이 친절해요
            </div>
          </div>
          <div
            onClick={() => setIsSpecial(prevSpecial => !prevSpecial)}
            className={`my-2 flex h-11 w-full flex-row gap-1 rounded-md bg-white ${
              special ? ' border border-blue' : ''
            }`}
            style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
          >
            <DeligitEmoji className="ml-1 mt-1 h-7 w-7" />
            <div className="py-3 text-xs font-semibold not-italic leading-normal">
              특별한 상품이 있어요
            </div>
          </div>
          <div
            onClick={() => setIsCheap(prevCheap => !prevCheap)}
            className={`my-2 flex h-11 w-full flex-row gap-1 rounded-md bg-white ${
              cheap ? ' border border-blue' : ''
            }`}
            style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
          >
            <DeligitEmoji className="ml-1 mt-1 h-7 w-7" />

            <div className="py-3 text-xs font-semibold not-italic leading-normal">
              가격이 저렴해요
            </div>
          </div>
          <div
            onClick={() => setIsSame(prevSame => !prevSame)}
            className={`mb-5 mt-2 flex h-11 w-full flex-row gap-1 rounded-md bg-white ${
              same ? ' border border-blue' : ''
            }`}
            style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
          >
            <DeligitEmoji className="ml-1 mt-1 h-7 w-7" />
            <div className="py-3 text-xs font-semibold not-italic leading-normal">
              게시된 설명이 자세하고 실제 상품과 동일해요
            </div>
          </div>
        </div>

        <PrimaryButton
          onClick={async () => {
            let data: string[] = [];
            const url = `/reviews/orders?id=${orderId.orderId}`;
            if (good === true) {
              data = [...data, '상품 상태가 좋아요'];
            }
            if (kind === true) {
              data = [...data, '사장님이 친절해요'];
            }
            if (special === true) {
              data = [...data, '특별한 상품이 있어요'];
            }
            if (cheap === true) {
              data = [...data, '가격이 저렴해요'];
            }
            if (same === true) {
              data = [...data, '게시된 설명이 자세하고 실제 상품과 동일해요.'];
            }
            try {
              await axiosInstance.post(url, {
                messages: [...data],
              });
              alert('리뷰 등록에 성공하였습니다');
            } catch (error) {
              if (
                error?.response?.data?.message ===
                '주문에 대한 리뷰가 이미 존재합니다.'
              ) {
                alert('주문에 대한 리뷰가 이미 존재합니다.');
              } else if (
                error.response.data.message === '존재하지 않는 주문입니다'
              ) {
                alert('존재하지 않는 주문입니다');
              } else {
                console.log(error);
              }
            }
          }}
        >
          제출하기
        </PrimaryButton>
      </div>
    </>
  );
}

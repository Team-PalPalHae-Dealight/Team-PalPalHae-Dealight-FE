'use client';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import { useEffect, useState } from 'react';
import { MessageCard } from '../_component/messagecard/MessageCard';
import { axiosInstance } from '@/app/_services/apiClient';
import { useParams } from 'next/navigation';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
export default function Page() {
  const [good, setIsGood] = useState(false);
  const [kind, setIsKind] = useState(false);
  const [same, setIsSame] = useState(false);
  const [special, setIsSpecial] = useState(false);
  const [cheap, setIsCheap] = useState(false);
  const orderId = useParams();

  useEffect(() => {
    const getReview = async () => {
      const url = `/reviews/orders?id=${orderId.id}`;
      try {
        const res = await axiosInstance.get(url);
        if (res.data.messages.includes('사장님이 친절해요') === true) {
          setIsKind(true);
        }
        if (res.data.messages.includes('가격이 저렴해요') === true) {
          setIsCheap(true);
        }
        if (res.data.messages.includes('특별한 상품이 있어요') === true) {
          setIsSpecial(true);
        }
        if (
          res.data.messages.includes(
            '게시된 설명이 자세하고 실제 상품과 동일해요.'
          ) === true
        ) {
          setIsSame(true);
        }
        if (res.data.messages.includes('상품 상태가 좋아요') === true) {
          setIsGood(true);
        }
      } catch (error) {
        console.error('Error occurred while sending data:', error);
      }
    };
    getReview();
  });
  return (
    <>
      <CustomerHeader />
      <div className="flex flex-col items-center px-5 ">
        <MessageCard
          good={good}
          kind={kind}
          special={special}
          cheap={cheap}
          same={same}
        />
      </div>
      <CustomerFooter />
    </>
  );
}

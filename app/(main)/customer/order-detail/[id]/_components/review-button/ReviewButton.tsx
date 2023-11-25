import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import pageRoute from '@/app/_constants/path';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { cancelOrder } from '../../_services/cancelOrder';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PopUp from '@/app/_components/pop-up/PopUp';
import ReviewWriteButton from './ReviewWriteButton';

type ReviewButtonPropsType = {
  status: string;
  isReview: boolean;
  orderId: number;
};

const ReviewButton = ({ status, isReview, orderId }: ReviewButtonPropsType) => {
  const { providerId } = useUserInfo();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(true);
  };

  const cancel = async () => {
    await cancelOrder(orderId);

    router.push(
      providerId
        ? pageRoute.customer.orderList(String(providerId))
        : pageRoute.customer.login()
    );
  };

  return (
    <>
      {status === '주문 취소' ? (
        <div className="mb-16 flex h-12 w-full items-center justify-center rounded-md bg-light-gray text-base text-red shadow">
          주문 취소
        </div>
      ) : status === '주문 완료' ? (
        <ReviewWriteButton isReview={isReview} />
      ) : (
        <PrimaryButton className="mb-16" onClick={openPopup}>
          주문 취소하기
        </PrimaryButton>
      )}
      {open ? (
        <PopUp
          mainText="주문을 취소하시겠습니까?"
          leftBtnText="예"
          leftBtnClick={cancel}
          rightBtnText="아니요"
          rightBtnClick={() => setOpen(false)}
        ></PopUp>
      ) : null}
    </>
  );
};

export default ReviewButton;

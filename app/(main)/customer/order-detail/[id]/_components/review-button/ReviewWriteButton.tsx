import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import pageRoute from '@/app/_constants/path';
import Link from 'next/link';
type IsReviewType = {
  isReview: boolean;
  orderId: number;
};
const ReviewWriteButton = ({ isReview, orderId }: IsReviewType) => {
  console.log(' orderId', orderId);
  return (
    <>
      {isReview ? (
        //orderId
        <Link href={pageRoute.customer.review(String(orderId))}>
          <PrimaryButton className="mb-16" onClick={() => {}}>
            리뷰 확인하기
          </PrimaryButton>
        </Link>
      ) : (
        //orderId
        <Link href={pageRoute.customer.reviewWrite(String(orderId))}>
          <PrimaryButton className="mb-16" onClick={() => {}}>
            리뷰 작성하기
          </PrimaryButton>
        </Link>
      )}
    </>
  );
};
export default ReviewWriteButton;

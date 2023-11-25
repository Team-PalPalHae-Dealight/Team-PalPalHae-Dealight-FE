import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import pageRoute from '@/app/_constants/path';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import Link from 'next/link';

type IsReviewType = {
  isReview: boolean;
};

const ReviewWriteButton = ({ isReview }: IsReviewType) => {
  const { providerId } = useUserInfo();

  return (
    <>
      {isReview ? (
        <Link
          href={
            providerId
              ? pageRoute.customer.review(String(providerId))
              : pageRoute.customer.login()
          }
        >
          <PrimaryButton className="mb-16" onClick={() => {}}>
            리뷰 확인하기
          </PrimaryButton>
        </Link>
      ) : (
        <Link
          href={
            providerId
              ? pageRoute.customer.reviewWrite(String(providerId))
              : pageRoute.customer.login()
          }
        >
          <PrimaryButton className="mb-16" onClick={() => {}}>
            리뷰 작성하기
          </PrimaryButton>
        </Link>
      )}
    </>
  );
};

export default ReviewWriteButton;

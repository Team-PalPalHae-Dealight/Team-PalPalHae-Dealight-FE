import { axiosInstance } from '@/app/_services/apiClient';
import { ReviewType } from '@/app/_types/api/review';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

export const reviewKeys = {
  storeReviews: (reviewId: string) => ['review', reviewId] as const,
  myStoreReviews: () => ['review'] as const,
};

type GetStoreReviewsPropsType = { storeId: string };

export const getStoreReviews = async ({
  storeId,
}: GetStoreReviewsPropsType): Promise<ReviewType> => {
  const response = await axiosInstance.get(`/reviews/stores/${storeId}`);

  const data = response.data;

  return data;
};

export const getMyStoreReviews = async (): Promise<ReviewType> => {
  const response = await axiosInstance.get(`/reviews/stores`);

  const data = response.data;

  return data;
};

export const useGetStoreReviews = ({ storeId }: GetStoreReviewsPropsType) => {
  return useQuery({
    queryKey: reviewKeys.storeReviews(storeId),
    queryFn: () => getStoreReviews({ storeId }),
  });
};

export const useGetMyStoreReviews = () => {
  return useSuspenseQuery({
    queryKey: reviewKeys.myStoreReviews(),
    queryFn: getMyStoreReviews,
  });
};

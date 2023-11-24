import { axiosInstance } from '@/app/_services/apiClient';
import { ReviewType } from '@/app/_types/api/review';
import { useQuery } from '@tanstack/react-query';

export const reviewKeys = {
  storeReviews: (reviewId: string) => ['review', reviewId] as const,
};

type GetStoreReviewsByNotUserPropsType = { storeId: string };

export const getStoreReviewsByNotUser = async ({
  storeId,
}: GetStoreReviewsByNotUserPropsType): Promise<ReviewType> => {
  const response = await axiosInstance.get(`/reviews/stores/${storeId}`);

  const data = response.data;

  return data;
};

export const useGetStoreReviewsByNotUser = ({
  storeId,
}: GetStoreReviewsByNotUserPropsType) => {
  return useQuery({
    queryKey: [reviewKeys.storeReviews(storeId)],
    queryFn: () => getStoreReviewsByNotUser({ storeId }),
  });
};

type ReviewContentType =
  | '상품 상태가 좋아요'
  | '사장님이 친절해요'
  | '특별한 상품이 있어요'
  | '가격이 저렴해요'
  | '게시된 설명이 자세하고 실제 상품과 동일해요';

export type ReviewType = {
  storeId: number;
  reviews: { content: ReviewContentType; count: number }[];
};

export const REVIEWS = [
  { content: '상품 상태가 좋아요', count: 4 },
  { content: '사장님이 친절해요', count: 2 },
  { content: '특별한 상품이 있어요', count: 4 },
  { content: '가격이 저렴해요', count: 4 },
  { content: '게시된 설명이 자세하고 실제 상품과 동일해요', count: 4 },
] as const;

export type ReviewContents = (typeof REVIEWS)[number]['content'];

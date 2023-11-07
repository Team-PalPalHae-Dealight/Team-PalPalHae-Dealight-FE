'use client';

import { ItemType } from '@/app/_types/api/item';

const getProduct = async ({
  itemId,
}: {
  itemId: number;
}): Promise<ItemType> => {
  const data = await fetch(`http://localhost:3000/mocks/api/items/${itemId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  }).then(res => res.json());

  return data;
};

const ProductDetail = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  getProduct({ itemId: Number(productId) });

  return (
    <main>
      <h1>product-detail</h1>
    </main>
  );
};

export default ProductDetail;

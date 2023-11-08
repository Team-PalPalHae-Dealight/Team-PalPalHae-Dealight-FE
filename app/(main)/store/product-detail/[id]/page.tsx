import { ItemType } from '@/app/_types/api/item';

const getProduct = async ({
  itemId,
}: {
  itemId: string;
}): Promise<ItemType> => {
  const data = await fetch(`http://localhost:3000/mocks/api/items/${itemId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  }).then(res => res.json());

  console.log(data);
  return data;
};

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { id: itemId } = params;

  getProduct({ itemId });
  return (
    <main>
      <h1>product-detail</h1>
    </main>
  );
};

export default ProductDetail;

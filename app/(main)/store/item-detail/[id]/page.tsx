import { ItemType } from '@/app/_types/api/item';

const getItem = async ({ itemId }: { itemId: string }): Promise<ItemType> => {
  const data = await fetch(`http://localhost:3000/mocks/api/items/${itemId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  }).then(res => res.json());

  return data;
};

const ItemDetail = ({ params }: { params: { id: string } }) => {
  const { id: itemId } = params;

  getItem({ itemId });
  return (
    <main>
      <h1>item-detail</h1>
    </main>
  );
};

export default ItemDetail;

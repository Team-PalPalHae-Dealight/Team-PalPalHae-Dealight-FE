'use client';

import Link from 'next/link';
import Item from './_components/Item';
import pageRoute from '@/app/_constants/path';
import { useDeleteItem } from '@/app/_hooks/query/item';

const ItemDetail = ({ params }: { params: { id: string } }) => {
  const { id: itemId } = params;
  const { mutate: deleteItem } = useDeleteItem();

  return (
    <main>
      <h1>item-detail</h1>

      <Item itemId={itemId} />

      <Link href={pageRoute.store.itemDetailEdit(itemId)}>수정하기</Link>
      <button onClick={() => deleteItem({ itemId })}>삭제하기</button>
    </main>
  );
};

export default ItemDetail;

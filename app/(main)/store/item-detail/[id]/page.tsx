import Link from 'next/link';
import Item from './_components/Item';
import pageRoute from '@/app/_constants/path';

const ItemDetail = ({ params }: { params: { id: string } }) => {
  const { id: itemId } = params;

  return (
    <main>
      <h1>item-detail</h1>

      <Item itemId={itemId} />

      <Link href={pageRoute.store.itemDetailEdit(itemId)}>수정하기</Link>
      <button>삭제하기</button>
    </main>
  );
};

export default ItemDetail;

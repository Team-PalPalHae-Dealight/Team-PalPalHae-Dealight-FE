import Header from '@/app/_components/Header/Header';
import dynamic from 'next/dynamic';

const ItemEdit = dynamic(() => import('./_components/ItemEdit'), {
  ssr: false,
});

const ItemDetailEdit = ({ params }: { params: { id: string } }) => {
  const { id: itemId } = params;

  return (
    <>
      <Header />

      <div className="px-5 pt-7">
        <ItemEdit itemId={itemId} />
      </div>
    </>
  );
};

export default ItemDetailEdit;

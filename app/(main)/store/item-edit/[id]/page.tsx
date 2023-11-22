import dynamic from 'next/dynamic';

const ItemEdit = dynamic(() => import('./_components/ItemEdit'), {
  ssr: false,
});

const ItemDetailEdit = ({ params }: { params: { id: string } }) => {
  const { id: itemId } = params;

  return (
    <main className="px-5 pb-10 pt-5">
      <ItemEdit itemId={itemId} />
    </main>
  );
};

export default ItemDetailEdit;

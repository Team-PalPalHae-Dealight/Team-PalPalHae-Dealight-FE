import ItemEdit from './_components/ItemEdit';

const ItemDetailEdit = ({ params }: { params: { id: string } }) => {
  const { id: itemId } = params;

  return (
    <main className="px-5 pb-10 pt-5">
      <ItemEdit itemId={itemId} />
    </main>
  );
};

export default ItemDetailEdit;

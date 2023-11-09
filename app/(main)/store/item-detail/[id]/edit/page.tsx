import ItemEdit from './_components/ItemEdit';

const ItemDetailEdit = ({ params }: { params: { id: string } }) => {
  const { id: itemId } = params;

  return (
    <div className="flex flex-col gap-20">
      <ItemEdit itemId={itemId} />
    </div>
  );
};

export default ItemDetailEdit;

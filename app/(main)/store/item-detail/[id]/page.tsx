import ItemDetailTemp from './_components/ItemDetailTemp';

const ItemDetail = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return (
    <main className="flex flex-col items-center px-5 pt-2.5">
      <ItemDetailTemp />
    </main>
  );
};

export default ItemDetail;

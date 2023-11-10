import ItemDetail from './_components/ItemDetail';

const ProductDetail = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return (
    <main className="flex flex-col items-center px-5 pt-2.5">
      <ItemDetail />
    </main>
  );
};

export default ProductDetail;

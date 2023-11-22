import dynamic from 'next/dynamic';

const ItemDetail = dynamic(() => import('./_components/ItemDetail'), {
  ssr: false,
});

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="flex flex-col items-center px-5 pt-2.5">
      <ItemDetail itemId={params.id} />
    </main>
  );
};

export default Page;

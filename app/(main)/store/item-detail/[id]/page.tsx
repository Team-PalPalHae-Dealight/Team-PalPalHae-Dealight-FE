import Header from '@/app/_components/Header/Header';
import dynamic from 'next/dynamic';

const ItemDetail = dynamic(() => import('./_components/ItemDetail'), {
  ssr: false,
});

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center px-5 pt-7">
        <ItemDetail itemId={params.id} />
      </div>
    </>
  );
};

export default Page;

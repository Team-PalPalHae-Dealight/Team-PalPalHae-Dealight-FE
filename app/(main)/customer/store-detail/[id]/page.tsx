import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import StoreDetail from './_components/StoreDetail';
import Footer from '@/app/_components/Footer/Footer';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <CustomerHeader />

      <div className="flex flex-col items-center gap-5 px-5 pt-7">
        <StoreDetail storeId={params.id} />
      </div>

      <Footer />
    </>
  );
}

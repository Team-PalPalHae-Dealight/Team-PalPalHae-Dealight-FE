import Header from '@/app/_components/Header/Header';
import ItemRegister from './_components/ItemRegister';
import StoreFooter from '@/app/_components/Footer/StoreFooter';

export default function Page() {
  return (
    <>
      <Header />

      <div className="px-5 pt-7">
        <ItemRegister />
      </div>

      <StoreFooter />
    </>
  );
}

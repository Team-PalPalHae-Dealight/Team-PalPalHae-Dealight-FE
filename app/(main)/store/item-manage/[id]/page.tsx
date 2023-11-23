import Header from '@/app/_components/Header/Header';
import ProductList from './_components/ProductList';
import StoreFooter from '@/app/_components/Footer/StoreFooter';

export default function Page() {
  return (
    <>
      <Header />

      <div className="px-5">
        <ProductList />
      </div>

      <StoreFooter />
    </>
  );
}

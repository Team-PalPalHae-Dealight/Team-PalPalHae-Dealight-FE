import Footer from '@/app/_components/Footer/Footer';
import BusinessStatus from './_components/business-status/BusinessStatus';
import HomeButton from './_components/home-buttons/HomeButton';
import ProductList from './_components/product-list/ProductList';
import Header from '@/app/_components/Header/Header';

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-2 flex flex-col items-center px-5">
        <BusinessStatus />
        <HomeButton />
        <ProductList />
      </main>
      <Footer />
    </>
  );
}

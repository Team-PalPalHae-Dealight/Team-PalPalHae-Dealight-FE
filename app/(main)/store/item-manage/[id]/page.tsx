'use client';

import Header from '@/app/_components/Header/Header';
import ProductList from './_components/product-list/ProductList';
import Footer from '@/app/_components/Footer/Footer';

export default function Page() {
  return (
    <>
      <Header />

      <div className="px-5">
        <ProductList />
      </div>

      <Footer />
    </>
  );
}

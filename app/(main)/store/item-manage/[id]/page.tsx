'use client';

import Header from '@/app/_components/Header/Header';
import ProductList from './_components/product-list/ProductList';
import Footer from '@/app/_components/Footer/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main className="px-5">
        <ProductList />
      </main>
      <Footer />
    </>
  );
}

import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import Footer from '@/app/_components/Footer/Footer';
import OrderResult from '@/app/_components/order-information/OrderResult';

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  const data = {
    storeName: '행복도너츠가게',
    totalCount: '4',
    totalPrice: '11000',
    arriveTime: '17 : 32',
    useName: '에프와 오프',
    comments: '빨리 갈께요!',
  };

  return (
    <main className="flex flex-col items-center">
      <CustomerHeader />
      <div className="w-full p-5">
        <OrderResult data={data} />
      </div>
      <Footer />
    </main>
  );
}

/** @TODO API 연결 후 res로 받은 데이터로 초기화시키기 */
// export const data = {
//   storeName: '행복도너츠가게',
//   totalCount: '4',
//   totalPrice: '11000',
//   arriveTime: '17 : 32',
//   useName: '에프와 오프',
//   comments: '빨리 갈께요!',
// };

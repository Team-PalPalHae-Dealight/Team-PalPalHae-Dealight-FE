import Cart from './assets/cart.svg';
import Search from './assets/search.svg';
import Link from 'next/link';
import pageRoute from '../../_constants/route';

const CustomerHeader = () => {
  return (
    <div className=" align-center space-between sticky box-border flex h-16 w-full justify-between rounded-b-2xl bg-yellow px-3 py-3">
      <div>강남역 2번출구</div>
      <div className="align-center flex ">
        <Link href={pageRoute.customer.login()}>
          <div className=" px-1 py-1 ">로그인</div>
        </Link>
        <div className="align-center flex py-2">
          <Link href={pageRoute.customer.cart('1')}>
            <Cart className="ml-1 h-6  w-6" />
          </Link>
          <Link href={pageRoute.customer.search('')}>
            <Search className="ml-1 h-6  w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CustomerHeader;

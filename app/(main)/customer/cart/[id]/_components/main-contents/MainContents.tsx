'use client';

import { useEffect, useState } from 'react';
import CartContent from '../cart-contents/CartContents';
import ResetButton from '../reset-button/ResetButton';
import { getCart } from '../../_services/getCart';
import { CartType } from '../../_types/CartType';

const MainContents = () => {
  const [data, setData] = useState<CartType[] | undefined>();

  const getData = async () => {
    const res = await getCart();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex w-full flex-col items-center px-5">
      <div className="flex w-full items-end justify-between pb-4 pt-5">
        <div className="text-xl font-semibold">장바구니</div>
        <ResetButton />
      </div>
      <CartContent data={data} />
    </div>
  );
};

export default MainContents;

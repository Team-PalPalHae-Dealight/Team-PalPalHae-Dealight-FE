'use client';

import { useEffect, useState } from 'react';
import CartContent from '../cart-contents/CartContents';
import ResetButton from '../reset-button/ResetButton';
import { getCart } from '../../_services/getCart';
import { CartType } from '../../_types/CartType';
import Spinner from '@/app/_components/spinner/Spinner';
import CustomPopUp from '@/app/_components/pop-up/CustomPopUp';

const MainContents = () => {
  const [data, setData] = useState<CartType[] | undefined>();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const getData = async () => {
    const res = await getCart();
    if (res.status === 200) {
      setData(res.data.carts);
    } else {
      setOpen(true);
      setMessage(res.message);
    }
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
      {data ? (
        <CartContent data={data} />
      ) : (
        <div className=" flex h-80 w-full items-center justify-center">
          <Spinner />
        </div>
      )}
      {open && (
        <CustomPopUp
          mainText={message}
          btnText="확인"
          btnClick={() => window.location.reload()}
        />
      )}
    </div>
  );
};

export default MainContents;

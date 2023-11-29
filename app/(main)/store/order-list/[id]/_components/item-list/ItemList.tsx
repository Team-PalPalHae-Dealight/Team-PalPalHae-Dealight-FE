import Spinner from '@/app/_components/spinner/Spinner';
import OrderListCard from '../order-list-card/OrderListCard';
import { LegacyRef } from 'react';
import { OrdersType } from '@/app/_types/api/order';

type ItemListPropsType = {
  orders: OrdersType[];
  refNode: LegacyRef<HTMLDivElement> | undefined;
  isFetchingNextPage: boolean;
};

const ItemList = ({
  orders,
  refNode,
  isFetchingNextPage,
}: ItemListPropsType) => {
  return (
    <>
      <div className="h-[68vh] overflow-y-scroll">
        <OrderListCard orders={orders} />

        {isFetchingNextPage && (
          <div className="my-1 flex items-center justify-center">
            <Spinner />
          </div>
        )}

        {orders.length === 0 && (
          <div className="flex h-[65vh] items-center justify-center text-xs text-dark-gray">
            <p>주문 내역이 없습니다.</p>
          </div>
        )}

        <div className="h-4" ref={refNode} />
      </div>
    </>
  );
};

export default ItemList;

import Image from 'next/image';

export type ProductListPropsType = {
  orderId: number;
  storeId: number;
  memberId: number;
  memberNickName: string;
  storeName: string;
  demand: string;
  arrivalTime: string;
  orderProductsRes: {
    orderProducts: ProductsType[];
  };
  totalPrice: number;
  createdAt: string;
  status: string;
  reviewContains: boolean;
};

type ProductsType = {
  itemId: number;
  name: string;
  quantity: number;
  discountPrice: number;
  originalPrice: number;
  image: string;
};

const ProductList = ({ items }: { items: ProductListPropsType }) => {
  const { orderProductsRes } = items;
  const { orderProducts } = orderProductsRes;

  return (
    <div className="mb-2 h-[35vh]">
      <div className="h-full w-full overflow-y-scroll">
        {orderProducts.map(item => {
          return (
            <div
              className="mb-2 flex h-20 rounded bg-white p-4"
              style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
              key={item.itemId}
            >
              <div>
                <Image width={60} height={60} src={item.image} alt="item" />
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="ml-2 flex flex-col gap-1 font-semibold">
                  <div className="text-sm">{item.name}</div>
                  <div className="text-xs">{item.discountPrice} 원</div>
                </div>
                <div className="flex h-full items-end text-sm">
                  <div>{item.quantity} 개</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

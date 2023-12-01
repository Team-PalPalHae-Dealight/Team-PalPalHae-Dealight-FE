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

const ProductList = ({
  items,
}: {
  items: ProductListPropsType | undefined;
}) => {
  return (
    <div className="mt-5 max-h-[35vh] w-full overflow-y-scroll">
      {items?.orderProductsRes.orderProducts.map(item => {
        return (
          <div
            className="mb-2 flex h-20 items-center rounded bg-white p-4"
            style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
            key={item.itemId}
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded">
              <Image
                priority
                fill
                alt={item.image}
                src={String(item.image)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>

            <div className="flex w-full items-center justify-between">
              <div className="ml-2 flex flex-col gap-1 font-semibold">
                <div className="w-32 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                  {item.name}
                </div>
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
  );
};

export default ProductList;

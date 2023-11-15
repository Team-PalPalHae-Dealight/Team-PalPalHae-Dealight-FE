import { CartCardType } from '../../_types/CartCardType';
import ItemCard from '../item-card/ItemCard';

const ItemList = (props: { data: CartCardType[] | undefined }) => {
  return (
    <div className="grid grid-cols-1 gap-y-2.5">
      {props.data ? (
        props.data.map(
          ({ _id, image, title, price, stock, count }: CartCardType) => (
            <ItemCard
              key={_id}
              image={image}
              title={title}
              price={price}
              stock={stock}
              count={count}
            />
          )
        )
      ) : (
        <div className="flex h-122 items-center justify-center text-xs text-dark-gray">
          상품이 없습니다
        </div>
      )}
    </div>
  );
};

export default ItemList;

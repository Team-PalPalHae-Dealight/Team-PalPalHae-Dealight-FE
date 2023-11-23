import { CartType } from '../../_types/CartType';
import ItemCard from '../item-card/ItemCard';

const ItemList = (props: { data: CartType[] | undefined }) => {
  return (
    <div className="grid grid-cols-1 gap-y-2.5">
      {props.data ? (
        props.data.map(
          ({
            itemId,
            itemImage,
            itemName,
            discountPrice,
            stock,
            quantity,
          }: CartType) => (
            <ItemCard
              key={itemId}
              image={itemImage}
              title={itemName}
              price={discountPrice}
              stock={stock}
              count={quantity}
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

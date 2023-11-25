import { CartType } from '../../_types/CartType';
import ItemCard from '../item-card/ItemCard';

const ItemList = (props: { data: CartType[] | undefined }) => {
  return (
    <div className="grid grid-cols-1 gap-y-2.5">
      {props.data?.length
        ? props.data.map(
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
                itemId={itemId}
                image={itemImage}
                title={itemName}
                price={discountPrice}
                stock={stock}
                count={quantity}
              />
            )
          )
        : null}
    </div>
  );
};

export default ItemList;

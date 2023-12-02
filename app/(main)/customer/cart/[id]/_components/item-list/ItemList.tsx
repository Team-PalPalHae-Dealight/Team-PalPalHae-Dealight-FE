import { CartType } from '../../_types/CartType';
import ItemCard from '../item-card/ItemCard';
import { useGetCart } from '@/app/_hooks/query/cart';

const ItemList = () => {
  const { data: data } = useGetCart();

  return (
    <div className="grid grid-cols-1 gap-y-2.5">
      {data.carts.length
        ? data.carts.map(
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

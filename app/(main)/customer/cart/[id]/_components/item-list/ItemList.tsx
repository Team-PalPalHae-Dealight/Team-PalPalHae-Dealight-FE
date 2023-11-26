import { Dispatch, SetStateAction } from 'react';
import { CartType } from '../../_types/CartType';
import ItemCard from '../item-card/ItemCard';

type ItemListPropsType = {
  data: CartType[] | undefined;
  setData: Dispatch<SetStateAction<CartType[] | undefined>>;
};

const ItemList = ({ data, setData }: ItemListPropsType) => {
  return (
    <div className="grid grid-cols-1 gap-y-2.5">
      {data?.length
        ? data.map(
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
                _id={itemId}
                image={itemImage}
                title={itemName}
                price={discountPrice}
                stock={stock}
                count={quantity}
                setData={setData}
                data={data}
              />
            )
          )
        : null}
    </div>
  );
};

export default ItemList;

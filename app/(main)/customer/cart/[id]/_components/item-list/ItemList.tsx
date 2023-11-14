import ItemCard from '../item-card/ItemCard';

type ItemListPropsType = {
  _id: string;
  image: string;
  title: string;
  price: number;
  stock: number;
  count: number;
};

const ItemList = (props: { data: ItemListPropsType[] }) => {
  return (
    <div className="grid grid-cols-1 gap-y-2.5">
      {props.data ? (
        props.data.map(
          ({ _id, image, title, price, stock, count }: ItemListPropsType) => (
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
        <div className="text-xs text-dark-gray">상품이 없습니다</div>
      )}
    </div>
  );
};

export default ItemList;

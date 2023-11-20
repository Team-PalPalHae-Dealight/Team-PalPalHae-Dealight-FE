'use client';
import { useState } from 'react';
import SearchBar from './_component/searchbar/Searchbar';
import Sort from './_component/sort/Sort';
import ItemCard from './_component/Itemcard/Itemcard';

type ItemPropsTypes = {
  id: number;
  image: string;
  distance: string;
  storeName: string;
  storeCloseTime: string;
};

export default function Page() {
  const [sortOption, setSortOption] = useState('distance');
  const [items, setItems] = useState<ItemPropsTypes[]>([
    {
      id: 1,
      image: 'app/_assets/images/donut.png',
      distance: '100m',
      storeName: '바보 떡볶이',
      storeCloseTime: '10:20',
    },
    {
      id: 1,
      image: 'app/_assets/images/donut.png',
      distance: '100m',
      storeName: '바보 떡볶이',
      storeCloseTime: '10:20',
    },
    {
      id: 1,
      image: 'app/_assets/images/donut.png',
      distance: '100m',
      storeName: '바보 떡볶이',
      storeCloseTime: '10:20',
    },
    {
      id: 1,
      image: 'app/_assets/images/donut.png',
      distance: '100m',
      storeName: '바보 떡볶이',
      storeCloseTime: '10:20',
    },
  ]);

  const getItems = (val: ItemPropsTypes[]) => {
    setItems(val);
  };

  const getsortOption = (val: string) => {
    setSortOption(val);
  };
  return (
    <main className="flex flex-col items-center px-5">
      <SearchBar getItems={getItems} sortOption={sortOption} />
      <Sort getsortOption={getsortOption} />
      {items.map(item => (
        <ItemCard
          key={item.id}
          image={item.image}
          distance={item.distance}
          storeName={item.storeName}
          storeCloseTime={item.storeCloseTime}
        />
      ))}
    </main>
  );
}

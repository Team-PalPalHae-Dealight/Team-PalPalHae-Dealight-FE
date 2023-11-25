'use client';
import { useState } from 'react';
import SearchBar from './_component/searchbar/Searchbar';
import Sort from './_component/sort/Sort';
import ItemCard from './_component/Itemcard/Itemcard';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
import { useAddress } from '@/app/_providers/AddressProvider';
import useCoordinate from '@/app/_hooks/useCoordinate';
import { axiosInstance } from '@/app/_services/apiClient';

type ItemPropsTypes = {
  storeId: number;
  image: string;
  name: string;
  closeTime: string;
};

export default function Page() {
  const [sortBy, setSortBy] = useState('distance');
  const [items, setItems] = useState<ItemPropsTypes[]>([]);
  const [page, setPage] = useState(0);
  const { address } = useAddress();
  const { lat, lng } = useCoordinate(address);
  console.log(lat, lng);
  const getItems = async (keyword: string) => {
    const lng = 127.0221068;
    const lat = 37.5912999;
    const url = `/stores/search?x-coordinate=${lng}&y-coordinate=${lat}&keyword=${keyword}&sortBy=${sortBy}&size=5&page=${page}`;
    const { data: storeInfoSliceRes } = await axiosInstance.get(url);
    console.log(url);
    console.log('fetched data', storeInfoSliceRes);
    setItems(storeInfoSliceRes.storeInfoSliceRes);
    setPage(page + 1);
  };

  return (
    <>
      <CustomerHeader />
      <div className="flex flex-col items-center px-5">
        <SearchBar getItems={getItems} />
        <Sort
          getsortOption={(sortoption: string) => {
            if (sortoption === '마감 시간순') {
              setSortBy('deadline');
            } else if (sortoption === '상품 할인율') {
              setSortBy('discount-rate');
            } else if (sortoption === '거리순') {
              setSortBy('distance');
            }
          }}
        />
        {items.map(item => (
          <ItemCard
            key={item.storeId}
            image={item.image}
            name={item.name}
            closeTime={item.closeTime}
          />
        ))}
      </div>
      <CustomerFooter />
    </>
  );
}

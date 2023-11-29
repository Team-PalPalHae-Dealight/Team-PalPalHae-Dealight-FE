'use client';
import { useEffect, useState } from 'react';
import SearchBar from './_component/searchbar/Searchbar';
import Sortoption from './_component/sort-option/SortOption';
import ItemCard from './_component/Itemcard/Itemcard';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
import useCoordinate from '@/app/_hooks/useCoordinate';
import { axiosInstance } from '@/app/_services/apiClient';
import { v4 as uuidv4 } from 'uuid';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

type ItemPropsTypes = {
  storeId: number;
  image: string;
  name: string;
  closeTime: string;
};

export default function Page() {
  const [sortBy, setSortBy] = useState('distance');
  const [items, setItems] = useState<ItemPropsTypes[]>([]);
  const [page, setPage] = useState(1);
  const { address } = useUserInfo();
  const { lat, lng } = useCoordinate(address.name);
  const [word, setWord] = useState<string>('');
  useEffect(() => {
    if (word === '') return;
    const getData = async () => {
      const url = `/stores/search?x-coordinate=${lng}&y-coordinate=${lat}&keyword=${word}&sortBy=${sortBy}&size=5&page=${page}`;
      const { data: storeInfoSliceRes } = await axiosInstance.get(url);
      setItems(storeInfoSliceRes.storeInfoSliceRes);
      setPage(page + 1);
    };
    getData();
    // eslint-disable-next-line
  }, [sortBy]);
  return (
    <>
      <CustomerHeader />
      <div className="flex flex-col items-center px-5">
        <SearchBar
          getItems={async (keyword: string) => {
            const url = `/stores/search?x-coordinate=${lng}&y-coordinate=${lat}&keyword=${keyword}&sortBy=${sortBy}&size=5&page=${page}`;
            const { data: storeInfoSliceRes } = await axiosInstance.get(url);
            setItems(storeInfoSliceRes.storeInfoSliceRes);
            setPage(page + 1);
            setWord(keyword);
          }}
        />
        <Sortoption
          getsortOption={(sortoption: string) => {
            if (sortoption === '마감 시간순') {
              setSortBy('deadline');
            } else if (sortoption === '거리순') {
              setSortBy('distance');
            } else if (sortoption === '상품 할인율순') {
              setSortBy('discount-rate');
            }
          }}
        />
        {items.map(item => (
          <ItemCard
            key={uuidv4()}
            image={item.image}
            name={item.name}
            closeTime={item.closeTime}
            storeId={item.storeId}
          />
        ))}
      </div>
      <CustomerFooter />
    </>
  );
}

'use client';
import SearchIcon from './assets/search.svg';
import { useState, ChangeEvent } from 'react';

type ItemPropTypes = {
  id: number;
  image: string;
  distance: string;
  storeName: string;
  storeCloseTime: string;
};

type SearchBarPropTypes = {
  getItems: (val: ItemPropTypes[]) => void;
  sortOption: string;
};

const SearchBar = ({ getItems, sortOption }: SearchBarPropTypes) => {
  const [word, setWord] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  return (
    <>
      <form className="mt-20 flex h-11 w-full flex-row items-center justify-center rounded-xl bg-white">
        <button
          onClick={e => {
            e.preventDefault();
            console.log(word), setWord('');
            console.log(sortOption);
            const searchResults: ItemPropTypes[] = [
              {
                id: 1,
                image: 'https://fake-image.com/item1.png',
                distance: '100m',
                storeName: '바보 떡볶이',
                storeCloseTime: '10:20',
              },
              {
                id: 2,
                image: 'https://fake-image.com/item2.png',
                distance: '100m',
                storeName: '바보 떡볶이',
                storeCloseTime: '10:20',
              },
              {
                id: 3,
                image: 'https://fake-image.com/item3.png',
                distance: '100m',
                storeName: '바보 떡볶이',
                storeCloseTime: '10:20',
              },
              {
                id: 4,
                image: 'https://fake-image.com/item4.png',
                distance: '100m',
                storeName: '바보 떡볶이',
                storeCloseTime: '10:20',
              },
            ];

            getItems(searchResults);
          }}
        >
          <SearchIcon className="my-5 mr-4 h-5  w-5" />
        </button>
        <input value={word} onChange={handleChange} className=" h-full w-4/5" />
      </form>
    </>
  );
};
export default SearchBar;

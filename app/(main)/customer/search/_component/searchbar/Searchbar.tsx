'use client';
import SearchIcon from 'app/(main)/customer/search/_component/assets/search.svg';
import { useState, ChangeEvent } from 'react';

type SearchBarPropTypes = {
  getItems: (val: string) => void;
};

const SearchBar = ({ getItems }: SearchBarPropTypes) => {
  const [word, setWord] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  return (
    <>
      <form className="mt-3 flex h-11 w-full flex-row items-center justify-center rounded-xl bg-white">
        <button
          onClick={e => {
            e.preventDefault();
            console.log(word);
            setWord('');
            getItems(word);
          }}
        >
          <SearchIcon className="my-5 mr-4 h-5  w-5" />
        </button>
        <input
          value={word}
          onChange={handleChange}
          className=" h-full w-4/5 bg-white p-1 outline-none"
        />
      </form>
    </>
  );
};
export default SearchBar;

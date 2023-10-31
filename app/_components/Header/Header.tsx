import HeaderItemtext from './HeaderItemtext';
import HeaderItem from './HeaderItem';
import Image from 'next/image';

const Header = () => {
  return (
    <div className=" fixed flex h-[60px] w-full flex-row justify-center rounded-b-2xl bg-yellow-400">
      <HeaderItemtext text="강남역2번출구" />
      <HeaderItem
        icon="/app/_components/Header/assets/cart.svg"
        to="/posts/first-post"
      />
      <Image
        src={'app/_components/Header/assets/cart.svg'}
        alt="icon"
        width={24}
        height={24}
        className="h-6 w-full group-hover:stroke-[#FFE429]"
      />
      <img
        src="app/_components/Header/assets/cart.svg"
        alt="킹 (체스 말)"
      ></img>
      <HeaderItemtext text="로그인" />
    </div>
  );
};
export default Header;

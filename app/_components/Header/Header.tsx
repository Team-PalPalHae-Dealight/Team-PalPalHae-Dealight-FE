import Link from 'next/link';
import DelightEmoji from './assets/dealight-emoji.svg';
import pageRoute from '@/app/_constants/path';

const Header = () => {
  return (
    <div className="first-line:text-l sticky top-0 z-50 box-border flex h-16 w-full items-center justify-start border-b-1 border-dark-gray/30 bg-light-gray px-8 py-3 font-semibold text-black">
      <Link
        href={pageRoute.store.home()}
        className="flex flex-row items-center justify-start"
      >
        <DelightEmoji className="h-6 w-6" />
        <div className=" py-1">딜라잇(Dealight)</div>
      </Link>
    </div>
  );
};

export default Header;

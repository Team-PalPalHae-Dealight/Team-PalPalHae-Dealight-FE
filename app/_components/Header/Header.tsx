import Link from 'next/link';
import DelightEmoji from './assets/dealight-emoji.svg';
import pageRoute from '@/app/_constants/path';

const Header = () => {
  return (
    <div className="first-line:text-l sticky top-0 z-50 box-border h-16 w-full border-b-1 border-dark-gray/30 bg-light-gray px-5 py-3 font-semibold">
      <Link
        href={pageRoute.store.home()}
        className="flex h-full w-full items-center gap-1"
      >
        <DelightEmoji />
        <h1 className="text-base font-semibold">Dealight</h1>
      </Link>
    </div>
  );
};

export default Header;

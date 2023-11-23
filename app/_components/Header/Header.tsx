import DelightEmoji from './assets/dealight-emoji.svg';
const Header = () => {
  return (
    <div className="first-line:text-l sticky top-0 z-50 box-border flex h-16 w-full items-center justify-start border-b-1 border-dark-gray/30 bg-light-gray px-8 py-3 font-semibold text-black">
      <div className="flex flex-row items-center justify-start ">
        <DelightEmoji className="h-6 w-6" />
        <div className=" py-1">딜라잇(Dealight)</div>
      </div>
    </div>
  );
};

export default Header;

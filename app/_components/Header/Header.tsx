import DelightEmoji from './assets/dealight-emoji.svg';
const Header = () => {
  return (
    <div className=" align-center first-line:text-l sticky z-20 box-border flex h-16 w-full justify-start rounded-b-2xl bg-yellow  px-8 py-3 font-semibold text-black">
      <div className=" align-center flex flex-row justify-start ">
        <DelightEmoji className="h-6 w-6" />
        <div className=" py-1">딜라잇(Dealight)</div>
      </div>
    </div>
  );
};

export default Header;
/*delight-emoji*/

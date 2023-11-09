import DelightEmoji from './assets/delightemogi.svg';
const Header = () => {
  return (
    <div className=" align-center sticky box-border flex h-16 w-full justify-start rounded-b-2xl  bg-yellow px-8 py-3 ">
      <div className=" align-center flex flex-row justify-start ">
        <DelightEmoji className="h-6 w-6" />
        <div className=" py-1">딜라잇(Dealight)</div>
      </div>
    </div>
  );
};
export default Header;

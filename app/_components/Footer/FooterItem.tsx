import Link from 'next/link';
import Order from './assets/order.svg';
import Home from './assets/home.svg';
import MyPage from './assets/mypage.svg';

type FooterItemPropType = {
  icon: string;
  labelName: string;
  to: string;
};

const FooterItem = ({ icon, labelName, to }: FooterItemPropType) => {
  return (
    <Link href={to}>
      <div className="flex flex-col items-center justify-center text-[#7D7D7D] hover:text-[#FFE429]">
        {icon === 'Order' ? (
          <Order className="h-6 w-6" />
        ) : icon === 'Home' ? (
          <Home className="h-6 w-6" />
        ) : icon === 'MyPage' ? (
          <MyPage className="h-6 w-6" />
        ) : null}
        <label>{labelName}</label>
      </div>
    </Link>
  );
};

export default FooterItem;

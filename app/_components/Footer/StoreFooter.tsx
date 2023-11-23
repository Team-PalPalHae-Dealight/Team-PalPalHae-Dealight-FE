'use client';

import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import FooterItem from './FooterItem';
import pageRoute from '@/app/_constants/path';

const StoreFooter = () => {
  const { providerId } = useUserInfo();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full">
      <div className="mx-auto box-border flex h-16 max-w-[480px] items-center justify-between border-t-1 border-dark-gray/30 bg-light-gray px-8 py-2">
        <FooterItem
          icon={'Order'}
          labelName={'주문내역'}
          to={pageRoute.store.orderList(String(providerId))}
        />
        <FooterItem
          icon={'Home'}
          labelName={'홈'}
          to={pageRoute.store.home()}
        />
        <FooterItem
          icon={'MyPage'}
          labelName={'마이페이지'}
          to={pageRoute.store.myPage(String(providerId))}
        />
      </div>
    </div>
  );
};

export default StoreFooter;

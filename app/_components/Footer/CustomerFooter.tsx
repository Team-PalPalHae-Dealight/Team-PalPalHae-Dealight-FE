'use client';

import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import FooterItem from './FooterItem';
import pageRoute from '@/app/_constants/path';
import { useAuth } from '@/app/_providers/AuthProvider';

const CustomerFooter = () => {
  const { providerId } = useUserInfo();
  const { loggedIn } = useAuth();

  return (
    <div className="fixed bottom-0 left-0 z-30 w-full">
      <div className="mx-auto box-border flex h-16 max-w-[480px] items-center justify-between border-t-1 border-dark-gray/30 bg-light-gray px-8 py-2">
        <FooterItem
          icon={'Order'}
          labelName={'주문내역'}
          to={
            loggedIn
              ? pageRoute.customer.orderList(String(providerId))
              : pageRoute.customer.login()
          }
        />
        <FooterItem
          icon={'Home'}
          labelName={'홈'}
          to={pageRoute.customer.home()}
        />
        <FooterItem
          icon={'MyPage'}
          labelName={'마이페이지'}
          to={
            loggedIn
              ? pageRoute.customer.myPage(String(providerId))
              : pageRoute.customer.login()
          }
        />
      </div>
    </div>
  );
};

export default CustomerFooter;

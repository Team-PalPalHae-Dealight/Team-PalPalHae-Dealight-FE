'use client';

import SearchIcon from '../../_assets/svgs/search-icon.svg';
import CartIcon from '../../_assets/svgs/cart-icon.svg';
import MemberHeaderIcon from '../../_assets/images/member-header-icon.png';
import Link from 'next/link';
import pageRoute from '@/app/_constants/path';
import AddressButton from '../AddressButton/AddressButton';
import Triangle from './assets/triangle.svg';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import useCoordinate from '@/app/_hooks/useCoordinate';
import { useCallback, useEffect, useState } from 'react';
import { useUpdateMemberAddress } from '@/app/_hooks/query/member';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';

const CustomerHeader = () => {
  const { address } = useUserInfo();

  const [addressName, setAddressName] = useState(address.name);
  const [addressChange, setAddressChange] = useState(false);

  const { lat, lng, changeCoords } = useCoordinate(addressName);

  const { mutate: updateMemberAddress } = useUpdateMemberAddress();

  const queryClient = useQueryClient();

  const updateAddress = useCallback(async () => {
    updateMemberAddress(
      { name: addressName, xCoordinate: lng, yCoordinate: lat },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['user-info'] });
        },
      }
    );
  }, [updateMemberAddress, queryClient, addressName, lng, lat]);

  useEffect(() => {
    if (!addressChange) return;

    updateAddress();
  }, [updateAddress, addressChange]);

  return (
    <div className="align-center text-l sticky top-0 z-50 box-border flex h-16 w-full justify-between border-b-1 border-dark-gray/30 bg-light-gray px-3 py-4 font-semibold text-black">
      <div className="flex flex-row items-center">
        <Link href="/" className="relative h-7 w-7" scroll={false}>
          <Image src={MemberHeaderIcon} alt="딜라이트 로고" />
        </Link>
      </div>

      <div className="absolute left-1/2 top-1/2 mx-auto flex -translate-x-1/2 -translate-y-1/2 items-center">
        <AddressButton
          getAddress={addressValue => {
            changeCoords(addressValue);
            setAddressName(addressValue);
            setAddressChange(true);
          }}
        >
          <div className="flex flex-row">
            <div className=" w-28 overflow-hidden text-ellipsis whitespace-nowrap">
              {address.name}
            </div>
            <div>
              <Triangle className="h-6 w-6 px-1 py-1.5" />
            </div>
          </div>
        </AddressButton>
      </div>

      <div className="flex items-center">
        <Link className="mr-3" href={pageRoute.customer.search('')}>
          <div className="flex h-4 w-4 items-center justify-center rounded-full">
            <SearchIcon />
          </div>
        </Link>

        <Link href={pageRoute.customer.cart('1')}>
          <div className="flex h-4 w-4 items-center justify-center rounded-full">
            <CartIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CustomerHeader;

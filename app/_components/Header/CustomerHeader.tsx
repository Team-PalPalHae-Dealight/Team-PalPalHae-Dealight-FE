'use client';

import SearchIcon from '../../_assets/svgs/search-icon.svg';
import CartIcon from '../../_assets/svgs/cart-icon.svg';
import Link from 'next/link';
import pageRoute from '@/app/_constants/path';
import AddressButton from '../AddressButton/AddressButton';
import Triangle from './assets/triangle.svg';
import dynamic from 'next/dynamic';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import useCoordinate from '@/app/_hooks/useCoordinate';
import { useCallback, useEffect, useState } from 'react';
import { useUpdateMemberAddress } from '@/app/_hooks/query/member';
import { useQueryClient } from '@tanstack/react-query';

const LoginHeader = dynamic(() => import('./LoginHeader'), { ssr: false });

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
    <div className="align-center space-between text-l sticky top-0 z-50 box-border flex h-16 w-full justify-between border-b-1 border-dark-gray/30 bg-light-gray px-3 py-4 font-semibold text-black">
      <div className="flex flex-row items-center">
        <div>
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
      </div>

      <div className="flex items-center">
        <LoginHeader />
        <Link className="mr-3" href={pageRoute.customer.search('')}>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow">
            <SearchIcon className="h-4 w-4" />
          </div>
        </Link>
        <Link href={pageRoute.customer.cart('1')}>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow">
            <CartIcon className="h-4 w-4" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CustomerHeader;

/**
 * @description msw 활용에 대한 예제 컴포넌트입니다. 삭제될 예정입니다.
 */

'use client';

import { ItemType } from '@/app/_types/api/item';

type GetQueryParamsType = {
  memberId: number;
  size: number;
  page: number;
};

async function getTemp() {
  const data = await fetch('http://localhost:3000/mocks/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    body: JSON.stringify({ test: '123' }),
  }).then(res => res.json());

  console.log(data);
  return data;
}

async function getQueryParams({
  memberId,
  size,
  page,
}: GetQueryParamsType): Promise<ItemType> {
  const data = await fetch(
    `http://localhost:3000/mocks/api/items/stores?member-id=${memberId}&size=${size}&page=${page}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    }
  ).then(res => res.json());
  console.log(data);

  return data;
}

export function MswTestButton() {
  return (
    <>
      <button onClick={() => getTemp()}>msw temp data 호출 버튼</button>
      <button onClick={() => getQueryParams({ memberId: 1, size: 5, page: 1 })}>
        Query Params Test
      </button>
    </>
  );
}

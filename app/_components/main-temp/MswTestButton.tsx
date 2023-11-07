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

type PostRequestBody = {
  name: string;
  stock: number;
  discountPrice: number;
  originalPrice: number;
  description: string;
  information: string;
  image: string | null;
};

const getTemp = async () => {
  const data = await fetch('http://localhost:3000/mocks/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    body: JSON.stringify({ test: '123' }),
  }).then(res => res.json());

  console.log(data);

  return data;
};

const getQueryParameter = async ({
  memberId,
  size,
  page,
}: GetQueryParamsType): Promise<ItemType[]> => {
  const data = await fetch(
    `http://localhost:3000/mocks/api/items/stores?member-id=${memberId}&size=${size}&page=${page}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    }
  ).then(res => res.json());

  console.log(data);

  return data;
};

const getPathParameter = async ({
  itemId,
}: {
  itemId: number;
}): Promise<ItemType> => {
  const data = await fetch(`http://localhost:3000/mocks/api/items/${itemId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  }).then(res => res.json());

  console.log(data);

  return data;
};

const postRequestBody = async (request: PostRequestBody) => {
  const data = await fetch('http://localhost:3000/mocks/api/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    body: JSON.stringify({ ...request }),
  }).then(res => res.json());

  console.log(data);

  return data;
};

const patchTemp = async () => {
  const data = await fetch('http://localhost:3000/mocks/api/items/1', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  }).then(res => res.json());

  console.log(data);

  return data;
};

const deleteTemp = async () => {
  await fetch('http://localhost:3000/mocks/api/items/1', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  });
};

export function MswTestButton() {
  const postReqeustBodyData = {
    name: '떡볶이',
    stock: 2,
    discountPrice: 4000,
    originalPrice: 4500,
    description: '기본 떡볶이입니다.',
    information: '통신사 할인 불가능 합니다.',
    image: null,
  };

  return (
    <div className="flex flex-col border border-teal-400 p-2">
      <button onClick={() => getTemp()}>msw temp data 호출 버튼</button>
      <button
        onClick={() => getQueryParameter({ memberId: 1, size: 5, page: 1 })}
      >
        Query Parameters Test
      </button>
      <button onClick={() => getPathParameter({ itemId: 1 })}>
        Path Parameters Test
      </button>

      <button onClick={() => postRequestBody(postReqeustBodyData)}>
        Post Request Body
      </button>

      <button onClick={() => patchTemp()}>Patch</button>
      <button onClick={() => deleteTemp()}>Delete</button>
    </div>
  );
}

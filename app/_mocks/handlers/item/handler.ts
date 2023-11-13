import { HttpResponse, delay, http } from 'msw';
import { ITEMS } from './mock';
import { ItemType } from '@/app/_types/api/item';

export const itemHandler = [
  /**
   * @description member-id는 삭제될 예정
   */
  http.get('/mocks/api/items/stores', async ({ request }) => {
    await delay(1000);

    const url = new URL(request.url);

    const memberId = url.searchParams.get('member-id');
    const size = Number(url.searchParams.get('size'));
    const page = Number(url.searchParams.get('page'));

    if (!memberId || !size || !page) {
      return new HttpResponse(null, { status: 404 });
    }

    const results = ITEMS.slice(0, page * size);

    return HttpResponse.json(results);
  }),

  http.get('/mocks/api/items/:itemId', async ({ params }) => {
    await delay(1000);

    const { itemId } = params;

    if (!itemId) {
      return new HttpResponse(null, { status: 404 });
    }

    const results = ITEMS[Number(itemId) - 1];

    return HttpResponse.json(results);
  }),

  http.post('/mocks/api/items', async ({ request }) => {
    await delay(1000);

    const newPost = (await request.json()) as Omit<
      ItemType,
      'itemId' | 'storeId'
    >;

    const results = { itemId: ITEMS.length, storeId: 1, ...newPost };

    return HttpResponse.json(results);
  }),

  http.patch('/mocks/api/items/:itemId', async ({ params }) => {
    await delay(1000);

    const { itemId } = params;

    const results = {
      ...ITEMS[Number(itemId)],
      name: '치즈 떡볶이',
    };

    return HttpResponse.json(results);
  }),

  http.delete('/mocks/api/items/:itemId', async ({ params }) => {
    await delay(1000);

    const { itemId } = params;
    console.log(itemId, 'delete');

    return new HttpResponse(null, { status: 204 });
  }),
];

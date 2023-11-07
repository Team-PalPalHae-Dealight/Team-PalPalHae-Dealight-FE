import { HttpResponse, http } from 'msw';
import { ITEMS } from './mock';

export const itemHandler = [
  http.get('/mocks/api/items/stores', ({ request }) => {
    const url = new URL(request.url);

    const memberId = url.searchParams.get('member-id');
    const size = Number(url.searchParams.get('size'));
    const page = Number(url.searchParams.get('page'));

    if (!memberId || !size || !page) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(ITEMS);
  }),
];

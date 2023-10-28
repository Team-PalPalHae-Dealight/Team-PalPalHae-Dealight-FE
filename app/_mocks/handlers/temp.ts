import { HttpResponse, http } from 'msw';

export const tempHandlers = [
  http.get('/mocks/api', () => {
    console.log('Captured a "GET /mocks/api" request');

    return HttpResponse.json({ test: 'temp get mock data' });
  }),

  http.post('/mocks/api', async ({ request }) => {
    const data = await request.json();
    console.log('Captured a "POST /mocks/api" request, data: ', data);

    return HttpResponse.json({ test: 'temp post mock data' });
  }),
];

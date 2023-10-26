import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('/api', () => {
    console.log('Captured a "GET /api" request');

    return HttpResponse.json({ test: true });
  }),
];

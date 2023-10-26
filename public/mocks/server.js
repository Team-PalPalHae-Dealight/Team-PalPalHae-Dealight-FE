import { setupServer } from 'msw/node';
import { handlers } from './temp/handler';

export const server = setupServer(...handlers);

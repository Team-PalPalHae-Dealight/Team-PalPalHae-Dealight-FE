import { setupServer } from 'msw/node';
import handler from './handlers/handler';

export const server = setupServer(...handler);

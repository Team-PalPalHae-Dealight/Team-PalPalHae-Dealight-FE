import { setupWorker } from 'msw/browser';
import { handlers } from './temp/handler';

export const worker = setupWorker(...handlers);

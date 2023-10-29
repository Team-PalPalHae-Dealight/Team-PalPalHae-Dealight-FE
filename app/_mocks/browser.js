import { setupWorker } from 'msw/browser';
import handler from './handlers/handler';

export const worker = setupWorker(...handler);

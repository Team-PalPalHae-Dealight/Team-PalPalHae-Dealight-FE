import { itemHandler } from './item/handler';
import { tempHandler } from './temp/handler';

const handlers = [...tempHandler, ...itemHandler];

export default handlers;

import { dayType } from '../_types/dayType';

export const DAY_LIST = [
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
  '일요일',
];

export const checkboxClassName: dayType = {
  월요일: {
    input: 'peer/월요일 hidden h-12 w-full',
    label:
      'block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/월요일:bg-cyan/50',
  },
  화요일: {
    input: 'peer/화요일 hidden h-12 w-full',
    label:
      'block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/화요일:bg-cyan/50',
  },
  수요일: {
    input: 'peer/수요일 hidden h-12 w-full',
    label:
      'block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/수요일:bg-cyan/50',
  },
  목요일: {
    input: 'peer/목요일 hidden h-12 w-full',
    label:
      'block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/목요일:bg-cyan/50',
  },
  금요일: {
    input: 'peer/금요일 hidden h-12 w-full',
    label:
      'block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/금요일:bg-cyan/50',
  },
  토요일: {
    input: 'peer/토요일 hidden h-12 w-full',
    label:
      'block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/토요일:bg-cyan/50',
  },
  일요일: {
    input: 'peer/일요일 hidden h-12 w-full',
    label:
      'block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/일요일:bg-cyan/50',
  },
};

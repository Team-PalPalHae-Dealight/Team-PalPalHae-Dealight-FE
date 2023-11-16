/**
 * @namespace 로컬스토리지 key name : dealight-변수명
 * 변수명 컨벤션 : camelCase
 * ex) dealight-storeId
 */

const LocalStorage = {
  //eslint-disable-next-line
  setItem: (key: string, value: any) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  },
  getItem: (key: string) => {
    if (typeof window !== 'undefined') {
      const data = window.localStorage.getItem(key);

      if (data) {
        return JSON.parse(data);
      }
    }
    return null;
  },
  removeItem: (key: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(key);
    }
  },
};

export default LocalStorage;

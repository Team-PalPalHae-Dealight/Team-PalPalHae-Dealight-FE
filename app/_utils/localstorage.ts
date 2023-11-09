const LocalStorage = {
  //eslint-disable-next-line
  setItem: (key: string, value: any) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  },
  getItem: (key: string) => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(key) || '{}';
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

// class LocalStorage {
//   constructor() {}
//   //eslint-disable-next-line
//   static setItem(key: string, value: any) {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem(key, JSON.stringify(value));
//     }
//   }

//   static getItem(key: string) {
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem(key) || '{}';
//     }
//     return null;
//   }

//   static removeItem(key: string) {
//     if (typeof window !== 'undefined') {
//       localStorage.removeItem(key);
//     }
//   }
// }

// export default LocalStorage;

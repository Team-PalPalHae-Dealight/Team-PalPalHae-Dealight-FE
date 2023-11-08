export const getStorage = (key: string) => {
  const value = JSON.parse(localStorage.getItem(key) || '{}');
  return value;
};

//eslint-disable-next-line
export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

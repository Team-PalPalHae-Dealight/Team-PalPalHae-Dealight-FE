const getStorage = (key: string): string | null => {
  const value = localStorage.getItem(key);
  return value;
};
export default getStorage;

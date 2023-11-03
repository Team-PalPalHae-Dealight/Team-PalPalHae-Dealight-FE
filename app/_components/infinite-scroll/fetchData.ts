export type Item = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const fetchData = async (page: number) => {
  const url = `https://jsonplaceholder.typicode.com/posts/?_start=${page}&_limit=5`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data as Item[];
  } catch (error) {
    console.error('Error: ', error);
    return null;
  }
};

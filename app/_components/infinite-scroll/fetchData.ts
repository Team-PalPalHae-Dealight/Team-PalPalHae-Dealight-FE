export type ResponseItemType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchData = async (page: number) => {
  const url = `https://jsonplaceholder.typicode.com/posts/?_start=${page}&_limit=5`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data as ResponseItemType[];
  } catch (error) {
    console.error('Error: ', error);
    return null;
  }
};

export default fetchData;

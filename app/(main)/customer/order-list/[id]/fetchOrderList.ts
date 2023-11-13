/**
 * todo: api 연결 완료 후 수정 필요
 */

export type ResponseItemTypes = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchOrderList = async (page: number) => {
  const url = `https://jsonplaceholder.typicode.com/posts/?_start=${page}&_limit=5`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data as ResponseItemTypes[];
  } catch (error) {
    console.error('Error: ', error);
    return null;
  }
};

export default fetchOrderList;

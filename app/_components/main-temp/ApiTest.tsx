'use client';

async function postApi() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items?memberId=1`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({
        name: '떡볶이',
        stock: 1,
        discountPrice: 233,
        originalPrice: 2,
        description: null,
        information: '안내',
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    if (data.message) {
      throw new Error(data.message);
    }

    throw new Error('알 수 없는 에러');
  }

  console.log(data);
  return data;
}

async function getApi() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/stores/profiles/1/1`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    if (data.message) {
      throw new Error(data.message);
    }

    throw new Error('알 수 없는 에러');
  }

  return data;
}

const ApiTest = () => {
  const onClickPost = async () => {
    await postApi();
  };

  const onClickGet = async () => {
    await getApi()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <>
      <button onClick={onClickPost}>POST api 연결 테스트 버튼</button>
      <button onClick={onClickGet}>GET api 연결 테스트 버튼</button>
    </>
  );
};

export default ApiTest;

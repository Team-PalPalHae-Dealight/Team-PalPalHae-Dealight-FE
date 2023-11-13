'use client';

async function postApi() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MDAwMDAxIiwiaXNzIjoiREVBTElHSFQtQVBJLVNFUlZFUiIsImlhdCI6MTY5OTgzODEzOSwiZXhwIjoxNjk5OTI0NTM5LCJBdXRob3JpdGllcyI6IlJPTEVfTUVNQkVSIn0.wowAMfaK7bjn4XWhOmkBpgmlR-atvAHSx1klB6lNq8w',
    },
    body: JSON.stringify({
      storeNumber: '888222111',
      name: '맛짱조개',
      telephone: '01066772291',
      addressName: '서울시 강남구',
      xCoordinate: 67.89,
      yCoordinate: 293.2323,
      openTime: '09:00:00',
      closeTime: '23:00:00',
      dayOff: ['월요일'],
    }),
  });
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
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/1`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMTQwMjU1OTk0IiwiaXNzIjoiREVBTElHSFQtQVBJLVNFUlZFUiIsImlhdCI6MTY5OTgzNjk2NSwiZXhwIjoxNjk5OTIzMzY1LCJBdXRob3JpdGllcyI6IlJPTEVfQURNSU4ifQ.GLyDsyX1x4mKMeGHOn8TSD4j3W_zQDTTxrJCLRSViNA',
    },
  });
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
  const onClickPost = () => {
    postApi();
  };

  const onClickGet = () => {
    getApi()
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

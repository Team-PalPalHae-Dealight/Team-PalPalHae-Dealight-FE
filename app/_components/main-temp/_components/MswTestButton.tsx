'use client';

/**
 * @description msw 활용에 대한 예제 컴포넌트입니다. 삭제될 예정입니다.
 */

async function getTemp() {
  const data = await fetch('http://localhost:3000/mocks/api', {
    method: 'POST',
    body: JSON.stringify({ test: '123' }),
  }).then(res => res.json());

  console.log(data);
  return data;
}

export function MswTestButton() {
  return (
    <button onClick={async () => await getTemp()}>
      msw temp data 호출 버튼
    </button>
  );
}

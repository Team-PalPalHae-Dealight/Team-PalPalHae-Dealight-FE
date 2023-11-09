import BusinessStatus from './_components/business-status/BusinessStatus';

export default function Page() {
  return (
    <main className="mx-5 flex flex-col items-center pt-2.5">
      {/** @todo 모달창 띄워야 하는지 여부에 따라 등록하기 modal 띄우는 이벤트 처리하기 */}
      <BusinessStatus />
    </main>
  );
}

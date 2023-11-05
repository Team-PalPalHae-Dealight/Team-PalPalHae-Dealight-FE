import pageRoute from '../../../../../_constants/route';
import Link from 'next/link';

const RegisterModal = () => {
  return (
    <div className="fixed flex min-h-screen w-full max-w-[375px] items-center bg-dark-gray/75">
      <div className="mx-5 h-96 w-full bg-white">
        <div className="mx-5 flex flex-col items-center">
          <div className="mb-7 mt-10 w-full text-center text-lg font-semibold text-black">
            고객님의 편리한
            <br />
            딜라잇(Dealight) 이용을 위해
            <br />
            업체 등록이 필요합니다
          </div>
          <hr className="mb-7 h-0.5 w-full border-0 bg-dark-gray"></hr>
          <p className="mb-10 text-xs text-dark-gray">
            업체 등록은 고객님께 더 나은 서비스를 제공하기 위해 사용됩니다.
            업체를 등록하지 않을 경우에도 딜라잇 (Dealight)을 이용하실 수
            있습니다.
            <br />
            <br />
            이럴경우 사장님으로 활동하시기에는 제한이 따르며, 고객님으로 활동
            가능합니다.
          </p>
        </div>
        <Link href={pageRoute.store.registerStoreNumber()}>
          <button className="h-20 w-full bg-yellow text-center text-lg font-semibold">
            업체 등록하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterModal;

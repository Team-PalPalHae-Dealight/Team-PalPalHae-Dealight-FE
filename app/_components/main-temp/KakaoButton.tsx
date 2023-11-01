import Link from 'next/link';
import Kakao from '../../_assets/images/kakao.png';
import Image from 'next/image';

const KakoButton = () => {
  return (
    <div className="px-4">
      <Link
        href={'/'}
        className="bg-yellow-300 flex justify-center gap-1.5 rounded-md py-3"
      >
        <Image src={Kakao} alt="kakao" />
        <span>카카오 로그인</span>
      </Link>
    </div>
  );
};

export default KakoButton;

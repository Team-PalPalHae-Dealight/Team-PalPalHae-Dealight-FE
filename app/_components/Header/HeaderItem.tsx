import Link from 'next/link';
import Image from 'next/image';

type HeaderItemPropType = {
  icon: string;
  to: string;
};

const HeaderItem = ({ icon, to }: HeaderItemPropType) => {
  return (
    <div>
      <Link href={to}>
        <Image
          src={icon}
          alt="icon"
          width={24}
          height={24}
          className="h-6 w-full group-hover:stroke-[#FFE429]"
        />
      </Link>
    </div>
  );
};
export default HeaderItem;

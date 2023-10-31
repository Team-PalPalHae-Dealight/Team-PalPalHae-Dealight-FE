import Link from 'next/link';

type HeaderItemPropType = {
  text: string;
};

const HeaderItemtext = ({ text }: HeaderItemPropType) => {
  return (
    <div>
      <Link href="/posts/first-post"> {text}</Link>
    </div>
  );
};

export default HeaderItemtext;

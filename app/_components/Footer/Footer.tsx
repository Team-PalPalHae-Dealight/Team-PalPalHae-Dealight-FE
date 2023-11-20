import FooterItem from './FooterItem';

const Footer = () => {
  return (
    <div
      className="fixed bottom-0 left-0  box-border flex h-16 w-full items-center justify-between border-t-1 border-dark-gray/30 bg-light-gray px-8 py-2"
      style={{
        zIndex: '100',
      }}
    >
      <FooterItem icon={'Order'} labelName={'주문내역'} to={'/'} />
      <FooterItem icon={'Home'} labelName={'홈'} to={'/'} />
      <FooterItem icon={'MyPage'} labelName={'마이페이지'} to={'/'} />
    </div>
  );
};

export default Footer;

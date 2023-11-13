import FooterItem from './FooterItem';

const Footer = () => {
  return (
    <div
      className="sticky bottom-0 left-0  box-border flex h-16 w-full justify-between rounded-t-2xl bg-light-gray px-8 py-2"
      style={{ boxShadow: '0px -3px 5px -2px rgb(0, 0, 0, 0.1)' }}
    >
      <FooterItem icon={'Order'} labelName={'주문내역'} to={'/'} />
      <FooterItem icon={'Home'} labelName={'홈'} to={'/'} />
      <FooterItem icon={'MyPage'} labelName={'마이페이지'} to={'/'} />
    </div>
  );
};

export default Footer;

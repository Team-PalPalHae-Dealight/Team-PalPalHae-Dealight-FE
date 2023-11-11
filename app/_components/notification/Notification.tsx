type NotificationPropsType = {
  children: React.ReactNode;
};

const Notification = ({ children }: NotificationPropsType) => {
  return (
    <div className="min-h-42.5 w-full rounded bg-white p-4">
      <div className="pb-2.5 text-lg text-black">안내 사항</div>
      <div className="pb-2 text-xs text-black">
        딜라잇(Dealight) 서비스를 이용해주셔서 감사합니다.
      </div>
      <div className="pb-2 text-xs text-black">{children}</div>
      <div className="text-xs text-black">
        딜라잇(Dealight)은 상품 거래 예약을 도와주며, <br />그 외 과정에서
        문제가 발생할 경우 책임을 지지 않습니다.
      </div>
    </div>
  );
};

export default Notification;

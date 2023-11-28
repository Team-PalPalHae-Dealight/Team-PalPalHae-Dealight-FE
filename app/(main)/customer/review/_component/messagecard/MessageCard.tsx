import DeligitEmoji from 'app/(main)/customer/review-write/assets/delight-emoji.svg';

export const MessageCard = ({
  good,
  kind,
  special,
  cheap,
  same,
}: {
  good: boolean;
  kind: boolean;
  special: boolean;
  cheap: boolean;
  same: boolean;
}) => {
  return (
    <>
      <div className="m-4 w-full text-lg font-semibold leading-normal">
        응원의 메세지
      </div>
      <div className="flex-between flex w-full flex-col items-center ">
        <div
          className={`my-2 flex h-11 w-full flex-row gap-1 rounded-md bg-white ${
            good ? ' border border-blue' : ''
          }`}
          style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
        >
          <DeligitEmoji className="ml-1 mt-1 h-7 w-7" />
          <div className="py-3 text-xs font-semibold not-italic leading-normal ">
            상품 상태가 좋아요
          </div>
        </div>
        <div
          className={`my-2 flex h-11 w-full flex-row gap-1 rounded-md bg-white ${
            kind ? ' border border-blue' : ''
          }`}
          style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
        >
          <DeligitEmoji className="ml-1 mt-1 h-7 w-7" />

          <div className="py-3 text-xs font-semibold not-italic leading-normal">
            사장님이 친절해요
          </div>
        </div>
        <div
          className={`my-2 flex h-11 w-full flex-row gap-1 rounded-md bg-white ${
            special ? ' border border-blue' : ''
          }`}
          style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
        >
          <DeligitEmoji className="ml-1 mt-1 h-7 w-7" />
          <div className="py-3 text-xs font-semibold not-italic leading-normal">
            특별한 상품이 있어요
          </div>
        </div>
        <div
          className={`my-2 flex h-11 w-full flex-row gap-1 rounded-md bg-white ${
            cheap ? ' border border-blue' : ''
          }`}
          style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
        >
          <DeligitEmoji className="ml-1 mt-1 h-7 w-7" />

          <div className="py-3 text-xs font-semibold not-italic leading-normal">
            가격이 저렴해요
          </div>
        </div>
        <div
          className={`my-2 flex h-11 w-full flex-row gap-1 rounded-md bg-white ${
            same ? ' border border-blue' : ''
          }`}
          style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
        >
          <DeligitEmoji className="ml-1 mt-1 h-7 w-7" />
          <div className="py-3 text-xs font-semibold not-italic leading-normal">
            게시된 설명이 자세하고 실제 상품과 동일해요
          </div>
        </div>
      </div>
    </>
  );
};

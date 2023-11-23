import MainContents from './_components/main-contents/MainContents';

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return (
    <>
      <MainContents orderId={1} />
    </>
  );
}

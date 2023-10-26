export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return <h1>order-page</h1>;
}

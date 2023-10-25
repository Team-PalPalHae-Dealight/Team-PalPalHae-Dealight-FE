export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return <h1>product detail</h1>;
}

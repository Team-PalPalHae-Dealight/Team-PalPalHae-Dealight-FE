export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return <h1>item-edit</h1>;
}

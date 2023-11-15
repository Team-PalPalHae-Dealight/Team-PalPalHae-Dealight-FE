export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return (
    <>
      <h1>My Page</h1>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, neque
      corrupti rerum cupiditate blanditiis, illo mollitia, quia modi impedit
      aliquid non cumque quis hic quam possimus at amet aut dolorum? Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Dicta dolorum ratione atque
      hic possimus eaque quia enim, quasi mollitia nam aliquid itaque
      asperiores, reprehenderit quam quisquam et minima labore exercitationem?
    </>
  );
}

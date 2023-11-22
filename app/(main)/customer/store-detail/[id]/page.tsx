import StoreDetail from './_components/StoreDetail';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="mt-2 flex flex-col items-center gap-5 px-5">
      <StoreDetail storeId={params.id} />
    </main>
  );
}

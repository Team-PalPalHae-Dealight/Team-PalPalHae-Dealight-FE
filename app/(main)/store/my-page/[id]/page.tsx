import Footer from '@/app/_components/Footer/Footer';
import Header from '@/app/_components/Header/Header';
import ImageUploader from './_components/image-uploader/ImageUploader';

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return (
    <>
      <Header />
      <main className="px-5 pt-5">
        <ImageUploader />
      </main>
      <Footer />
    </>
  );
}

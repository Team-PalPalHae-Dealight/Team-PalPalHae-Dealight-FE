import LocalStorage from '@/app/_utils/localstorage';
import RegisterModal from './_components/register-modal/RegisterModal';

export default function Page() {
  const isStore = LocalStorage.getItem('dealight-store-id');

  return (
    <>
      <main className="flex flex-col items-center px-5">
        {isStore === null && <RegisterModal />}
      </main>
    </>
  );
}

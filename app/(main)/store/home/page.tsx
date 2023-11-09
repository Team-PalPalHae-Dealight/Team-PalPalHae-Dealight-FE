import LocalStorage from '@/app/_utils/localstorage';
import RegisterModal from './_components/register-modal/RegisterModal';
import BusinessStatus from './_components/business-status/BusinessStatus';

export default function Page() {
  const isStore = LocalStorage.getItem('dealight-storeId');

  return (
    <>
      <main className="flex flex-col items-center px-5">
        {isStore ? <BusinessStatus /> : <RegisterModal />}
      </main>
    </>
  );
}

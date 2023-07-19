import Footer from '@/components/Footer';
import MainHeader from '@/components/Header/MainHeader';

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=' flex flex-col w-screen h-screen bg-neutral-50'>
      <MainHeader />
      <main className='p-4 flex flex-col flex-1'>
        {children}

        <Footer />
      </main>
    </div>
  );
}

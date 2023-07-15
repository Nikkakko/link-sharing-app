import Header from '@/components/Header';

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='p-8 w-screen h-screen'>
      <Header />

      <main className='mt-16 flex flex-col'>{children}</main>
    </div>
  );
}

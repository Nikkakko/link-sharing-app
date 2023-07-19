import AuthHeader from '@/components/Header/AuthHeader';

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='p-8 w-screen h-screen'>
      <AuthHeader />
      <main className='mt-16 flex flex-col'>{children}</main>
    </div>
  );
}

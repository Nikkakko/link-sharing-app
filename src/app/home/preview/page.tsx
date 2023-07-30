import UserReview from '@/components/Preview/UserReview';
import { useSession } from 'next-auth/react';
import React from 'react';

const PreviewPage = () => {
  return (
    <div className='flex flex-col flex-1'>
      <UserReview />
    </div>
  );
};

export default PreviewPage;

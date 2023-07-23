import PictureUpload from '@/components/Profile/PictureUpload';
import ProfileCredentials from '@/components/Profile/ProfileCredentials';
import React from 'react';

const ProfileDetails = () => {
  return (
    <div className='p-4 flex flex-col bg-white'>
      <div className='flex flex-col gap-2'>
        <h1 className=' text-darkGrey text-2xl font-bold leading-9'>
          Profile Details
        </h1>
        <p className='text-customGrey text-base font-normal leading-norma'>
          Add your details to create a personal touch to your profile.
        </p>
      </div>

      <div className='mt-10 p-[20px] rounded-xl bg-neutral-50'>
        <PictureUpload />
      </div>
      <div className='mt-6 p-[20px] rounded-xl bg-neutral-50'>
        <ProfileCredentials />
      </div>
    </div>
  );
};

export default ProfileDetails;

import axios from 'axios';
import { headers } from 'next/dist/client/components/headers';

export async function uploadImage(imageUploaded: any) {
  try {
    const formData = new FormData();
    formData.append('file', imageUploaded);
    formData.append('upload_preset', 'link-sharing');
    formData.append(
      'cloud_name',
      `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`
    );

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteImage(publicId: string) {
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/destroy `,

      {
        public_id: publicId,
        deleteImage: publicId,
        upload_preset: 'link-sharing',
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

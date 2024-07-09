// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getDownloadURL, ref } from 'firebase/storage';
// import { storage } from '../../firebase/firebase';

// interface ImageFetchParams {
//   imageName: string;
// }

// export const fetchImg = createAsyncThunk<string, ImageFetchParams, { rejectValue: string }>(
//   'image/getImageURL',
//   async ({ imageName }, { rejectWithValue }) => {
//     try {
//       const storageRef = ref(storage, `main/${imageName}`);
//       const downloadURL = await getDownloadURL(storageRef);
//       return downloadURL;
//     } catch (error: unknown) {
//       let errorMessage = 'An unknown error occurred';
//       if (error instanceof Error) {
//         errorMessage = error.message;
//       }
//       return rejectWithValue(errorMessage);
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
// import { ref, get } from 'firebase/database';
import { storage } from '../../firebase/firebase';

interface ImageFetchParams {
  imageName: string;
}

interface ImageURLs {
  img1920: string;
  img1440: string;
  img1024: string;
  img375: string;
}


export const fetchImg = createAsyncThunk<ImageURLs, ImageFetchParams, { rejectValue: string }>(
  'image/fetchImg',
  async ({ imageName }, { rejectWithValue }) => {
    try {
      const img1920 = await getDownloadURL(storageRef(storage, `main/${imageName}-1920.webp`));
      const img1440 = await getDownloadURL(storageRef(storage, `main/${imageName}-1440.webp`));
      const img1024 = await getDownloadURL(storageRef(storage, `main/${imageName}-1024.webp`));
      const img375 = await getDownloadURL(storageRef(storage, `main/${imageName}-375.webp`));

      return { img1920, img1440, img1024, img375 };
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return rejectWithValue(errorMessage);
    }
  }
);



// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getDownloadURL, ref as storageRef } from 'firebase/storage';
// import { storage } from '../../firebase/firebase';

// interface ImageFetchParams {
//   imageName: string;
// }

// interface ImageURLs {
//   img1920: string;
//   img1440: string;
//   img1024: string;
//   img375: string;
// }


// export const fetchImg = createAsyncThunk<ImageURLs, ImageFetchParams, { rejectValue: string }>(
//   'image/fetchImg',
//   async ({ imageName }, { rejectWithValue }) => {
//     try {
//       const img1920 = await getDownloadURL(storageRef(storage, `main/${imageName}-1920.webp`));
//       const img1440 = await getDownloadURL(storageRef(storage, `main/${imageName}-1440.webp`));
//       const img1024 = await getDownloadURL(storageRef(storage, `main/${imageName}-1024.webp`));
//       const img375 = await getDownloadURL(storageRef(storage, `main/${imageName}-375.webp`));

//       return { img1920, img1440, img1024, img375 };
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
import { storage } from '../../firebase/firebase';

export interface ImageItem {
  id: string;
  path: string;
  url: string;
}

export interface ImageFetchParams {
  imageName: string;
  path: string;
}

export const fetchImg = createAsyncThunk<ImageItem[], ImageFetchParams, { rejectValue: string }>(
  'image/fetchImg',
  async ({ imageName, path }, { rejectWithValue }) => {
    try {
      const img1920 = await getDownloadURL(storageRef(storage, `${path}/${imageName}-1920.webp`));
      const img1440 = await getDownloadURL(storageRef(storage, `${path}/${imageName}-1440.webp`));
      const img1024 = await getDownloadURL(storageRef(storage, `${path}/${imageName}-1024.webp`));
      const img375 = await getDownloadURL(storageRef(storage, `${path}/${imageName}-375.webp`));

      return [
        { id: 'img-1920', path: `${path}/${imageName}-1920.webp`, url: img1920 },
        { id: 'img-1440', path: `${path}/${imageName}-1440.webp`, url: img1440 },
        { id: 'img-1024', path: `${path}/${imageName}-1024.webp`, url: img1024 },
        { id: 'img-375', path: `${path}/${imageName}-375.webp`, url: img375 },
      ];
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return rejectWithValue(errorMessage);
    }
  }
);





// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getDownloadURL, ref as storageRef } from "firebase/storage";
// import { ref, get, DataSnapshot } from "firebase/database";
// import { db, storage } from "../../firebase/firebase";
// import { FirebaseError } from "firebase/app";

// export interface AccordionItemInterface {
//   id: number;
//   image: { [key: string]: string };
//   bigImg: { [key: string]: string };
//   title: string[];
//   fullText: string;
//   isItemOpen: boolean;
// }

// export interface RawAccordionItem {
//   id: number;
//   image: string;
//   bigImg: string;
//   title: string[];
//   fullText: string;
//   isItemOpen: boolean;
// }

// const generateImageURLs = async (
//   baseName: string,
//   sizes: string[]
// ): Promise<{ [key: string]: string }> => {
//   const urls: { [key: string]: string } = {};
//   for (const size of sizes) {
//     const key = `img-${size}`;
//     try {
//       urls[key] = baseName
//         ? await getDownloadURL(
//             storageRef(storage, `main/${baseName}-${size}.webp`)
//           )
//         : "";
//     } catch (error) {
//       if ((error as FirebaseError).code === "storage/object-not-found") {
//         console.warn(`Image ${baseName}-${size}.webp not found.`);
//       } else {
//         console.error(`Failed to load image ${baseName}-${size}.webp: `, error);
//       }
//       urls[key] = "";
//     }
//   }
//   return urls;
// };

// export const getAccordionThunk = createAsyncThunk<
// AccordionItemInterface[],
//   undefined,
//   { rejectValue: string }
// >("accordion/getAccordionThunk", async (_, { rejectWithValue }) => {
//   try {
//     const accordionRef = ref(db, "accordion");
//     const snapshot: DataSnapshot = await get(accordionRef);

//     let accordionData: RawAccordionItem[] = [];
//     if (snapshot.exists()) {
//       const data = snapshot.val();
//       accordionData = Object.values(data);
//     }

//     const sizes = ["1920", "1440", "1024", "375"];

//     const updatedAccordionData: AccordionItemInterface[] = await Promise.all(
//       accordionData.map(async (item) => {
//         const image = await generateImageURLs(item.image, sizes);
//         const bigImg = await generateImageURLs(item.bigImg, sizes);

//         return { ...item, image, bigImg };
//       })
//     );

//     return updatedAccordionData;
//   } catch (error: unknown) {
//     let errorMessage = "An unknown error occurred";
//     if (error instanceof Error) {
//       errorMessage = error.message;
//     }
//     return rejectWithValue(errorMessage);
//   }
// });

// import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
// import { getDownloadURL, ref as storageRef } from 'firebase/storage';
// import { ref, get } from 'firebase/database';
// import { db, storage } from '../../firebase/firebase';
// import { FirebaseError } from 'firebase/app';

// export interface ImageResolution {
//   'img-1920': string;
//   'img-1440': string;
//   'img-1024': string;
//   'img-375': string;
// }

// export interface AccordionItemInterface {
//   id: number;
//   image: string;
//   bigImg: string;
//   title: string[];
//   fullText: string;
//   isItemOpen: boolean;
//   imageResolutions?: ImageResolution;
//   bigImageResolutions?: ImageResolution;
// }

// interface FetchParams {}

// interface AsyncThunkConfig {
//   rejectValue: string;
// }

// const generateImageURLs = async (baseName: string, sizes: string[]): Promise<ImageResolution> => {
//   const urls: ImageResolution = {
//     'img-1920': '',
//     'img-1440': '',
//     'img-1024': '',
//     'img-375': ''
//   };

//   for (const size of sizes) {
//     const key = `img-${size}` as keyof ImageResolution;
//     try {
//       urls[key] = baseName ? await getDownloadURL(storageRef(storage, `main/${baseName}-${size}.webp`)) : '';
//     } catch (error) {
//       if ((error as FirebaseError).code === 'storage/object-not-found') {
//         console.warn(`Image ${baseName}-${size}.webp not found.`);
//       } else {
//         console.error(`Failed to load image ${baseName}-${size}.webp: `, error);
//       }
//       urls[key] = '';
//     }
//   }
//   return urls;
// };


// export const getAccordionThunk: AsyncThunk<AccordionItemInterface[], FetchParams, AsyncThunkConfig> = createAsyncThunk<
// AccordionItemInterface[],
//   FetchParams,
//   AsyncThunkConfig
// >(
//   'accordion/fetchAccordionData',
//   async (_, { rejectWithValue }) => {
//     try {
//       const accordionRef = ref(db, 'accordion');
//       const snapshot = await get(accordionRef);

//       let accordionData: AccordionItemInterface[] = [];
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         accordionData = Object.values(data);
//       }

//       const sizes = ['1920', '1440', '1024', '375'];

//       const updatedAccordionData = await Promise.all(accordionData.map(async (item) => {
//         const imageResolutions = await generateImageURLs(item.image, sizes);
//         const bigImageResolutions = await generateImageURLs(item.bigImg, sizes);

//         return { ...item, imageResolutions, bigImageResolutions };
//       }));

//       return updatedAccordionData;
//     } catch (error: unknown) {
//       let errorMessage = 'An unknown error occurred';
//       if (error instanceof Error) {
//         errorMessage = error.message;
//       }
//       return rejectWithValue(errorMessage);
//     }
//   }
// );

import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { ref, get } from 'firebase/database';
import { db} from '../../firebase/firebase';
import { AccordionItemInterface, AsyncThunkConfig } from '../interface/accordion';
import { generateImageURLs } from './accordion';




export const getAccordionThunk: AsyncThunk<AccordionItemInterface[], undefined, AsyncThunkConfig> = createAsyncThunk<
AccordionItemInterface[],
  undefined,
  AsyncThunkConfig
>(
  'accordion/getAccordionThunk',
  async (_, { rejectWithValue }) => {
    try {
      const accordionRef = ref(db, 'accordion');
      const snapshot = await get(accordionRef);

      let accordionData: AccordionItemInterface[] = [];
      if (snapshot.exists()) {
        const data = snapshot.val();
        accordionData = Object.values(data);
      }

      const sizes = ['1920', '1440', '1024', '375'];

      // Завантаження URL зображень
      const updatedAccordionData = await Promise.all(accordionData.map(async (item) => {
        const imageResolutions = await generateImageURLs(item.image, sizes);
        const bigImageResolutions = await generateImageURLs(item.bigImg, sizes);

        return { ...item, imageResolutions, bigImageResolutions };
      }));

      return updatedAccordionData;
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return rejectWithValue(errorMessage);
    }
  }
);




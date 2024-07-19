// import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
// import { ref, get } from 'firebase/database';
// import { db} from '../../firebase/firebase';
// import {  ApartmentsInterface, AsyncThunkConfig } from '../interface/accordion';
// import { generateImageURLs } from '../accordion/accordion';

import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { ApartmentsInterface, AsyncThunkConfig } from "../interface/interface";
import { get, ref } from "firebase/database";
import { db } from "../../firebase/firebase";
import { generateImageURLs } from "../../helpers/generateImageURLs";



// export const getApartmentsThunk: AsyncThunk<ApartmentsInterface[], undefined, AsyncThunkConfig> = createAsyncThunk<
// ApartmentsInterface[],
//   undefined,
//   AsyncThunkConfig
// >(
//   'apartments/getApartmentsThunk',
//   async (_, { rejectWithValue }) => {
//     try {
//       const apartmentsRef = ref(db, 'apartments');
//       console.log(apartmentsRef);
//       const snapshot = await get(apartmentsRef);
//       console.log(snapshot);

//       let apartmentsData: ApartmentsInterface[] = [];
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         console.log('Data from Firebase:', data);
//         apartmentsData = Object.values(data);
//       }

//       const sizes = ['1920', '1440', '1024', '375'];


//       const updatedApartmentsData = await Promise.all(apartmentsData.map(async (item) => {
//         const imageLeftResolutions = await generateImageURLs(item.imgLeft, sizes);
//         const imageRightResolutions = await generateImageURLs(item.imgRight, sizes);

//         return { ...item, imageLeftResolutions, imageRightResolutions };
//       }));

//       return updatedApartmentsData;
//     } catch (error: unknown) {
//       let errorMessage = 'An unknown error occurred';
//       if (error instanceof Error) {
//         errorMessage = error.message;
//       }
//       return rejectWithValue(errorMessage);
//     }
//   }
// );



export const getApartmentsThunk: AsyncThunk<ApartmentsInterface[], undefined, AsyncThunkConfig> = createAsyncThunk<
  ApartmentsInterface[],
  undefined,
  AsyncThunkConfig
>(
  'apartments/getApartmentsThunk',
  async (_, { rejectWithValue }) => {
    try {
      console.log('Fetching apartments...'); // Додано логування

      const apartmentsRef = ref(db, 'apartments');
      const snapshot = await get(apartmentsRef);

      let apartmentsData: ApartmentsInterface[] = [];
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('Data from Firebase:', data); // Додано логування
        apartmentsData = Object.values(data);
      } else {
        console.log('No data available');
      }

      const sizes = ['1920', '1440', '1024', '375'];

      const updatedAccordionData = await Promise.all(apartmentsData.map(async (item) => {
        const path = `main`;
        const imageLeftResolutions = await generateImageURLs(item.imgLeft, sizes, path);
        const imageRightResolutions = await generateImageURLs(item.imgRight, sizes, path);

        return { ...item, imageLeftResolutions, imageRightResolutions };
      }));

      console.log('Updated Accordion Data:', updatedAccordionData); // Додано логування
      return updatedAccordionData;
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error('Error fetching apartments:', errorMessage); // Додано логування
      return rejectWithValue(errorMessage);
    }
  }
);

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { DataSnapshot, get, ref } from 'firebase/database';
// import { db } from '../../firebase/firebase';

// export type ApartmentsInterfaceItem = {
//     id: number;
//     imgLeft: string;
//     imgRight: string;
//     title: string;
//     text: string;
//   };

// export const getApartmentsThunk = createAsyncThunk<
//   ApartmentsInterfaceItem[],
//   undefined,
//   { rejectValue: string }
// >('apartments/getApartmentsThunk', async function (_, { rejectWithValue }) {
//   try {
//     const menuRef = ref(db, 'apartments');
//     console.log(menuRef);

//     const snapshot: DataSnapshot = await get(menuRef);

//     if (snapshot.exists()) {
//       const menuData: ApartmentsInterfaceItem[] = snapshot.val();
//       return menuData;
//     } else {
//       return [];
//     }
//   } catch (error: unknown) {
//     return rejectWithValue((error as Error).message);
//   }
// });

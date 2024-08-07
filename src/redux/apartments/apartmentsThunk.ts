import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { ApartmentsInterface, AsyncThunkConfig } from "../interface/interface";
import { get, ref } from "firebase/database";
import { db } from "../../firebase/firebase";
import { generateImageURLs } from "../../helpers/generateImageURLs";


export const getApartmentsThunk: AsyncThunk<ApartmentsInterface[], undefined, AsyncThunkConfig> = createAsyncThunk<
  ApartmentsInterface[],
  undefined,
  AsyncThunkConfig
>(
  'apartments/getApartmentsThunk',
  async (_, { rejectWithValue }) => {
    try {
      const apartmentsRef = ref(db, 'apartments');
      const snapshot = await get(apartmentsRef);

      let apartmentsData: ApartmentsInterface[] = [];
      if (snapshot.exists()) {
        const data = snapshot.val();
        apartmentsData = Object.values(data);
      } else {
        console.log('No data available');
      }

      const sizes = ['1920', '1440', '1024', '375'];

      const updatedApartmentsData = await Promise.all(apartmentsData.map(async (item) => {
        const path = `main`;
        const imageLeftResolutions = await generateImageURLs(item.imgLeft, sizes, path);
        const imageRightResolutions = await generateImageURLs(item.imgRight, sizes, path);

        return { ...item, imageLeftResolutions, imageRightResolutions };
      }));
      return updatedApartmentsData;
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error('Error fetching apartments:', errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

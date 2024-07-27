import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { db } from "../../firebase/firebase";
import { generateImageURLs } from "../../helpers/generateImageURLs";
import { AsyncThunkConfig, RoomItemInterface } from "../interface/interface";


export const getRoomsThunk: AsyncThunk<RoomItemInterface[], undefined, AsyncThunkConfig> = createAsyncThunk<
  RoomItemInterface[],
  undefined,
  AsyncThunkConfig
>(
  'rooms/getRoomsThunk',
  async (_, { rejectWithValue }) => {
    try {
      const roomsRef = ref(db, 'rooms');
      const snapshot = await get(roomsRef);

      let roomsData: RoomItemInterface[] = [];
      if (snapshot.exists()) {
        const data = snapshot.val();
        roomsData = Object.values(data);
      } else {
        console.log('No data available');
      }

      const sizes = ['1920', '1440', '1024', '375'];

      const updatedRoomsData = await Promise.all(roomsData.map(async (item) => {
        const path = `rooms`;
        const imageDescriptionResolutions = await generateImageURLs(item.imgDescription, sizes, path);
        const imageLeftSectionResolutions = await generateImageURLs(item.leftSection.image, sizes, path);
        const imageRightSectionResolutions = await generateImageURLs(item.rightSection.image, sizes, path);

        return { ...item, imageDescriptionResolutions,imageLeftSectionResolutions,imageRightSectionResolutions };
      }));
      return updatedRoomsData;
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

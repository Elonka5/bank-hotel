import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataSnapshot, get, ref } from "firebase/database";
import { db,storage } from "../../firebase/firebase";

import { ref as storageRef, getDownloadURL, } from "firebase/storage";

export type RoomItem = {
  id?: string;
  title?: string;
  imgHero?: string;
  roomDescription?: string;
  imgDescription?: string;
  leftSection?: {
    image: string;
    description: string;
  }[];
  righSection?: {
    image: string;
    description: string[];
  }[];
};

export const fetchRooms = createAsyncThunk<
  RoomItem[],
  undefined,
  { rejectValue: string }
>('rooms/fetchRooms', async function (_, { rejectWithValue }) {
  try {
    const roomsRef = ref(db, 'rooms');
    console.log(roomsRef);

    // const str = getDownloadURL(storageRef(storage, 'main'))

    // console.log(str);

    const storageReference = storageRef(storage, `main/`);
    console.log(storageReference);
    // const snapsh = await uploadBytes(storageReference);
    const downloadURL = await getDownloadURL(storageReference);
console.log(downloadURL);

    const snapshot: DataSnapshot = await get(roomsRef);

    if (snapshot.exists()) {
      const roomsData: RoomItem[] = snapshot.val();
      console.log('data:', roomsData);
      return roomsData;
    } else {
      return [];
    }
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return rejectWithValue(errorMessage);
  }
});

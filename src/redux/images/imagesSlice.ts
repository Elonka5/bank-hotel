// slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchImg } from "./images";
import { ImageItem, ImageState } from "../interface/interface";

// export interface ImageItem {
//   id: string;
//   path: string;
//   url: string;
// }

const initialState: ImageState = {
  images: [],
};

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchImg.fulfilled,
      (state, action: PayloadAction<ImageItem[]>) => {
        state.images = action.payload;
      }
    );
  },
});

export const imageReducer = imageSlice.reducer;

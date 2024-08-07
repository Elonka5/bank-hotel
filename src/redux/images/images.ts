import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDownloadURL, ref as storageRef, listAll } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { ImageFetchParams, ImageItem } from "../interface/interface";

export const fetchImg = createAsyncThunk<
  ImageItem[],
  ImageFetchParams,
  { rejectValue: string }
>("image/fetchImg", async ({ imageName, path }, { rejectWithValue }) => {
  try {

    const folderRef = storageRef(storage, path);
    const folderContents = await listAll(folderRef);
    const fileNames = folderContents.items.map(item => item.name);

    const images: ImageItem[] = [];
    const sizes = ["1920", "1440", "1024", "375"];

    for (const size of sizes) {
      const filePath = `${imageName}-${size}.webp`;
      if (fileNames.includes(filePath)) {
        const url = await getDownloadURL(storageRef(storage, `${path}/${filePath}`));
        images.push({ id: `img-${size}`, path: `${path}/${filePath}`, url });
      }
    }

    return images;
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return rejectWithValue(errorMessage);
  }
});

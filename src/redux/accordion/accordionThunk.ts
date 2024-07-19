import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";
import {
  AccordionItemInterface,
  AsyncThunkConfig,
} from "../interface/interface";
import { generateImageURLs } from "../../helpers/generateImageURLs";

export const getAccordionThunk: AsyncThunk<
  AccordionItemInterface[],
  undefined,
  AsyncThunkConfig
> = createAsyncThunk<AccordionItemInterface[], undefined, AsyncThunkConfig>(
  "accordion/getAccordionThunk",
  async (_, { rejectWithValue }) => {
    try {
      const accordionRef = ref(db, "accordion");
      const snapshot = await get(accordionRef);

      let accordionData: AccordionItemInterface[] = [];
      if (snapshot.exists()) {
        const data = snapshot.val();
        accordionData = Object.values(data);
      }

      const sizes = ["1920", "1440", "1024", "375"];

////// ---------- Upload URL images ----------/////

      const updatedAccordionData = await Promise.all(
        accordionData.map(async (item) => {
          const path = `main`;
          const imageResolutions = await generateImageURLs(item.image, sizes,path);
          const bigImageResolutions = await generateImageURLs(
            item.bigImg,
            sizes,path
          );

          return { ...item, imageResolutions, bigImageResolutions };
        })
      );

      return updatedAccordionData;
    } catch (error: unknown) {
      let errorMessage = "An unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return rejectWithValue(errorMessage);
    }
  }
);

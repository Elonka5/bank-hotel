// slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchImg} from './mainImg';

export interface ImageItem {
    id: string;
    path: string;
    url: string;
  }


interface ImageState {
  images: ImageItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ImageState = {
  images: [],
  loading: false,
  error: null,
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImg.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchImg.fulfilled, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = null;
      state.images.push({ id: state.images.length.toString(), path: action.payload, url: action.payload });
    });
    builder.addCase(fetchImg.rejected, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload || 'Error';
      });
  },
});


// export default imageSlice.reducer;

export const mainReducer = imageSlice.reducer;

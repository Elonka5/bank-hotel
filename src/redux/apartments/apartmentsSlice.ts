import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getApartmentsThunk } from './apartmentsThunk';
import { ApartmentsInterface } from '../interface/interface';

type ApartmentsState = {
    apartmentsData: ApartmentsInterface[];
}

const initialState: ApartmentsState = {
    apartmentsData: [],
};

const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState, 
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getApartmentsThunk.fulfilled, (state, action: PayloadAction<ApartmentsInterface[]>) => {
        state.apartmentsData = action.payload;

      })

  }
});

export const apartmentsReducer = apartmentsSlice.reducer;
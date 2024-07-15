import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookingState } from "../interface/interface";

const initialState: IBookingState = {
  checkInDate: null,
  checkOutDate: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setCheckInDate: (state, action: PayloadAction<string | null>) => {
      state.checkInDate = action.payload;
    },
    setCheckOutDate: (state, action: PayloadAction<string | null>) => {
      state.checkOutDate = action.payload;
    },
  },
});

export const { setCheckInDate, setCheckOutDate } = bookingSlice.actions;
export const bookingReducer = bookingSlice.reducer;

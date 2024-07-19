import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookingState } from "../interface/interface";

const initialState: IBookingState = {
  checkInDate: null,
  checkOutDate: null,
  submitDates: [],
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
    setSubmitDates: (
      state,
      action: PayloadAction<{ checkIn: string | null; checkOut: string | null }>
    ) => {
      if (state.submitDates) {
        state.submitDates.push({
          checkIn: action.payload.checkIn ?? state.checkInDate ?? null,
          checkOut: action.payload.checkOut ?? state.checkOutDate ?? null,
        });
      } else {
        state.submitDates = [
          {
            checkIn: action.payload.checkIn ?? state.checkInDate ?? null,
            checkOut: action.payload.checkOut ?? state.checkOutDate ?? null,
          },
        ];
      }
    },
  },
});

export const { setCheckInDate, setCheckOutDate, setSubmitDates } =
  bookingSlice.actions;
export const bookingReducer = bookingSlice.reducer;

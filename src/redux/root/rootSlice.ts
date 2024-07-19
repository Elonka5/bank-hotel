import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { getAccordionThunk } from "../accordion/accordionThunk";
import { fetchImg } from "../images/images";
import { getApartmentsThunk } from "../apartments/apartmentsThunk";
import { ServiceState } from "../interface/interface";

const initialState: ServiceState = {
  error: null,
  isLoading: false,
  openModal: false,
  modalContent: "",
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setModalStatus: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
    setModalContent: (state, action: PayloadAction<string>) => {
      state.modalContent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          getApartmentsThunk.pending,
          getAccordionThunk.pending,
          fetchImg.pending
        ),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getApartmentsThunk.fulfilled,
          getAccordionThunk.fulfilled,
          fetchImg.fulfilled
        ),
        (state) => {
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getApartmentsThunk.rejected,
          getAccordionThunk.rejected,
          fetchImg.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload as string;
        }
      );
  },
});

export const { setModalStatus, setModalContent } = serviceSlice.actions;

export const rootReducer = serviceSlice.reducer;

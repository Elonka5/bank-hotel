// import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';

// interface RootState {
//     isLoading: boolean;
//     error: string | null;
// }

// const handlePending = (state: RootState) => {
//     state.isLoading = true;
//     state.error = null;
// };

// const handleRejected = (state: RootState, action: PayloadAction<string>) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };

// const handleFulfilled = (state: RootState) => {
//     state.isLoading = false;
// };

// const rootSlice = createSlice({
//     name: 'root',
//     initialState: { isLoading: false, error: null } as RootState,
//     reducers: {
//         setError: (state) => {
//             state.error = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addMatcher(
//                 (action: AnyAction) => action.type.endsWith('/pending'),
//                 handlePending
//             )
//             .addMatcher(
//                 (action: AnyAction) => action.type.endsWith('/rejected'),
//                 handleRejected
//             )
//             .addMatcher(
//                 (action: AnyAction) => action.type.endsWith('/fulfilled'),
//                 handleFulfilled
//             );
//     },
// });

// export const { setError } = rootSlice.actions;
// export const rootReducer = rootSlice.reducer;


import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {getAccordionThunk } from "../accordion/accordionThunk";

interface ServiceState {
  error: string | null;
  isLoading: boolean;
  openModal: boolean;
  modalContent: string;
}

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
            getAccordionThunk.pending,
        ),
        (state) => {
          state.error = null;
          state.isLoading = true;
        },
      )
      .addMatcher(
        isAnyOf(
            getAccordionThunk.fulfilled,
 
        ),
        (state) => {
          state.error = null;
          state.isLoading = false;
        },
      )
      .addMatcher(
        isAnyOf(
            getAccordionThunk.rejected,
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload as string;
        },
      );
  },
});

export const {
  setModalStatus,
  setModalContent,
} = serviceSlice.actions;

export const rootReducer = serviceSlice.reducer;


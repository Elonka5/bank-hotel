import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AccordionItem, getAccordionThunk} from './accordionThunk';

type AccordionState = {
  accordionData: AccordionItem[];
}

const initialState: AccordionState = {
  accordionData: [],
};

const accordionSlice = createSlice({
  name: 'accordion',
  initialState, 
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccordionThunk.fulfilled, (state, action: PayloadAction<AccordionItem[]>) => {
        state.accordionData = action.payload;

      })

  }
});

export const accordionReducer = accordionSlice.reducer;
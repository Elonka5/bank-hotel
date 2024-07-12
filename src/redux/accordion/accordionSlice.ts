import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {getAccordionThunk} from './accordionThunk';
import { AccordionItemInterface } from '../interface/interface';

type AccordionState = {
  accordionData: AccordionItemInterface[];
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
      .addCase(getAccordionThunk.fulfilled, (state, action: PayloadAction<AccordionItemInterface[]>) => {
        state.accordionData = action.payload;

      })

  }
});

export const accordionReducer = accordionSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRooms, RoomItem } from "./roomsThunk";

interface RoomsState {
    roomsData: RoomItem[];
    // isLoading: boolean;
    // error: string | null;
  }
  
  const initialState: RoomsState = {
    roomsData: [],

  };
  
  const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchRooms.fulfilled, (state, action: PayloadAction<RoomItem[]>) => {
        state.roomsData = action.payload;
      });
    },
  });
  
  export const roomsReducer = roomsSlice.reducer;
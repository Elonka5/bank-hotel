import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRoomsThunk} from "./roomsThunk";
import { RoomItemInterface, RoomsState } from "../interface/interface";

const initialState: RoomsState = {
  roomsData: [],
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getRoomsThunk.fulfilled,
      (state, action: PayloadAction<RoomItemInterface[]>) => {
        state.roomsData = action.payload;
      }
    );
  },
});

export const roomsReducer = roomsSlice.reducer;

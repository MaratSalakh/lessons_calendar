import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { DPDay } from "@rehookify/datepicker";

// Define a type for the slice state
interface CalendarState {
  value: DPDay[][];
}

// Define the initial state using that type
const initialState: CalendarState = {
  value: [],
};

export const calendarSlice = createSlice({
  name: "calendar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    refresh: (state, action: PayloadAction<DPDay[][]>) => {
      state.value = action.payload;
    },
  },
});

export const { refresh } = calendarSlice.actions;

export default calendarSlice.reducer;

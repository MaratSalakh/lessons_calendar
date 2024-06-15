import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { DPDay } from "@rehookify/datepicker";

export type DateOfCalendar = {
  day: string;
  inCurrentMonth: boolean;
  lessons: {
    firstTitle: string;
    firstTime: string;
    changing: boolean;
    i: number;
    secondTitle: string;
    secondTime: string;
  };
};

// Define a type for the slice state
interface CalendarState {
  value: DateOfCalendar[];
  changeMode: boolean;
}

// Define the initial state using that type
const initialState: CalendarState = {
  value: [],
  changeMode: false,
};

export const calendarSlice = createSlice({
  name: "calendar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    initializeCalendar: (state, action: PayloadAction<DateOfCalendar[]>) => {
      state.value = action.payload;
    },
    setFirstTime: (
      state,
      action: PayloadAction<{ time: string; i: number }>,
    ) => {
      state.value[action.payload.i].lessons.firstTime = action.payload.time;
    },
    setSecondTime: (
      state,
      action: PayloadAction<{ time: string; i: number }>,
    ) => {
      state.value[action.payload.i].lessons.secondTime = action.payload.time;
    },
    setFirstTitle: (
      state,
      action: PayloadAction<{ title: string; i: number }>,
    ) => {
      state.value[action.payload.i].lessons.firstTitle = action.payload.title;
    },
    setSecondTitle: (
      state,
      action: PayloadAction<{ title: string; i: number }>,
    ) => {
      state.value[action.payload.i].lessons.secondTitle = action.payload.title;
    },
    setChangeMode: (state) => {
      state.changeMode = !state.changeMode;
    },
    setChangingLesson: (state, action: PayloadAction<{ i: number }>) => {
      state.value[action.payload.i].lessons.changing =
        !state.value[action.payload.i].lessons.changing;
    },
  },
});

export const {
  initializeCalendar,
  setFirstTime,
  setSecondTime,
  setFirstTitle,
  setSecondTitle,
  setChangeMode,
  setChangingLesson,
} = calendarSlice.actions;

export default calendarSlice.reducer;

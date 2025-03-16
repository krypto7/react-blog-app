import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  initialState: 0,
  name: "count",
  reducers: {
    increment: (state) => {
      return (state = state + 1);
    },
    decrement: (state) => {
      return (state = state - 1);
    },
  },
});
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;

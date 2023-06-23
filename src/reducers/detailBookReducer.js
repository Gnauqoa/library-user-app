import { createSlice } from "@reduxjs/toolkit";

const detailBookSlice = createSlice({
  name: "detailBook",
  initialState: null,
  reducers: {
    setDetailBook(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = detailBookSlice;

export const { setDetailBook } = actions;

export default reducer;

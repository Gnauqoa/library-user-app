import { createSlice } from "@reduxjs/toolkit";

const refreshPageSlice = createSlice({
  name: " refreshPage",
  initialState: {
    refreshing: false,
  },
  reducers: {
    setRefreshPage(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = refreshPageSlice;

export const { setRefreshPage } = actions;

export default reducer;

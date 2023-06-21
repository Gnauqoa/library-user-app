import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: null,
  reducers: {
    store(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = currentUserSlice;

export const storeUser = actions.store;

export default reducer;

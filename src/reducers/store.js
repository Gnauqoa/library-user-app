import { configureStore } from "@reduxjs/toolkit";
import loginStatusReducer from "./loginStatusReducer";
import userReducer from "./userReducer.js";
import detailBookReducer from "./detailBookReducer";
export const store = configureStore({
  reducer: {
    detailBook: detailBookReducer,
    loginStatus: loginStatusReducer,
    currentUser: userReducer,
  },
});

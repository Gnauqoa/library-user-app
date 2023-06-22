import { configureStore } from "@reduxjs/toolkit";
import loginStatusReducer from "./loginStatusReducer";
import userReducer from "./userReducer.js";
import refreshPageReducer from "./refreshPage.js";

export const store = configureStore({
  reducer: {
    loginStatus: loginStatusReducer,
    currentUser: userReducer,
    refreshPage: refreshPageReducer,
  },
});

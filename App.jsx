import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Provider } from "react-redux";
import { store } from "./src/reducers/store";
import AutoLogin from "./src/components/AutoLogin";
import Routers from "./src/Routers";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export default function App() {
  return (
    <Provider store={store}>
      <AutoLogin />
      <NativeBaseProvider>
        <Routers />
      </NativeBaseProvider>
    </Provider>
  );
}

export const theme = extendTheme({ config });

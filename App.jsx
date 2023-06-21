import React from "react";
import { NativeBaseProvider, Text, View, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login/index";
import Register from "./src/pages/Register";
import { Provider } from "react-redux";
import { store } from "./src/reducers/store";
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Login"
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
export const theme = extendTheme({ config });

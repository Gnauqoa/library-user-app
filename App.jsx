import React from "react";
import { NativeBaseProvider, Text, View, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login/index";
import Register from "./src/pages/Register";
import { REACT_APP_API_URL } from "@env";

console.log(REACT_APP_API_URL);
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Register"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export const theme = extendTheme({ config });

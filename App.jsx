import React, { useEffect, useReducer } from "react";
import { NativeBaseProvider, Text, View, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./src/pages/Login/index";
import Register from "./src/pages/Register";
import { Provider } from "react-redux";
import { store } from "./src/reducers/store";
import Search from "./src/pages/Search";
import AutoLogin from "./src/components/AutoLogin";
import { axiosForLibraryAPI } from "./src/services/axios";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const loginStatus = useReducer((state) => state.loginStatus);
  useEffect(() => {
    console.log(
      "token: ",
      axiosForLibraryAPI.defaults.headers.common["Authorization"]
    );
  });
  return (
    <Provider store={store}>
      <AutoLogin />
      <NativeBaseProvider>
        <NavigationContainer>
          {loginStatus.isLogin ? (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Login"
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
          ) : (
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Search"
            >
              <Tab.Screen name="Search" component={Search} />
            </Tab.Navigator>
          )}
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
export const theme = extendTheme({ config });

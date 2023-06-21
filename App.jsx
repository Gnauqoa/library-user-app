import React, { useEffect } from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./src/pages/Login/index";
import Register from "./src/pages/Register";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/reducers/store";
import Search from "./src/pages/Search";
import AutoLogin from "./src/components/AutoLogin";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
const Routers = () => {
  const loginStatus = useSelector((state) => state.loginStatus);
  useEffect(() => {
    console.log("login status: ", loginStatus);
  }, [loginStatus]);
  return (
    <NavigationContainer>
      {loginStatus.isLogin ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Search"
        >
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export const theme = extendTheme({ config });

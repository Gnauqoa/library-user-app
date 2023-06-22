import React from "react";
import Search from "../pages/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather } from "@expo/vector-icons";
import Home from "../pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailBook from "../pages/DetailBook";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="home"
              size={size}
              color={focused ? "#FFA2AB" : "#053B47"}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="search1"
              size={size}
              color={focused ? "#FFA2AB" : "#053B47"}
            />
          ),
        }}
        name="Search"
        component={Search}
      />
    </Tab.Navigator>
  );
};

const Private = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      initialRouteName="MainScreen"
    >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="DetailsBook" component={DetailBook} />
    </Stack.Navigator>
  );
};

export default Private;

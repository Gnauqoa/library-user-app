import React from "react";
import Search from "../pages/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather } from "@expo/vector-icons";
import Home from "../pages/Home";

const Tab = createBottomTabNavigator();

const Private = () => {
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

export default Private;

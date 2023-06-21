import React from "react";
import Search from "../pages/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const Private = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      initialRouteName="Search"
    >
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

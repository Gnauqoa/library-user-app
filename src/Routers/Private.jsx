import React from "react";
import Search from "../pages/Search";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const Private = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Search"
    >
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default Private;

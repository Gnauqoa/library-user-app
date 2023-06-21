import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Auth from "./Auth";
import Private from "./Private";

const Routers = () => {
  const loginStatus = useSelector((state) => state.loginStatus);
  return (
    <NavigationContainer>
      {loginStatus.isLogin ? <Private /> : <Auth />}
    </NavigationContainer>
  );
};

export default Routers;

import { Icon, Input, View } from "native-base";
import React from "react";
import Logo from "../../assets/icon/Logo.jsx";
import MyInput from "../../components/MyInput/index.jsx";
import { AntDesign, Entypo } from "@expo/vector-icons";
const Login = () => {
  return (
    <View
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      display="flex"
      flexDirection="column"
      backgroundColor="#FEEADF"
    >
      <Logo />
      <View width="70%" gap="20px">
        <MyInput
          startIcon={<AntDesign name="user" />}
          fontSize="16px"
          borderRadius="20px"
          placeholder="User name"
        />
        <MyInput
          startIcon={<Entypo name="key" />}
          fontSize="16px"
          borderRadius="20px"
          placeholder="Password"
          type="password"
        />
      </View>
    </View>
  );
};

export default Login;

import { Checkbox, Icon, Input, Text, View } from "native-base";
import React from "react";
import Logo from "../../assets/icon/Logo.jsx";
import MyInput from "../../components/MyInput/index.jsx";
import { AntDesign, Entypo } from "@expo/vector-icons";
import MyButton from "../../components/MyButton/index.jsx";
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
      <View width="80%" gap="20px">
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
        <MyButton text="Sign in" borderRadius="90px" />
      </View>
    </View>
  );
};

export default Login;

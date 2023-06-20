import { Checkbox, Icon, Input, Pressable, Text, View } from "native-base";
import React from "react";
import Logo from "../../assets/icon/Logo.jsx";
import MyInput from "../../components/MyInput/index.jsx";
import { AntDesign, Entypo } from "@expo/vector-icons";
import MyButton from "../../components/MyButton/index.jsx";
import MyCheckBox from "../../components/MyCheckBox/index.jsx";
import { TouchableOpacity } from "react-native";
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
      position="relative"
    >
      <Text fontSize={32} fontWeight={700} color="#053B47" pb="20px">
        TR Library
      </Text>
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
        <View flexDirection="row" alignItems={"center"}>
          <MyCheckBox label="Remember me" />
          <Pressable ml="auto">
            <Text fontSize={"14px"} fontWeight={700} color="#053B47">
              Forgot password ?
            </Text>
          </Pressable>
        </View>
        <MyButton text="Sign in" borderRadius="90px" />
      </View>
      <View
        position="absolute"
        bottom={"5%"}
        right={"10%"}
        alignItems="flex-end"
        display="flex"
        flexDirection="column"
      >
        <Text fontSize={11} fontWeight={400} color="#053B47">
          Don't have account?
        </Text>
        <TouchableOpacity>
          <Text fontSize={17} fontWeight={500} color="#053B47">
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

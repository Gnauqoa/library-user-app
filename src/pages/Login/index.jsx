import { Pressable, Text, View } from "native-base";
import React, { useState } from "react";
import Logo from "../../assets/icon/Logo.jsx";
import MyInput from "../../components/MyInput/index.jsx";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import MyButton from "../../components/MyButton/index.jsx";
import MyCheckBox from "../../components/MyCheckBox/index.jsx";
import { TouchableOpacity } from "react-native";
import { login } from "../../services/auth.js";
import useAPI from "../../hooks/useApi.jsx";
import BackDropProcess from "../../components/BackDropProcess/index.jsx";
import useCustomToast from "../../hooks/useCustomToast.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "../../reducers/loginStatusReducer.js";
import { storeUser } from "../../reducers/userReducer.js";

const Login = ({ navigation }) => {
  const [formValue, setFormValue] = useState({
    email: "quang@gmail.com",
    password: "Ledangquang109",
  });
  const loginRequest = useAPI({ queryFn: login });
  const toast = useCustomToast();
  const dispatch = useDispatch();
  const handleChange = ({ name, value }) => {
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = () => {
    loginRequest
      .run(formValue)
      .then((res) => {
        dispatch(storeUser(res.data.data));
        dispatch(setLoginStatus({ isChecking: false, isLogin: true }));
        toast.success("Login success");
      })
      .catch((err) => {});
  };
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
      <BackDropProcess open={loginRequest.loading || loginStatus.isChecking} />
      <Text fontSize={32} fontWeight={700} color="#053B47" pb="20px">
        TR Library
      </Text>
      <Logo />
      <View width="80%" gap="20px">
        <MyInput
          value={formValue.email}
          name="email"
          onChange={handleChange}
          label="Email"
          startIcon={<MaterialIcons name="email" />}
          fontSize="16px"
          borderRadius="20px"
          placeholder="quanglng@gmail.com"
        />
        <MyInput
          value={formValue.password}
          name="password"
          onChange={handleChange}
          label="Password"
          startIcon={<Entypo name="key" />}
          fontSize="16px"
          borderRadius="20px"
          placeholder="*********************"
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
        <MyButton
          onPress={handleLogin}
          padding="8px 12px"
          text="Sign in"
          borderRadius="90px"
          mb="auto"
        />
        <View
          ml="auto"
          alignItems="flex-end"
          justifyContent="flex-end"
          display="flex"
          flexDirection="column"
        >
          <Text fontSize={11} fontWeight={400} color="#053B47">
            Don't have account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text fontSize={17} fontWeight={500} color="#053B47">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

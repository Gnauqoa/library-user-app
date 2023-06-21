import { Text, View } from "native-base";
import React from "react";
import Logo from "../../assets/icon/Logo";
import MyInput from "../../components/MyInput";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import MyDatePicker from "../../components/MyDatePicker";
import { TouchableOpacity } from "react-native";
import MyButton from "../../components/MyButton";

const Register = ({ navigation }) => {
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
      <Logo width={100} height={100} />
      <View width="80%" gap="10px">
        <View display="flex" flexDirection="row" gap="8px" width="100%">
          <MyInput
            flex={1}
            fontSize="16px"
            borderRadius="20px"
            placeholder="Le"
            label={"First name"}
          />
          <MyInput
            flex={1}
            fontSize="16px"
            borderRadius="20px"
            placeholder="Dang Quang"
            label={"Last name"}
          />
        </View>
        <MyInput
          startIcon={<MaterialIcons name="email" />}
          fontSize="16px"
          borderRadius="20px"
          placeholder="a@gmail.com"
          label={"Email"}
        />
        <MyInput
          label="Password"
          startIcon={<Entypo name="key" />}
          fontSize="16px"
          borderRadius="20px"
          placeholder="*********************"
          type="password"
        />
        <MyInput
          label="Confirm password"
          startIcon={<Entypo name="key" />}
          fontSize="16px"
          borderRadius="20px"
          placeholder="*********************"
          type="password"
        />
        <MyDatePicker
          mode="date"
          label="Birth"
          borderRadius="20px"
          paddingTop="10px"
        />
        <MyButton
          text="Sign up"
          borderRadius="90px"
          mt="10px"
          padding="8px 12px"
        />
        <View
          ml="auto"
          alignItems="flex-end"
          display="flex"
          flexDirection="column"
        >
          <Text fontSize={11} fontWeight={400} color="#053B47">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text fontSize={17} fontWeight={500} color="#053B47">
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

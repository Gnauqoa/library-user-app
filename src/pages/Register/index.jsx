import { Text, View } from "native-base";
import React from "react";
import Logo from "../../assets/icon/Logo";
import MyInput from "../../components/MyInput";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import MyDatePicker from "../../components/MyDatePicker";

const Register = () => {
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
      <View width="80%" gap="20px">
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
        <MyDatePicker label="Birth" borderRadius="20px" />
      </View>
    </View>
  );
};

export default Register;

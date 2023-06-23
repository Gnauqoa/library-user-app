import Avatar from "../../assets/img/Avatar";
import { Image, Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import useAPI from "../../hooks/useApi";
import { logout } from "../../services/auth";
import useCustomToast from "../../hooks/useCustomToast";
import { setLoginStatus } from "../../reducers/loginStatusReducer";
import BackDropProcess from "../../components/BackDropProcess";

const Introduce = ({ navigation }) => {
  const logoutRequest = useAPI({ queryFn: logout });
  const currentUser = useSelector((state) => state.currentUser);
  const toast = useCustomToast();
  const dispatch = useDispatch();
  const handleLogout = () => {
    logoutRequest.run().then((res) => {
      toast.success("Logout success");
      dispatch(setLoginStatus({ isLogin: false, isChecking: false }));
    });
  };
  return (
    <View
      w="100%"
      h="325px"
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <BackDropProcess open={logoutRequest.loading} />
      <View position={"absolute"} zIndex={20} top={12} right={6}>
        <TouchableOpacity onPress={handleLogout}>
          <View bg="#FFA2AB" borderRadius={12} py="8px" px="16px" shadow={4}>
            <Text fontSize={14} fontWeight={700} color={"#053B47"}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Image
        zIndex={0}
        w="100%"
        h="100%"
        blurRadius={5}
        source={require("../../assets/img/background.png")}
        alt={""}
      />
      <View zIndex={20} position={"absolute"} gap="12px" alignItems={"center"}>
        <View
          w={130}
          h={130}
          zIndex={20}
          overflow={"hidden"}
          borderWidth={"1px"}
          borderColor={"#fff"}
          borderRadius={900}
        >
          {currentUser?.avatar_url ? (
            <Image
              w="100%"
              h="100%"
              source={{
                uri: currentUser.avatar_url,
              }}
              alt=""
            />
          ) : (
            <Avatar width={130} height={130} />
          )}
        </View>
        <View bg="#FFA2AB" borderRadius={12} py="12px" px="24px" shadow={4}>
          <Text fontSize={18} fontWeight={700} color={"#053B47"}>
            {currentUser.first_name + " " + currentUser.last_name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Introduce;

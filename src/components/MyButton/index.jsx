import { Pressable, Text, View } from "native-base";
import React from "react";

const MyButton = ({ onPress, text, textProps, ...props }) => {
  return (
    <Pressable
      {...props}
      display="flex"
      flexDirection="column"
      backgroundColor={"#FFA2AB"}
      padding="12px 20px"
      justifyContent="center"
      alignItems="center"
      onPress={onPress}
      borderWidth="3px"
      _hover={{ backgroundColor: "#ff5c6c" }}
      borderColor={"#FFA2AB"}
      _pressed={{ borderColor: "#ffd3dd", borderWidth: "3px" }}
      _disabled={{
        backgroundColor: "#9D9AA4",
        borderColor: "#9D9AA4",
        color: "#fff",
      }}
    >
      <Text fontSize={16} fontWeight={700} color={"#053B47"} {...textProps}>
        {text}
      </Text>
    </Pressable>
  );
};

export default MyButton;

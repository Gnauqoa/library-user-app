import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Input, Pressable, Text, View } from "native-base";
import React, { useState } from "react";

const MyInput = ({
  startIcon,
  endIcon,
  type,
  iconSize = 7,
  label,
  flex,
  name,
  value,
  onChange,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleChange = (value) => {
    onChange({ name, value });
  };
  return (
    <View gap="4px" width="100%" flex={flex}>
      {label && (
        <Text fontSize={16} fontWeight={500} color="#053B47">
          {label}
        </Text>
      )}
      <Input
        onChangeText={handleChange}
        padding="12px 20px"
        borderColor="#154651"
        _focus={{ borderColor: "#154651" }}
        InputLeftElement={
          startIcon && (
            <View
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width={9}
              height={9}
              borderRadius={99}
              backgroundColor="#FFA2AB"
              ml="3"
              overflow="hidden"
            >
              <Icon as={startIcon} color="#fff" size={5} />
            </View>
          )
        }
        type={type === "password" ? (show ? "text" : "password") : ""}
        InputRightElement={
          type === "password" ? (
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={iconSize}
                mr="3"
                color="muted.400"
              />
            </Pressable>
          ) : (
            <></>
          )
        }
        {...props}
      />
    </View>
  );
};

export default MyInput;

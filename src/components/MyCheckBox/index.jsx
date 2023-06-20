import { AntDesign } from "@expo/vector-icons";
import { Pressable, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

const MyCheckBox = ({
  value = undefined,
  onChange = undefined,
  label = "",
}) => {
  const [checked, setChecked] = useState(false);
  const handlePress = () => {
    setChecked(!checked);
    if (onChange) onChange(!checked);
  };
  useEffect(() => {
    if (value !== undefined) setChecked(value);
  }, [value]);
  return (
    <View flexDirection="row" alignItems="center" gap={3}>
      <TouchableOpacity onPress={handlePress}>
        <View
          backgroundColor={checked ? "#FFA2AB" : "transparent"}
          width={5}
          height={5}
          borderColor={checked ? "#FFA2AB" : "#CECCD2"}
          borderWidth={"2px"}
          borderRadius={4}
          justifyContent="center"
          alignItems="center"
        >
          <AntDesign name="check" color="#fff" />
        </View>
      </TouchableOpacity>
      <Text fontSize="14px" fontWeight={500} color="#053B47">
        {label}
      </Text>
    </View>
  );
};

export default MyCheckBox;

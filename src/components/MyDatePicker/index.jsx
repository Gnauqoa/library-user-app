import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { Text, View } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const MyDatePicker = ({
  flex,
  label,
  name,
  onChange,
  mode = "time",
  ...props
}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const handleChange = (e, value) => {
    setOpen(false);
    setDate(value);
    if (onChange) onChange({ name, value });
  };
  return (
    <View gap="4px" width="100%" flex={flex}>
      {label && (
        <Text fontSize={16} fontWeight={500} color="#053B47">
          {label}
        </Text>
      )}
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View
          {...props}
          gap="4px"
          flexDirection="row"
          padding="12px 20px"
          borderColor="#154651"
          borderWidth="1px"
          _focus={{ borderColor: "#154651" }}
        >
          <Text fontSize="16px">
            {dayjs(date).format(mode === "date" ? "DD/MM/YYYY" : "HH:mm:ss")}
          </Text>
        </View>
      </TouchableOpacity>

      {open ? (
        <DateTimePicker
          onChange={handleChange}
          display="default"
          value={date}
          mode={mode}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default MyDatePicker;

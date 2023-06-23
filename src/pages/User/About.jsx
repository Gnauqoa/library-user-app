import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import dayjs from "dayjs";
import { Icon, Text, View } from "native-base";
import React from "react";
import { useSelector } from "react-redux";

const About = ({ total_borrowing }) => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <View flexDirection={"column"} gap="20px">
      <View
        bg="#FFDCD5"
        py="10px"
        alignItems={"center"}
        borderBottomWidth={2}
        borderColor={"#FFA2AB"}
      >
        <Text fontSize={16} fontWeight={700} color="#053B47">
          About
        </Text>
      </View>
      <View gap="12px" px="20px">
        <ShowText
          title={"Create date"}
          value={dayjs(currentUser.created_at).format("DD/MM/YYYY")}
          icon={<MaterialIcons name="date-range" />}
        />
        <ShowText
          title={"Borrowing book"}
          value={total_borrowing}
          icon={<FontAwesome5 name="book-reader" />}
        />
        <ShowText
          title={"Account expire date"}
          value={dayjs(currentUser.expire).format("DD/MM/YYYY")}
          icon={<FontAwesome name="calendar-times-o" />}
        />
        <ShowText
          title={"Email"}
          value={currentUser.email}
          icon={<MaterialIcons name="email" />}
        />
        <ShowText
          title={"Birth"}
          value={dayjs(currentUser.birth).format("DD/MM/YYYY")}
          icon={<FontAwesome name="birthday-cake" />}
        />
        <ShowText
          title={"Address"}
          value={currentUser.address}
          icon={<Entypo name="address" />}
        />
      </View>
    </View>
  );
};
const ShowText = ({ icon, title, value }) => {
  return (
    <View flexDirection={"row"} gap="16px" alignItems={"center"}>
      <Icon as={icon} size={5} color="#053B47" />
      <Text color="#053B47" fontWeight={700} fontSize={14}>
        {title}: <Text fontWeight={400}>{value}</Text>
      </Text>
    </View>
  );
};
export default About;

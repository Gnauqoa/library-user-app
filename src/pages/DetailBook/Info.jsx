import dayjs from "dayjs";
import { Text, View } from "native-base";
import React from "react";
import { useSelector } from "react-redux";

const Info = () => {
  const detailBook = useSelector((state) => state.detailBook);
  return (
    <View borderRadius={"10px"} background={"#FFDCD5"} padding="12px">
      <ShowText title={"Publisher"} value={detailBook?.publisher?.name} />
      <ShowText
        title={"Publishing year"}
        value={dayjs(detailBook?.release_date).format("DD/MM/YYYY")}
      />
      <ShowText title={"Summary"} value={detailBook?.description} />
    </View>
  );
};
const ShowText = ({ title, value }) => {
  return (
    <Text color="#053B47" fontWeight={700} fontSize={14}>
      {title}: <Text fontWeight={400}>{value}</Text>
    </Text>
  );
};
export default Info;

import { FlatList, Text, View } from "native-base";
import React from "react";
import { useSelector } from "react-redux";

const Category = () => {
  const detailBook = useSelector((state) => state.detailBook);
  return (
    <View
      flexDirection={"row"}
      flexWrap={"wrap"}
      gap="12px"
      justifyContent={"center"}
      pb="10px"
    >
      {detailBook.categories.slice(0, 4).map((category, index) => (
        <CategoryItem category={category} key={index} />
      ))}
    </View>
  );
};
const CategoryItem = ({ category }) => {
  return (
    <View bg="#FFA2AB" borderRadius={12} py="5px" px="12px" shadow={4}>
      <Text fontSize={14} fontWeight={700} color={"#053B47"}>
        {category}
      </Text>
    </View>
  );
};
export default Category;

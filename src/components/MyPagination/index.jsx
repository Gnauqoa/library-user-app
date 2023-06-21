import { Ionicons } from "@expo/vector-icons";
import { FlatList, Icon, Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

const MyPagination = ({ total_pages, name, current_page, onChange }) => {
  let array_item = [];
  for (let i = 1; i <= total_pages; ++i) {
    array_item.push(i);
  }
  if (!total_pages || !current_page) return <></>;
  return (
    <View
      flexDirection={"row"}
      minHeight={"30px"}
      alignItems="center"
      justifyContent={"center"}
      gap="8px"
    >
      <TouchableOpacity
        onPress={() => onChange(current_page - 1)}
        disabled={current_page === 1}
      >
        <Icon
          color={current_page === 1 ? "#CECCD2" : "#053B47"}
          size="30px"
          as={<Ionicons name="md-arrow-back-circle-outline" />}
        />
      </TouchableOpacity>
      <FlatList
        data={array_item}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        w="100%"
        horizontal={true}
        keyExtractor={(item) => {
          return `${name} ${item}`;
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <PaginationItem
            index={item}
            current_page={current_page}
            onPress={onChange}
          />
        )}
      />
      <TouchableOpacity
        onPress={() => onChange(current_page + 1)}
        disabled={current_page === total_pages}
      >
        <Icon
          color={current_page === total_pages ? "#CECCD2" : "#053B47"}
          size="30px"
          as={<Ionicons name="md-arrow-forward-circle-outline" />}
        />
      </TouchableOpacity>
    </View>
  );
};
const PaginationItem = ({ index, current_page, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(index)}>
      <Text
        pr="8px"
        pl="8px"
        fontSize={14}
        color={current_page === index ? "#FFA2AB" : "#053B47"}
      >
        {index}
      </Text>
    </TouchableOpacity>
  );
};
export default MyPagination;

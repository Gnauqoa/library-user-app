import { FlatList, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDetailBook } from "../../reducers/detailBookReducer";
import useAPI from "../../hooks/useApi";
import { searchBook } from "../../services/book";
import BackDropProcess from "../../components/BackDropProcess";
import BookItem from "../../components/BookItem";
import { TouchableWithoutFeedback } from "react-native";

const Recommend = ({ onChooseNew }) => {
  const dispatch = useDispatch();
  const suggestRequest = useAPI({
    queryFn: () => searchBook({ type: "new" }),
    getNow: true,
  });

  const handlePress = (data) => {
    onChooseNew();
    dispatch(setDetailBook(data));
  };

  if (!suggestRequest.isFetched) return <BackDropProcess open={true} />;
  return (
    <TouchableWithoutFeedback>
      <View flexDirection={"column"} gap="4px" mb="24px">
        <Text fontSize={20} fontWeight={700} color="#053B47">
          Recommend
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          _contentContainerStyle={{ gap: "8px", alignItems: "flex-end" }}
          horizontal={true}
          gap="8px"
          data={suggestRequest.response.items}
          renderItem={({ item, index }) => (
            <BookItem
              img_url={item.img_url}
              onPress={() => handlePress(item)}
            />
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Recommend;

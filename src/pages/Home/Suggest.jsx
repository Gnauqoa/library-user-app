import { FlatList, Image, Pressable, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import useAPI from "../../hooks/useApi";
import { searchBook } from "../../services/book";
import BackDropProcess from "../../components/BackDropProcess";
import { TouchableWithoutFeedback } from "react-native";
import { useDispatch } from "react-redux";
import { setDetailBook } from "../../reducers/detailBookReducer";
import BookItem from "../../components/BookItem";

const Suggest = ({ clickAway, navigation }) => {
  const [current_focus, setCurrentFocus] = useState(-1);
  const dispatch = useDispatch();
  const suggestRequest = useAPI({
    queryFn: () => searchBook({ type: "new" }),
    getNow: true,
  });
  const handleLongPress = (data) => {
    dispatch(setDetailBook(data));
    navigation.navigate("DetailsBook");
  };
  const handlePress = (index) => {
    setCurrentFocus(index);
  };
  useEffect(() => {
    setCurrentFocus(-1);
  }, [clickAway]);
  if (!suggestRequest.isFetched) return <BackDropProcess open={true} />;
  return (
    <TouchableWithoutFeedback>
      <View flexDirection={"column"}>
        <Text fontSize={18} fontWeight={700} color="#053B47">
          Just for you
        </Text>
        <Text fontSize={14} fontWeight={400} color="#9d9d9d" pb="10px">
          Hold to see detail
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
              onLongPress={() => handleLongPress(item)}
              img_url={item.img_url}
              onPress={() => handlePress(index)}
              checked={current_focus === index}
            />
          )}
        />
        {current_focus !== -1 && (
          <Description {...suggestRequest.response.items[current_focus]} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
const Description = ({ name, description }) => {
  return (
    <View flexDirection={"column"} gap="12px" paddingBottom={50}>
      <Text fontSize={18} fontWeight={700} color={"#053B47"}>
        {name}
      </Text>
      <View background={"#fbf4ee"} p="12px" borderRadius={"12px"}>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default Suggest;

import { FlatList, Image, Text, View } from "native-base";
import React from "react";
import { RefreshControl, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setDetailBook } from "../../reducers/detailBookReducer";

const ResultList = ({ items, navigation }) => {
  const dispatch = useDispatch();
  const handleWatchDetail = (data) => {
    dispatch(setDetailBook(data));
    navigation.navigate("DetailsBook");
  };
  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={false} />}
      _contentContainerStyle={{ paddingX: "20px", paddingY: "20px" }}
      flexDirection="column"
      gap="10px"
      data={items}
      renderItem={({ item }) => (
        <ResultItem {...item} onPress={() => handleWatchDetail(item)} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const ResultItem = ({
  img_url,
  name,
  authors,
  categories,
  languages,
  onPress,
  available_book,
  total_book,
}) => {
  return (
    <View
      borderRadius="12px"
      backgroundColor="#FFDCD5"
      p="8px"
      flexDirection="row"
      gap="12px"
      overflow={"hidden"}
      alignItems={"center"}
      mb="10px"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
      }}
    >
      <View
        flex={1}
        w="105px"
        h="156px"
        overflow={"hidden"}
        justifyItems={"center"}
        justifyContent={"center"}
        borderRadius="12px"
      >
        <TouchableOpacity onPress={onPress}>
          <Image
            w="105px"
            h="100%"
            resizeMode="contain"
            source={{ uri: img_url }}
            alt="book cover"
            borderRadius={12}
          />
        </TouchableOpacity>
      </View>
      <View flexDirection="column" flex={2}>
        <Text fontSize={18} fontWeight={700} color="#053B47">
          {name}
        </Text>
        <Text fontSize={12} fontWeight={400} color="#053B47">
          Author:{" "}
          <Text fontSize={12} fontWeight={700} color="#053B47">
            {authors[0].name}
          </Text>
        </Text>
        <Text fontSize={12} fontWeight={400} color="#053B47">
          Tag:{" "}
          <Text fontSize={12} fontWeight={700} color="#053B47">
            {categories[0]}
            {categories.slice(1, 3).map((category) => `, ${category}`)}
          </Text>
        </Text>
        <Text fontSize={12} fontWeight={400} color="#053B47">
          Available/Total:{" "}
          <Text fontSize={12} fontWeight={700} color="#053B47">
            {available_book}/{total_book}
          </Text>
        </Text>
        <Text fontSize={12} fontWeight={400} color="#053B47">
          Languages:{" "}
          <Text fontSize={12} fontWeight={700} color="#053B47">
            {languages[0]}
            {languages.slice(1).map((language) => `, ${language}`)}
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default ResultList;

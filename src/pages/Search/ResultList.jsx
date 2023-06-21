import dayjs from "dayjs";
import { FlatList, Image, Text, View } from "native-base";
import React from "react";

const ResultList = ({ items }) => {
  return (
    <FlatList
      flexDirection="column"
      gap="10px"
      data={items}
      renderItem={({ item }) => <ResultItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const ResultItem = ({
  img_url,
  name,
  authors,
  release_date,
  publisher,
  categories,
}) => {
  return (
    <View
      borderRadius="12px"
      backgroundColor="#b4d8bf"
      p="8px"
      flexDirection="row"
      gap="12px"
      overflow={"hidden"}
      alignItems={"center"}
      mb="10px"
    >
      <View
        flex={1}
        w="105px"
        h="156px"
        overflow={"hidden"}
        borderRadius="12px"
      >
        <Image
          w="100%"
          h="100%"
          resizeMode="contain"
          source={{ uri: img_url }}
          alt="book cover"
        />
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
            {categories[0] +
              categories.slice(1, 3).map((category) => `, ${category}`)}
          </Text>
        </Text>
        <Text fontSize={12} fontWeight={400} color="#053B47">
          Publishing year:{" "}
          <Text fontSize={12} fontWeight={700} color="#053B47">
            {dayjs(release_date).format("DD/MM/YYYY")}
          </Text>
        </Text>
        {publisher && (
          <Text fontSize={12} fontWeight={400} color="#053B47">
            Publisher{" "}
            <Text fontSize={12} fontWeight={700} color="#053B47">
              {publisher?.name}
            </Text>
          </Text>
        )}
      </View>
    </View>
  );
};
export default ResultList;

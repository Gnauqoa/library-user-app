import { Image, Text, View } from "native-base";
import React from "react";
import useAPI from "../../hooks/useApi";
import { searchBook } from "../../services/book";
import BackDropProcess from "../../components/BackDropProcess";
import dayjs from "dayjs";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setDetailBook } from "../../reducers/detailBookReducer";

const MostBorrow = ({ navigation }) => {
  const mostBorrowRequest = useAPI({
    queryFn: () => searchBook({ type: "new", per_page: 1, page: 1 }),
    getNow: true,
  });
  const dispatch = useDispatch();
  const handleWatchDetail = () => {
    navigation.navigate("DetailsBook");
    console.log(mostBorrowRequest.response);
    dispatch(setDetailBook(mostBorrowRequest.response.items[0]));
  };
  if (!mostBorrowRequest.isFetched)
    return <BackDropProcess open={mostBorrowRequest.loading} />;
  return (
    <View flexDirection={"column"} gap="24px" pb="32px">
      <Text fontSize={18} fontWeight={700} color="#053B47">
        Most borrowed book
      </Text>
      <View
        borderRadius="12px"
        backgroundColor="#FFDCD5"
        p="8px"
        mt={2}
        flexDirection="row"
        gap="8px"
        alignItems={"center"}
      >
        <View flex={1} w="105px" h="150px" borderRadius="18px">
          <TouchableOpacity onPress={handleWatchDetail}>
            <View
              borderRadius={12}
              top="-32px"
              w="100%"
              h="180px"
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,

                elevation: 18,
              }}
              overflow={"hidden"}
            >
              <Image
                borderRadius={12}
                w="100%"
                h="100%"
                resizeMode="contain"
                source={{ uri: mostBorrowRequest?.response?.items[0]?.img_url }}
                alt="book cover"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View flexDirection="column" flex={2}>
          <Text fontSize={18} fontWeight={700} color="#053B47">
            {mostBorrowRequest?.response?.items[0]?.name}
          </Text>
          <Text fontSize={12} fontWeight={400} color="#053B47">
            Author:{" "}
            <Text fontSize={12} fontWeight={700} color="#053B47">
              {mostBorrowRequest?.response?.items[0]?.authors[0].name}
            </Text>
          </Text>
          <Text fontSize={12} fontWeight={400} color="#053B47">
            Tag:{" "}
            <Text fontSize={12} fontWeight={700} color="#053B47">
              {mostBorrowRequest?.response?.items[0]?.categories[0] +
                mostBorrowRequest?.response?.items[0]?.categories
                  .slice(1, 3)
                  .map((category) => `, ${category}`)}
            </Text>
          </Text>
          <Text fontSize={12} fontWeight={400} color="#053B47">
            Languages:{" "}
            <Text fontSize={12} fontWeight={700} color="#053B47">
              {mostBorrowRequest?.response?.items[0]?.languages[0]}
              {mostBorrowRequest?.response?.items[0]?.languages.slice(1).map((language) => `, ${language}`)}
            </Text>
          </Text>
          <Text fontSize={12} fontWeight={400} color="#053B47">
            Available/Total::{" "}
            <Text fontSize={12} fontWeight={700} color="#053B47">
              {mostBorrowRequest?.response?.items[0]?.available_book}/
              {mostBorrowRequest?.response?.items[0]?.total_book}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MostBorrow;

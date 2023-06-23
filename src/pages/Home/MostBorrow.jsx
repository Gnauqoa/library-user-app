import { Image, Text, View } from "native-base";
import React from "react";
import useAPI from "../../hooks/useApi";
import { searchBook } from "../../services/book";
import BackDropProcess from "../../components/BackDropProcess";
import dayjs from "dayjs";

const MostBorrow = () => {
  const mostBorrowRequest = useAPI({
    queryFn: () => searchBook({ type: "new", per_page: 1, page: 1 }),
    getNow: true,
  });
  if (!mostBorrowRequest.isFetched)
    return <BackDropProcess open={mostBorrowRequest.loading} />;
  return (
    <View flexDirection={"column"} gap="24px" pb="32px">
      <Text fontSize={18} fontWeight={700} color="#053B47">
        Most borrowed book
      </Text>
      <View
        // overflow="visible"
        borderRadius="12px"
        backgroundColor="#FFDCD5"
        p="8px"
        mt={2}
        flexDirection="row"
        gap="8px"
        alignItems={"center"}
        // mb="10px"
      >
        <View
          flex={1}
          w="105px"
          h="150px"
          borderRadius="18px"
          // top="-24px"
          // overflow={"hidden"}
        >
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
            Publishing year:{" "}
            <Text fontSize={12} fontWeight={700} color="#053B47">
              {dayjs(
                mostBorrowRequest?.response?.items[0]?.release_date
              ).format("DD/MM/YYYY")}
            </Text>
          </Text>
          {mostBorrowRequest?.response?.items[0]?.publisher && (
            <Text fontSize={12} fontWeight={400} color="#053B47">
              Publisher{" "}
              <Text fontSize={12} fontWeight={700} color="#053B47">
                {mostBorrowRequest?.response?.items[0]?.publisher?.name}
              </Text>
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default MostBorrow;

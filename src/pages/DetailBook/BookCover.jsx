import { Image, View } from "native-base";
import React from "react";
import { useSelector } from "react-redux";

const BookCover = () => {
  const detailBook = useSelector((state) => state.detailBook);
  return (
    <View top="-1px" position={"relative"} h="380px" alignItems={"center"}>
      <View w="100%" h="320px">
        <Image
          alt="book cover"
          w="100%"
          h="100%"
          source={{ uri: detailBook.img_url }}
          zIndex={1}
          blurRadius={3}
        />
      </View>
      <View
        opacity={0.25}
        position={"absolute"}
        w="100%"
        h="320px"
        zIndex={2}
        bg="#fff"
      ></View>
      <View
        top="60px"
        w="200px"
        position={"absolute"}
        h="320px"
        zIndex={3}
        shadow={9}
        overflow={"hidden"}
        borderRadius={12}
      >
        <Image
          alt="book cover"
          w="auto"
          h="100%"
          source={{ uri: detailBook.img_url }}
        />
      </View>
    </View>
  );
};

export default BookCover;

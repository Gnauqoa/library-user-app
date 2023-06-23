import { Icon, Pressable, ScrollView, Text, View } from "native-base";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { RefreshControl, SafeAreaView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import BookCover from "./BookCover";
import Category from "./Category";
import { MaterialIcons } from "@expo/vector-icons";
import Info from "./Info";
import Comment from "./Comment";
import { useToggle } from "@uidotdev/usehooks";
import Recommend from "./Recommand";
import useAPI from "../../hooks/useApi";
import { getBook } from "../../services/book";
import { setDetailBook } from "../../reducers/detailBookReducer";
import BackDropProcess from "../../components/BackDropProcess";

const DetailBook = ({ navigation }) => {
  const [clickAway, toggle] = useToggle(false);

  const detailBook = useSelector((state) => state.detailBook);
  const [refreshing, setRefreshing] = useState(false);
  const scrollViewRef = useRef();
  const getBookRequest = useAPI({ queryFn: (book_id) => getBook(book_id) });
  const handleChooseNew = () => {
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getBookRequest
      .run(detailBook.id)
      .then((res) => {
        dispatch(setDetailBook(res));
      })
      .catch((err) => {});
    setTimeout(() => {
      setRefreshing(false);
    }, 0);
  }, []);

  return (
    <SafeAreaView>
      <BackDropProcess open={getBookRequest.loading} />
      <ScrollView
        ref={scrollViewRef}
        width="100%"
        height="100%"
        flexDirection="column"
        backgroundColor="#FEEADF"
        position="relative"
        paddingBottom={100}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
      >
        <Pressable onPress={toggle}>
          <View position={"absolute"} top={10} left={4} zIndex={5}>
            <TouchableOpacity onPress={navigation.goBack}>
              <View bg="#FFA2AB" borderRadius={90} w={"45px"} h={"45px"}>
                <Icon
                  size={45}
                  color="black"
                  as={<MaterialIcons name="keyboard-arrow-left" />}
                />
              </View>
            </TouchableOpacity>
          </View>
          <BookCover />
          <View px="20px" pt="20px" gap="16px">
            <Text
              fontSize={22}
              fontWeight={700}
              color="#053B47"
              textAlign={"center"}
            >
              {detailBook.name}
            </Text>
            <Text
              fontSize={16}
              fontWeight={700}
              color="#053B47"
              textAlign={"center"}
            >
              Author:{" "}
              <Text fontWeight={400}> {detailBook.authors[0].name}</Text>
            </Text>
            <Category />
            <Info />
            <Comment />
            <Recommend onChooseNew={handleChooseNew} />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailBook;

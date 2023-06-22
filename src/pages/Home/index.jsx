import { Pressable, ScrollView, Text, View } from "native-base";
import React, { useCallback, useState } from "react";
import MostBorrow from "./MostBorrow";
import Suggest from "./Suggest";
import { useToggle } from "@uidotdev/usehooks";
import { RefreshControl } from "react-native";

const Home = () => {
  const [clickAway, toggle] = useToggle(false);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1);
  }, []);
  if (refreshing) return <></>;
  return (
    <ScrollView
      width="100%"
      height="100%"
      py="32px"
      px="20px"
      gap="30px"
      flexDirection="column"
      backgroundColor="#FEEADF"
      position="relative"
      paddingBottom={100}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }
    >
      <Pressable onPress={toggle}>
        <Text fontSize="25px" fontWeight={700} color="#053B47" pb="40px">
          Home
        </Text>
        <MostBorrow />
        <Suggest clickAway={clickAway} />
      </Pressable>
    </ScrollView>
  );
};

export default Home;

import { ScrollView, View } from "native-base";
import React, { useCallback, useState } from "react";
import { RefreshControl } from "react-native";

const DetailBook = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1);
  }, []);
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
    ></ScrollView>
  );
};

export default DetailBook;

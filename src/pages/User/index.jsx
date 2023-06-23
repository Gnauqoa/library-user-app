import { ScrollView, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Introduce from "./Introduce";
import About from "./About";
import { RefreshControl, TouchableOpacity } from "react-native";
import useAPI from "../../hooks/useApi";
import { getActivity, getBorrowingBook } from "../../services/auth";
import BackDropProcess from "../../components/BackDropProcess";
import BorrowingList from "./Borrowing";
import ActivityList from "./Activity";

const User = ({ navigation }) => {
  const getActivityRequest = useAPI({
    queryFn: getActivity,
    getNow: true,
  });
  const getBorrowingRequest = useAPI({
    queryFn: getBorrowingBook,
    getNow: true,
  });
  const [currentTab, setCurrentTab] = useState(1);
  const handleRefresh = () => {
    getActivityRequest.run();
    getBorrowingRequest.run();
  };
  if (!getBorrowingRequest.isFetched || !getActivityRequest.isFetched)
    return <BackDropProcess open={true} />;
  return (
    <ScrollView
      width="100%"
      height="100%"
      flexDirection="column"
      backgroundColor="#FEEADF"
      position="relative"
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={handleRefresh} />
      }
    >
      <Introduce navigation={navigation} />
      <About total_borrowing={getBorrowingRequest.response.total_items} />
      <View flexDirection={"row"} pt="20px">
        <TabItem
          title={"Borrowing"}
          index={1}
          current_index={currentTab}
          onPress={setCurrentTab}
        />
        <TabItem
          title={"Activity"}
          index={2}
          current_index={currentTab}
          onPress={setCurrentTab}
        />
      </View>
      {currentTab === 1 ? (
        <BorrowingList
          items_list={getBorrowingRequest.response.items}
          max_borrow_days={getBorrowingRequest.response.max_borrow_days}
        />
      ) : (
        <ActivityList
          items_list={getActivityRequest.response.items}
          max_borrow_days={getBorrowingRequest.response.max_borrow_days}
        />
      )}
    </ScrollView>
  );
};
const TabItem = ({ title, index, current_index, onPress }) => {
  return (
    <View flex={1}>
      <TouchableOpacity onPress={() => onPress(index)}>
        <View
          flex={1}
          bg="#FFDCD5"
          alignItems={"center"}
          borderBottomWidth={2}
          borderColor={index === current_index ? "#FFA2AB" : "transparent"}
          py="10px"
        >
          <Text fontSize={16} fontWeight={700} color="#053B47">
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default User;

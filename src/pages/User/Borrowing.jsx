import { FlatList } from "native-base";
import React from "react";
import { BorrowingItem } from "./ActivityItem";

const BorrowingList = ({ items_list, max_borrow_days }) => {
  return (
    <FlatList
      scrollEnabled={false}
      w="100%"
      _contentContainerStyle={{ w: "100%", px: "20px", py: "32px" }}
      data={items_list}
      renderItem={({ item }) => (
        <BorrowingItem
          {...item.book.details_book}
          onPress={() => {}}
          max_borrow_days={max_borrow_days}
          borrow_date={item.borrow_date}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default BorrowingList;

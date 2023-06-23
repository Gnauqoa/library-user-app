import { FlatList } from "native-base";
import React from "react";
import { BorrowingItem, PayFineItem, ReturnItem } from "./ActivityItem";

const ActivityList = ({ items_list, max_borrow_days }) => {
  return (
    <FlatList
      scrollEnabled={false}
      w="100%"
      _contentContainerStyle={{ w: "100%", px: "20px", py: "32px" }}
      data={items_list}
      renderItem={({ item }) => {
        if (item.type === "borrowBook")
          return (
            <BorrowingItem
              status={item.status}
              {...item.book.details_book}
              max_borrow_days={max_borrow_days}
              borrow_date={item.borrow_date}
            />
          );
        if (item.type === "returnBook")
          return (
            <ReturnItem
              {...item.book.details_book}
              borrow_date={item.borrow_date}
              borrow_days={item.borrow_days}
              return_date={item.return_date}
            />
          );
        return <PayFineItem {...item} />;
      }}
      keyExtractor={(item) => `${item.type} ${item.id}`}
    />
  );
};

export default ActivityList;

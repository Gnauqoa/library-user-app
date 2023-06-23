import { Text, View } from "native-base";
import React from "react";

const Comment = () => {
  return (
    <View flexDirection={"column"} gap="4px">
      <Text fontSize={20} fontWeight={700} color="#053B47">
        Comments
      </Text>
      <View bg="#FFDCD5" borderRadius={12} p="16px">
        <Text fontSize={14} fontWeight={700} color="#053B47">
          There are no comments yet.
        </Text>
      </View>
    </View>
  );
};

export default Comment;

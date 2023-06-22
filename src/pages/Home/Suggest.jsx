import { FlatList, Image, Pressable, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import useAPI from "../../hooks/useApi";
import { searchBook } from "../../services/book";
import BackDropProcess from "../../components/BackDropProcess";
import {
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

const Suggest = ({ clickAway }) => {
  const [current_focus, setCurrentFocus] = useState(-1);
  const suggestRequest = useAPI({
    queryFn: () => searchBook({ type: "new" }),
    getNow: true,
  });
  useEffect(() => {
    setCurrentFocus(-1);
  }, [clickAway]);
  if (!suggestRequest.isFetched) return <BackDropProcess open={true} />;
  return (
    <TouchableWithoutFeedback>
      <View flexDirection={"column"}>
        <Text fontSize={18} fontWeight={700} color="#053B47">
          Just for you
        </Text>
        <Text fontSize={14} fontWeight={400} color="#9d9d9d" pb="20px">
          Hold to see review
        </Text>
        <FlatList
          scrollEnabled={true}
          _contentContainerStyle={{
            gap: "8px",
            alignItems: "flex-end",
            }}
          horizontal={true}
          gap="8px"
          data={suggestRequest.response.items}
          renderItem={({ item, index }) => (
            <SuggestItem
              {...item}
              index={index}
              current_index={current_focus}
              setCurrentIndex={setCurrentFocus}
            />
          )}
        />
        {current_focus !== -1 && (
          <Description {...suggestRequest.response.items[current_focus]} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
const Description = ({ name, description }) => {
  return (
    <View flexDirection={"column"} gap="12px" paddingBottom={50}>
      <Text fontSize={18} fontWeight={700} color={"#053B47"}>
        {name}
      </Text>
      <View background={"#fbf4ee"} p="12px" borderRadius={"12px"}>
        <Text>{description}</Text>
      </View>
    </View>
  );
};
const SuggestItem = ({
  img_url,
  id,
  index,
  current_index,
  setCurrentIndex,
}) => {
  const checked = current_index === index;
  const animatedH = useState(new Animated.Value(156))[0];
  const animatedW = useState(new Animated.Value(105))[0];
  useEffect(() => {
    if (checked) handleFocus();
    else handleBlur();
  }, [checked]);
  const handleFocus = () => {
    Animated.timing(animatedH, {
      toValue: 190,
      duration: 150,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedW, {
      toValue: 120,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(animatedH, {
      toValue: 156,
      duration: 150,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedW, {
      toValue: 105,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };
  return (
    <TouchableOpacity onPress={() => setCurrentIndex(index)}>
      <Animated.View
        style={{
          width: animatedW,
          height: animatedH,
          overflow: "hidden",
          borderRadius: 12,
        }}
      >
        <Animated.Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: img_url }}
          alt="book cover"
        />
      </Animated.View>
    </TouchableOpacity>
  );
};
export default Suggest;

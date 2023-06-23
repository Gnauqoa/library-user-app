import React, { useEffect, useState } from "react";
import { Animated, TouchableOpacity } from "react-native";

const BookItem = ({ img_url, checked, onPress, onLongPress }) => {
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
    <TouchableOpacity onLongPress={onLongPress} onPress={onPress}>
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

export default BookItem;

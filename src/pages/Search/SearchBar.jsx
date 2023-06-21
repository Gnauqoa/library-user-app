import { AntDesign } from "@expo/vector-icons";
import { Icon, Input, View } from "native-base";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import useAPI from "../../hooks/useApi";
import BackDropProcess from "../../components/BackDropProcess";
import { searchBook } from "../../services/search";

const SearchBar = ({ setResult, current_page }) => {
  const [name, setName] = useState("");
  const searchRequest = useAPI({ queryFn: (payload) => searchBook(payload) });
  const handleSearch = () => {
    searchRequest
      .run({ name, page: current_page, per_page: 5 })
      .then((res) => setResult(res))
      .catch((err) => {});
  };
  useEffect(() => {
    if (searchRequest.isFetched) handleSearch();
  }, [current_page]);
  return (
    <View
      gap="8px"
      alignItems="center"
      py="12px"
      px="24px"
      borderRadius="90px"
      overflow="hidden"
      bg="#fff"
      flexDirection="row"
    >
      <BackDropProcess open={searchRequest.loading} />
      <Input
        placeholder="Read what you want"
        onBlur={handleSearch}
        value={name}
        onChangeText={(value) => setName(value)}
        flex={1}
        w="100%"
        fontSize={16}
        color="#053B47"
        borderWidth="0px"
        p="0px"
        _focus={{ backgroundColor: "#fff" }}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Icon as={<AntDesign name="search1" />} color="#053B47" size={8} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

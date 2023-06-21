import { Text, View } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";

const Search = () => {
  const [result, setResult] = useState({ items: [], page: 0, current_page: 0 });
  return (
    <SafeAreaView>
      <View
        width="100%"
        height="100%"
        py="32px"
        px="20px"
        gap="16px"
        display="flex"
        flexDirection="column"
        backgroundColor="#FEEADF"
        position="relative"
      >
        <Text fontSize="25px" fontWeight={700} color="#053B47">
          Search
        </Text>
        <SearchBar setResult={setResult} />
        <ResultList items={result.items} />
      </View>
    </SafeAreaView>
  );
};

export default Search;

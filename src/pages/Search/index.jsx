import { Text, View } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import MyPagination from "../../components/MyPagination";

const Search = () => {
  const [result, setResult] = useState({ items: [], page: 0, current_page: 0 });
  const [page, setPage] = useState(1);
  return (
    <SafeAreaView>
      <View
        width="100%"
        height="100%"
        py="32px"
        px="20px"
        gap="16px"
        flexDirection="column"
        backgroundColor="#FEEADF"
        position="relative"
      >
        <Text fontSize="25px" fontWeight={700} color="#053B47">
          Search
        </Text>
        <SearchBar setResult={setResult} />
        <ResultList items={result.items} />
        <MyPagination
          name={"search"}
          current_page={page}
          total_pages={20}
          onChange={setPage}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

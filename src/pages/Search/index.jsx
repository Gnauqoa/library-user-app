import { Text, View } from "native-base";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import MyPagination from "../../components/MyPagination";

const Search = () => {
  const [result, setResult] = useState({
    items: [],
    total_pages: 0,
    current_page: 0,
  });
  const [page, setPage] = useState(1);

  return (
    <View
      width="100%"
      height="100%"
      py="32px"
      flexDirection="column"
      backgroundColor="#FEEADF"
      position="relative"
    >
      <Text px="20px" fontSize="25px" fontWeight={700} color="#053B47">
        Search
      </Text>
      <SearchBar
        query={result?.query}
        current_page={page}
        setResult={setResult}
        total_items={result.total_items}
      />
      <ResultList items={result.items} onRefresh={onRefresh} />
      <View paddingTop="10px" paddingX="20px">
        <MyPagination
          name={"search"}
          current_page={page}
          total_pages={result.total_pages}
          onChange={setPage}
        />
      </View>
    </View>
  );
};

export default Search;

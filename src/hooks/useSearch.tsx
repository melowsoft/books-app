// useSearch.ts
import { useState, useCallback } from "react";
import Helpers from "../api/helpers";


export function useSearch() {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [maxResults] = useState<number>(10);

  const performSearch = useCallback(async (state, currentPage) => {
    setLoading(true);
    const response = await Helpers.getList(state, currentPage, maxResults);
    setSearchResults(response.items);
    setTotalItems(response.totalItems);
    setLoading(false);
  }, [maxResults]);

  return { searchResults, maxResults, loading, totalItems, performSearch };
}

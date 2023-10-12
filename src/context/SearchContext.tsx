import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import Helpers from "../api/helpers";
import { IBook } from "../interface";

interface SearchState {
  searchResults: IBook[];
  loading: boolean;
  totalItems: number;
  maxResults: number;
  performSearch: (state: any, currentPage: number) => void;
}

const SearchContext = createContext<SearchState | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [maxResults] = useState<number>(10);

  const performSearch = useCallback(async (state: any, currentPage: number) => {
    setLoading(true);
    const query = Helpers.makeQuery(state)
    const response = await Helpers.getList(query, currentPage, maxResults);
    setSearchResults(response.items);
    setTotalItems(response.totalItems);
    setLoading(false);
  }, [maxResults]);

  return (
    <SearchContext.Provider value={{ searchResults, maxResults, loading, totalItems, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}

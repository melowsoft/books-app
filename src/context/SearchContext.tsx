import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import Helpers from "../api/helpers";
import { IBook, IError } from "../interface";

interface SearchState {
  searchResults: IBook[];
  loading: boolean;
  totalItems: number;
  maxResults: number;
  performSearch: (state: any, currentPage: number) => void;
  apiErrors: IError | null;
}

const SearchContext = createContext<SearchState | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchResults, setSearchResults] = useState<IBook[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [maxResults] = useState<number>(10);
  const [apiErrors, setApiErrors] = useState<IError | null>(null);

  const performSearch = useCallback(async (state: any, currentPage: number) => {
    setLoading(true);
  
    try {
      const query = Helpers.makeQuery(state);
      const response = await Helpers.getList(query, currentPage, maxResults);
  
      // Check if the response contains an 'items' property
      if (response && response.items) {
        setSearchResults(response.items);
        setTotalItems(response.totalItems);
      } else {
        console.error('Invalid response structure:', response);
        setSearchResults([]);
      }
    } catch (error: IError | unknown) {
      console.log('Error during API call:', error);
      setApiErrors(error as IError);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  }, [maxResults]);
  

  return (
    <SearchContext.Provider value={{ searchResults, maxResults, apiErrors, loading, totalItems, performSearch }}>
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
